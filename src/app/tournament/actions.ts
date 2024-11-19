"use server"

import { GlobalRanking, RoundType, TeamType, TournamentsType } from "@/components/@Types";
import { sanityFetch } from "@/sanity/lib/client";




export async function getTournamentList() {
  const QUERY_TOURNAMENTS = `
    *[_type == "tournaments"] {
      "id": _id,
      status,
      date,
      teams[]->,
        gameGoals[]->,
        isActive,
        rounds[]-> {
          "id": _id,
          isFinish,
          date,
          roundTime,
          team1->,
          team2->,
          team1Achievements[]->,
          team2Achievements[]->
        }
  } | order(date asc)`

  const tournaments = await sanityFetch<TournamentsType[]>({
    query: QUERY_TOURNAMENTS
  });

  return tournaments;
}

interface IObject {
  [key: string]: any;
}

export async function getGlobalRanking() {
  const QUERY_TOURNAMENTS = `
    *[_type == "tournaments" && status == 'finish'] {
      "id": _id,
      status,
      date,
      teams[]-> {
        "id": _id,
            city,
            teamName,
            image
      },
        gameGoals[]-> {
          "id": _id,
        points,
        goal,
        icon
        },
        isActive,
        rounds[]-> {
          "id": _id,
          isFinish,
          date,
          roundTime,
          team1-> {
            "id": _id,
            city,
            teamName,
            image
          },
          team2-> {
            "id": _id,
            city,
            teamName,
            image
          },
          team1Achievements[]-> {
            "id": _id,
            points,
            goal,
            icon
          },
          team2Achievements[]-> {
            "id": _id,
            points,
            goal,
            icon
          }
        }
  } | order(date asc)`

  const tournaments = await sanityFetch<TournamentsType[]>({
    query: QUERY_TOURNAMENTS
  });

  return await createRanking(tournaments)
}

async function createRanking(tournaments: TournamentsType[]) {
  const ranking: IObject = {}
  for (const tournament of tournaments) {
    if (tournament.status === 'finish' && tournament.rounds) {
      calculateTeamsRoundPoints(tournament.rounds, ranking)
      
      tournament.teams.forEach(team => {
        if (!(team.id in ranking)) {
          ranking[team.id] = {
            points: 0,
            teamDetails: team
          };
        }
      })
    }
  }

  const globalRanking: GlobalRanking[] = []
  Object.keys(ranking).map(async (key) => {
    globalRanking.push({
      ...ranking[key]
    })
  })

  const rankingSorted = globalRanking.sort((a, b) => b.points - a.points);
  return rankingSorted;
}

function calculateTeamsRoundPoints(rounds: RoundType[], ranking: IObject) {
  let team1Id;
  let team2Id;
  for (const round of rounds) {
    team1Id = round.team1.id
    team2Id = round.team2.id
    const totalTeam1RoundPoints = Boolean(round.team1Achievements) ? round.team1Achievements.reduce((prev, goal) => prev + goal.points, 0) : 0
    const totalTeam2RoundPoints = Boolean(round.team2Achievements) ? round.team2Achievements.reduce((prev, goal) => prev + goal.points, 0) : 0

    if (!(team1Id in ranking)) {
      ranking[team1Id] = {
        points: totalTeam1RoundPoints,
        teamDetails: round.team1
      }
    } else {
      ranking[team1Id] = {
        ...ranking[team1Id],
        points: ranking[team1Id]['points'] + totalTeam1RoundPoints
      }
    }
    if (!(team2Id in ranking)) {
      ranking[team2Id] = {
        points: totalTeam2RoundPoints,
        teamDetails: round.team2
      }
    } else {
      ranking[team2Id] = {
        ...ranking[team2Id],
        points: ranking[team2Id]['points'] + totalTeam2RoundPoints
      }
    }
  }
}


async function getTeamDetails(teamId: string) {
  const QUERY_TEAM_DETAILS = `*[_type == "teams" && _id == '${teamId}' ]`
  return await sanityFetch<TeamType>({
    query: QUERY_TEAM_DETAILS
  });
}


export async function getTournamentDetails(tournamentId: string) {
  const QUERY_TOURNAMENT = `
    *[_type == "tournaments" && _id == '${tournamentId}'] {
      "id": _id,
      "information": rules,
      status,
      date,
      teams[]-> {
        "id": _id,
            city,
            teamName,
            image
      },
        gameGoals[]-> {
          "id": _id,
          points,
          goal,
          image
        },
        isActive,
        rounds[]-> {
          "id": _id,
          isFinish,
          date,
          roundTime,
          team1-> {
            "id": _id,
            city,
            teamName,
            image
          },
          team2-> {
            "id": _id,
            city,
            teamName,
            image
          },
          team1Achievements[]-> {
            "id": _id,
            points,
            goal,
            image
          },
          team2Achievements[]-> {
            "id": _id,
            points,
            goal,
            image
          }
        }
}[0]`

  const tournament = await sanityFetch<TournamentsType>({
    query: QUERY_TOURNAMENT
  });

  if (!tournament) {
    return {
      ranking: [],
      details: undefined
    }
  }

  if (!tournament || !tournament.rounds) {
    return {
      ranking: [],
      details: tournament
    }
  }

  const ranking = await createRanking([tournament]);

  return {
    ranking,
    details: tournament
  }
}