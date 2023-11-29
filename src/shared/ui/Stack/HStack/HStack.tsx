import { FC } from "react"
import Flex, { FlexProps } from "../Flex/Flex"

type HStack = Omit<FlexProps, "direction">;
const HStack: FC<HStack> = (props) => {
    return <Flex direction={"row"} {...props} />
}

export default HStack
