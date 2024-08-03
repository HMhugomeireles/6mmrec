import Image from "next/image";
import { Banner } from '@/components/Banner'
import { Heading } from "@/components/Heading";
import { IoCalendarOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const highlightNew =  {
  id: 'asd-asd',
  slug: 'scene',
  title: 'O fim de Honey Badgers',
  date: new Date(),
  description: 'Após uma semana da competição HONEYBADGERS chega ao fim, os jogadores querem um novo rumo a nível competitivo onde recrutaram um novo jogador e formam a nova equipa Vulkan.',
  article: ''
}

const lastNews = [
  {
    id: 'd12-d12',
    slug: 'tournament',
    title: 'STUNHOUSE 5V5 LEAGUE',
    description: 'A STUNHOUSE 5V5 LEAGUE é uma competição amadora onde junta varias equipas de norte a sul de Portugal a competir pelo melhor lugar no ranking. Tornando assim o airsoft mais competitivo. ',
    date: new Date(),
    article: '<strong>QUALQUER UM</strong> Qualquer jogador pode reunir uma equipa e participar na competição. <strong>Todo ano</strong> A competição dura todo o ano, existe um jogo por mês onde as equipas somam pontos até Dezembro onde o primeiro e segundo classificado disputam a Final.'
  },
  {
    id: 'asd-asd',
    slug: 'scene',
    title: 'SMED Killers perdem jogador',
    date: new Date(),
    description: 'Alexandre Viana, Ex-jogador pelos SMED KILLERS, deixou a equipa na  semana em que decorreu a primeira competição. Já com novos planos Alexandre juntasse a Honeybadgers.',
    article: ''
  },
  {
    id: 'asd-asd',
    slug: 'scene',
    title: 'O fim de Honey Badgers',
    date: new Date(),
    description: 'Após uma semana da competição HONEYBADGERS chega ao fim, os jogadores querem um novo rumo a nível competitivo onde recrutaram um novo jogador e formam a nova equipa Vulkan.',
    article: ''
  },
  {
    id: 'd12-d12',
    slug: 'tournament',
    title: 'STUNHOUSE 5V5 LEAGUE',
    description: 'A STUNHOUSE 5V5 LEAGUE é uma competição amadora onde junta varias equipas de norte a sul de Portugal a competir pelo melhor lugar no ranking. Tornando assim o airsoft mais competitivo. ',
    date: new Date(),
    article: '<strong>QUALQUER UM</strong> Qualquer jogador pode reunir uma equipa e participar na competição. <strong>Todo ano</strong> A competição dura todo o ano, existe um jogo por mês onde as equipas somam pontos até Dezembro onde o primeiro e segundo classificado disputam a Final.'
  },
  {
    id: 'asd-asd',
    slug: 'scene',
    title: 'SMED Killers perdem jogador',
    date: new Date(),
    description: 'Alexandre Viana, Ex-jogador pelos SMED KILLERS, deixou a equipa na  semana em que decorreu a primeira competição. Já com novos planos Alexandre juntasse a Honeybadgers.',
    article: ''
  },
  {
    id: 'asd-asd',
    slug: 'scene',
    title: 'O fim de Honey Badgers',
    date: new Date(),
    description: 'Após uma semana da competição HONEYBADGERS chega ao fim, os jogadores querem um novo rumo a nível competitivo onde recrutaram um novo jogador e formam a nova equipa Vulkan.',
    article: ''
  }
]

const testimonials = [
  {
    id: 'asddd-aa1',
    author: 'team_lgs',
    testimonial: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  },
  {
    id: 'asddd-aa1',
    author: 'team_lgs',
    testimonial: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  },
  {
    id: 'asddd-aa1',
    author: 'team_lgs',
    testimonial: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  }
]

export default function Home() {
  return (
    <div className="container">

      <section className="w-full">
        <section>
          <Heading text="Last News" />
        </section>
        <section className="grid grid-cols-12 lg:grid-rows-3 bg-[#292E37] ">
          <section className="col-span-12 lg:col-span-6 lg:row-span-3">
            <Link href={`/${highlightNew.id}`}>
              <article className="hidden sm:block lg:cursor-pointer lg:relative" style={{ position: 'relative', height: '415px'}}>
                <Image src="/banner_news/news_banner.svg" alt="" fill sizes="100%" style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-0 left-0 bg-[#00000070] text-white w-full p-10">
                  <h3 className="col-span-10 font-semibold text-lg uppercase tracking-wide ">{highlightNew.title}</h3>
                  <Button variant="secondary">Read more</Button>
                </div>
              </article>
              <article className="sm:hidden lg:cursor-pointer lg:relative" style={{ position: 'relative', height: '215px'}}>
                <Image src="/banner_news/news_banner.svg" alt="" fill sizes="100%" style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-0 left-0 bg-[#00000095] text-white w-full p-5">
                  <h3 className="col-span-10 font-semibold text-sm uppercase tracking-wide ">{highlightNew.title}</h3>
                  <div className="flex justify-end">
                    <Button variant="link">Read more</Button>
                  </div>
                </div>
              </article>
            </Link>
          </section>
          <section className="col-span-12 lg:col-span-6 lg:row-span-3 border-r-2 border-[#2D333E] max-h-[26rem] overflow-y-auto">
            {lastNews.map(highlightNew => (
              <Link key={highlightNew.id} href={`/${highlightNew.id}`}>
                <article  className="group grid grid-cols-12 grid-rows-[35px,35px,35px] hover:bg-[#D5173B] p-4 cursor-pointer border-b-2 border-[#2D333E] last:border-b-0">
                  <Image src="/6mm_logo.png" width={80} height={80} alt="article image" className="col-span-2 row-span-3 justify-center" />
                  <h3 className="col-span-10 font-semibold text-lg xs:text-white group-hover:text-white uppercase tracking-wide ">{highlightNew.title}</h3>
                  <p className="col-span-10 text-xs text-[#575F6B] group-hover:text-white truncate pr-10">{highlightNew.description}</p>
                  <div className="col-span-10 flex text-xs text-[#575F6B] mt-2 group-hover:text-white"><IoCalendarOutline /><p>{highlightNew.date.toISOString()}</p></div>
                </article>
              </Link>
            ))}
          </section>
        </section>
      </section>

      <section className="w-full mt-8">
        {/* <Banner /> */}
      </section>

      <section>
        <section>
            <Heading text="Testimonials" />
          </section>
          <section>
            
          </section>
      </section>

    </div>
  );
}
