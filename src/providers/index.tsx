import { FC, PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const client = new QueryClient()

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
