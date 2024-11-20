import { GaolType } from "@/components/@Types";
import { Heading } from "@/components/Heading";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { getTournamentDetails } from "../actions";

export const revalidate = process.env.NODE_ENV === "development" ? 60 : 3600

export default async function Tournament({ params }: { params: { tournamentId: string } }) {
  const tournamentDetails = await getTournamentDetails(params.tournamentId);

  if (!tournamentDetails.details) {
    return <div>Not Found!</div>
  }

  return (
    <section className="container">
      <section className="w-full">

        <section className="mt-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/tournament">Tournament</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section>
          <Heading text="Tournament" />
        </section>

        {tournamentDetails.details.status === "playing" && (
          <section>
            <div className="bg-green-700 w-full text-2xl text-center text-white p-4 my-4">Live!!!</div>
          </section>
        )}

        <section>
          <Table className="max-w-full">
            <TableBody className="bg-card text-white">
              {tournamentDetails.ranking.map((teamPosition, index) => (
                <TableRow key={teamPosition.teamDetails.id}>
                  <TableCell className="max-w-5">{index + 1}º</TableCell>
                  <TableCell><Image src={urlFor(teamPosition.teamDetails.image.asset!).url()} alt="team image" width={40} height={40} /></TableCell>
                  <TableCell>{teamPosition.teamDetails.teamName}</TableCell>
                  <TableCell>{teamPosition.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>


        <section>
          <Tabs defaultValue="info" className="mt-10">
            <TabsList className="bg-transparent">
              <TabsTrigger value="info" className="p-4 m-4">Information</TabsTrigger>
              <TabsTrigger value="game" className="p-4 m-4">Rounds</TabsTrigger>
              <TabsTrigger value="goals" className="p-4 m-4">Goals</TabsTrigger>
            </TabsList>
            <TabsContent value="info" className="">
              <section>
                <Heading text="Tournament Information" />
              </section>
              {Boolean(tournamentDetails.details.information) ?
                (
                  <div className="bg-card text-white p-10 mb-10">
                    <PortableText
                      value={tournamentDetails.details.information}
                      onMissingComponent={false}
                    />
                  </div>
                )
                :
                (
                  <div className="text-[#838D9F]">
                    {"Don't have information at this time!"}
                  </div>
                )
              }
            </TabsContent>
            <TabsContent value="game">
              <section>
                <Heading text="Games" />
              </section>

              <Table className="max-w-full">
                <TableBody className="text-white">
                  {Boolean(tournamentDetails.details.rounds) && tournamentDetails.details.rounds.map(round => {
                    const calculateTeamPoints = (achievements: GaolType[]) => {
                      return achievements.reduce((acc, achievement) => {
                      acc.totalPoints += achievement.points;
                      acc.achievements.push(achievement);
                      return acc;
                      }, {
                      totalPoints: 0,
                      achievements: [] as GaolType[]
                      });
                    };

                    const team1 = round.team1Achievements ? calculateTeamPoints(round.team1Achievements) : { totalPoints: 0, achievements: [] };
                    const team2 = round.team2Achievements ? calculateTeamPoints(round.team2Achievements) : { totalPoints: 0, achievements: [] };
                    return (
                      <>
                        <TableRow key={round.id} className="bg-card border-secondary border-2">
                          <TableCell>
                            <div className="flex items-center">
                              <Image src={urlFor(round.team1.image.asset).url()} alt="team image" width={80} height={80} />
                              <div className="ml-4">{round.team1.teamName}</div>
                            </div>
                            <div className="flex mt-4">{team1.achievements.map(achievement => <Image key={achievement.id} src={urlFor(achievement.image.asset).url()} alt="goal image" width={25} height={25} />)}</div>
                          </TableCell>
                          <TableCell className={`font-bold text-2xl ${team1.totalPoints > team2.totalPoints ? "text-green-700" : "text-red-700"}`}>{team1.totalPoints}</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell className={`font-bold text-2xl ${team2.totalPoints > team1.totalPoints ? "text-green-700" : "text-red-700"}`}>{team2.totalPoints}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Image src={urlFor(round.team2.image.asset).url()} alt="team image" width={80} height={80} />
                              <div className="ml-4">{round.team2.teamName}</div>
                            </div>
                            <div className="flex mt-4">{team2.achievements.map(achievement => <Image key={achievement.id} src={urlFor(achievement.image.asset).url()} alt="goal image" width={25} height={25} />)}</div>
                          </TableCell>
                        </TableRow>
                      </>
                    )
                  })}
                </TableBody>
              </Table>
              {/* <section className="mt-10 mb-10 lg:flex lg:flex-wrap-reverse lg:justify-center">
                {Boolean(tournamentDetails.details.rounds) && tournamentDetails.details.rounds.map(round => {
                  let totalPointsTeam1= 0
                  let totalPointsTeam2= 0
                  if (round.team1Achievements && round.team2Achievements) {
                    totalPointsTeam1 = round.team1Achievements.reduce((prev, curr) => prev + curr.points, 0)
                    totalPointsTeam2 = round.team2Achievements.reduce((prev, curr) => prev + curr.points, 0)
                  }
                  return (
                    <Card key={round.id} className="lg:w-72 m-2 relative">
                      <CardContent className="p-4">
                        {!round.isFinish && (
                          <section className="absolute -top-6 -right-5">
                            <div className="bg-green-700 w-full text-1xl text-center text-white p-4 my-4">Playing!!!</div>
                          </section>
                        )}
                        <div className="m-4 ">
                          <div className="flex items-center relative justify-start">
                            <div className="bg-[#00000050] p-2">
                              <Image src={urlFor(round.team1.image.asset).url()} alt="team image" width={40} height={40} />
                            </div>
                            <div className="text-center text-sm text-white font-bold p-4">{round.team1.teamName}</div>
                          </div>
                          
                        </div>
                        <div className="text-sm font-bold text-center text-white">
                            <div className="flex pl-10">{totalPointsTeam1}p</div>
                            <div>Vs</div>
                            <div className="flex justify-end pr-10">{totalPointsTeam2}p</div>
                        </div>
                        <div className="m-4">
                          <div className="flex items-center relative justify-end">
                            <div className="text-center text-sm text-white font-bold p-4">{round.team2.teamName}</div>
                            <div className="bg-[#00000050] p-2">
                              <Image src={urlFor(round.team2.image.asset).url()} alt="team image" width={40} height={40} />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </section> */}
            </TabsContent>
            <TabsContent value="goals">
              <section>
                <Heading text="Game Goals" />
              </section>
              <section className="p-2 mb-10 bg-card lg:flex lg:flex-wrap">
                {Boolean(tournamentDetails.details.gameGoals) && tournamentDetails.details.gameGoals.map(goal => (
                  <Card key={goal.id} className="border-none p-2 shadow-none">
                    <CardContent className="flex flex-row items-center text-white">
                      <Image src={urlFor(goal.image.asset).url()} alt="team image" width={80} height={80} className="mr-10" />
                      <div>
                        <div className="font-semibold">{goal.goal}</div>
                        <div>Points: <span className={`${goal.points < 0 ? 'text-red-600' : 'text-green-800'} text-xl font-bold`}>{goal.points}</span></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </section>
            </TabsContent>
          </Tabs>
        </section>

      </section>
    </section>
  );
}
