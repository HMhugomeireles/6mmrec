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

export default function Tournament() {
  return (
    <section className="container">
      <section className="w-full">
        <section>
          <Heading text="Tournament" />
        </section>

        <section>
          <Card className="text-white border-4 border-primary">
            <CardContent className="relative p-4 font-semibold flex flex-col justify-center">
              <Image layout="fixed" src="/stunhouse_cqb.svg" alt="stunhouse cqb image" width={150} height={80} />
              <div>StunHouse CQB 5v5</div>
              <span>14 July 2024</span>
              <div className="absolute p-2 bg-[#00000080] top-0 right-0">Finish</div>
            </CardContent>
          </Card>
        </section>
      </section>

      <section className="mb-10">
        <section>
          <Heading text="Ranking" />
        </section>
        <section className="">
          <Card className="mb-4">
            <CardContent className="p-0 relative" style={{ position: 'relative', height: '350px'}}>
              <Image layout="fixed" src="/team_lgs.jpg" alt="lgs team" fill sizes="100%" style={{ objectFit: 'cover' }} />
              <FaMedal className="absolute right-0 text-yellow-500 text-6xl" />
              <div className="flex justify-between items-center absolute bottom-0 bg-[#00000098] w-full text-xl font-bold p-4 tracking-wide text-white">
                <div className="">1º LGS</div>
                <span className="relative"><span className="text-3xl text-yellow-500">935</span>P</span>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent className="p-0 relative" style={{ position: 'relative', height: '350px'}}>
              <Image layout="fixed" src="/team_tropa_elite.png" alt="lgs team" fill sizes="100%" style={{ objectFit: 'cover' }} />
              <FaMedal className="absolute right-0 text-amber-700 text-6xl" />
              <div className="flex justify-between items-center absolute bottom-0 bg-[#00000098] w-full text-xl font-bold p-4 tracking-wide text-white">
                <div className="">2º {"Tropa D'Elite"}</div>
                <span className="relative"><span className="text-3xl text-amber-700">525</span>P</span>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent className="p-0 relative" style={{ position: 'relative', height: '350px'}}>
              <Image layout="fixed" src="/team_smed_killers.jpg" alt="lgs team" fill sizes="100%" style={{ objectFit: 'cover' }} />
              <FaMedal className="absolute right-0 text-gray-500 text-6xl" />
              <div className="flex justify-between items-center absolute bottom-0 bg-[#00000098] w-full text-xl font-bold p-4 tracking-wide text-white">
                <div className="">3º Smed Killers</div>
                <span className="relative"><span className="text-3xl text-gray-500">365</span>P</span>
              </div>
            </CardContent>
          </Card>
        </section>
        <Table>
          <TableBody className="bg-card text-white">
            <TableRow>
              <TableCell>4º</TableCell>
              <TableCell><Image layout="fixed" src="/team_clube_airsoft_paredes.jpg" alt="lgs team" width={100} height={50} /></TableCell>
              <TableCell>Tactical Airsoft Savage</TableCell>
              <TableCell>310</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>5º</TableCell>
              <TableCell><Image layout="fixed" src="/team_honey_badgers.jpg" alt="lgs team" width={100} height={50} /></TableCell>
              <TableCell>Honey Badgers</TableCell>
              <TableCell>280</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6º</TableCell>
              <TableCell><Image layout="fixed" src="/team_private_militare_contractor.jpg" alt="lgs team" width={100} height={50} /></TableCell>
              <TableCell>Private Militare Contractor</TableCell>
              <TableCell>---</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </section>
  );
}
