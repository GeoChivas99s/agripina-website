import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Ovos Premium',
    image: '/images/eggs-premium.jpg',
    description: 'Ovos frescos e naturais de alta qualidade nutricional',
    features: ['Sem pesticidas', 'Colesterol reduzido', 'Sabor excepcional'],
  },
  {
    id: 2,
    name: 'Frango Inteiro',
    image: '/images/chickens-modern.jpg',
    description: 'Frangos de corte selecionados e processados com cuidado',
    features: ['Carne tenra', 'Muito saudável', 'Rastreabilidade total'],
  },
  {
    id: 3,
    name: 'Derivados Avícolas',
    image: '/images/sustainability.jpg',
    description: 'Diversos produtos derivados de excelente qualidade',
    features: ['Produtos variados', 'Certificados', 'Disponíveis em estoque'],
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a linha completa de produtos avícolas de qualidade premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl overflow-hidden border border-border bg-white hover:shadow-xl transition-all duration-300 hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full px-4 py-2.5 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  Saiba Mais
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Produtos
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
