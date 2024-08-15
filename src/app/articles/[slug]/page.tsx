import { Heading } from "@/components/Heading";
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
import { sanityFetch } from "@/sanity/lib/client";
import { internalGroqTypeReferenceTo } from "../../../../sanity.types";
import { Post } from "@/components/@Types";

const buildQueryWithParam = (slug: string) => `*[_type == "post" && slug.current == '${slug}']
  {
    "id": _id,
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
    const article = await sanityFetch<Post>({
      query: buildQueryWithParam(params.slug),
      params: { slug: params.slug }
    });


    if (!article) {
      return <>not found</>
    }

    const articleDate = new Date(article.publishedAt!).toUTCString();

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
                  <Image src={urlFor(article.mainImage!.asset!).url()} alt={`${article.mainImage!.alt}`} fill sizes="100%" style={{ objectFit: 'cover' }} />
                </div>
                <div className="sm:hidden lg:cursor-pointer" style={{ position: 'relative', height: '215px' }}>
                  <Image src={urlFor(article.mainImage!.asset!).url()} alt={`${article.mainImage!.alt}`} fill sizes="100%" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <Card className="max-w-fit p-4 mt-10 border-none bg-[#2F3541]">
                    <div className="flex items-center">
                      <Image src={urlFor(article.author.image.asset!).url()} alt="author" width={100} height={100} className="mr-4 rounded-xl" />
                      <div className="text-gray-300 text-lg">
                        <div className="text-sm">Author: <span className="font-semibold text-lg">{article.author!.name!}</span></div>
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
                    value={article.body!}
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
