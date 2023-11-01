import { lazy } from 'react'

const AboutAsyncPage = lazy(
    () =>
        new Promise((res) => {
            // @ts-ignore
            setTimeout(() => { res(import('./AboutPage')) }, 500)
        })
)
export default AboutAsyncPage
