import { BrowserRouter } from "react-router-dom"
import App from "./app/App"
import { ThemeProvider } from "app/providers/ThemeProvider"
import "app/styles/index.scss"
import "./shared/config/i18n/i18n"
import { ErrorBoundary } from "app/providers/ErrorBoundary"
import { StoreProvider } from "app/providers/StoreProvider"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
if (!container) {
    throw new Error(
        "The root container was not found. Failed to mount react app container"
    )
}
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
