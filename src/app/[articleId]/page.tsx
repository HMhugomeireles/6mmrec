import { Heading } from "@/components/Heading";

export default function Article({
    params
  }: {
    params: { profileId: string }
  }) {
  return (
    <section className="container">
      <section className="w-full">
        <section>
          <Heading text="Article" />
        </section>

        <section>
            Soon
        </section>

      </section>
    </section>
  );
}
