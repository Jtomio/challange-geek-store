/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { RulesItens } from './components/Rules'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
// import { z } from 'zod'

// const schema = z.object({
//   codigo: z
//     .string()
//     .min(1, 'Código do cupom é obrigatório')
//     .max(5, 'Código do cupom deve ter 5 caracteres'),
//   cpf: z.string().length(11, 'CPF deve ter exatamente 11 dígitos'),
//   email: z.string().email('E-mail inválido'),
//   celular: z
//     .string()
//     .min(10, 'Número de celular inválido')
//     .max(11, 'Número de celular inválido'),
// })

export default function page() {
  const [isAccepted, setisAccepted] = useState(false)
  const { toast } = useToast()

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Cadastrar código</CardTitle>
          <CardDescription>
            Participe do sorteio inserindo seus dados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Código do Cupom</Label>
                <Input id="number" placeholder="Informe seu código" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">CPF</Label>
                <Input id="name" placeholder="123.456.789-00" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">E-mail</Label>
                <Input id="email" placeholder="contato@email.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Celular/WhatsApp</Label>
                <Input id="name" placeholder="99-99000-000" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="ghost">
                      Visualizar regras para participar
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Regras do Sorteio</DrawerTitle>
                        <DrawerDescription>
                          Leia atentamente todos os itens.
                          <RulesItens />
                        </DrawerDescription>
                      </DrawerHeader>

                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button onClick={() => setisAccepted(true)}>
                            Aceitar
                          </Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancelar</Button>
          <Button
            disabled={!isAccepted}
            className=""
            onClick={() => {
              toast({
                title: 'Participação do Sorteio!',
                description: 'Dados inseridos com sucesso',
              })
            }}
          >
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
