import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              About PCI Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 font-display">
              The Science of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Comfort
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              PCI Services isn&apos;t just about insulation; it&apos;s about
              energy efficiency, thermal control, and precise installation. We
              are a high-tech engineering firm dedicated to optimizing your
              facility&apos;s performance.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-surface dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-display">
                OUR PHILOSOPHY
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400">
                <p className="text-lg">
                  We believe that building comfort isn&apos;t just about
                  temperature—it&apos;s about creating environments where people
                  and processes thrive. Our approach combines rigorous
                  engineering principles with practical field expertise.
                </p>
                <p>
                  Every project we undertake is approached with the same
                  meticulous attention to detail. From thermal bridging analysis
                  to fire safety compliance, we ensure that every installation
                  meets the highest standards of quality and performance.
                </p>
                <p>
                  Our team of certified professionals brings decades of combined
                  experience to each job site. We don&apos;t just install
                  insulation—we engineer solutions that deliver measurable
                  results.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Precision
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Every cut, every seal, every installation done to exact
                      specifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">
                      query_stats
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Data-Driven
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      R-Values, thermal resistance, efficiency metrics that
                      matter.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Reliable
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      On time. To spec. Every time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Compliant
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      OSHA certified, code compliant, safety first.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxeF4yEsw0uVXPY9-9Oqm4e5sfE73eTNLRzlML-akqRm3LRTldqpztXCyg9Lmzc77Jha4b7U9i9iy-9kr0sUQt680a_np6n7yegGHN3TKaiFjCWofBEHHULT8TDKOsftPbZHI5Jdg1zlMpIBJRq2iDHHBAtiP5Xt6Hm1XTP_pFlge9n6AQGYC21hyvAkYyKBW3Lt-B_U547dF1MpYrm6j76tB4lgUfQ324miUOj26JQ0OJdS5ULDzEE9h5SLhKBZAXcBcLNLOSzQ"
                alt="Engineering team reviewing blueprints"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display">
              CERTIFICATIONS & PARTNERSHIPS
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We maintain the highest industry standards and certifications to
              ensure every project meets or exceeds requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                verified_user
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-center">
                ISO 9001
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-1">
                Certified
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-accent-orange mb-4">
                shield
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-center">
                OSHA 30
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-1">
                Compliant
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-green-600 mb-4">
                eco
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-center">
                Energy Star
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-1">
                Partner
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                local_fire_department
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-center">
                UL Listed
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-1">
                Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Ready to Work Together?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let&apos;s discuss how we can optimize your facility&apos;s thermal
            performance and safety compliance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold font-display uppercase tracking-wider hover:bg-slate-100 transition-colors"
          >
            Contact Our Team
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
