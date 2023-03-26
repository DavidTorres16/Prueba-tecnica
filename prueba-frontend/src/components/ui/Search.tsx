import React from 'react'

export const Search = (Component: React.FunctionComponent, data:{}) => {
  return (
    <div>
        <Component {...data}/>
    </div>
  )
}
