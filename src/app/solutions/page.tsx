import Link from "next/link";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section with Technical Background */}
      <section className="relative bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Technical Specification 07 21 00
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-display">
                Technical Insulation <br />
                Solutions
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                High-performance specifications for thermal envelope
                engineering, firestopping compliance, and acoustic control
                systems.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  description
                </span>
                Download Full Spec Sheet
              </button>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-blue-500/20"
              >
                Request Bid
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-12 flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
            <a
              className="pb-4 px-1 border-b-2 border-primary text-primary font-bold text-sm uppercase tracking-wide whitespace-nowrap"
              href="#"
            >
              Spray Foam Insulation
            </a>
            <a
              className="pb-4 px-1 ml-8 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-bold text-sm uppercase tracking-wide whitespace-nowrap transition-colors"
              href="#"
            >
              Batt Insulation
            </a>
            <a
              className="pb-4 px-1 ml-8 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-bold text-sm uppercase tracking-wide whitespace-nowrap transition-colors"
              href="#"
            >
              Firestopping Systems
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                thermostat
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              R-Value / Inch
            </p>
            <p className="mt-2 text-3xl font-mono font-bold text-slate-900 dark:text-white">
              R-6.8
            </p>
            <div className="mt-4 flex items-center text-xs text-green-600 font-medium bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded w-fit">
              <span className="material-symbols-outlined text-sm mr-1">
                trending_up
              </span>
              +15% vs Conventional
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">scale</span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Density
            </p>
            <p className="mt-2 text-3xl font-mono font-bold text-slate-900 dark:text-white">
              2.0 lb/ft³
            </p>
            <p className="text-xs text-slate-400 mt-1">Closed Cell Standard</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">air</span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Air Barrier
            </p>
            <p className="mt-2 text-3xl font-mono font-bold text-slate-900 dark:text-white">
              ASTM E2178
            </p>
            <p className="text-xs text-slate-400 mt-1">Certified Compliant</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                local_fire_department
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Flame Spread
            </p>
            <p className="mt-2 text-3xl font-mono font-bold text-slate-900 dark:text-white">
              &lt; 25
            </p>
            <div className="mt-4 flex items-center text-xs text-accent-orange font-medium bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded w-fit">
              <span className="material-symbols-outlined text-sm mr-1">
                warning
              </span>
              Class 1 Rated
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Specs & Tables */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section Header */}
            <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Closed Cell Spray Foam Specification
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Product: PCI-CC-200 | MasterFormat 07 21 19
              </p>
            </div>

            {/* Performance Table */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  Thermal Resistance (R-Value)
                </h3>
                <button className="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    download
                  </span>
                  Export CSV
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-900/50">
                    <tr>
                      <th className="px-6 py-3 font-medium" scope="col">
                        Thickness (Inches)
                      </th>
                      <th className="px-6 py-3 font-medium" scope="col">
                        R-Value (ft²·°F·h/Btu)
                      </th>
                      <th className="px-6 py-3 font-medium" scope="col">
                        U-Factor
                      </th>
                      <th className="px-6 py-3 font-medium" scope="col">
                        Yield / Set
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium text-slate-900 dark:text-white">
                        1.0&quot;
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        R-6.8
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        0.147
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        4,500 bd. ft.
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium text-slate-900 dark:text-white">
                        2.0&quot;
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        R-13.6
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        0.074
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        2,250 bd. ft.
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium text-slate-900 dark:text-white">
                        3.0&quot;
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        R-20.4
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        0.049
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        1,500 bd. ft.
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium text-slate-900 dark:text-white">
                        4.0&quot;
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        R-27.2
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        0.037
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                        1,125 bd. ft.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Visual Diagram Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Chart Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4">
                  Thermal Bridging Analysis
                </h3>
                <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-900/50 rounded-lg flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-600">
                  <div className="flex items-end gap-4 h-48 w-full px-6">
                    <div className="w-1/3 bg-slate-300 dark:bg-slate-600 rounded-t h-[40%] relative group cursor-pointer">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Batt (R-13)
                      </div>
                    </div>
                    <div className="w-1/3 bg-primary/60 rounded-t h-[75%] relative group cursor-pointer">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Open Cell (R-22)
                      </div>
                    </div>
                    <div className="w-1/3 bg-primary rounded-t h-[95%] relative group cursor-pointer">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Closed Cell (R-28)
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-slate-400 font-mono">
                    Effective R-Value Comparison (3.5&quot; Stud Depth)
                  </div>
                </div>
              </div>

              {/* Diagram Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4">
                  Wall Assembly Layers
                </h3>
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPRAAh2VeVHyRHpCVmzYTs2akG1r0M2lOhFmtQ4Zy1uX8CVJ_HWkUdeqALHnLxlgp6rHHC7EX0Y6c0DZqNko8_ChPF5uViAcTWd4NIs9NJNDOr-vWL6suyGYhkJm1qfguQ4ifQljR3IDIfxbiKfvBbaa__b_90v-tOzwlw9VnIl94CeQoy9Poc_dfXF7tRVqLhON4k9lbIoKK0yQPejTpajQvJGszDaetMkdpAl_f-TtC2_KCvLb6uC2EG-BVue1tsq8NBkvD9KjA"
                      alt="Wall assembly layers diagram"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                      <div className="text-white text-sm font-medium">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span>Substrate</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>Closed Cell Foam</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span>Thermal Barrier</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Specs */}
          <div className="space-y-6">
            {/* Codes & Compliance */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                Codes & Standards
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-700/50 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">
                    ASTM C1029
                  </span>
                  <span className="font-mono font-medium text-slate-900 dark:text-white">
                    Type II
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-700/50 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">
                    ASTM E84
                  </span>
                  <span className="font-mono font-medium text-slate-900 dark:text-white">
                    Class A
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-700/50 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">
                    ICC-ES Report
                  </span>
                  <span className="font-mono font-medium text-primary underline cursor-pointer">
                    ESR-1234
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm pb-1">
                  <span className="text-slate-500 dark:text-slate-400">
                    Greenguard
                  </span>
                  <span className="font-mono font-medium text-green-600">
                    Gold Certified
                  </span>
                </li>
              </ul>
            </div>

            {/* Application Temp Card */}
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  device_thermostat
                </span>
                Application Conditions
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Surface Temp
                  </p>
                  <p className="font-mono font-bold text-slate-800 dark:text-slate-200">
                    25°F - 120°F
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Ambient Temp
                  </p>
                  <p className="font-mono font-bold text-slate-800 dark:text-slate-200">
                    25°F - 120°F
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Max Pass Thickness
                  </p>
                  <p className="font-mono font-bold text-slate-800 dark:text-slate-200">
                    2.0 inches
                  </p>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-[60px] opacity-40 -mr-10 -mt-10"></div>
              <h3 className="font-bold text-lg mb-2 relative z-10">
                Engineering Support
              </h3>
              <p className="text-slate-300 text-sm mb-4 relative z-10">
                Need custom R-value calculations for a specific assembly?
              </p>
              <Link
                href="/contact"
                className="w-full py-2 bg-white text-slate-900 text-sm font-bold rounded hover:bg-slate-100 transition-colors relative z-10 block text-center"
              >
                Contact Engineering
              </Link>
            </div>
          </div>
        </div>

        {/* Firestopping Section */}
        <div className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Firestopping Systems
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Life safety compliance for penetrations and joints.
              </p>
            </div>
            <a
              className="text-primary font-medium hover:text-primary-dark flex items-center gap-1"
              href="#"
            >
              View All Systems
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* System Card 1 */}
            <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-mono rounded">
                  System No. W-L-1054
                </span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                  open_in_new
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                Metal Pipe Penetration
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                Up to 2 hr F Rating. For use with steel, iron, or copper pipes
                through gypsum walls.
              </p>
              <div className="flex gap-2">
                <span className="text-xs border border-slate-200 dark:border-slate-600 rounded px-1.5 py-0.5 text-slate-500">
                  2 Hr F-Rating
                </span>
                <span className="text-xs border border-slate-200 dark:border-slate-600 rounded px-1.5 py-0.5 text-slate-500">
                  T-Rating Available
                </span>
              </div>
            </div>

            {/* System Card 2 */}
            <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-mono rounded">
                  System No. C-AJ-2001
                </span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                  open_in_new
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                PVC Pipe Concrete Floor
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                3 Hr F Rating. Standard floor penetration detail for plastic
                pipes.
              </p>
              <div className="flex gap-2">
                <span className="text-xs border border-slate-200 dark:border-slate-600 rounded px-1.5 py-0.5 text-slate-500">
                  3 Hr F-Rating
                </span>
                <span className="text-xs border border-slate-200 dark:border-slate-600 rounded px-1.5 py-0.5 text-slate-500">
                  Intumescent
                </span>
              </div>
            </div>

            {/* System Card 3 */}
            <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-mono rounded">
                  System No. HW-D-0001
                </span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                  open_in_new
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                Top of Wall Joint
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                Dynamic head-of-wall joint system for concrete over metal deck.
              </p>
              <div className="flex gap-2">
                <span className="text-xs border border-slate-200 dark:border-slate-600 rounded px-1.5 py-0.5 text-slate-500">
                  Joint System
                </span>
                <span className="text-xs border border-slate-200 dark:border-slate-600 rounded px-1.5 py-0.5 text-slate-500">
                  Movement +/- 25%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">
              contract_edit
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-display">
            Ready to Mobilize?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Get a comprehensive sub-contractor bid for your commercial or
            industrial project. Our estimating team provides detailed takeoffs
            within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-xl shadow-primary/30 hover:bg-primary-dark hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Request Sub-Contractor Bid
              <span className="material-symbols-outlined">send</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              Schedule Site Visit
              <span className="material-symbols-outlined">calendar_today</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
