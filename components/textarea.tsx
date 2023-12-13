import React from 'react'

type TextareaProps = {
    placeholder: string
}

function Textarea(props: TextareaProps) {
    const { placeholder } = props

    return (
        <textarea className='bg-white-40% w-full mb-2 py-5 px-6 rounded-2xl textarea textarea-bordered textarea-md resize-none' placeholder={placeholder}>
        </textarea>

    )
}

export default Textarea