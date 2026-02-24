'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/hero-main.jpg',
    title: 'Qualidade que Nasce da Confiança',
    subtitle: 'Produção moderna de ovos e frangos com sustentabilidade',
  },
  {
    image: '/images/eggs-premium.jpg',
    title: 'Ovos Premium de Excelência',
    subtitle: 'Frescos, naturais e produzidos com cuidado',
  },
  {
    image: '/images/chickens-modern.jpg',
    title: 'Frangos de Primeira Qualidade',
    subtitle: 'Tecnologia avançada e bem-estar animal',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoplay(false)
  }

  return (
    <div className="relative w-full h-screen pt-20 overflow-hidden bg-foreground">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/40">
              <p className="text-accent text-sm font-semibold">AGripina - Liderança em Avicultura</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              {slides[current].title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed">
              {slides[current].subtitle}
            </p>

            <div className="flex gap-4">
              <Link href="/products" className="px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
                Conheça Nossos Produtos
              </Link>
              <Link href="/about" className="px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 inline-block">
                Nossa História
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setIsAutoplay(false)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-accent w-8' : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
