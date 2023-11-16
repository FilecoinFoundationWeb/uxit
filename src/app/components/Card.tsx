
interface CardProps {
  href: string;
  title: string;
  description: string;
  svgPath: string;
  externalSvgPath: string;
  isEvenIndex?: boolean;
}

import Link from "next/link";

const Card = ({
  href,
  title,
  description,
  svgPath,
  externalSvgPath,
  isEvenIndex = false,
}: CardProps) => {
  const isExternalLink =
    href.startsWith("http://") || href.startsWith("https://");

  const cardContent = (
    <div className={`bg-white gap-8 rounded ${isEvenIndex ? 'sm:rounded-l-none' : 'sm:rounded-r-none'} flex flex-col justify-between p-6 group`}>
      <div className="flex justify-between">
        <div className="grid place-content-center h-16 w-16 rounded bg-indigo-600 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
          className="text-gray-800 w-6 h-6 group-hover:text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={externalSvgPath}
          />
        </svg>
      </div>
      <div>
        <div className="font-medium text-lg pb-2 text-gray-700">{title}</div>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      {isExternalLink ? (
        <a
          className="flex"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      ) : (
        <Link className="flex" href={href}>
          {cardContent}
        </Link>
      )}
    </>
  );
};

export default Card;
