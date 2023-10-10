import { useQuery } from "react-query"
import { APIService } from "src/api"
import { QueryKeys } from "src/constants/queryKeys"

export const useGetBannerData = () => {
  return useQuery(QueryKeys.bannerData(), APIService.getBannerData)
}
