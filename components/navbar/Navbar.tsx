import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
// import { ActiveLink } from "../active-link/ActiveLink"


// const navItems = [
//   { path: '/about', text: 'About'},
//   { path: '/pricing', text: 'Pricing'},
//   { path: '/contact', text: 'Contact'},
// ]

export const Navbar = () => {

  return (

    <nav className="flex bg-[#4d3c9c]  p-2 m-2 rounded">

      <Link href={ '/'} className="flex items-center text-[#fff]">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
        
      <div className="flex flex-1"></div>

      {/* {
        navItems.map( navItem => (
          < ActiveLink key={navItem.path} {...navItem}/>
          // <Link key={ navItem.path} className="mr-2 text-[#fed10b]" href={ navItem.path }>{ navItem.text}</Link>
        ))
      } */}
      <Link className="mr-2 text-[#ffff]" href="/about">About</Link>
      <Link className="mr-2 text-[#ffff]" href="/pricing">Pricing</Link>
      <Link className="mr-2 text-[#ffff]" href="/contact">Contact</Link>

    </nav>
  )
}
