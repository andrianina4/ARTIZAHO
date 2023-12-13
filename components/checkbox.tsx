import React, { ReactNode } from 'react'

type CheckboxProps = {
    content : string | ReactNode
}

function Checkbox(props: CheckboxProps) {
    const {content} = props

    return (
        <div className="form-control">
            <label className="cursor-pointer label justify-start gap-x-3">
                <input type="checkbox"  className="checkbox checkbox-sm border-bronze checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]" />
                <span className="label-text">{content}</span>
            </label>
        </div>
    )
}

export default Checkbox