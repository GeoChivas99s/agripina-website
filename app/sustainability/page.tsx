import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Wind, Droplet, Zap, Leaf } from 'lucide-react'

export default function SustainabilityPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Sustentabilidade & <span className="text-primary">Inovação</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprometidos com práticas ecológicas e tecnologia avançada para um futuro sustentável
          </p>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nossos Pilares de Sustentabilidade</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wind,
                title: 'Energia Renovável',
                description: 'Painéis solares e sistemas de ventilação natural reduzem nossa pegada de carbono em 40%.',
              },
              {
                icon: Droplet,
                title: 'Gestão de Água',
                description: 'Sistemas de captação de chuva e reciclagem de água reduzem consumo em 35% anualmente.',
              },
              {
                icon: Zap,
                title: 'Eficiência Operacional',
                description: 'Automação e IoT otimizam recursos e reduzem desperdícios em toda cadeia produtiva.',
              },
              {
                icon: Leaf,
                title: 'Preservação Ambiental',
                description: 'Programa de reflorestamento e preservação de áreas verdes em nossa região.',
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div key={index} className="p-6 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Tecnologia de Ponta</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Investimento contínuo em tecnologia garantindo eficiência máxima e menor impacto ambiental.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Sistema de Monitoramento 24/7',
                    description: 'Sensores inteligentes monitoram temperatura, umidade e qualidade do ar em tempo real.',
                  },
                  {
                    title: 'Processamento Automático',
                    description: 'Equipamentos de última geração com precisão máxima e zero desperdício.',
                  },
                  {
                    title: 'Inteligência Artificial',
                    description: 'Algoritmos ML otimizam nutrição, saúde animal e produção automaticamente.',
                  },
                  {
                    title: 'Blockchain para Rastreabilidade',
                    description: 'Sistema imutável que garante transparência total do produto ao consumidor.',
                  },
                ].map((tech, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-white hover:bg-primary/5 transition-colors duration-300">
                    <h3 className="font-semibold text-foreground mb-1">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/sustainability.jpg"
                alt="Tecnologia AGripina"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animal Welfare */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden border border-border order-2 md:order-1">
              <Image
                src="/images/chickens-modern.jpg"
                alt="Bem-estar animal AGripina"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Bem-estar Animal</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O bem-estar das nossas aves é prioridade máxima, refletindo em qualidade superior dos produtos.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Espaço livre adequado e enriquecimento ambiental',
                  'Nutrição otimizada com ingredientes naturais',
                  'Monitoramento veterinário contínuo e preventivo',
                  'Redução do uso de antibióticos ao máximo',
                  'Condições de iluminação natural e climatização',
                  'Pesquisa constante em bem-estar animal',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nosso Impacto Ambiental</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                metric: '40%',
                label: 'Redução de Carbono',
                description: 'Desde 2020 com energia renovável',
              },
              {
                metric: '35%',
                label: 'Economia de Água',
                description: 'Sistemas de reciclagem implementados',
              },
              {
                metric: '100ha',
                label: 'Área Verde Preservada',
                description: 'Reflorestamento anual contínuo',
              },
              {
                metric: '0',
                label: 'Resíduos em Aterro',
                description: 'Reaproveitamento total implementado',
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
                <p className="text-4xl font-bold text-primary mb-2">{item.metric}</p>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
