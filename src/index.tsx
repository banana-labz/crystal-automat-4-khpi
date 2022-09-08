import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "view"

import "@fontsource/ubuntu"
import "index.css"

const root = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(root).render(<App />)