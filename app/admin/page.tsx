"use client";

import { useState, type FormEvent } from "react";
import { ThemeToggle } from "../components/theme-toggle";

const navigation = ["Overview", "Sites", "Services", "Invoices", "Team", "Settings"] as const;

const projects = [
  { name: "Northline Campus Mesh", client: "Northline Logistics", type: "Network upgrade", progress: 82, status: "On track", tone: "blue" },
  { name: "Helios Clinic Cloud", client: "Helios Health", type: "SaaS operations", progress: 64, status: "On track", tone: "mint" },
  { name: "VaultPay Secure Sites", client: "Vault Financial", type: "IP surveillance", progress: 41, status: "At risk", tone: "amber" },
  { name: "Morrow Wi-Fi rollout", client: "Morrow & Co.", type: "Business Wi-Fi", progress: 18, status: "Planning", tone: "grey" },
];

const initialServices = [
  { name: "Network infrastructure", clients: 14, projects: 8, revenue: "$128,400", color: "blue" },
  { name: "Cloud & SaaS systems", clients: 11, projects: 6, revenue: "$74,850", color: "mint" },
  { name: "Security & surveillance", clients: 8, projects: 5, revenue: "$52,600", color: "amber" },
  { name: "Managed support", clients: 19, projects: 12, revenue: "$31,040", color: "violet" },
];

const activity = [
  { initials: "AM", name: "Ava Mitchell", action: "approved the latest Northline sprint", time: "12 min ago", color: "#2b7fff" },
  { initials: "JR", name: "James Reed", action: "uploaded a new VaultPay brief", time: "48 min ago", color: "#e07a5f" },
  { initials: "SK", name: "Sofia Khan", action: "sent invoice INV-0248 to Helios", time: "2 hrs ago", color: "#4f9d83" },
  { initials: "ML", name: "Marcus Lee", action: "joined the Morrow project", time: "Yesterday", color: "#a783d8" },
];

const sectionCopy = {
  Invoices: { eyebrow: "Finance", title: "A clear view of cash flow.", body: "Track invoices, payment status, and upcoming billing across every engagement.", stats: [["$42,600", "awaiting payment"], ["14", "paid this month"], ["2", "due this week"]] },
  Team: { eyebrow: "People", title: "Give the team room to do great work.", body: "See capacity, recent activity, and where the studio is spending its time.", stats: [["18", "team members"], ["78%", "billable capacity"], ["4", "on leave"]] },
  Sites: { eyebrow: "Network operations", title: "Keep every site visible and online.", body: "Monitor rollout progress, uptime, and infrastructure health across every customer site.", stats: [["24", "active sites"], ["99.9%", "network uptime"], ["3", "alerts today"]] },
} as const;

