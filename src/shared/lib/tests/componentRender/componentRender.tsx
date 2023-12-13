import { ReactNode } from "react"
import { render } from "@testing-library/react"
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { MemoryRouter } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18nForTests from "@/shared/config/i18n/i18nForTest"
import { ThemeProvider } from "@/app/providers/ThemeProvider"
import { Theme } from "@/shared/const/theme"
import "@/app/styles/index.scss"

interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}
export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props
    const { route = "/", initialState, asyncReducers, theme } = options

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme} >{children}</ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {}
) {
    return render(<TestProvider options={options}>{component}</TestProvider>)
}
