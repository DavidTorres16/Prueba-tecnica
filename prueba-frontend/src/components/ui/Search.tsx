import React from 'react'

export const Search = (Component: React.FunctionComponent, data:{}, style:string) => {
  return (
    <div>
        <Component {...data}/>
    </div>
  )
}