export default function AdminPage() {
  const [active, setActive] = useState<(typeof navigation)[number]>("Overview");
  const [serviceItems, setServiceItems] = useState(initialServices);
  const [range, setRange] = useState("Last 30 days");
  const [query, setQuery] = useState("");
  const [dialog, setDialog] = useState<"create" | "edit" | null>(null);
  const [editingService, setEditingService] = useState(0);
  const [draft, setDraft] = useState({ name: "", clients: "", projects: "", revenue: "" });
  const [settings, setSettings] = useState({ notifications: true, autosave: true, compact: false });
  const [saved, setSaved] = useState(false);
  const filteredProjects = projects.filter((project) =>
    `${project.name} ${project.client}`.toLowerCase().includes(query.toLowerCase()),
  );
  const actionLabel = active === "Sites" ? "Add site" : active === "Services" ? "New service" : active === "Invoices" ? "New invoice" : active === "Team" ? "Add teammate" : active === "Settings" ? "Save settings" : "Add site";
  function openCreate() {
    setDraft({ name: "", clients: "", projects: "", revenue: "" });
    setDialog("create");
  }
  function openEdit(index: number) {
    const service = serviceItems[index];
    setEditingService(index);
    setDraft({ name: service.name, clients: String(service.clients), projects: String(service.projects), revenue: service.revenue });
    setDialog("edit");
  }
  function saveDialog(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (active === "Services") {
      const nextService = { name: draft.name, clients: Number(draft.clients) || 0, projects: Number(draft.projects) || 0, revenue: draft.revenue, color: dialog === "edit" ? serviceItems[editingService].color : "blue" };
      setServiceItems((current) => dialog === "edit" ? current.map((service, index) => index === editingService ? nextService : service) : [...current, nextService]);
    }
    setDialog(null);
  }

  return (
    <div className="admin-shell flex min-h-screen flex-col lg:flex-row">
      <aside className="admin-sidebar flex shrink-0 flex-col border-b border-line px-5 py-5 lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between lg:block">
          <a href="/" className="font-display text-xl font-bold tracking-[-0.06em]">DDC<span className="text-accent">.</span></a>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted lg:block lg:mt-1">Empire / Network Ops</span>
          <div className="lg:hidden"><ThemeToggle /></div>
        </div>
        <nav className="mt-7 flex gap-1 overflow-x-auto lg:mt-14 lg:block">
          {navigation.map((item, index) => (
            <button key={item} type="button" onClick={() => setActive(item)} className={`admin-nav-item ${active === item ? "is-active" : ""}`} aria-current={active === item ? "page" : undefined}>
              <span className="admin-nav-icon">{["+", "↗", "○", "$", "□", "⚙"][index]}</span>{item}
            </button>
          ))}
        </nav>
        <div className="mt-auto hidden border-t border-line pt-5 lg:block">
          <a href="/" className="mb-4 block text-sm text-muted transition-colors hover:text-foreground">← Back to website</a>
          <div className="flex items-center justify-between"><span className="text-xs text-muted">Appearance</span><ThemeToggle /></div>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-5 sm:px-8 lg:px-10">
          <div><p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Monday, September 7, 2026 / Network status</p><h1 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{active === "Overview" ? "Your network at a glance." : sectionCopy[active as keyof typeof sectionCopy]?.title ?? "Services at a glance."}</h1></div>
          <div className="flex w-full items-center gap-3 sm:w-auto"><label className="relative min-w-0 flex-1 sm:w-56"><span className="sr-only">Search dashboard</span><span className="pointer-events-none absolute left-3 top-2.5 text-muted">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${active.toLowerCase()}`} className="h-10 w-full rounded-lg border border-line bg-surface pl-9 pr-3 text-sm outline-none placeholder:text-muted focus:border-accent" /></label><div className="hidden sm:block"><ThemeToggle /></div>{active !== "Settings" ? <button type="button" onClick={openCreate} className="h-10 rounded-lg bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-soft">+ {actionLabel}</button> : <button type="button" onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2200); }} className="h-10 rounded-lg bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-soft">{saved ? "Saved" : actionLabel}</button>}</div>
        </header>

        <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          {active === "Services" ? <section className="admin-card mb-6 overflow-hidden"><div className="border-b border-line px-5 py-5 sm:px-6"><p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Offerings</p><h2 className="mt-2 font-display text-2xl font-semibold">Services in demand</h2><p className="mt-2 text-sm text-muted">Track delivery volume and revenue by the capabilities DDC brings to market.</p></div><div className="grid gap-px bg-line sm:grid-cols-2">{serviceItems.filter((service) => `${service.name} ${service.revenue}`.toLowerCase().includes(query.toLowerCase())).map((service) => { const serviceIndex = serviceItems.indexOf(service); return <article key={service.name} className="relative bg-surface p-5 sm:p-6"><div className={`metric-orb ${service.color}`} /><button type="button" onClick={() => openEdit(serviceIndex)} className="absolute right-5 top-5 text-xs font-medium text-accent hover:text-accent-soft">Edit</button><p className="relative font-display text-lg font-semibold">{service.name}</p><div className="relative mt-6 grid grid-cols-3 gap-3 text-xs"><div><strong className="block text-lg">{service.clients}</strong><span className="text-muted">clients</span></div><div><strong className="block text-lg">{service.projects}</strong><span className="text-muted">projects</span></div><div><strong className="block text-lg">{service.revenue}</strong><span className="text-muted">revenue</span></div></div></article>; })}</div></section> : null}
          {active !== "Overview" && active !== "Projects" && active !== "Services" ? <section className="admin-card mb-6 p-6 sm:p-8"><p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">{sectionCopy[active as keyof typeof sectionCopy]?.eyebrow}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{sectionCopy[active as keyof typeof sectionCopy]?.body}</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{sectionCopy[active as keyof typeof sectionCopy]?.stats.map(([value, label]) => <div key={label} className="rounded-lg border border-line bg-background p-4"><strong className="font-display text-2xl">{value}</strong><span className="mt-2 block text-xs text-muted">{label}</span></div>)}</div></section> : null}
          {active === "Projects" ? <section className="admin-card mb-6 overflow-hidden"><div className="border-b border-line px-5 py-5 sm:px-6"><p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Delivery workspace</p><h2 className="mt-2 font-display text-2xl font-semibold">All projects</h2><p className="mt-2 text-sm text-muted">Search and monitor every active engagement from one place.</p></div><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-surface text-xs uppercase tracking-wider text-muted"><tr><th className="px-5 py-3 font-medium sm:px-6">Project</th><th className="px-3 py-3 font-medium">Client</th><th className="px-3 py-3 font-medium">Progress</th><th className="px-6 py-3 text-right font-medium">Status</th></tr></thead><tbody>{filteredProjects.map((project) => <tr key={project.name} className="border-t border-line"><td className="px-5 py-4 font-medium sm:px-6">{project.name}</td><td className="px-3 py-4 text-muted">{project.client}</td><td className="px-3 py-4 text-muted">{project.progress}%</td><td className="px-6 py-4 text-right"><span className={`status-pill ${project.tone}`}>{project.status}</span></td></tr>)}</tbody></table></div></section> : null}
          {active === "Settings" ? <section className="admin-card max-w-3xl overflow-hidden"><div className="border-b border-line px-5 py-5 sm:px-6"><p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Workspace preferences</p><h2 className="mt-2 font-display text-2xl font-semibold">Settings</h2><p className="mt-2 text-sm text-muted">Control how your admin workspace behaves and keeps you informed.</p></div><div className="divide-y divide-line">{[["notifications", "Activity notifications", "Get updates when projects, invoices, or team records change."], ["autosave", "Autosave changes", "Save form edits automatically while you work."], ["compact", "Compact data view", "Fit more rows into tables and lists."]].map(([key, label, description]) => <label key={key} className="flex cursor-pointer items-center justify-between gap-5 px-5 py-5 sm:px-6"><span><strong className="block text-sm">{label}</strong><span className="mt-1 block text-xs leading-5 text-muted">{description}</span></span><input type="checkbox" checked={settings[key as keyof typeof settings]} onChange={(event) => setSettings((current) => ({ ...current, [key]: event.target.checked }))} className="h-4 w-4 accent-[var(--accent)]" /></label>)}</div></section> : null}
          {active === "Overview" ? <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[{ label: "Revenue this month", value: "$84,250", change: "+18.4%", note: "vs. last month", color: "blue" }, { label: "Active projects", value: "12", change: "+2", note: "since last week", color: "mint" }, { label: "Hours delivered", value: "1,284", change: "+9.2%", note: "vs. target", color: "amber" }, { label: "Client satisfaction", value: "96.8%", change: "+1.4%", note: "average score", color: "violet" }].map((metric) => (
              <article key={metric.label} className="admin-card relative overflow-hidden p-5"><div className={`metric-orb ${metric.color}`} /><p className="relative text-sm text-muted">{metric.label}</p><p className="relative mt-4 font-display text-3xl font-semibold tracking-tight">{metric.value}</p><p className="relative mt-3 text-xs"><span className="font-semibold text-accent-soft">{metric.change}</span><span className="ml-2 text-muted">{metric.note}</span></p></article>
            ))}
          </section> : null}

          {active === "Overview" ? <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)]">
            <article className="admin-card p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm text-muted">Revenue overview</p><p className="mt-1 font-display text-2xl font-semibold">$246,890 <span className="font-sans text-xs font-medium text-accent-soft">+12.6%</span></p></div><select value={range} onChange={(event) => setRange(event.target.value)} className="rounded-lg border border-line bg-surface px-3 py-2 text-xs text-foreground outline-none"><option>Last 30 days</option><option>Last 90 days</option><option>This year</option></select></div><div className="mt-8 flex h-52 items-end gap-1 border-b border-line pb-0 sm:gap-2">{[38, 46, 42, 55, 49, 63, 58, 74, 68, 79, 73, 91, 84, 96, 88, 100, 94, 86, 93, 100, 96, 100, 94, 100, 96, 100, 98, 100, 100, 100].map((height, index) => <div key={index} className="group relative flex-1"><div style={{ height: `${height}%` }} className={`rounded-t-sm transition-colors group-hover:bg-accent-soft ${index > 21 ? "bg-accent" : "bg-accent/30"}`} /></div>)}</div><div className="mt-3 flex justify-between text-[11px] text-muted"><span>Aug 09</span><span>Aug 16</span><span>Aug 23</span><span>Aug 30</span><span>Sep 07</span></div></article>
            <article className="admin-card p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted">Time allocation</p><p className="mt-1 font-display text-2xl font-semibold">1,284 hrs</p></div><span className="rounded-full bg-accent/10 px-2 py-1 text-xs text-accent">This month</span></div><div className="mx-auto mt-7 flex h-40 w-40 items-center justify-center rounded-full" style={{ background: "conic-gradient(#2b7fff 0 42%, #4f9d83 42% 70%, #e6b45c 70% 86%, #8792a5 86% 100%)" }}><div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface text-center"><span className="font-display text-lg font-semibold">78%<small className="block font-sans text-[10px] font-normal text-muted">billable</small></span></div></div><div className="mt-6 grid grid-cols-2 gap-3 text-xs">{[["Product", "42%", "#2b7fff"], ["Engineering", "28%", "#4f9d83"], ["Design", "16%", "#e6b45c"], ["Internal", "14%", "#8792a5"]].map(([name, value, color]) => <div key={name} className="flex items-center gap-2 text-muted"><i style={{ backgroundColor: color }} className="h-2 w-2 rounded-full" />{name}<strong className="ml-auto text-foreground">{value}</strong></div>)}</div></article>
          </section> : null}

          {active === "Overview" ? <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)]"><article className="admin-card overflow-hidden"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-5 sm:px-6"><div><p className="text-sm text-muted">Project pipeline</p><h2 className="mt-1 font-display text-xl font-semibold">Work in motion</h2></div><button type="button" className="text-sm font-medium text-accent hover:text-accent-soft">View all →</button></div><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-surface text-xs uppercase tracking-wider text-muted"><tr><th className="px-5 py-3 font-medium sm:px-6">Project</th><th className="px-3 py-3 font-medium">Progress</th><th className="px-3 py-3 font-medium">Status</th><th className="px-6 py-3 text-right font-medium">Owner</th></tr></thead><tbody>{filteredProjects.map((project) => <tr key={project.name} className="border-t border-line"><td className="px-5 py-4 sm:px-6"><p className="font-medium">{project.name}</p><p className="mt-1 text-xs text-muted">{project.client} / {project.type}</p></td><td className="px-3 py-4"><div className="flex items-center gap-3"><div className="h-1.5 w-24 rounded-full bg-line"><div style={{ width: `${project.progress}%` }} className={`h-full rounded-full bg-${project.tone === "blue" ? "accent" : project.tone === "mint" ? "[\#4f9d83]" : project.tone === "amber" ? "[\#e6b45c]" : "ash"}`} /></div><span className="text-xs text-muted">{project.progress}%</span></div></td><td className="px-3 py-4"><span className={`status-pill ${project.tone}`}>{project.status}</span></td><td className="px-6 py-4 text-right"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-[10px] font-semibold text-accent">{project.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span></td></tr>)}</tbody></table></div></article>
            <article className="admin-card"><div className="flex items-center justify-between border-b border-line px-5 py-5"><div><p className="text-sm text-muted">Recent activity</p><h2 className="mt-1 font-display text-xl font-semibold">Team pulse</h2></div><button type="button" aria-label="More activity" className="text-xl text-muted hover:text-foreground">•••</button></div><div className="px-5">{activity.map((item) => <div key={item.name} className="flex gap-3 border-b border-line py-4 last:border-0"><span style={{ backgroundColor: item.color }} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white">{item.initials}</span><div className="min-w-0 text-sm"><p><strong>{item.name}</strong> <span className="text-muted">{item.action}</span></p><p className="mt-1 text-xs text-muted">{item.time}</p></div></div>)}</div></article></section> : null}
        </div>
        {dialog ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5" role="dialog" aria-modal="true" aria-labelledby="admin-dialog-title"><form onSubmit={saveDialog} className="admin-card w-full max-w-md p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">{dialog === "edit" ? "Update offering" : `Create ${active.toLowerCase()}`}</p><h2 id="admin-dialog-title" className="mt-2 font-display text-2xl font-semibold">{dialog === "edit" ? "Edit service" : actionLabel}</h2></div><button type="button" onClick={() => setDialog(null)} aria-label="Close dialog" className="text-xl text-muted hover:text-foreground">×</button></div>{active === "Services" ? <div className="mt-6 space-y-4">{[["name", "Service name", "e.g. Product strategy"], ["clients", "Active clients", "e.g. 4"], ["projects", "Active projects", "e.g. 6"], ["revenue", "Revenue", "e.g. $24,000"]].map(([key, label, placeholder]) => <label key={key} className="block text-sm"><span className="mb-1.5 block text-muted">{label}</span><input required value={draft[key as keyof typeof draft]} onChange={(event) => setDraft((current) => ({ ...current, [key]: event.target.value }))} placeholder={placeholder} className="h-10 w-full rounded-lg border border-line bg-background px-3 outline-none placeholder:text-muted focus:border-accent" /></label>)}</div> : <p className="mt-6 text-sm leading-7 text-muted">This form is ready for your next {active.toLowerCase()} record. Add the details when the connected data source is enabled.</p>}<div className="mt-7 flex justify-end gap-3"><button type="button" onClick={() => setDialog(null)} className="rounded-lg border border-line px-4 py-2 text-sm text-muted hover:text-foreground">Cancel</button><button type="submit" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-soft">{dialog === "edit" ? "Save changes" : `Create ${active.toLowerCase()}`}</button></div></form></div> : null}
      </main>
    </div>
  );
}
