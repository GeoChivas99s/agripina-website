import Header from '@/components/header'
import HeroSlider from '@/components/hero-slider'
import Highlights from '@/components/highlights'
import FeaturedProducts from '@/components/featured-products'
import Certifications from '@/components/certifications'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <Highlights />
      <FeaturedProducts />
      <Certifications />
      <CTASection />
      <Footer />
    </main>
  )
}
