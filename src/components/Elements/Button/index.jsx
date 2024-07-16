const Button = (props) => {

    const {children, variant = 'btn-primary', onClick} = props
    const className = `btn ${variant}`
    return (
        <div>
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>  
        </div>
    )

}

export default Button