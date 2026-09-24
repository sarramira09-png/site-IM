import { useEffect, useState } from "react";
import rawContent from "./raw-content.html?raw";
import "./styleA.css";

const navLinks = [
  { label: "Discover", href: "#discover" },
  { label: "Destinations", href: "#hammamet" },
  { label: "Experiences", href: "#gallery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/90 shadow-[0_10px_40px_-20px_rgba(126,52,21,0.5)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className={`flex items-center gap-2 font-display text-2xl font-700 tracking-tight transition-colors ${
            scrolled ? "text-clay-700" : "text-white"
          }`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-clay-500 text-base text-white shadow-lg">
            ☼
          </span>
          Nabeul
        </a>

        <ul
          className={`hidden items-center gap-8 text-sm font-500 md:flex ${
            scrolled ? "text-clay-700" : "text-white/90"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-opacity after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-clay-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          className={`grid h-10 w-10 place-items-center rounded-full md:hidden ${
            scrolled ? "text-clay-700 bg-sand-100" : "text-white bg-white/15"
          }`}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-sand-50/95 backdrop-blur-md transition-all duration-500 md:hidden ${
          open ? "max-h-96 border-t border-clay-500/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 text-clay-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-500 transition-colors hover:bg-sand-200/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div id="heroBg" className="absolute inset-0">
        <img
          src="/tunisiana.jpg"
          alt="Whitewashed seaside medina on the Cap Bon coast"
          className="h-full w-full animate-slow-zoom object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-clay-700/40 via-sea-900/30 to-sea-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-clay-700/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 md:px-8">
        <p className="mb-5 flex items-center gap-3 text-sm font-500 uppercase tracking-[0.35em] text-sand-100">
          <span className="h-px w-10 bg-saffron-400" />
          Nabeul · Tunisia
        </p>

        <h1 className="max-w-4xl font-display text-5xl font-700 leading-[0.95] text-white drop-shadow-md sm:text-6xl md:text-8xl">
          Where the sun
          <br />
          <span className="italic text-saffron-400">meets the clay.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-sand-100/90 md:text-xl">
          Sunny beaches, ancient potters' kilns and orange groves on the warm
          Mediterranean shoulder of Tunisia. Welcome to Nabeul.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#hammamet"
            className="rounded-full bg-saffron-400 px-7 py-3.5 font-600 text-sea-900 shadow-xl shadow-saffron-500/30 transition-transform hover:-translate-y-0.5"
          >
            Explore destinations
          </a>
          <a
            href="#visit"
            className="rounded-full border border-white/50 bg-white/10 px-7 py-3.5 font-600 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Plan your visit
          </a>
        </div>
      </div>

      <a
        href="#hammamet"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-floaty text-center text-white/80"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="mx-auto mt-2 h-9 w-5 rounded-full border-2 border-white/60">
          <span className="mx-auto mt-1.5 block h-1.5 w-1 rounded-full bg-white" />
        </div>
      </a>
    </section>
  );
}

function RawSections() {
  return <div dangerouslySetInnerHTML={{ __html: rawContent }} />;
}

function RawJavaScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/script.js";
    script.async = false;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RawSections />
      <RawJavaScript />
    </>
  );
}
