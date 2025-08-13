'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function NastedLogin() {

  const router = useRouter()
  const gotoLogin = (loginPath) => {

    router.push(loginPath)
  }


  return (
    <>
    <div>NastedLogin</div>
    <button className='bg-sky-200 p-2 rounded-md' onClick={()=> gotoLogin("/login")}>Go to login</button>
    </>

sfwcswdd
  )
}

export default NastedLogin