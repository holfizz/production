import { I18nextProvider } from "react-i18next"
import i18nForTest from '../../i18n/i18nForTest'
import { Suspense } from "react"
import { Decorator } from "@storybook/react"

export const TranslationDecorator: Decorator = (StoryComponent) => (
    <I18nextProvider i18n={i18nForTest}>
        <Suspense fallback={""}>
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
)
