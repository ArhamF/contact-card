'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function BusinessCard() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative group">
        {/* Card */}
        <div className="relative group overflow-hidden rounded-xl p-8 backdrop-blur-sm border border-white/10
          bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10
          hover:from-purple-500/20 hover:via-blue-500/20 hover:to-pink-500/20
          transition-all duration-500">
          
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 
              bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20
              animate-gradient-shift opacity-30" />
            {[...Array(3)].map((_, i) => (
              <div
                key={`bg-element-${i}`}
                className={`
                  absolute w-96 h-96 rounded-full
                  ${i === 0 ? 'bg-purple-600/10 top-1/4 left-1/4 animate-float-slow' :
                    i === 1 ? 'bg-blue-600/10 top-1/2 right-1/4 animate-float-medium' :
                    'bg-pink-600/10 bottom-1/4 left-1/2 animate-float-fast'}
                  blur-3xl
                `}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative space-y-6">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 
                bg-clip-text text-transparent bg-animate-gradient">
                Arham Farooqi
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg text-center text-purple-950/55 dark:text-gray-100 max-w-lg mx-auto leading-relaxed font-medium">
              Crafting digital experiences through{' '}
              <span className="text-blue-400 border-b border-blue-400/30 hover:border-blue-400 transition-colors">
                elegant code
              </span>,{' '}
              <span className="text-purple-400 border-b border-purple-400/30 hover:border-purple-400 transition-colors">
                thoughtful design
              </span>, and{' '}
              <span className="text-pink-400 border-b border-pink-400/30 hover:border-pink-400 transition-colors">
                creative innovation
              </span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {[
                { Icon: Github, href: 'https://github.com/ArhamF', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/arham-farooqi-983860243/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:arhamfarooqi100@gmail.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 active:scale-95
                    bg-gray-100/80 border-gray-300/50 dark:bg-gray-800/80 dark:border-gray-600/50
                    group-hover:bg-purple-600/55 group-hover:border-purple-700/50
                    transition-colors duration-300"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
      </div>
    </div>
  )
}

