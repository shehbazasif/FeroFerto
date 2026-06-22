<template>
  <div class="min-h-screen bg-gradient-to-b from-white via-[#F9F5F1] to-white">
    <!-- Page Header -->
    <Navbar />
    <section
      class="mt-20 bg-gradient-to-b from-white to-[#F9F5F1] pt-12 pb-8 border-b border-orange-100"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center">
          <h1
            class="text-5xl font-bold text-[#FF6D3B] uppercase tracking-wider"
          >
            About Us
          </h1>
          <h1
            class="text-5xl md:text-6xl font-bold text-[#1A2744] mt-4 leading-tight"
          >
            Our Mission to Empower Riders
          </h1>
          <p
            class="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            FeroFerto is redefining the delivery gig economy by putting riders
            at the center of everything we do. We believe independent couriers
            deserve better tools, clearer compliance, and genuine support.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- Image -->
          <div class="order-2 md:order-1">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="FeroFerto team collaboration"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#FF6D3B]/20 to-transparent"
              ></div>
            </div>
          </div>

          <!-- Content -->
          <div class="order-1 md:order-2 space-y-6">
            <div>
              <h2 class="text-4xl font-bold text-[#1A2744] mb-6 leading-tight">
                The FeroFerto Story
              </h2>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-700 leading-relaxed">
                FeroFerto was born from frustration. Our founders spent years
                watching talented delivery riders struggle with the same
                obstacles: fragmented onboarding across multiple platforms,
                unclear compliance requirements, and difficulty managing their
                workload efficiently.
              </p>

              <p class="text-lg text-gray-700 leading-relaxed">
                In 2020, we asked ourselves: "What if we could be the bridge?"
                What if we could handle all the administrative
                complexity—verification, compliance, payroll, platform
                coordination—so riders could focus entirely on earning and
                growing their careers?
              </p>

              <p class="text-lg text-gray-700 leading-relaxed">
                That question became FeroFerto. Today, we serve 10,000+ active
                riders across 50+ cities, partnering with EFOOD, Wolt, and other
                major platforms. We've distributed over ₹50M in earnings to our
                riders, with monthly transaction volumes exceeding 500,000
                deliveries.
              </p>

              <p class="text-lg text-gray-700 leading-relaxed">
                But our biggest achievement isn't a number—it's the trust riders
                place in us. A 4.8★ satisfaction score means our community
                believes we genuinely have their back.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#FF6D3B] text-2xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Built by People Who Understand the Gig Economy
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our team includes former riders and industry veterans.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF6D3B] text-2xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Focused on Sustainability
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We grow responsibly, investing profits back into rider
                    support.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF6D3B] text-2xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Transparent Operations
                  </h4>
                  <p className="text-gray-600 text-sm">
                    No hidden fees, no surprises. Riders always know where they
                    stand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-[#1A2744] mb-4">
            Our Core Values
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            These principles guide every decision we make and shape who we are
            as a company.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Rider First -->
          <div
            class="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition"
          >
            <div
              class="w-16 h-16 rounded-full bg-[#FF6D3B] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform"
            >
              🎯
            </div>
            <h3 class="text-2xl font-bold text-[#1A2744] mb-3">Rider First</h3>
            <p class="text-gray-700 leading-relaxed">
              Every feature, policy, and decision starts with a single question:
              "Does this help our riders?" We advocate for their success,
              wellbeing, and economic security.
            </p>
          </div>

          <!-- Speed & Simplicity -->
          <div
            class="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition"
          >
            <div
              class="w-16 h-16 rounded-full bg-[#FF6D3B] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform"
            >
              ⚡
            </div>
            <h3 class="text-2xl font-bold text-[#1A2744] mb-3">
              Speed & Simplicity
            </h3>
            <p class="text-gray-700 leading-relaxed">
              We eliminate friction at every turn. Fast onboarding, clear
              communication, effortless platform management—no unnecessary
              complexity or confusion.
            </p>
          </div>

          <!-- Trust & Transparency -->
          <div
            class="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition"
          >
            <div
              class="w-16 h-16 rounded-full bg-[#FF6D3B] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform"
            >
              🤝
            </div>
            <h3 class="text-2xl font-bold text-[#1A2744] mb-3">
              Trust & Transparency
            </h3>
            <p class="text-gray-700 leading-relaxed">
              No hidden fees, no surprise requirements. We're honest about what
              we do and why, building genuine relationships through transparent
              communication.
            </p>
          </div>

          <!-- Continuous Growth -->
          <div
            class="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition"
          >
            <div
              class="w-16 h-16 rounded-full bg-[#FF6D3B] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform"
            >
              🌱
            </div>
            <h3 class="text-2xl font-bold text-[#1A2744] mb-3">
              Continuous Growth
            </h3>
            <p class="text-gray-700 leading-relaxed">
              We invest in tools, training, and support so riders can grow their
              earnings, advance their skills, and build sustainable careers with
              us.
            </p>
          </div>

          <!-- Safety First -->
          <div
            class="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition"
          >
            <div
              class="w-16 h-16 rounded-full bg-[#FF6D3B] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform"
            >
              🔒
            </div>
            <h3 class="text-2xl font-bold text-[#1A2744] mb-3">Safety First</h3>
            <p class="text-gray-700 leading-relaxed">
              We prioritize the safety and security of our riders through
              comprehensive insurance, dedicated support systems, and fair
              working standards.
            </p>
          </div>

          <!-- Sustainable Impact -->
          <div
            class="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition"
          >
            <div
              class="w-16 h-16 rounded-full bg-[#FF6D3B] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform"
            >
              🌍
            </div>
            <h3 class="text-2xl font-bold text-[#1A2744] mb-3">
              Sustainable Impact
            </h3>
            <p class="text-gray-700 leading-relaxed">
              We champion eco-friendly practices and encourage riders to make
              sustainable delivery choices that benefit their communities and
              our planet.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact & Achievements Section -->
    <!-- <section
      class="py-20 bg-gradient-to-r from-[#FF6D3B] to-[#FF8A5B] text-white"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Our Impact by Numbers
          </h2>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            Real metrics that demonstrate our commitment to rider empowerment
            and platform success.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div
            class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center"
          >
            <div class="text-5xl md:text-6xl font-bold mb-3">10K+</div>
            <p class="text-lg opacity-90">Active Riders</p>
            <p class="text-sm opacity-75 mt-2">Across 50+ cities</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center"
          >
            <div class="text-5xl md:text-6xl font-bold mb-3">₹50M+</div>
            <p class="text-lg opacity-90">Earnings Distributed</p>
            <p class="text-sm opacity-75 mt-2">Direct to riders</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center"
          >
            <div class="text-5xl md:text-6xl font-bold mb-3">500K+</div>
            <p class="text-lg opacity-90">Deliveries Monthly</p>
            <p class="text-sm opacity-75 mt-2">Growing consistently</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center"
          >
            <div class="text-5xl md:text-6xl font-bold mb-3">4.8★</div>
            <p class="text-lg opacity-90">Rider Satisfaction</p>
            <p class="text-sm opacity-75 mt-2">Average rating</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Our Mission Statement Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1A2744] mb-8">
          Our Mission
        </h2>
        <div
          class="bg-gradient-to-br from-orange-50 to-white border-2 border-[#FF6D3B] rounded-3xl p-12"
        >
          <p
            class="text-2xl md:text-3xl font-semibold text-[#1A2744] leading-relaxed"
          >
            To empower independent delivery riders with enterprise-grade tools,
            transparent workflows, and genuine support—enabling them to earn
            more, work smarter, and build sustainable careers.
          </p>
          <p class="text-lg text-gray-700 mt-6 leading-relaxed">
            We believe the future of delivery is built on trust between riders
            and platforms. By removing barriers and adding value, we're creating
            an ecosystem where everyone wins.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gradient-to-b from-[#F9F5F1] to-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-[#1A2744] mb-4">
            Our Team
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse group of founders, operators, and riders who understand
            the gig economy from the ground up.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-100"
          >
            <div
              class="h-64 bg-gradient-to-br from-[#FF6D3B]/20 to-[#FF8A5B]/20 flex items-center justify-center"
            >
              <div
                class="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6D3B] to-[#FF8A5B] flex items-center justify-center text-5xl"
              ></div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-[#1A2744] mb-1">
                Raja Shehzad Jamil
              </h3>
              <p class="text-[#FF6D3B] font-semibold mb-3">founder & CEO</p>
              <p class="text-gray-600 text-sm leading-relaxed">
                Former Delivery Operations Manager with 8+ years in delivery
                platforms. Started as a rider to understand the pain points
                firsthand.
              </p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-100"
          >
            <div
              class="h-64 bg-gradient-to-br from-[#FF6D3B]/20 to-[#FF8A5B]/20 flex items-center justify-center"
            >
              <div
                class="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF8A5B] to-[#FFB380] flex items-center justify-center text-5xl"
              ></div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-[#1A2744] mb-1">
                Shehbaz Asif
              </h3>
              <p class="text-[#FF6D3B] font-semibold mb-3">
                HR and Documentation
              </p>
              <p class="text-gray-600 text-sm leading-relaxed">
                Operations expert with background in HR tech and compliance.
                Passionate about fair employment practices.
              </p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-100"
          >
            <div
              class="h-64 bg-gradient-to-br from-[#FF6D3B]/20 to-[#FF8A5B]/20 flex items-center justify-center"
            >
              <div
                class="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFB380] to-[#FFC7A3] flex items-center justify-center text-5xl"
              ></div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-[#1A2744] mb-1">Ahmed</h3>
              <p class="text-[#FF6D3B] font-semibold mb-3">CTO</p>
              <p class="text-gray-600 text-sm leading-relaxed">
                Develope Strategy for business growth. And Manage core platform
                that powers FeroFerto's operations.
              </p>
            </div>
          </div>
        </div>

        <div
          class="mt-16 p-8 rounded-2xl bg-orange-50 border border-orange-100 text-center"
        >
          <p class="text-lg text-gray-700 mb-4">
            <strong
              >Plus a team of 25+ riders, operators, and support
              specialists</strong
            >
            who live and breathe our mission every day.
          </p>
          <p class="text-gray-600">
            We're hiring! If you believe in empowering riders, we'd love to hear
            from you.
          </p>
        </div>
      </div>
    </section>

    <!-- What Sets Us Apart Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2
          class="text-4xl md:text-5xl font-bold text-[#1A2744] text-center mb-16"
        >
          What Sets Us Apart
        </h2>

        <div class="space-y-8">
          <!-- USP 1 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold text-[#1A2744] mb-4">
                Built by Riders, for Riders
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-4">
                Our entire team, including executive leadership, has
                ground-level experience in the delivery industry. We don't
                hypothesize about rider needs—we live them.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >30%+ of team are or were active riders</span
                  >
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >We conduct weekly rider feedback sessions</span
                  >
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >Direct influence on product decisions</span
                  >
                </li>
              </ul>
            </div>
            <div class="h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/built_for_riders.jpg"
                alt="Collaborative team work"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- USP 2 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div
              class="h-96 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1"
            >
              <img
                src="/images/team_multifuntion.jpeg"
                alt="Enterprise-grade technology"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="order-1 md:order-2">
              <h3 class="text-3xl font-bold text-[#1A2744] mb-4">
                Enterprise-Grade Technology
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-4">
                While our interface is simple, our backend is sophisticated. We
                handle compliance, payroll, and multi-platform coordination at
                scale.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >Real-time earnings tracking and payouts</span
                  >
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >Automated compliance document management</span
                  >
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >Seamless multi-platform synchronization</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- USP 3 -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold text-[#1A2744] mb-4">
                Genuine Commitment to Sustainability
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-4">
                We're not here for a quick exit. We're building a company that
                grows responsibly and reinvests in the rider community.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >Profits reinvested in product improvements</span
                  >
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >Annual benefits & welfare initiatives</span
                  >
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-[#FF6D3B] font-bold">✓</span>
                  <span class="text-gray-700"
                    >Long-term vision, not short-term gains</span
                  >
                </li>
              </ul>
            </div>
            <div class="h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/Bike Rider smilling.png"
                alt="Sustainable practices"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Section -->
    <section class="py-20 bg-gradient-to-b from-[#F9F5F1] to-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-[#1A2744] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Major delivery platforms trust FeroFerto to supply qualified,
            reliable riders at scale.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 items-center justify-center">
          <div
            class="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition"
          >
            <div class="text-4xl font-bold text-[#FF6D3B] mb-2">EFOOD</div>
            <p class="text-gray-600">
              Leading delivery platform in Southeast Europe
            </p>
          </div>
          <div
            class="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition"
          >
            <div class="text-4xl font-bold text-[#FF6D3B] mb-2">WOLT</div>
            <p class="text-gray-600">Global food and goods delivery service</p>
          </div>
          <div
            class="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition"
          >
            <div class="text-4xl font-bold text-[#FF6D3B] mb-2">+ Others</div>
            <p class="text-gray-600">Growing partnerships across regions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div
          class="bg-gradient-to-br from-orange-50 to-white border-2 border-[#FF6D3B] rounded-3xl p-12"
        >
          <h2 class="text-4xl md:text-5xl font-bold text-[#1A2744] mb-6">
            Join Our Growing Community
          </h2>
          <p class="text-xl text-gray-700 mb-10 leading-relaxed">
            Whether you're an independent rider looking to optimize your
            earnings or a platform seeking reliable supply, FeroFerto is built
            for you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="px-10 py-4 bg-[#FF6D3B] text-white font-semibold rounded-full hover:bg-[#E85C2F] transition shadow-lg shadow-orange-200 text-lg"
            >
              <a href="/contact" class="text-white no-underline"
                >Apply as Rider</a
              >
            </button>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "AboutUsPage",
  data() {
    return {
      // Component data here
    };
  },
};
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Responsive typography adjustments */
@media (max-width: 768px) {
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-2xl;
  }
}
</style>
