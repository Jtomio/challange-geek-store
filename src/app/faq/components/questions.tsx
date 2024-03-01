import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

export function Question() {
  return (
    <div className="max-h-[calc(100vh-4rem)] overflow-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">
            1 - Para a coleta de requisitos deste projeto, eu utilizaria os
            seguintes métodos.
          </AccordionTrigger>
          <AccordionContent className="gap-4 px-8 text-justify">
            <ol className="list-disc py-2">
              <div className="flex flex-col gap-2">
                <li>
                  <span className="font-bold">
                    Entrevistas com os Stakeholders:
                  </span>{' '}
                  Isso incluiria discussões com os proprietários da loja de
                  produtos geeks, a equipe de marketing que planeja a promoção e
                  os desenvolvedores do site. Essas entrevistas ajudariam a
                  entender as necessidades e expectativas de cada stakeholder.
                </li>
                <li>
                  <span className="font-bold"> Questionários: </span> Seriam
                  úteis para coletar informações de um grande número de
                  usuários. Isso poderia incluir perguntas sobre suas
                  preferências de design, facilidade de uso e funcionalidades
                  desejadas na página de cadastro do cupom.
                </li>
                <li>
                  <span className="font-bold"> Análise de Documentos: </span>Se
                  houver documentação existente sobre promoções anteriores ou
                  requisitos de design do site, a análise desses documentos pode
                  fornecer insights valiosos.
                </li>
                <li>
                  <span className="font-bold"> Prototipagem: </span>
                  Criar um protótipo inicial da página de cadastro do cupom pode
                  ajudar a visualizar como a página final funcionará. Isso pode
                  ser útil para obter feedback dos usuários e fazer ajustes
                  antes do desenvolvimento completo.
                </li>
              </div>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold">
            2 - Crie uma Persona para o Usuário, que irá cadastrar o cupom.
          </AccordionTrigger>
          <AccordionContent className="gap-4 px-8 text-justify">
            <p className="">
              {' '}
              A <span className="font-bold">Persona</span> trás um usuário que
              consome aritigos <span className="italic">GEEK.</span> chamado
              Natan com 28 anos. É um grande fã de tudo que é geek. Ele adora
              quadrinhos, filmes de ficção científica, jogos de vídeo game e RPG
              de mesa.
            </p>
            <br />
            <p className="">
              {' '}
              Veja o perfil completo da persona
              <span>
                {' '}
                <Link
                  href={'/persona'}
                  target="_blank"
                  className="text-indigo-500 underline"
                >
                  Aqui
                </Link>
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold">
            3 - Crie um Wireframe manual, ou, utilizando uma ferramenta.
          </AccordionTrigger>
          <AccordionContent className="gap-4 px-8 text-justify">
            <p className="">
              Para o desenvolvimento do{' '}
              <span className="font-bold">WIREFRAME</span> veja sua criação com
              a ferramenta {''}
              <Link
                href={'https://wireframepro.mockflow.com/view/MAvJKMVFmqb'}
                target="_blank"
                className="text-indigo-500 underline"
              >
                MockFlow.
              </Link>
              {''} ou podes ver uma prévia{' '}
              <Link
                href={'/wireframe'}
                target="_blank"
                className="text-indigo-500 underline"
              >
                aqui.
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold">
            4 - Crie um Protótipo, para demonstrar o produto, mais próximo do
            real. Se quiser, pode criar um Protótipo real e informar o link do
            Projeto.
          </AccordionTrigger>
          <AccordionContent>
            O Protótipo do projeto foi desenvolvido com{' '}
            <Link
              href={''}
              target="_blank"
              className="text-indigo-500 underline"
            >
              Figma
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold">
            5 - Por fim, faça uma análise de seu Protótipo e verifique se está
            respeitando às Heurísticas de Nielsen; que são pertinentes ao
            Projeto.
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-disc overflow-auto py-8">
              <div className="flex flex-col gap-2">
                <li>
                  <span className="font-bold">
                    Visibilidade do status do sistema:
                  </span>{' '}
                  A página fornecer feedback adequado para o usuário após a
                  submissão do formulário de cadastro do cupom. Por exemplo, uma
                  mensagem de confirmação pode ser exibida.
                </li>
                <li>
                  <span className="font-bold">
                    Correspondência entre o sistema e o mundo real:{' '}
                  </span>{' '}
                  Os campos do formulário (Código do Cupom, CPF, e-mail,
                  celular/WhatsApp) são termos comuns no mundo real, o que é
                  bom. Além disso, a opção para acessar as regras do sorteio
                  ajuda a definir as expectativas do usuário.
                </li>
                <li>
                  <span className="font-bold">
                    Controle e liberdade do usuário:{' '}
                  </span>{' '}
                  O usuário é capaz de corrigir erros durante o preenchimento do
                  formulário, como a entrada de um e-mail inválido.
                </li>
                <li>
                  <span className="font-bold"> Consistência e padrões: </span>
                  Como a página pertence a um site, ela sendo uma sub página de
                  cadastro do cupom segue os mesmos padrões de design e
                  comportamento.
                </li>
                <li>
                  <span className="font-bold"> Prevenção de erros: </span> A
                  página tem validações de formulário para prevenir erros, como
                  a submissão de um CPF inválido.
                </li>
                <li>
                  <span className="font-bold">
                    Reconhecimento em vez de recordação:{' '}
                  </span>{' '}
                  A página é intuitiva e fácil de usar, sem exigir que o usuário
                  lembre de informações de outras partes do site/aplicativo.
                </li>
                <li>
                  <span className="font-bold">
                    Flexibilidade e eficiência de uso:
                  </span>{' '}
                  A página serve de forma fácil de usar para novos usuários, mas
                  também permitir eficiência para usuários experientes. Por
                  exemplo, poderia haver atalhos de teclado para usuários
                  experientes.
                </li>
                <li>
                  <span className="font-bold">
                    Estética e design minimalista:
                  </span>{' '}
                  Com elementos de design limpo e simples, sem informações
                  irrelevantes ou raramente necessárias.
                </li>
                <li>
                  <span className="font-bold">
                    Ajude os usuários a reconhecer, diagnosticar e recuperar-se
                    de erros:
                  </span>{' '}
                  Se o usuário cometer um erro ao preencher o formulário, a
                  página deve informa uma mensagem de erro clara e útil no campo
                  que ocorrer o erro.
                </li>
                <li>
                  <span className="font-bold">Ajuda e documentação:</span>{' '}
                  Embora a página é intuitiva de usar, ainda pode haver uma
                  seção de ajuda ou FAQ para auxiliar os usuários.
                </li>
              </div>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
