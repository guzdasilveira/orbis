import Reveal from "@/components/ui/Reveal";

export default function ProblemQuote() {
  return (
    <section className="bg-paper px-6 py-20 text-center md:px-16">
      <Reveal>
        <p className="mx-auto max-w-[760px] text-balance font-voice text-2xl italic leading-snug text-ink md:text-3xl">
          &ldquo;Cada negocio tiene el mismo problema silencioso:{" "}
          <strong className="font-voice font-normal not-italic text-gold-ink">
            plata que se escapa
          </strong>{" "}
          porque la gestión es un caos. Nosotros lo resolvemos con sistemas que trabajan cuando vos no estás
          mirando.&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
