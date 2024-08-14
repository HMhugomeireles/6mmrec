import { getClient } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { token } from "@/sanity/lib/token";
import { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoCalendarOutline } from "react-icons/io5";
import { urlFor } from "@/sanity/lib/image";


type NewsProps = {
  draftMode?: boolean
}

const EVENT_QUERY_POSTS = `
*[_type == "post"] 
{
    slug,
    publishedAt,
    title,
    mainImage
}| order(publishedAt desc)[0...5]`

export async function News({
  draftMode
}: NewsProps) {
  const client = getClient();
  const posts = await client.fetch<SanityDocument[]>(EVENT_QUERY_POSTS);

  console.log(posts)

  if (!posts || posts.length === 0) {
    return <div>{"No news created!"}</div>
  }

  return (
    <>
      <section key="news-highligh-top" className="col-span-12 lg:col-span-6 lg:row-span-3">
        <Link href={`/articles/${posts.at(0).slug.current}`}>
          <article className="hidden sm:block lg:cursor-pointer lg:relative" style={{ position: 'relative', height: '415px' }}>
            <Image src={urlFor(posts.at(0).mainImage.asset).url()} alt={posts.at(0).mainImage.alt} fill sizes="100%" style={{ objectFit: 'cover' }} />
            <div className="absolute bottom-0 left-0 bg-[#00000070] text-white w-full p-10">
              <h3 className="col-span-10 font-semibold text-lg uppercase tracking-wide ">{posts.at(0).title}</h3>
              <Button variant="secondary">Read more</Button>
            </div>
          </article>
          <article className="sm:hidden lg:cursor-pointer lg:relative" style={{ position: 'relative', height: '215px' }}>
            <Image src={urlFor(posts.at(0).mainImage.asset).url()} alt={posts.at(0).mainImage.alt} fill sizes="100%" style={{ objectFit: 'cover' }} />
            <div className="absolute bottom-0 left-0 bg-[#00000095] text-white w-full p-5">
              <h3 className="col-span-10 font-semibold text-sm uppercase tracking-wide ">{posts.at(0).title}</h3>
              <div className="flex justify-end">
                <Button variant="link">Read more</Button>
              </div>
            </div>
          </article>
        </Link>
      </section>
      <section key="other-news" className="col-span-12 lg:col-span-6 lg:row-span-3 border-r-2 border-[#2D333E] max-h-[26rem] overflow-y-auto">
        {[...posts].map((post, index) => {
          if (index === 0) {
            return <></>;
          }
          return (
            <div key={post._id}>
              <Link  href={`/articles/${post.slug.current}`}>
                <article className="group grid grid-cols-12 grid-rows-[35px,35px,35px] hover:bg-[#D5173B] p-4 cursor-pointer border-b-2 border-[#2D333E] last:border-b-0">
                  <Image src="/6mm_logo.png" width={80} height={80} alt="article image" className="col-span-2 row-span-3 justify-center" />
                  <h3 className="col-span-10 font-semibold text-lg xs:text-white group-hover:text-white uppercase tracking-wide ">{post.title}</h3>
                  <p className="col-span-10 text-xs text-[#575F6B] group-hover:text-white truncate pr-10">{post.description}</p>
                  <div className="col-span-10 flex text-xs text-[#575F6B] mt-2 group-hover:text-white"><IoCalendarOutline /><p>{post._createdAt}</p></div>
                </article>
              </Link>
            </div>
          )
        })}
      </section>
    </>
  )
}