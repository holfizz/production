import { type FC, useState } from "react"
import Input from "shared/ui/Input/Input"

const MainPage: FC = () => {
    const [value, setValue] = useState<string>("")

    const onChange = (value: string) => {
        setValue(value)
    }
    return (
        <div>
            <Input onChange={onChange} value={value} />
        </div>
    )
}

export default MainPage
