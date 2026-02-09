"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formType, setFormType] = useState<"quote" | "audit">("quote");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-display">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Efficient
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Request a quote, schedule an energy audit, or simply get in touch
              with our engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-surface dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              {/* Form Type Toggle */}
              <div className="mb-8">
                <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <button
                    onClick={() => setFormType("quote")}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                      formType === "quote"
                        ? "bg-white dark:bg-slate-700 text-primary shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Request Quote
                  </button>
                  <button
                    onClick={() => setFormType("audit")}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                      formType === "audit"
                        ? "bg-white dark:bg-slate-700 text-accent-orange shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Schedule Audit
                  </button>
                </div>
              </div>

              {/* Quote Form */}
              {formType === "quote" && (
                <form className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display">
                    Request a Quote
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="ABC Construction"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="(303) 555-0123"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Service Type *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a service...</option>
                        <option value="thermal">Thermal Insulation</option>
                        <option value="firestopping">Firestopping</option>
                        <option value="acoustic">Acoustic Barriers</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Project Details
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-bold font-display uppercase tracking-wider transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    Submit Quote Request
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              )}

              {/* Audit Form */}
              {formType === "audit" && (
                <form className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display">
                    Schedule an Energy Audit
                  </h2>

                  <div className="bg-accent-orange/10 border border-accent-orange/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <span className="material-symbols-outlined text-accent-orange">
                        info
                      </span>
                      Our comprehensive energy audit identifies thermal leaks,
                      insulation gaps, and potential savings opportunities.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
                        placeholder="ABC Properties"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
                        placeholder="(303) 555-0123"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Building Square Footage *
                      </label>
                      <input
                        type="number"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
                        placeholder="50,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Current Utility Costs (Monthly)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
                        placeholder="$5,000 (optional)"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Building Address *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
                        placeholder="123 Industrial Way, Denver, CO 80202"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all resize-none"
                        placeholder="Any specific concerns or areas of interest..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full bg-accent-orange hover:bg-orange-700 text-white py-4 rounded-lg font-bold font-display uppercase tracking-wider transition-all shadow-lg shadow-accent-orange/30 flex items-center justify-center gap-2"
                  >
                    Schedule Audit
                    <span className="material-symbols-outlined">
                      calendar_today
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white mb-6 font-display text-lg">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      location_on
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Address
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        123 Industrial Way
                        <br />
                        Denver, CO 80202
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      call
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Phone
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        (303) 555-0123
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      mail
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Email
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        info@pciservices.com
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      schedule
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Business Hours
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Mon - Fri: 7:00 AM - 5:00 PM
                        <br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Area Card */}
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    map
                  </span>
                  Service Area
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  We proudly serve the Denver Metro area and surrounding
                  regions, including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    Denver
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    Aurora
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    Boulder
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    Lakewood
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    Thornton
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    Westminster
                  </li>
                </ul>
              </div>

              {/* Quick Response Card */}
              <div className="bg-slate-900 dark:bg-black rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-[60px] opacity-40 -mr-10 -mt-10"></div>
                <span className="material-symbols-outlined text-3xl text-primary mb-4 relative z-10">
                  bolt
                </span>
                <h3 className="font-bold text-lg mb-2 relative z-10">
                  Quick Response
                </h3>
                <p className="text-slate-300 text-sm relative z-10">
                  Our team responds to all inquiries within 24 hours. For urgent
                  projects, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
