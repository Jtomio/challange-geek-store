import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Separator } from './ui/separator'
import LinkSidebar from './LinkSidebar'
import Link from 'next/link'
import { ModeToggle } from './toggle-mode'

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="w-full">
            <div className="flex items-center justify-between p-4">
              <Link href="/">
                <p className="text-xl font-bold text-primary">Tomio Geek</p>
              </Link>
              <div className="">
                <ModeToggle />
              </div>
            </div>
          </SheetTitle>
          <SheetDescription className="flex flex-col items-center justify-center">
            <LinkSidebar />
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <Separator className="my-4 bg-primary" />
          <SheetFooter></SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
