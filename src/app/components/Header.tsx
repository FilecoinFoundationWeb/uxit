const Header = () => {
  return (
    <header className="flex gap-5 flex-col items-center text-center max-w-2xl">
      <span className="text-indigo-800 font-semibold dark:text-indigo-500">
        UXIT
      </span>
      <h1 className="text-slate-900 dark:text-white text-4xl font-bold tracking-tight sm:text-6xl">
        UXIT User-Focused Solutions for the
        <br />
        <span className="text-indigo-700 dark:text-indigo-600">
          Future of Filecoin
        </span>
      </h1>
      <p className="text-gray-600 text-lg leading-8 dark:text-gray-300">
        The FF UX Improvement Team is dedicated to finding user-focused
        solutions for the future of Filecoin.
      </p>
    </header>
  )
}

export default Header
