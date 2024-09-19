import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div className="flex w-screen h-screen">
      <Image src="/Universo.png" layout="fill"
                objectFit="cover"
                className="w-full h-full opacity-90"alt="Imagem de universo"/>
         <img src="/capivara.gif" className="absolute w-[10%] h-[20%] mt-[10%] translate-x-full animate-slide-in opacity-95" />
         <img src="/alien.gif" className="absolute w-[10%] h-[20%] mt-[20%] translate-x-full animate-slide-out delay-1000 opacity-95" />
         <img src="/astronauta.gif" className="absolute w-[10%] h-[20%] ml-[20%] translate-y-full animate-slide-InY delay-700 opacity-95" />
        <div className="flex absolute right-[42%] bottom-2/4">
          <Dialog>
            <div className="p-4 bg-zinc-100 text-xl rounded-md border-zinc-500 border-2 hover:bg-blue-800 hover:text-zinc-100 animate-pulse">
              <DialogTrigger>Escolha a opção de Treinamento</DialogTrigger>
            </div>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Treinamento de Atendimento ou de Supervisão?</DialogTitle>
                <DialogDescription>
                  Você poderá alterar o tipo de Treinamento a qualquer momento!
                </DialogDescription>
                <Button asChild>
                  <Link href="/atendimentop">Atendimento Passo a Passo</Link></Button>
                <Button asChild><Link href="/atendimentov">Atendimento Vídeos</Link></Button>
                <Button>Supervisão Passo a Passo</Button>
                <Button>Supervisão Vídeos</Button>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>



      </div>
    </main>

  );
}
