import ReactDOM from "react-dom/client"
import React from "react"
import { App } from "./components/App"
import "./styles/global.css"
import { Providers } from "./providers"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
