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
    <div className="flex items-center justify-center">
      <Card className="w-[550px]">
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
