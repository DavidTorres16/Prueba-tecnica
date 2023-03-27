import React, { FormEventHandler } from 'react'

type selectorInfo ={
    data:string[],
    title:string,
    onAction: FormEventHandler
}

export const FilterSelector = ({data, title, onAction = () => {}}:selectorInfo) => {
  return (
    <div>
        <select onChange={onAction} className="selector">
            <option value="">{title}</option>
            {data.map((option)=>(
                <option value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}
