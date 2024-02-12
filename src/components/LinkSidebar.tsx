'use client'

import React from 'react'
import { SheetClose } from './ui/sheet'
import Link from 'next/link'

interface ILinkSidebar {
  id: string
  link: string
}

const linkInitial: ILinkSidebar[] = [
  {
    id: 'Home',
    link: '/',
  },
  {
    id: 'Persona',
    link: '/persona',
  },
  {
    id: 'Sorteio',
    link: '/draw',
  },
]

export default function LinkSidebar() {
  return (
    <SheetClose>
      {linkInitial.map((item) => (
        <div
          key={item.id}
          className="mt-6 flex flex-col items-center justify-center gap-4 text-xl"
        >
          <Link
            href={item.link}
            className="items-center justify-center hover:text-primary"
          >
            {item.id}
          </Link>
        </div>
      ))}
    </SheetClose>
  )
}
