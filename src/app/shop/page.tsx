import { Product } from "@/components/@Types";
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
import Image from "next/image";


const EVENT_QUERY_PRODUCTS = `
*[_type == "products"] {
  "id": _id,
  ...
}`

export default async function Shop() {
  const products = await sanityFetch<Product[]>({
    query: EVENT_QUERY_PRODUCTS
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
          <Heading text="Shop" />
        </section>

        <section className="mb-10 flex flex-wrap">
          {products.map(product => (
            <Card key={product.id} className="p-10 max-w-80">
              <CardContent className="text-white flex flex-col items-center">
                <div className="flex-grow">
                  <Image src={urlFor(product.image.asset).url()} alt={`${product.image.alt}`} width={300} height={80} className="col-span-2 row-span-3 justify-center" />
                </div>
                <div>
                  <h3 className="mt-10 text-2xl font-extrabold">{product.name}</h3>
                  <div className="text-sm">Price: <span className="ml-4 font-bold text-2xl">{product.price.toFixed(2)}€</span></div>
                  <p>{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

      </section>
    </section>
  );
}
