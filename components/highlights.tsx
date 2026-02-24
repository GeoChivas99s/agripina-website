import { Award, Leaf, Zap, Heart } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Produção de excelência com rigoroso controle de qualidade em cada etapa',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Compromisso com práticas ecológicas e respeito ao meio ambiente',
  },
  {
    icon: Zap,
    title: 'Tecnologia Avançada',
    description: 'Infraestrutura moderna e inovação contínua em processos produtivos',
  },
  {
    icon: Heart,
    title: 'Bem-estar Animal',
    description: 'Cuidado e atenção dedicados ao bem-estar de todas as nossas aves',
  },
]

export default function Highlights() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a <span className="text-primary">AGripina</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Liderança em produção avícola com foco em qualidade, inovação e sustentabilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
