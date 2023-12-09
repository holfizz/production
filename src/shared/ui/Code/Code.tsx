import {FC, memo, useCallback, useState} from "react"
import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./Code.module.scss"
import Button, {ButtonTheme} from "@/shared/ui/Button/Button"
import {Copy} from "lucide-react"

interface CodeProps {
  className?: string;
  text: string;
}

const Code: FC<CodeProps> = memo(({ className, text }) => {
    const [hasCopied, setHasCopied] = useState(false)
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setHasCopied(true)
            })
        setTimeout(() => {
            setHasCopied(false)
        }, 3000)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                theme={ButtonTheme.CLEAR}
                className={classNames(cls.copyBtn, {[cls.active]:hasCopied}, [])}
            >
                <Copy />
            </Button>
            <code>{text}</code>
        </pre>
    )
})

export default Code
