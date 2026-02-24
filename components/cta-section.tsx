import { Phone, Mail, MapPin } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pronto para Conhecer Nossos Produtos?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Conecte-se conosco para descobrir como a qualidade da AGripina pode transformar sua empresa. Estamos prontos para estabelecer parcerias de sucesso.
            </p>

            <div className="space-y-4">
              <a href="tel:+2449232020" className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span className="font-medium">+244 923 20 20 20</span>
              </a>

              <a href="mailto:contato@agripina.ao" className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span className="font-medium">contato@agripina.ao</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">Interior de Huambo, Angola</span>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Anos de Experiência', value: '10+' },
              { label: 'Produtos Diferentes', value: '3+' },
              { label: 'Províncias Atendidas', value: '3' },
              { label: 'Satisfação Clientes', value: '98%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/80 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
