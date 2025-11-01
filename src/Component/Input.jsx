import React, { forwardRef, useRef, useId } from 'react'

const Input = forwardRef(({ label, name, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="block text-sm text-rose-700 mb-1">{label}</label>

            <input
                id={id}
                type={type}
                name={name}
                ref={ref}
                {...props}
                className={`${className}`}
            />
        </div>
    )
})

export default Input
