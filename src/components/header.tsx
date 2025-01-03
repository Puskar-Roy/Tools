'use client'

import Link from 'next/link'
import { SiGithub } from '@icons-pack/react-simple-icons'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
  return (
    <header
      className='fixed inset-x-0 top-0 z-40 bg-background/20 backdrop-blur-[10px] shadow-sm saturate-100'
      style={{
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className='mx-auto max-w-6xl flex items-center justify-between px-4 md:px-8 h-14'>
        <Link href='/' aria-label='Home' title='Home'>
          <Logo />
        </Link>

        <div className='flex items-center gap-3'>
          <ModeToggle />

          <Tooltip>
            <TooltipTrigger>
              <Link
                href='https://github.com/Puskar-Roy'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='GitHub'
              >
                <SiGithub />
              </Link>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
              <p>@Puskar-Roy</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
