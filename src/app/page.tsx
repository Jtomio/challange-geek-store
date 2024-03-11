import { CarouselPageHome } from '@/components/CarouselPageHome'
import Image from 'next/image'
import BannerImg from '../../public/assets/banner.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex h-full w-full items-center justify-center">
          <Link href={'/draw'}>
            <Image
              src={BannerImg}
              alt="Imagem banner página principal"
              width={1500}
              className="h-full w-full hover:cursor-pointer"
            />
          </Link>
        </div>
        <h1 className="my-4 text-xl">Confira nossos Categorias</h1>
        <CarouselPageHome />
        <div className="flex">
          <Card>
            <CardTitle className="py-4 text-center">Lorem, ipsum.</CardTitle>
            <CardContent>
              <CardDescription className="text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                reprehenderit nihil recusandae eos. Laboriosam modi esse eveniet
                consectetur provident, sunt omnis id maiores quibusdam mollitia
                voluptate rem commodi vitae tenetur. Non accusamus deleniti
                tenetur sapiente, ea a ad culpa saepe aspernatur. Quidem qui
                dolorem fugit magni iure nam cupiditate, explicabo temporibus
                recusandae voluptatem repellendus fugiat ab consequatur natus et
                rem molestiae! Unde fugit quisquam nam quia odit impedit, est
                reprehenderit! Itaque, omnis. Cum labore numquam laudantium
                voluptas consequatur aperiam, illum fugiat dolores accusamus,
                animi voluptatibus provident est optio at. Qui eligendi
                voluptates autem enim quisquam error sunt aspernatur repudiandae
                iusto blanditiis earum libero exercitationem magnam sit,
                officiis, repellendus doloribus in tenetur consequatur
                praesentium laboriosam vitae porro quam quod! Quibusdam fuga
                quaerat dolorem saepe itaque iusto ex esse maxime. Dolorum
                debitis nostrum deleniti tempora, animi cupiditate molestiae
                obcaecati temporibus cum in ducimus ea consequatur placeat quam
                blanditiis, qui voluptatem sint? Incidunt?
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
