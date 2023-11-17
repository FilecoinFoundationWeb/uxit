interface CardProps {
  href: string
  title: string
  description: string
  svgPath: string
  externalSvgPath: string
  isEvenIndex?: boolean
}

import Link from "next/link"

const Card = ({
  href,
  title,
  description,
  svgPath,
  externalSvgPath,
  isEvenIndex = false,
}: CardProps) => {
  const isExternalLink =
    href.startsWith("http://") || href.startsWith("https://")

  const linkStyles = "outline-none"

  const LinkContent = () => {
    return (
      <>
        <span className="absolute inset-0" aria-hidden="true" />
        {title}
      </>
    )
  }

  return (
    <div
      className={`${
        isEvenIndex
          ? "sm:rounded-tr-none sm:rounded-br-none"
          : "sm:rounded-tl-none sm:rounded-bl-none"
      } relative rounded group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500`}
    >
      <div>
        <span
          aria-hidden="true"
          className="grid place-content-center h-16 w-16 rounded bg-indigo-600 text-white"
        >
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
        </span>
        <div className="mt-8">
          <h2 className="font-medium leading-6 text-gray-700">
            {isExternalLink ? (
              <a
                className={linkStyles}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkContent />
              </a>
            ) : (
              <Link className={linkStyles} href={href}>
                <LinkContent />
              </Link>
            )}
          </h2>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <span
        className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
        aria-hidden="true"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-gray-800 w-6 h-6 group-hover:text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={externalSvgPath}
          />
        </svg>
      </span>
    </div>
  )
}

export default Card
