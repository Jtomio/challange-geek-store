import React from 'react'

const item = [
  {
    title: 'Formação',
    description:
      'Diploma de bacharel em Ciência da Computação. Ele trabalha como desenvolvedor de software em uma empresa de tecnologia.',
  },
  {
    title: 'Gostos e hobbies',
    description:
      'É um grande fã de tudo que é geek. Ele adora quadrinhos, filmes de ficção científica, jogos de vídeo game e RPG de mesa. Ele também é um colecionador ávido de action figures e outros itens de memorabilia geek. Além disso, gosta de participar de convenções de quadrinhos e eventos de cosplay.',
  },
  {
    title: 'Comportamento online',
    description:
      'Visita regularmente sites de produtos geek para se manter atualizado sobre os últimos lançamentos. Ele também participa de fóruns online e grupos de mídia social onde discute suas paixões com outros entusiastas geek.',
  },
  {
    title: 'Objetivos',
    description:
      'Estar sempre em busca de novos itens para adicionar à sua coleção. Ele também gosta de encontrar ofertas especiais e promoções em seus sites favoritos.',
  },
  {
    title: 'Desafios',
    description:
      'Um dos maiores desafios de Lucas é encontrar produtos de alta qualidade a preços acessíveis. Ele também às vezes tem dificuldade em encontrar itens raros ou exclusivos.',
  },
  {
    title: 'Forma de comunicação preferida',
    description:
      'Diploma de bacharel em Ciência da Computação. Ele trabalha como desenvolvedor de software em uma empresa de tecnologia.',
  },
]

export default function DescriptionContent() {
  return (
    <div className="mt-8 flex flex-col gap-8">
      {item.map((items) => (
        <div
          className="flex flex-col items-center justify-center border-primary px-4 text-justify"
          key={items.title}
        >
          <p className="text-md mb-4 font-bold text-primary">{items.title}</p>
          <p className="text-md ">{items.description}</p>
        </div>
      ))}
    </div>
  )
}
