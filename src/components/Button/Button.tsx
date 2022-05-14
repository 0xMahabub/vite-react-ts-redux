interface btnProps {
    className?: string
    label?: string
    content?: string
    onClick?: () => void
}


export const Button = ({className, label, ...props}: btnProps) => {
    return (
        <button className={className ? className : ''} {...props} aria-label={label}>
            { props.content ? props.content : label }
        </button>
    )
}