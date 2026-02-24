'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Inicial', href: '/' },
    { label: 'Sobre Nós', href: '/about' },
    { label: 'Produtos', href: '/products' },
    { label: 'Sustentabilidade', href: '/sustainability' },
    { label: 'Contato', href: '/contact' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-40 h-20 flex items-center justify-center  transition-shadow duration-300">
              <img className="text-white font-bold text-lg" src='/images/logo.png'/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://api.whatsapp.com/send/?phone=244923609024&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Zeytra+Tech.&type=phone_number&app_absent=0"
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
            >
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
