import Image from "next/image";
import { ContactForm } from "./components/contact-form";
import { ThemeToggle } from "./components/theme-toggle";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#work", label: "Solutions" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    code: "01",
    title: "Network infrastructure",
    body: "Reliable switching, routing, wireless, and structured cabling designed for every critical connection.",
  },
  {
    code: "02",
    title: "Cloud & SaaS platforms",
    body: "Secure cloud systems, dashboards, and automation that keep teams productive from anywhere.",
  },
  {
    code: "03",
    title: "Security & surveillance",
    body: "IP cameras, access control, and layered security systems that give your people a clearer view.",
  },
  {
    code: "04",
    title: "Managed support",
    body: "Monitoring, maintenance, and responsive support that keeps your network healthy after installation.",
  },
  {
    code: "05",
    title: "Business connectivity",
    body: "High-performance Wi-Fi and wired networks tailored to offices, campuses, retail, and industry.",
  },
  {
    code: "06",
    title: "Technical consulting",
    body: "A practical partner for audits, network upgrades, procurement, and technology roadmaps.",
  },
];

const work = [
  {
    sector: "Enterprise networking",
    title: "Northline Campus Mesh",
    result: "A resilient multi-site network connecting 12 depots with centralized visibility and failover.",
  },
  {
    sector: "Cloud operations",
    title: "Helios Clinic Cloud",
    result: "Secure connectivity and SaaS operations for 80 clinics, keeping clinicians focused on care.",
  },
  {
    sector: "Smart security",
    title: "VaultPay Secure Sites",
    result: "IP surveillance and access control across a growing financial services footprint.",
  },
];

const products = [
  { name: "Cisco switches", category: "Enterprise switching", image: "/images/products/cisco-switch.png" },
  { name: "Ubiquiti access point", category: "Business Wi-Fi", image: "/images/products/ubiquiti-access-point.png" },
  { name: "CAT6 network cable", category: "Structured cabling", image: "/images/products/cat6-cable.png" },
  { name: "MikroTik router", category: "Routing & security", image: "/images/products/mikrotik-router.png" },
  { name: "IP camera", category: "Smart surveillance", image: "/images/products/ip-camera.png" },
];

const socialLinks = [
  { name: "Facebook", image: "/images/social/facebook.svg", href: "https://facebook.com" },
  { name: "Instagram", image: "/images/social/instagram.svg", href: "https://instagram.com" },
  { name: "LinkedIn", image: "/images/social/linkedin.svg", href: "https://linkedin.com" },
  { name: "X", image: "/images/social/x.svg", href: "https://x.com" },
  { name: "TikTok", image: "/images/social/tiktok.svg", href: "https://tiktok.com" },
];

const steps = [
  { title: "Discover", body: "Goals, constraints, users. We map the product that should exist — and the one that should not." },
  { title: "Design", body: "Flows, architecture, and a shared specification. No building until the shape is clear." },
  { title: "Build", body: "Short cycles, visible progress, production-grade code from week one." },
  { title: "Scale", body: "Launch, measure, harden. Then we stay to grow the product with you." },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <a href="#top" className="relative flex h-11 w-36 shrink-0 items-center">
            <Image
              src="/images/logo1.png"
              alt="DDC Empire"
              width={180}
              height={72}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full border border-accent/40 px-4 py-2 text-sm text-accent-soft transition-colors hover:bg-accent hover:text-white md:inline-flex"
            >
              Hire us
            </a>
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-line px-3 py-1.5 text-sm text-muted [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <div className="absolute right-0 mt-3 w-44 rounded-xl border border-line bg-surface p-3 shadow-xl">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="section-panel relative overflow-hidden border-b border-line">
          <div className="pointer-events-none absolute inset-0 grid-fade" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-accent">
                Network infrastructure / SaaS systems
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                The infrastructure behind better business.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                DDC Empire designs and deploys the networks, security systems, and SaaS tools that keep modern teams connected.
                From a single office to a multi-site operation, we make technology dependable, visible, and ready to scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-semibold text-white hover:bg-accent-soft"
                >
                  Start a project
                </a>
                <a
                  href="#work"
                  className="inline-flex h-12 items-center rounded-full border border-line px-7 text-sm font-medium text-foreground hover:border-accent/50"
                >
                  Explore solutions
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-black shadow-[0_0_60px_-20px_rgba(43,127,255,0.55)]">
              <Image
                src="/images/logo2.png"
                alt="DDC Empire brand showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        <section id="services" className="section-panel border-b border-line">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">What we do</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                One partner for every layer of your stack.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.code} className="bg-background p-6 sm:p-8">
                  <p className="font-mono text-xs text-accent">{service.code}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section-panel border-b border-line bg-surface">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">Technology catalog</p>
            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Proven hardware for a connected operation.
              </h2>
              <p className="max-w-sm text-sm leading-7 text-muted">We source, configure, and support the building blocks your network depends on.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {products.map((product) => (
                <article key={product.name} className="overflow-hidden rounded-2xl border border-line bg-background">
                  <div className="relative aspect-square bg-white p-5">
                    <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 210px" className="object-contain p-5" />
                  </div>
                  <div className="p-5"><p className="text-xs uppercase tracking-[0.18em] text-accent">{product.category}</p><h3 className="mt-3 font-display text-lg font-semibold">{product.name}</h3></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-panel border-b border-line bg-surface">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">Selected work</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Products in the field, not in a pitch deck.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {work.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-line bg-background p-8"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.sector}</p>
                    <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{item.result}</p>
                  </div>
                  <p className="mt-10 text-sm text-accent">Confidential engagement</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-panel border-b border-line">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">How we work</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              A clear path from brief to production.
            </h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="relative">
                  <span className="font-display text-5xl font-semibold text-ash/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="studio" className="section-panel border-b border-line">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">The studio</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Technology that disappears into the work.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                We combine network engineers, security specialists, and product builders to make complex technology
                feel calm. Every installation comes with documentation, clear ownership, and a team that stays close.
              </p>
            </div>
            <blockquote className="rounded-2xl border border-line bg-surface p-8">
              <p className="font-display text-2xl leading-snug">
                “DDC gave us a network our team can trust and a dashboard that finally shows us what is happening.”
              </p>
              <footer className="mt-6 text-sm text-muted">Operations Director, Northline Logistics</footer>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="section-panel">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">Contact</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Let’s connect your next move.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                Planning a network upgrade, new office, surveillance system, or SaaS build? Tell us what is changing and we’ll help map the right system.
              </p>
              <p className="mt-8 text-sm text-muted">
                <span className="grid gap-2">
                  <span>Phone: <a href="tel:+2348000000000" className="text-accent-soft hover:underline">+234 800 000 0000</a></span>
                  <span>Email: {" "}
                <a href="mailto:hello@ddcempire.com" className="text-accent-soft hover:underline">
                  hello@ddcempire.com
                </a>
                  </span>
                  <span>Location: Lagos, Nigeria</span>
                </span>
              </p>
              <div className="mt-8"><p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">Follow us</p><div className="mt-4 flex gap-3">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface transition-colors hover:border-accent"><Image src={social.image} alt="" width={20} height={20} /></a>)}</div></div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DDC Empire. All rights reserved.</p>
          <p>Networks · Security · SaaS · Support</p>
        </div>
      </footer>
    </div>
  );
}
