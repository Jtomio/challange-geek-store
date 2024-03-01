/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import CustomInput from './components/CustomInput'

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <p className="py-4 text-2xl font-bold">Cadastra-se na promoção</p>
      <Card className="w-[20em] md:w-[500px] lg:w-[650px]">
        <CardHeader>
          <CardTitle>Cadastrar código</CardTitle>
          <CardDescription>
            Participe do sorteio inserindo seus dados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomInput />
        </CardContent>
      </Card>
    </div>
  )
}
