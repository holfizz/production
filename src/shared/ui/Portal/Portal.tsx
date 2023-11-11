import { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  element?: HTMLElement;
}

const Portal: FC<PropsWithChildren<PortalProps>>
    = ({children, element = document.body}) => {
        return createPortal(children,element)
    }

export default Portal
