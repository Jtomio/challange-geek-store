import React from 'react'
import { Separator } from './ui/separator'
import { FaFigma, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiVercel } from 'react-icons/si'

export default function Footer() {
  return (
    <div className="mx-auto space-y-8 overflow-hidden py-12">
      <Separator className="bg-primary" />
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <a
            href="/"
            className="text-base leading-6 text-gray-500 hover:text-primary"
          >
            Home
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="/persona"
            className="text-base leading-6 text-gray-500 hover:text-primary"
          >
            Persona
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="/draw"
            className="text-base leading-6 text-gray-500 hover:text-primary"
          >
            Sorteio
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="/faq"
            className="text-base leading-6 text-gray-500 hover:text-primary"
          >
            Faq
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="/wireframe"
            className="text-base leading-6 text-gray-500 hover:text-primary"
          >
            Wireframe
          </a>
        </div>
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://vercel.com/dashboard"
          className="text-gray-400 hover:cursor-pointer hover:text-primary"
          target="_blank"
        >
          <span className="sr-only">Figma</span>
          <FaFigma size={24} />
        </a>
        <a
          href="https://vercel.com/dashboard"
          className="text-gray-400 hover:text-primary"
          target="_blank"
        >
          <span className="sr-only">Vercel</span>
          <SiVercel size={24} />
        </a>
        <a
          href="https://github.com/Jtomio/challange-geek-store"
          className="text-gray-400 hover:text-primary"
          target="_blank"
        >
          <span className="sr-only">GitHub</span>
          <FaGithub size={25} />
        </a>
        <a
          href="https://tailwindcss.com/docs/installation"
          className="text-gray-400 hover:text-primary"
          target="_blank"
        >
          <span className="sr-only">Tailwindcss</span>
          <SiTailwindcss size={24} />
        </a>
      </div>
      <p className="mt-8 text-center text-base leading-6 text-gray-400">
        © 2024 Tomio Geek, Inc. All rights reserved.
      </p>
    </div>
  )
}
