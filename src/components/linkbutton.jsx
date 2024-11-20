import React from 'react'
import { Link } from 'react-router-dom'

export default  function Linkbutton ({ to, text, isNative = false}) {

    const classNames =
    'inline-block border-[1px] border-grayish-blue py-4 pl-8 pr-9 text-xs leading-4 tracking-[2px] uppercase hover:bg-cyan-500 hover:text-white transition-colors'

  return isNative ? (
    <a href={to} target="_blank" className={classNames}>
      {text}
    </a>
  ) : (
    <Link to={{pathname:to}}   className={classNames}>
      {text}
    </Link>
  )
}

