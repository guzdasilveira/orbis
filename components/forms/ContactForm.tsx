"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykbzevl";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3.5 text-sm text-cream placeholder:text-mist/70 transition-colors focus:border-gold focus:outline-none";
const labelClass = "mb-1.5 block text-xs font-medium text-mist";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: si un bot completó este campo invisible, se descarta en silencio.
    if (data.get("_gotcha")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-flux/30 bg-flux/10 p-6 text-center text-sm text-cream">
        Listo — recibimos tu mensaje. Te escribimos por WhatsApp o email a la brevedad.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo
          </label>
          <input id="nombre" name="nombre" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>
            WhatsApp / Teléfono
          </label>
          <input id="telefono" name="telefono" type="tel" required className={fieldClass} />
        </div>
      </div>
      <div className="mb-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="sistema" className={labelClass}>
            ¿Qué sistema te interesa?
          </label>
          <select id="sistema" name="sistema" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Elegí una opción
            </option>
            <option value="Finanzy">Finanzy — Automotoras</option>
            <option value="FLUX">FLUX — Gimnasios</option>
            <option value="PureMind">PureMind — Psicólogos</option>
            <option value="No estoy seguro">No estoy seguro aún</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="mensaje" className={labelClass}>
          Contanos sobre tu negocio (opcional)
        </label>
        <textarea id="mensaje" name="mensaje" rows={3} className={fieldClass} />
      </div>

      {/* Honeypot — invisible para personas, visible para bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full rounded-lg bg-gold py-4 text-sm font-bold text-navy transition-all hover:bg-gold-bright hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Enviando…" : "Enviar y agendar demo →"}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-center text-sm text-[#FF8A80]">
          Algo falló al enviar. Probá de nuevo o escribinos directo por WhatsApp.
        </p>
      )}
    </form>
  );
}
