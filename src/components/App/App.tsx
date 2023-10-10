import { FC } from "react"
import { Banner } from "../Banner"
import { useGetBannerData } from "src/hooks/useGetBannerData"

export const App: FC = () => {
  const { data, isLoading, isError } = useGetBannerData()

  if (isLoading || !data) return "Loading..."

  if (isError) return "An error has occured..."

  return (
    <div className="h-full">
      <Banner
        buttonText={data.ctaText}
        imageUrl={data.imageUrl}
        linkText={data.linkText}
        linkUrl={data.linkUrl}
        onCTAClick={() => null}
      />
    </div>
  )
}
