
const Input = (props) => {
    const {value, onChange, placeholder, type, margin} = props
    const margins = `form-control ${margin}`

    return(
        <input
          type={type}
          className={margins}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    )
}

export default Input