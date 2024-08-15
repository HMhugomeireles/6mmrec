import { Post } from "@/components/@Types";
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
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const EVENT_QUERY_POSTS = `
*[_type == "post"] 
{
    "id": _id,
    slug,
    publishedAt,
    title,
    mainImage
}| order(publishedAt desc)`


export default async function Articles() {
  const posts = await sanityFetch<Post[]>({
    query: EVENT_QUERY_POSTS
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
                <BreadcrumbPage className="text-[#838D9F]">Articles</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section>
          <Heading text="Articles" />
        </section>

        <section className="mt-10 text-white">
          {posts.map(post => (
            <Link key={post.slug?.current} href={`/articles/${post.slug?.current}`}>
              <Card className="text-white m-10 hover:bg-[#D5173B]">
                <CardContent className="">
                  <article key={post.id} className="m-10">
                    <div className="hidden sm:block lg:cursor-pointer" style={{ position: 'relative', height: '415px' }}>
                      <Image src={urlFor(post.mainImage!.asset!).url()} alt={`${post.mainImage!.alt}`} fill sizes="100%" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="sm:hidden lg:cursor-pointer" style={{ position: 'relative', height: '215px' }}>
                      <Image src={urlFor(post.mainImage!.asset!).url()} alt={`${post.mainImage!.alt}`} fill sizes="100%" style={{ objectFit: 'cover' }} />
                    </div>
                    <h3 className="mt-10  text-center text-4xl font-extrabold">{post.title}</h3>
                  </article>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

      </section>
    </section>
  );
}
