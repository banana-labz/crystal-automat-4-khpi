import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { store } from "store"
import { App } from "view"
import { theme } from "view/themes"

import "@fontsource/ubuntu"
import "view/themes/base.css"

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
)