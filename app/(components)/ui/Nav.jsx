'use client'
import { useState } from "react"


const Nav = (params) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
//  console.log(name)
  return (
    <nav className={` ${!isModalVisible ? 'flex' : ''} fixed top-0 w-full items-center justify-between z-10 md:justify-evenly md:py-8 p-4 text-slate-100 bg-slate-900 `}>
      <hgroup className="flex justify-between items-center gap-2">
        <img className="mix-blend-multiply hidden md:block" width={70} height={70} src="https://s3-alpha-sig.figma.com/img/a9f8/9906/aae22266f3144f8f211afdd46c7b3bb2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dNz3sBKRm1RisekUZ3ABO~fwBkLN945PQWj9pAiUQgk1WPZLT00xYfBUwi-Rjx0obC-BXEgPFGznL3NlVG4ZynIaNPl94mpNGQdJOaOBQeTrzvMVc-S4-uhcisgx2akE55ZnYtyVnICFvovr~7ZABFptWThM0mcLMqQr3G-Xu7fN~QNbR-Jq7Sau4YcYiNfNjqQ0ag9p2siSH90vfMOlYitZAg3uZJaDshgOxR-S-C~uAJzkihk701kPF1bnd4J94gPEZXK3B4USpydoiaT-K-uuySXQXXsZHDB6DCGW5ny2HQd6CjWlFcpZAR3t5MHQN52tQaDaaL5I3E3168R0Ig__" alt="logo" />
        <h1 className="font-bold text-xl">{params.name}</h1>
        {isModalVisible && <svg onClick={() => (setIsModalVisible(false))} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9" />
          <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9" />
          <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9" />
        </svg>}
      </hgroup>
      <ul className="gap-4 hidden md:flex">
        <li className="hover:underline"><a href="#">Kreu</a></li>
        <li className="hover:underline"><a href="#rreth-meje">Rreth meje</a></li>
        <li className="hover:underline"><a href="#sherbimet">Shermbimet</a></li>
        <li className="hover:underline"><a href="#punet">Punet</a></li>
        <li className="hover:underline"><a href="#kontakt">Kontakt</a></li>
      </ul>
      {!isModalVisible && <svg className="block md:hidden" onClick={() => (setIsModalVisible(true))} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect y="5" width="24" height="2" fill="#D9D9D9" />
        <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
      </svg>}
      {isModalVisible && <ul>
        <li><a href="#">Kreu</a></li>
        <li><a href="#rreth-meje">Rreth meje</a></li>
        <li><a href="#sherbimet">Sherbimet</a></li>
        <li><a href="#punet">Punet</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>}
    </nav>
  )
}

export default Nav
