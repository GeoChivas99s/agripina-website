import { Trophy, Shield, CheckCircle2 } from 'lucide-react'

const certifications = [
  {
    icon: Trophy,
    title: 'ISO 9001:2015',
    description: 'Certificação de Gestão da Qualidade reconhecida internacionalmente',
  },
  {
    icon: Shield,
    title: 'ABNT NBR',
    description: 'Normas Angolanas de excelência em produção avícola',
  },
  {
    icon: CheckCircle2,
    title: 'Inspeção Sanitária',
    description: 'Aprovado por órgãos sanitários nacionais',
  },
]

const awards = [
  'Melhor Produtor de Ovos - Região 2023',
  'Prêmio Sustentabilidade - Agro Inovação 2022',
  'Certificação de Bem-estar Animal - OIE',
  'Parceiro  - Distribuidoras Nacionais',
]

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Certifications Grid */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Certificações e <span className="text-primary">Reconhecimentos</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Comprometidos com os mais altos padrões de qualidade e conformidade regulatória
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300 hover:border-primary/30 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20 p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Prêmios e Distinções
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-foreground font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
