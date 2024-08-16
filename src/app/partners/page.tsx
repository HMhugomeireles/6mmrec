import { PartnersType } from "@/components/@Types";
import { Heading } from "@/components/Heading";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";


const EVENT_QUERY_PARTNERS = `
*[_type == "partners"] {
  "id": _id,
  ...
}`

export default async function Partners() {
  const partners = await sanityFetch<PartnersType[]>({
    query: EVENT_QUERY_PARTNERS
  });
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
                <BreadcrumbPage className="text-[#838D9F]">Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section>
          <Heading text="Partners" />
        </section>

        <section className="mb-10">
          {partners.map(partner => (
            <Card key={partner.id} className="m-10 p-10">
              <CardContent className="text-white flex flex-col items-center">
                <div className="flex-grow">
                  <Image src={urlFor(partner.image.asset).url()} alt={`${partner.image.alt}`} width={300} height={150} className="col-span-2 row-span-3 justify-center" />
                </div>
                <div>
                  <h3 className="mt-10 text-2xl font-extrabold">{partner.partnerName}</h3>
                  <div className="text-[#838D9F]">
                    <PortableText
                      value={partner.bio}
                      onMissingComponent={false}
                    />
                </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

      </section>
    </section>
  );
}
