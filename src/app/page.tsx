import Card from '@/components/Card'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex grow mx-auto max-w-4xl px-4 py-12 lg:py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12 lg:gap-20">
          <Header />
          <main className="divide-y divide-gray-200 sm:grid sm:grid-cols-2 sm:divide-y-0 sm:divide-x shadow overflow-hidden">
            <Card
              href="/reports"
              title="Usability Reports"
              description="Data-driven insights to improve usability across Filecoin network sites."
              svgPath="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              externalSvgPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              isEvenIndex={true}
            />
            <Card
              href="https://www.notion.so/filecoin/37556a0a057541f4978b7653b84c4764?v=e9d8e49f3bba4f11a0f254c6e541ae65"
              title="UXIT Project Board"
              description="Follow along with our project progress and propose new initiatives for UXIT."
              svgPath="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              externalSvgPath="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </main>
        </div>
      </div>
    </div>
  )
}
