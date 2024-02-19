'use cliente'

import { ScrollArea } from '@/components/ui/scroll-area'
import * as React from 'react'

const data = [
  {
    name: '1. legibilidade',
    description:
      'Este sorteio é aberto a todos os usuários registrados no site Tomio Geek que tenham 18 anos ou mais na data de inscrição. Funcionários da Tomio Geek e suas famílias imediatas não são elegíveis para participar.',
  },
  {
    name: '2. Como Participar',
    description:
      'Para participar, os usuários devem fazer uma compra no site Tomio Geek durante o período do sorteio. Cada compra qualifica o usuário para uma entrada no sorteio.',
  },
  {
    name: '3. Período do Sorteio',
    description:
      'O sorteio começa às 00:01 do dia 1 de janeiro e termina às 23:59 do dia 31 de março.',
  },
  {
    name: '4. Prêmios',
    description:
      'O prêmio do sorteio é um vale-compras no valor de R$500 para ser usado no site Tomio Geek. O prêmio não pode ser trocado por dinheiro.',
  },
  {
    name: '5. Seleção dos Vencedores',
    description:
      'O vencedor será selecionado por meio de um sorteio aleatório entre todas as inscrições elegíveis. O sorteio será realizado no dia 5 de fevereiro e o vencedor será notificado por e-mail.',
  },
  {
    name: '6. Reclamação do Prêmio',
    description:
      'O vencedor deve reclamar seu prêmio dentro de 14 dias após a notificação. Se o prêmio não for reclamado dentro deste período, ele será concedido ao próximo vencedor selecionado.',
  },
  {
    name: '7. Responsabilidades',
    description:
      'A Tomio Geek não é responsável por inscrições perdidas, atrasadas, incompletas ou mal direcionadas. A decisão da Tomio Geek é final e vinculativa em todos os assuntos relacionados a este sorteio.',
  },
]

export function RulesItens() {
  return (
    <div className="flex items-center justify-center py-1">
      <ScrollArea className="flex h-[20em] items-center justify-center rounded-md border p-4 lg:h-[40em]">
        {data.map((item) => (
          <div className="mt-1 flex flex-col" key={item.name}>
            <p className="font-bold">{item.name}</p>
            <p className="font-semibold">{item.description}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
