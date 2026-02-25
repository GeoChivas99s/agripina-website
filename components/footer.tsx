import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-40 h-10  flex items-center justify-center">

                <Image
                  src="../images/logo.png"
                  alt="Tecnologia AGripina"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Qualidade que nasce da confiança. Liderança em produção avícola sustentável.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              {[
                { label: 'Inicial', href: '/' },
                { label: 'Sobre Nós', href: '/about' },
                { label: 'Produtos', href: '/products' },
                { label: 'Contato', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Produtos</h3>
            <ul className="space-y-2">
              {[
                'Ovos',
                'Frango Inteiro',
                'Derivados Avícolas',
                'Produtos Especiais',
              ].map((product) => (
                <li key={product}>
                  <a href="/products" className="text-white/70 hover:text-primary transition-colors text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70">
                <p className="font-medium text-white mb-1">Telefone</p>
                <a href="tel:+244923202020" className="hover:text-primary transition-colors">
                  +244 923 20 20 20
                </a>
              </li>
              <li className="text-white/70">
                <p className="font-medium text-white mb-1">Email</p>
                <a href="mailto:contato@agripina.ao" className="hover:text-primary transition-colors">
                  contato@agripina.ao
                </a>
              </li>
              <li className="text-white/70">
                <p className="font-medium text-white mb-1">Localização</p>
                <p>Huambo, Angola</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-40 flex items-center justify-center">
          <Image
            src="/images/SeloSFA.png"
            alt="Tecnologia AGripina"
            width={5}
            height={5}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Divider */}
        <div className="border-top border-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} AGripina. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
