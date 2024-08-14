import { Banner } from '@/components/Banner'
import { Heading } from "@/components/Heading";
import { News } from "@/components/News";


export default async function Home({ draftMode = false }) {
  return (
    <div className="container">

      <section className="w-full">
        <section>
          <Heading text="Last News" />
        </section>
        <section className="grid grid-cols-12 lg:grid-rows-3 bg-[#292E37] ">
          <News draftMode={draftMode} />
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
