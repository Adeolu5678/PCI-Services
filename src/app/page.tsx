import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-[#0b101b] -z-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 dark:bg-slate-900/50 -z-10 skew-x-12 translate-x-20 hidden lg:block border-l border-slate-200 dark:border-slate-800"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 max-w-2xl lg:pr-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 dark:bg-primary/20 border border-blue-200 dark:border-primary/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-primary dark:text-blue-300 tracking-wider uppercase">
                  Precision Engineering
                </span>
              </div>

              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none text-slate-900 dark:text-white tracking-tight">
                ENGINEERED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  FOR EFFICIENCY
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-lg">
                Leading technical insulation and firestopping solutions for the
                Denver Metro area. We optimize facility performance through
                rigorous thermal control and safety engineering.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-dark text-white h-12 px-8 rounded flex items-center gap-2 font-display font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-primary/30 group"
                >
                  Request Audit
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/solutions"
                  className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary dark:hover:border-primary h-12 px-8 rounded flex items-center gap-2 font-display font-bold uppercase tracking-wider transition-all hover:text-primary"
                >
                  Our Solutions
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-6 opacity-80">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">
                    verified_user
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    ISO 9001 Certified
                  </span>
                </div>
                <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">
                    shield
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    OSHA Compliant
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl lg:ml-auto group animate-slide-in-right">
              {/* Abstract Thermal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-transparent to-accent-orange/60 mix-blend-overlay z-10 pointer-events-none"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmDUFBY_9A8eYdi8NTSkblJE83fnCl671bVXk8pAaBjcXxVFLF8EM6VDofOpbm3aItVSjWVAfco4MOM43okV9TyyGpksf2wYhXzsAM_jjbU1hwETZ2oKobyDzXKlT3ARp70t0fytwYLzjOUAaYSiZM8skqyTXCw5g5LC0xYtooRDUpvc76qj-To3Zj4AxZGWhgflyQMfN_25nHBapAdd6mxSPpZKkgzh_MZajsL8slLDjuCUACpYBNEeLG2EYAsINtNl-FIawbuLA"
                alt="Industrial piping and engineering representing thermal efficiency"
                fill
                className="object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Floating Data Card */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-slate-200 dark:border-slate-700 p-4 rounded shadow-xl max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                    <span className="material-symbols-outlined text-[20px]">
                      thermostat
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">
                      Heat Retention
                    </p>
                    <p className="text-lg font-bold font-display text-slate-900 dark:text-white">
                      +42%
                    </p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent-orange h-full w-[72%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Stats Section */}
      <div className="bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
            <div className="py-8 px-4 flex flex-col items-center justify-center text-center group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
              <span className="font-display font-bold text-4xl lg:text-5xl text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                20%
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Average Energy Savings
              </span>
            </div>
            <div className="py-8 px-4 flex flex-col items-center justify-center text-center group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
              <span className="font-display font-bold text-4xl lg:text-5xl text-accent-orange mb-1 group-hover:scale-110 transition-transform duration-300">
                100%
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                OSHA Compliant
              </span>
            </div>
            <div className="py-8 px-4 flex flex-col items-center justify-center text-center group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
              <span className="font-display font-bold text-4xl lg:text-5xl text-slate-700 dark:text-slate-300 mb-1 group-hover:scale-110 transition-transform duration-300">
                Denver
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Metro Service Region
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Solutions Section */}
      <section className="py-20 lg:py-24 bg-surface dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
                TECHNICAL SOLUTIONS
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Precision-engineered services for thermal control, acoustic
                barriers, and fire safety in industrial environments.
              </p>
            </div>
            <Link
              href="/solutions"
              className="text-primary hover:text-primary-dark font-medium flex items-center gap-1 group"
            >
              View all services
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Thermal Control */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg group flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <span className="material-symbols-outlined text-3xl">
                  thermostat
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-primary"></div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  THERMAL CONTROL
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                Advanced insulation systems utilizing aerogel and fiberglass
                technologies to maximize energy retention and process
                efficiency.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-base">
                    check_circle
                  </span>
                  Pipe & Tank Insulation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-base">
                    check_circle
                  </span>
                  Cryogenic Applications
                </li>
              </ul>
              <Link
                href="/solutions"
                className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wide mt-auto group-hover:underline"
              >
                Learn More
              </Link>
            </div>

            {/* Card 2 - Acoustic Barrier */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-lg group flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:bg-slate-600 group-hover:text-white transition-colors text-slate-600">
                <span className="material-symbols-outlined text-3xl">
                  graphic_eq
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-slate-500"></div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  ACOUSTIC BARRIER
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                High-performance sound dampening solutions designed for
                industrial machinery rooms and commercial office spaces.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-slate-500 text-base">
                    check_circle
                  </span>
                  Sound Attenuation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-slate-500 text-base">
                    check_circle
                  </span>
                  Vibration Control
                </li>
              </ul>
              <Link
                href="/solutions"
                className="inline-flex items-center text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mt-auto group-hover:underline"
              >
                Learn More
              </Link>
            </div>

            {/* Card 3 - Firestopping */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-accent-orange/50 dark:hover:border-accent-orange/50 transition-all duration-300 hover:shadow-lg group flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:bg-accent-orange group-hover:text-white transition-colors text-accent-orange">
                <span className="material-symbols-outlined text-3xl">
                  local_fire_department
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-accent-orange"></div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  FIRESTOPPING
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                Certified firestop systems ensuring code compliance and
                containment safety for penetrations and joints.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-accent-orange text-base">
                    check_circle
                  </span>
                  UL Certified Systems
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-accent-orange text-base">
                    check_circle
                  </span>
                  Code Inspection
                </li>
              </ul>
              <Link
                href="/solutions"
                className="inline-flex items-center text-sm font-bold text-accent-orange uppercase tracking-wide mt-auto group-hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl overflow-hidden relative">
            {/* Abstract Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center relative z-10">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  Ready to Optimize Your Facility?
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-md">
                  Schedule a comprehensive site audit with our engineering team
                  today. We identify energy leaks and safety risks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded font-bold font-display uppercase tracking-wider transition-colors text-center"
                  >
                    Contact Engineering
                  </Link>
                  <Link
                    href="/solutions"
                    className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded font-bold font-display uppercase tracking-wider transition-colors text-center"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>

              <div className="relative h-64 lg:h-auto bg-slate-800">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxeF4yEsw0uVXPY9-9Oqm4e5sfE73eTNLRzlML-akqRm3LRTldqpztXCyg9Lmzc77Jha4b7U9i9iy-9kr0sUQt680a_np6n7yegGHN3TKaiFjCWofBEHHULT8TDKOsftPbZHI5Jdg1zlMpIBJRq2iDHHBAtiP5Xt6Hm1XTP_pFlge9n6AQGYC21hyvAkYyKBW3Lt-B_U547dF1MpYrm6j76tB4lgUfQ324miUOj26JQ0OJdS5ULDzEE9h5SLhKBZAXcBcLNLOSzQ"
                  alt="Construction engineer reviewing blueprints"
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary lg:bg-gradient-to-r lg:from-primary lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
