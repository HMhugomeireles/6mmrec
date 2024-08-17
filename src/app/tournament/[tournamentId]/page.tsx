import { Heading } from "@/components/Heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import { getTournamentDetails } from "../actions";
import { urlFor } from "@/sanity/lib/image";
import { TfiCup } from "react-icons/tfi";

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
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/tournament">Tournament</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#838D9F]">{new Date(tournamentDetails.details.date).toUTCString()}</BreadcrumbPage>
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
          <Tabs defaultValue="info" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="game">Games</TabsTrigger>
            </TabsList>
            <TabsContent value="info"></TabsContent>
            <TabsContent value="game">
              <section>
                <Heading text="Games" />
              </section>

              <section className="mt-10 mb-10 lg:flex lg:flex-wrap">
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
                            <div className="flex pl-10">{Boolean(round.team1Achievements) ? round.team1Achievements.reduce((prev, curr) => prev + curr.points, 0) : 0}p</div>
                            <div>Vs</div>
                            <div className="flex justify-end pr-10">{Boolean(round.team1Achievements) ? round.team1Achievements.reduce((prev, curr) => prev + curr.points, 0) : 0}p</div>
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
              </section>
            </TabsContent>
          </Tabs>
        </section>

      </section>
    </section>
  );
}
