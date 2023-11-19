import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./AddCommentForm.module.scss"
import {useTranslation} from "react-i18next"
import Input, {InputTheme} from "shared/ui/Input/Input"
import Button, {ButtonSize, ButtonTheme} from "shared/ui/Button/Button"
import {useSelector} from "react-redux"
import {getAddCommentFormError, getAddCommentFormText,} from "../../model/selectors/addCommentFormSelectors"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {addCommentFormAction, addCommentFormReducer,} from "../../model/slices/addCommentFormSchema"
import DynamicModuleLoader, {ReducersList,} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = memo(
    ({ className, onSendComment }) => {
        const { t } = useTranslation()
        const text = useSelector(getAddCommentFormText)
        const error = useSelector(getAddCommentFormError)
        const dispatch = useAppDispatch()

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormAction.setText(value))
            },
            [dispatch]
        )

        const onSendHandler = useCallback(() => {
            onSendComment(text)
            onCommentTextChange("")
        }, [onCommentTextChange, onSendComment, text])

        return (
            <DynamicModuleLoader reducer={reducers}>
                <div className={classNames(cls.AddCommentForm, {}, [className])}>
                    <Input
                        className={cls.input}
                        theme={InputTheme.CLEAR}
                        onChange={onCommentTextChange}
                        value={text}
                        placeholder={t("enter comment text")}
                    />
                    <Button
                        size={ButtonSize.XL}
                        onClick={onSendHandler}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t("Send")}
                    </Button>
                </div>
            </DynamicModuleLoader>
        )
    }
)

export default AddCommentForm
