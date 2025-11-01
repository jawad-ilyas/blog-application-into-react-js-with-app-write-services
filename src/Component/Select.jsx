import { forwardRef, useId } from 'react'

const Select = ({ options = [], label, className = '', ...props }, ref) => {
    const id = useId();
    return (
        <div>
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select {...props} ref={ref} id={id} className={`${className}`}>
                {options.map((option) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}

export default forwardRef(Select)
