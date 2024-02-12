import Image from 'next/image'
import React from 'react'
import LogoImg from '../../public/tomio-geek.png'
import Link from 'next/link'
import { ModeToggle } from './toggle-mode'
import Sidebar from './Sidebar'
import { Separator } from './ui/separator'

export default function Navbar() {
  return (
    <div className="py-6">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <Link href="/">
            <Image
              src={LogoImg}
              alt="Imagem Logo Tomio Geek"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="ml-auto hidden items-center gap-4 md:flex">
          <Link href="/" className="font-semibold hover:text-primary">
            Home
          </Link>
          <Link href="/persona" className="font-semibold hover:text-primary">
            Persona
          </Link>
          <Link href="/draw" className="font-semibold hover:text-primary">
            Sorteio
          </Link>
          <ModeToggle />
        </div>
        <div className="flex md:hidden lg:hidden">
          <Sidebar />
        </div>
      </div>
      <div className="py-4">
        <Separator className="bg-primary" />
      </div>
    </div>
  )
}
