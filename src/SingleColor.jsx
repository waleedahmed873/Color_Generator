import React, { useEffect, useState } from 'react'
import { IoMdCopy } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
const SingleColor = ({rgb,code,i}) => {
  const [copied,setCopied] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setCopied(false)
    },3000)
  },[copied])
  return (
    <>
    <div className="col-lg-3">
        <div style={{
            background : `rgb(${rgb})`
        }} className="p-1 my-1 card ">
          {copied ? (<FaCheck size={30} className={`${i > 10 && 'text-white '}`} />):(
            <IoMdCopy onClick={()=>{
              navigator.clipboard.writeText(`#${code}`)
              setCopied(true)
            }} className={`${i > 10 && 'text-white '}`} size={30} cursor='pointer' />
          )}
            <h4 className={`py-5 text-center ${i > 10 && 'text-white'}`}>#{code}</h4>
        </div>
    </div>
    </>
  )
}

export default SingleColor