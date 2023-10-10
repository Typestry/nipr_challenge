type BannerData = {
  imageUrl: string
  linkUrl: string
  linkText: string
  ctaText: string
}

interface API {
  getBannerData: () => Promise<BannerData>
}

const getBannerData: API["getBannerData"] = async () => {
  return Promise.resolve({
    imageUrl:
      "https://images.unsplash.com/photo-1696593488550-d740f3396611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    linkUrl: "/gb/en/viewallwomens",
    linkText: "New, React JS Sneakers made for comfort.",
    ctaText: "Shop Now",
  })
}

export const APIService: API = {
  getBannerData,
}
