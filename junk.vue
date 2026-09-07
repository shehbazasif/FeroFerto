
<script setup lang="ts">
 const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FeroFerto — Rider Workforce Enablement for Delivery Platforms" },
      {
        name: "description",
        content:
          "FeroFerto onboards, verifies, equips and pays delivery riders for EFOOD, Wolt and regional platforms — with a rider portal and admin console.",
      },
      { property: "og:title", content: "FeroFerto — Rider Workforce Enablement" },
      {
        property: "og:description",
        content:
          "Onboarding, compliance, gear, payroll and live coordination for delivery rider fleets.",
      },
    ],
  }),
  component: Index,
});

function Index()
</script>
<template>


    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-card">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              Live fleets on EFOOD & Wolt
            </span>

            <h1 className="mt-6 text-[2.7rem] font-bold leading-[1.02] sm:text-6xl">
              The operating layer between{" "}
              <span className="text-primary">riders</span> and delivery platforms.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              FeroFerto sources, verifies, equips and pays delivery riders — then keeps every
              shift covered. One team for onboarding, compliance, gear, payroll and daily
              coordination.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="signal" size="xl">
                <Link to="/apply/rider">
                  Apply as a rider <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/for-partners">Partner with us</Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 shadow-card">
                  <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={heroAsset.url}
                alt="FeroFerto courier riding through the city with a delivery bag"
                className="h-[26rem] w-full object-cover lg:h-[32rem]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-card/95 p-5 shadow-lift backdrop-blur sm:left-10 sm:right-auto sm:w-72">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Dispatch status
              </p>
              <div className="mt-3 space-y-2.5 text-sm">
                <Row label="Athens · evening" value="42 / 42 riders" ok />
                <Row label="Thessaloniki · night" value="17 / 18 riders" />
                <Row label="Patras · weekend" value="12 / 12 riders" ok />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <div className="border-b border-border bg-secondary/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Riders supplied to
          </p>
          <img src={efoodAsset.url} alt="EFOOD" className="h-7 w-auto opacity-80" />
          <img src={woltAsset.url} alt="Wolt" className="h-7 w-auto opacity-80" />
          <span className="font-display text-lg font-semibold text-muted-foreground">
            + regional networks
          </span>
        </div>
      </div>

      {/* Services */}
      <Section
        eyebrow="What we run"
        title="Everything a rider fleet needs, operated for you"
        lead="Six connected services that take a rider from application to their first paid shift — and keep them there."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="route-dash w-12" />
              <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              See the full service breakdown <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Rider journey */}
      <Section
        tone="ink"
        eyebrow="Rider journey"
        title="From application to first payout in under a week"
        lead="No queues, no paperwork limbo. Every stage has a status you can see."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {riderSteps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 p-6"
            >
              <span className="font-display text-3xl font-bold text-primary">{s.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="signal" size="lg">
            <Link to="/apply/rider">Start your application</Link>
          </Button>
          <Button asChild variant="outlineInk" size="lg">
            <Link to="/how-it-works">How it works</Link>
          </Button>
        </div>
      </Section>

      {/* Why */}
      <Section eyebrow="Why FeroFerto" title="Built by people who ran the routes">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={ridersAsset.url}
              alt="FeroFerto rider team preparing for a delivery shift"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            {[
              {
                icon: ShieldCheck,
                title: "Compliance that holds up",
                body: "Licences, IDs and insurance tracked with expiry alerts, so platforms never suspend your fleet.",
              },
              {
                icon: Wallet,
                title: "Payouts riders trust",
                body: "Weekly runs with itemised statements. Every deduction is explained before it lands.",
              },
              {
                icon: Bike,
                title: "Gear that arrives first",
                body: "Bag, jacket, helmet and mount delivered before shift one — branded to the platform.",
              },
              {
                icon: Building2,
                title: "One partner, every city",
                body: "Athens to Heraklion, one contract and one coverage report across all your platforms.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="muted" eyebrow="Proof" title="What riders and partners say">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="route-dash w-10" />
              <blockquote className="mt-5 text-sm leading-7 text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="block text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-signal">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:items-center">
          <div className="text-primary-foreground">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to ride, or ready to scale?</h2>
            <p className="mt-3 max-w-md text-primary-foreground/85">
              Riders get onboarded in days. Partners get a covered fleet without building an ops
              team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild variant="ink" size="xl">
              <Link to="/apply/rider">Apply as a rider</Link>
            </Button>
            <Button asChild variant="outlineInk" size="xl" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/apply/partner">Apply as a partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Row({ label, value, ok }: { label: string; value: string; ok?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span
        className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
          ok ? "bg-success/15 text-success-foreground" : "bg-warning/20 text-warning-foreground"
        }`}
      >
        {value}
      </span>
    </div>
</template>