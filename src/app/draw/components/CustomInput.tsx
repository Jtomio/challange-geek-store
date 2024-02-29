import { z } from 'zod'

import React, { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from '@/components/ui/drawer'

import { RulesItens } from './Rules'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const shema = z.object({
  codigo: z.string().min(5, 'Código deve ter pelo menos 5 caracteres'),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .min(11, 'CPF inválido'),
  email: z.string().email('Email inválido'),
  celular: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Celular inválido'),
})

type FormData = z.infer<typeof shema>

function formatCupom(cupom: string): string {
  // Remove caracteres indesejados (não dígitos)
  cupom = cupom.replace(/\D/g, '')

  // Realiza a formatação
  return cupom.replace(/(\d{5})/, '$1')
}

function formatCPF(cpf: string): string {
  // Remove caracteres indesejados (não dígitos)
  cpf = cpf.replace(/\D/g, '')

  // Realiza a formatação
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

function validarEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function formatPhone(phone: string): string {
  // Remove caracteres indesejados (não dígitos)
  phone = phone.replace(/\D/g, '')

  // Realiza a formatação
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export default function CustomInput() {
  const [isSubmitted, setIsSubmitted] = useState(true)
  const [cpfValue, setCpfValue] = useState('')
  const [cupomValue, setCupomValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(shema),
  })

  const handleCupomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCupom = formatCupom(event.target.value)
    setCupomValue(formattedCupom)
  }

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCpf = formatCPF(event.target.value)
    setCpfValue(formattedCpf)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value)
    const isValidEmail = validarEmail(event.target.value)
    if (!isValidEmail) {
      console.log('E-mail inválido')
    }
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(event.target.value)
    setPhoneValue(formattedPhone)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (_data: FormData) => {
    toast({
      title: 'Participação do Sorteio!',
      description: 'Dados inseridos com sucesso',
    })
    setCupomValue('')
    setCpfValue('')
    setEmailValue('')
    setPhoneValue('')
    setIsSubmitted(true)
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Código do Cupom</Label>
            <Input
              id="number"
              placeholder="Informe seu código"
              {...register('codigo')}
              value={cupomValue}
              onChange={handleCupomChange}
              maxLength={5}
            />
            {errors.codigo && (
              <p style={{ color: 'red' }}>{errors.codigo.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">CPF</Label>
            <Input
              id="name"
              {...register('cpf')}
              placeholder="123.456.789-00"
              value={cpfValue}
              onChange={handleCpfChange}
              maxLength={11}
            />
            {errors.cpf && <p style={{ color: 'red' }}>{errors.cpf.message}</p>}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">E-mail</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="contato@email.com"
              value={emailValue}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p style={{ color: 'red' }}>{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Celular/WhatsApp</Label>
            <Input
              id="name"
              {...register('celular')}
              placeholder="(99) 99000-0000"
              value={phoneValue}
              onChange={handlePhoneChange}
              maxLength={11}
            />
            {errors.celular && (
              <p style={{ color: 'red' }}>{errors.celular.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  className="my-2 font-semibold text-red-400"
                >
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
                      <Button onClick={() => setIsSubmitted(false)}>
                        Aceitar
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancelar</Button>
          <Button
            type="submit"
            disabled={isSubmitted}
            className={` ${!isSubmitted ? '' : 'disabled:cursor-not-allowed'}`}
          >
            Enviar
          </Button>
        </CardFooter>
      </form>
    </div>
  )
}
