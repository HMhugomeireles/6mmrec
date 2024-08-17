import { Heading } from "@/components/Heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import { FaMedal } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { GiPistolGun } from "react-icons/gi";
import { MdOutlineDownloadDone } from "react-icons/md";
import { getGlobalRanking, getTournamentList } from "./actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default async function Tournament() {
  const tournamentList = await getTournamentList();
  const globalRanking = await getGlobalRanking();

  return (
    <section className="container">
      <section className="w-full">
        <section className="mt-10">
          <Breadcrumb className="text-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#838D9F]">Tournament</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section>
          <Heading text="Tournaments" />
        </section>

        <section className="flex overflow-hidden w-full">
          {tournamentList.map(tournament => (
            <Link key={tournament.id} href={`/tournament/${tournament.id}`}>
              <Card className={`text-white border-2 border-secondary m-4 ${tournament.status === "schedule" ? "opacity-75" : "opacity-100"} ${tournament.status === "playing" ? "bg-green-700" : "bg-card"} cursor-pointer`}>
                <CardContent className="relative p-4 font-semibold flex flex-col justify-center">
                  <Image src="/stunhouse_cqb.svg" alt="stunhouse cqb image" width={150} height={80} />
                  <span className="text-sm">{new Date(tournament.date).toUTCString()}</span>
                  {tournament.status === "finish" && <div className="absolute p-2 bg-[#00000080] top-0 right-0 text"><MdOutlineDownloadDone className="text-primary" /></div>}
                  {tournament.status === "schedule" && <div className="absolute p-2 bg-[#00000080] top-0 right-0"><GrSchedules className="text-white" /></div>}
                  {tournament.status === "playing" && <div className="absolute p-2 bg-[#00000080] top-0 right-0"><GiPistolGun className="text-green-600" /></div>}
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </section>

      <section className="mb-10">
        <section>
          <Heading text="Ranking global" />
        </section>
        <section className="">
          {globalRanking.map((teamPosition, index) => {
            if (index === 0) {
              return (
                <Card key={teamPosition.teamDetails.id} className="mb-4">
                  <CardContent className="p-0 relative" style={{ position: 'relative', height: '350px'}}>
                    <Image src={urlFor(teamPosition.teamDetails.image.asset!).url()} alt="team image" fill sizes="100%" style={{ objectFit: 'cover' }} />
                    <FaMedal className="absolute right-0 text-yellow-500 text-6xl" />
                    <div className="flex justify-between items-center absolute bottom-0 bg-[#00000098] w-full text-xl font-bold p-4 tracking-wide text-white">
                      <div className="">{index + 1}º {teamPosition.teamDetails.teamName}</div>
                      <span className="relative"><span className="text-3xl text-yellow-500">{teamPosition.points}</span>P</span>
                    </div>
                  </CardContent>
                </Card>
              )
            }
            if (index === 1) {
              return (
                <Card key={teamPosition.teamDetails.id} className="mb-4">
                  <CardContent className="p-0 relative" style={{ position: 'relative', height: '350px'}}>
                    <Image src={urlFor(teamPosition.teamDetails.image.asset!).url()} alt="team image" fill sizes="100%" style={{ objectFit: 'cover' }} />
                    <FaMedal className="absolute right-0 text-amber-700 text-6xl" />
                    <div className="flex justify-between items-center absolute bottom-0 bg-[#00000098] w-full text-xl font-bold p-4 tracking-wide text-white">
                      <div className="">{index + 1}º {teamPosition.teamDetails.teamName}</div>
                      <span className="relative"><span className="text-3xl text-amber-700">{teamPosition.points}</span>P</span>
                    </div>
                  </CardContent>
                </Card>
              )
            }
            if (index === 2) {
              return (
                <Card key={teamPosition.teamDetails.id} className="mb-4">
                  <CardContent className="p-0 relative" style={{ position: 'relative', height: '350px'}}>
                    <Image src={urlFor(teamPosition.teamDetails.image.asset!).url()} alt="team image" fill sizes="100%" style={{ objectFit: 'cover' }} />
                    <FaMedal className="absolute right-0 text-gray-500 text-6xl" />
                    <div className="flex justify-between items-center absolute bottom-0 bg-[#00000098] w-full text-xl font-bold p-4 tracking-wide text-white">
                      <div className="">{index + 1}º {teamPosition.teamDetails.teamName}</div>
                      <span className="relative"><span className="text-3xl text-gray-500">{teamPosition.points}</span>P</span>
                    </div>
                  </CardContent>
                </Card>
              )
            }
          })}
        </section>
        <Table className="max-w-full">
          <TableBody className="bg-card text-white">
            {globalRanking.map((teamPosition, index) => {
              if (index > 2) {
                return (
                  <TableRow key={teamPosition.teamDetails.id}>
                    <TableCell>{index + 1}º</TableCell>
                    <TableCell><Image src={urlFor(teamPosition.teamDetails.image.asset!).url()} alt="team image" width={100} height={50} /></TableCell>
                    <TableCell>{teamPosition.teamDetails.teamName}</TableCell>
                    <TableCell>{teamPosition.points}</TableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </section>
    </section>
  );
}
