import { Metadata } from 'next'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { reports } from '@/data/reports'

export const metadata: Metadata = {
  title: 'Filecoin Ecosystem Usability Reports',
  description:
    'Explore our featured Lighthouse reports on the Filecoin ecosystem, offering in-depth analysis of site performance, accessibility, SEO, and adherence to best practices.',
}

export default function Reports() {
  return (
    <>
      <header className="flex gap-5 flex-col max-w-1xl">
        <h1 className=" text-slate-900 dark:text-white text-2xl font-semibold tracking-tight sm:text-4xl">
          Filecoin Ecosystem Usability Reports
        </h1>
        <p className="text-gray-600 text-lg leading-8 dark:text-gray-300">
          Featured Lighthouse reports for Filecoin ecosystem sites, providing
          comprehensive insights into performance, accessibility, SEO, and best
          practices.
        </p>
        <p className="text-gray-600 text-lg leading-8 dark:text-gray-300">
          Reach out to{' '}
          <a
            className="text-indigo-700 hover:underline dark:text-indigo-300"
            href="mailto:UXIT@fil.org"
          >
            UXIT@fil.org
          </a>{' '}
          with questions or reporting requests.
        </p>
      </header>
      <main className="self-start min-w-full xs:min-w-[60%] sm:min-w-[50%]">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-white/5"
        >
          {reports.map((report) => (
            <li
              key={report.folder}
              className="group relative flex items-center space-x-4 py-4"
            >
              <div className="min-w-0 flex-auto">
                <div className="flex items-center gap-x-3">
                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                    <a href={report.url}>
                      <span></span>
                      {report.name}
                      <span className="absolute inset-0" />
                    </a>
                  </h2>
                </div>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
