"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#como", label: "Proceso" },
  { href: "#precios", label: "Precios" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[200] flex h-[72px] items-center justify-between border-b border-line bg-navy/90 px-6 backdrop-blur-xl md:px-16">
        <Link href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" aria-hidden="true">
            <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" fill="#17233F" stroke="#C9A24B" strokeWidth="1.2" />
            <ellipse cx="20" cy="20" rx="9" ry="4.5" fill="none" stroke="#C9A24B" strokeWidth="1.1" transform="rotate(-18 20 20)" />
            <circle cx="20" cy="20" r="1.6" fill="#E8C572" />
          </svg>
          <span className="font-display text-xl font-extrabold tracking-wide text-cream">
            OR<span className="text-gold">B</span>IS
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-mist transition-colors hover:text-cream">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-bright"
            >
              Agendar demo
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-cream md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Drawer mobile */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-[190] bg-navy transition-opacity duration-200 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8 pb-20">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-navy"
            >
              Agendar demo
            </a>
          </li>
        </ul>
      </div>

      {/* Barra CTA fija — pensada para el pulgar, no para el mouse (Fase 2) */}
      <div className="fixed inset-x-0 bottom-0 z-[150] flex gap-2 border-t border-line bg-navy/95 p-3 backdrop-blur-xl md:hidden">
        <a
          href="#contacto"
          className="flex-1 rounded-lg bg-gold py-3 text-center text-sm font-semibold text-navy"
        >
          Agendar demo
        </a>
        <a
          href={SITE.whatsappLink}
          aria-label="Hablar por WhatsApp"
          className="grid w-12 place-items-center rounded-lg border border-flux/40 text-flux"
        >
          <MessageCircle size={20} aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
