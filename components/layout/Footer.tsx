import { SITE } from "@/lib/content";

const LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#como", label: "Proceso" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 border-t border-line bg-navy-raised px-6 py-12 pb-28 text-center md:flex-row md:justify-between md:px-16 md:pb-12 md:text-left">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
        <span className="font-display text-lg font-extrabold tracking-wide text-cream">
          OR<span className="text-gold">B</span>IS
        </span>
        <nav aria-label="Footer">
          <ul className="flex gap-7">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-mist transition-colors hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="text-sm text-mist">
        © {new Date().getFullYear()} ORBIS · Software para automotoras, gimnasios y psicólogos en Uruguay y Latam · {SITE.email}
      </p>
    </footer>
  );
}
