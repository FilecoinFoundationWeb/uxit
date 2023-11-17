const Header = () => {
  return (
    <header className="flex gap-5 flex-col items-center text-center">
      <span className="font-semibold text-indigo-600">UXIT</span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        UXIT User-Focused Solutions for the
        <br />
        <span className="text-indigo-600">Future of Filecoin</span>
      </h1>
      <p className="text-lg leading-8 text-gray-200">
        The FF UX Improvement Team is dedicated to finding user-focused
        solutions for the future of Filecoin.
      </p>
    </header>
  );
}

export default Header;
