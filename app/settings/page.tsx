import React from 'react'
import Link from 'next/link'

export default function PageSettings() {
  return (
    <div className="flex flex-col justify-center items-center h-2/5">
     <h1>PageSettings</h1>


     <ul className='mt-10 list-disc'>
      <li><Link href={"/setting/account"}>account</Link></li>
      <li><Link href={"/setting/themes"}>themes</Link></li>
      <li><Link href={"/setting/connection"}>connection</Link></li>
      <li><Link href={"/setting/signout"}>signout</Link></li>
     </ul>
   </div>
  )
}
