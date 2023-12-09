import { Suspense } from "react"
import Loader from "@/shared/ui/Loader/Loader"
import { Decorator } from "@storybook/react"

export const SuspenseDecorator: Decorator = (Story) => (
    <Suspense fallback={<Loader />}>
        <Story />
    </Suspense>
)
