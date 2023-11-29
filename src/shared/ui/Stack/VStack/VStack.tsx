import { FC } from "react"
import Flex, { FlexProps } from "../Flex/Flex"

type VStack = Omit<FlexProps, "direction">;
const VStack: FC<VStack> = (props) => {
    const {align = 'start'} = props
    return <Flex align={align} direction={"column"} {...props} />
}

export default VStack
