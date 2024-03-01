import React from 'react'
import { Question } from './components/questions'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">Questionário do Desafio</h1>
      <div className="h-screen w-full p-4">
        <Question />
      </div>
    </div>
  )
}
