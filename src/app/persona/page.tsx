import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { ToggleGroupDemo } from './components/ToggleGroup'
import { Separator } from '@/components/ui/separator'

export default function page() {
  return (
    <div className="relative flex-col items-center justify-center lg:grid lg:grid-cols-4">
      <div className="col-span-1 rounded-md border-primary bg-primary-foreground py-4 lg:h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-primary p-1">
            <div className="rounded-full bg-white p-1">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  width="50em"
                  className=""
                />
                <AvatarFallback>Na</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <div className="">
              <h1 className="text-xl font-semibold text-primary">Natan</h1>
              <p className="text-muted-foreground">Cliente</p>
            </div>
            <div className="">
              <h1 className="text-xl font-semibold text-primary">Idade</h1>
              <p className="text-muted-foreground">28 anos</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="py-2 text-xl font-semibold text-primary">
                Redes Sociais
              </h1>
              <ToggleGroupDemo />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex h-full flex-col items-center justify-start lg:py-8">
        <div className="w-full py-4">
          <p className="text-center text-xl font-semibold text-primary">
            Formação
          </p>
          <p className="text-md my-4 px-4">
            Diploma de bacharel em Ciência da Computação. Ele trabalha como
            desenvolvedor de software em uma empresa de tecnologia.
          </p>
          <Separator className="bg-primary" />
        </div>
        <div className="w-full py-4">
          <p className="text-center text-xl font-semibold text-primary">
            Gostos e hobbies
          </p>
          <p className="text-md my-4 px-4">
            É um grande fã de tudo que é geek. Ele adora quadrinhos, filmes de
            ficção científica, jogos de vídeo game e RPG de mesa. Ele também é
            um colecionador ávido de action figures e outros itens de
            memorabilia geek. Além disso, gosta de participar de convenções de
            quadrinhos e eventos de cosplay.
          </p>
          <Separator className="bg-primary" />
        </div>
        <div className="w-full py-4">
          <p className="text-center text-xl font-semibold text-primary">
            Comportamento online
          </p>
          <p className="text-md my-4 px-4">
            Visita regularmente sites de produtos geek para se manter atualizado
            sobre os últimos lançamentos. Ele também participa de fóruns online
            e grupos de mídia social onde discute suas paixões com outros
            entusiastas geek.
          </p>
          <Separator className="bg-primary" />
        </div>
        <div className="w-full py-4">
          <p className="text-center text-xl font-semibold text-primary">
            Objetivos
          </p>
          <p className="text-md my-4 px-4">
            Estar sempre em busca de novos itens para adicionar à sua coleção.
            Ele também gosta de encontrar ofertas especiais e promoções em seus
            sites favoritos.
          </p>
          <Separator className="bg-primary" />
        </div>
        <div className="w-full py-4">
          <p className="text-center text-xl font-semibold text-primary">
            Desafios
          </p>
          <p className="text-md my-4 px-4">
            Um dos maiores desafios de Lucas é encontrar produtos de alta
            qualidade a preços acessíveis. Ele também às vezes tem dificuldade
            em encontrar itens raros ou exclusivos.
          </p>
          <Separator className="bg-primary" />
        </div>
        <div className="w-full py-2">
          <p className="text-center text-xl font-semibold text-primary">
            Forma de comunicação preferida
          </p>
          <ul className="my-2 list-disc px-4">
            <li className="text-md ml-8">Mídias sociais</li>
            <li className="text-md ml-8">Mensagem de texto</li>
          </ul>
          <Separator className="bg-primary" />
        </div>
      </div>
    </div>
  )
}
