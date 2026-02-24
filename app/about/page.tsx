import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Building2, Leaf, Target, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nossa <span className="text-primary">História</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 25 anos de excelência, inovação e dedicação à produção avícola sustentável
          </p>
        </div>
      </section>

      {/* History Timeline */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Evolução da AGripina</h2>
          
          <div className="space-y-12">
            {[
              {
                year: '1998',
                title: 'Fundação',
                description: 'AGripina é fundada como uma pequena propriedade familiar focada em produção de ovos de qualidade.',
              },
              {
                year: '2005',
                title: 'Primeira Expansão',
                description: 'Implementação de técnicas modernas de produção e certificação ISO 9001.',
              },
              {
                year: '2012',
                title: 'Modernização Tecnológica',
                description: 'Investimento em infraestrutura de ponta e sistemas automatizados de controle de qualidade.',
              },
              {
                year: '2018',
                title: 'Sustentabilidade em Foco',
                description: 'Expansão de linhas sustentáveis e implementação de práticas ecológicas avançadas.',
              },
              {
                year: '2024',
                title: 'Liderança Regional',
                description: 'Reconhecimento como uma das principais produtoras avícolas com alcance nacional.',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-primary font-semibold text-lg">{milestone.year}</p>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-16 text-center">
            Evolução da AGripina
          </h2>

          <div className="relative">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary/30"></div>

            {[
              {
                year: '1998',
                title: 'Fundação',
                description:
                  'AGripina é fundada como uma pequena propriedade familiar focada em produção de ovos de qualidade.',
              },
              {
                year: '2005',
                title: 'Primeira Expansão',
                description:
                  'Implementação de técnicas modernas de produção e certificação ISO 9001.',
              },
              {
                year: '2012',
                title: 'Modernização Tecnológica',
                description:
                  'Investimento em infraestrutura de ponta e sistemas automatizados de controle de qualidade.',
              },
              {
                year: '2018',
                title: 'Sustentabilidade em Foco',
                description:
                  'Expansão de linhas sustentáveis e implementação de práticas ecológicas avançadas.',
              },
              {
                year: '2024',
                title: 'Liderança Regional',
                description:
                  'Reconhecimento como uma das principais produtoras avícolas com alcance nacional.',
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center mb-16 w-full relative z-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Círculo com ano sobre a linha */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {milestone.year}
                  </div>
                </div>

                {/* Card flutuando sobre a linha */}
                <div className="md:max-w-md bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition md:mx-8 mt-4 md:mt-0 text-center md:text-left relative z-20">
                  <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Missão, Visão e Valores</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Missão',
                description: 'Produzir alimentos avícolas de excelência, contribuindo para a saúde e bem-estar das famílias Angolanas através de práticas sustentáveis e inovadoras.',
              },
              {
                icon: Lightbulb,
                title: 'Visão',
                description: 'Ser referência nacional em produção avícola sustentável, reconhecida pela qualidade, inovação tecnológica e compromisso com o meio ambiente.',
              },
              {
                icon: Leaf,
                title: 'Valores',
                description: 'Qualidade inquestionável, sustentabilidade ambiental, bem-estar animal, inovação contínua e excelência operacional em todas as nossas ações.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="p-8 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team & Infrastructure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Infraestrutura e Equipe</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Estrutura de Classe Mundial</h3>
              <ul className="space-y-4">
                {[
                  '50 hectares de área cultivada com modernos sistemas de ventilação e climatização',
                  'Equipamentos automatizados de última geração para processamento',
                  'Laboratórios de controle de qualidade com certificação internacional',
                  'Sistema de rastreabilidade completo de ponta a ponta',
                  'Equipe de 120+ profissionais altamente qualificados',
                  'Capacidade de produção de 500 mil ovos diários',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/chickens-modern.jpg"
                alt="Infraestrutura AGripina"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
