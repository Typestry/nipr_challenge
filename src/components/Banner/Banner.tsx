import { FC } from "react"

interface BannerProps {
  imageUrl: string
  linkText: string
  linkUrl: string
  buttonText: string
  onCTAClick: () => void
}

export const Banner: FC<BannerProps> = ({
  imageUrl,
  linkText,
  linkUrl,
  buttonText,
  onCTAClick,
}) => {
  return (
    <div
      style={{ background: `url(${imageUrl})` }}
      className="flex flex-col h-full w-full bg-center bg- bg-no-repeat bg-fixed bg-cover"
    >
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-0">
          <a
            className="bg-[rgba(0,0,0,0.5)] p-3 w-full text-white text-2xl"
            href={linkUrl}
          >
            {linkText}
          </a>
        </div>
        <div className="flex justify-center items-center h-full flex-1">
          <button
            onClick={onCTAClick}
            className="border-2 bg-[rgba(0,0,0,0.5)] m-auto border-white text-white text-4xl py-4 px-8"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
