import Link from 'next/link'
import React from 'react'

function DYNEMICROUTS() {
  return (
    <ul className="login-menu flex ml-5 p-2 gap-3">
        <li>
            <h4 className="">Login Navbar</h4>
        </li>
        <li>
            <Link href="/dynemicrouts/Lokesh">Lokesh</Link>
        </li>
        <li>
            <Link href="/dynemicrouts/Rahul">Rahul</Link>
        </li>
        <li>
            <Link href="/dynemicrouts/Umesh">Umesh</Link>
        </li>
      </ul>
  )
}

export default DYNEMICROUTS