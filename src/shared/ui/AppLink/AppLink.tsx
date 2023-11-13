import {type FC, memo, type PropsWithChildren} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import {Link, type LinkProps} from 'react-router-dom'

interface AppLinkProps extends LinkProps {
  className?: string
}

const AppLink: FC<PropsWithChildren<AppLinkProps>> = memo(({
    className,
    children,
    to,
    ...otherProps
}) => {
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})

export default AppLink
