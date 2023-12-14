import React from 'react'

type TextareaProps = {
    placeholder: string
    className? : string
}

function Textarea(props: TextareaProps) {
    const { placeholder, className } = props

    return (
        <textarea className={`bg-white-40% w-full mb-2 py-5 px-6 rounded-2xl textarea textarea-bordered textarea-md resize-none ${className}`} placeholder={placeholder}>
        </textarea>

    )
}

export default Textarea