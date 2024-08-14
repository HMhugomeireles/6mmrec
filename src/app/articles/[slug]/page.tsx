import { Heading } from "@/components/Heading";
import { getClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "@sanity/client";
import Image from "next/image";
import {PortableText} from '@portabletext/react'
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const buildQueryWithParam = (slug: string) => `*[_type == "post" && slug.current == '${slug}']
  {
    title,
    publishedAt,
    mainImage,
    body,
    author->
  }[0]`

export default async function Article({
    params
  }: {
    params: { slug: string }
  }) {
    const client = getClient();
    const article = await client.fetch<SanityDocument[]>(buildQueryWithParam(params.slug));
    const articleDate = new Date(article.publishedAt).toUTCString();
    console.log(article)

  return (
    <section className="container text-white">
      <section className="mt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#838D9F]">{article.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className="w-full">
        <section>
          <Heading text="Article" />
        </section>

        <section className="my-10">
          <Card className="text-white">
            <CardContent className="m-10">
              <section className="">
                <div className="hidden sm:block lg:cursor-pointer" style={{ position: 'relative', height: '415px' }}>
                  <Image src={urlFor(article.mainImage.asset).url()} alt={article.mainImage.alt} fill sizes="100%" style={{ objectFit: 'cover' }} />
                </div>
                <div className="sm:hidden lg:cursor-pointer" style={{ position: 'relative', height: '215px' }}>
                  <Image src={urlFor(article.mainImage.asset).url()} alt={article.mainImage.alt} fill sizes="100%" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <Card className="max-w-fit p-4 mt-10 border-none bg-[#2F3541]">
                    <div className="flex items-center">
                      <Image src={urlFor(article.author.image.asset).url()} alt="author" width={100} height={100} className="mr-4 rounded-xl" />
                      <div className="text-gray-300 text-lg">
                        <div className="font-semibold">{article.author.name}</div>
                        <div className="text-sm">{articleDate}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
              <section className="mt-10">
                <h1 className="mt-10 pb-6 font-semibold text-4xl uppercase tracking-wide text-white">{article.title}</h1>
                <div className="text-[#838D9F]">
                  <PortableText
                    value={article.body}
                    onMissingComponent={false}
                  />
                </div>
              </section>
            </CardContent>
          </Card>
        </section>
      </section>
    </section>
  );
}
