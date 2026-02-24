import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function ProductsPage() {
  const products = [
    {
      name: 'Ovos',
      category: 'Ovos',
      image: '/images/card-egg.png',
      description: 'Ovos de qualidade excepcional, produzidos em conformidade com os mais altos padrões de bem-estar animal e segurança alimentar.',
      features: [
        'Sem resíduos de pesticidas',
        'Colesterol reduzido',
        'Sabor excepcional e natural',
        'Gema de coloração intenso',
        'Disponível em múltiplas apresentações',
        'Certificado by ABNT',
      ],
    },
    {
      name: 'Frango',
      category: 'Frangos',
      image: '/images/chickens-modern.jpg',
      description: 'Frangos de corte selecionados, processados com máximo cuidado e rastreabilidade desde a granja até o cliente.',
      features: [
        'Carne tenra e suculenta',
        'Processamento higiênico certificado',
        'Rastreabilidade 100% garantida',
        'Congelamento flash para preservar qualidade',
        'Embalagem a vácuo premium',
        'Diferentes tamanhos disponíveis',
      ],
    },
    {
      name: 'Derivados Avícolas',
      category: 'Especiais',
      image: '/images/sustainability.jpg',
      description: 'Linha completa de derivados cuidadosamente processados para máxima qualidade e conservação.',
      features: [
        'Ovos pasteurizados',
        'Peças de frango selecionadas',
        'Caldo de frango natural',
        'Temperos e marinadas artesanais',
        'Diferentes apresentações',
        'Opções para diferentes aplicações',
      ],
    },
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Produtos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a linha completa de produtos avícolas premium da AGripina
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-2 md:auto-cols-fr' : ''
                }`}
              >
                {/* Image */}
                <div className={`rounded-xl overflow-hidden border border-border ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4">Características principais:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Padrões de Qualidade</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Segurança Alimentar',
                description: 'Todos os produtos passam por rigorosos testes de segurança e conformidade com regulamentações Angolanas e internacionais.',
              },
              {
                title: 'Rastreabilidade',
                description: 'Sistema completo de rastreamento que permite identificar a origem e o histórico de cada lote de produto.',
              },
              {
                title: 'Bem-estar Animal',
                description: 'Práticas humanitárias garantem o bem-estar das aves em todas as etapas da produção.',
              },
            ].map((standard, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-3">{standard.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
