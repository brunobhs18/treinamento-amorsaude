'use client'

import React, { useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePasso } from "@/context/PassoContext";
import { Submit } from "@/api/sheets"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { ConteudoDiv } from "@/texts";
import { MoveLeft, MoveRight } from "lucide-react";
import { AlertDialog, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function AtendimentoVideos() {
    const { handleclick } = usePasso()
    const [count, setCount] = useState<number>(1)


    const addCount = () => {
        if (count > 7) {
            setCount(1)
        } else {
            setCount(prevCount => prevCount + 1);
        }

    };

    const rmvCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const pagetwoo = () => {
        setCount(2)
    }

    const pagethree = () => {
        setCount(3)
    }

    const pagefour = () => {
        setCount(4)
    }

    const pagefive = () => {
        setCount(5)
    }
    const pagesix = () => {
        setCount(6)
    }

    const pageseven = () => {
        setCount(7)
    }

    const pageeight = () => {
        setCount(8)
    }


    const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        form.reset();

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxCE-ziQQXM_i0VOtgZHgKaP4mzNRKPxNiQ7IbZaOesRVXpUv5w44RfK1L8c3h7l6yt/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            console.log(result);

        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    }



    let a = ConteudoDiv({ count })
    console.log(a)
    return (
        <div className="relative grid grid- grid-cols-[1fr_3fr_1fr] w-screen h-screen">
            <img src="/capivara.gif" className="absolute -z-10 w-40 h-40 mt-40 translate-x-full animate-slide-in delay-1000 repeat-infinite" />
            <img src="/alien.gif" className="absolute -z-10 w-40 h-40 mt-96 translate-x-full animate-slide-out repeat-infinite" />
            <img src="/astronauta.gif" className="absolute -z-10 w-40 h-40 ml-[5rem] translate-y-full animate-slide-InY repeat-infinite" />
            <div className="flex justify-center items-center"><Button className="rounded-full w-14 h-14" onClick={rmvCount}><MoveLeft></MoveLeft></Button>     </div>
            <div className="flex flex-col h-screen bg-slate-50 shadow-blue-950/25 shadow-md">
                {count === 3 ? (
                    <div className="flex flex-col justify-center max-w-max">
                        <div className="flex flex-col m-8 gap-8">
                            <h1 className="font-bold text-2xl">Questão 1 - Verificando mensagem do BOT</h1>
                            <p>Quando você entrou no ambiente cVortex (amorsaude-treinamento.cvortex.com, entrar com o usuário e senha passado) qual foi a primeira mensagem enviada pelo bot no caso que já estava aberto ?</p>
                            <p>Segue exemplo da imagem abaixo:</p>
                            <img src="/mensagem bot.png" className="w-[55%] h-[60%]" alt="Imagem ilustrativa de mensagem do bot" />
                        </div>
                        <div className="flex flex-col p-5 justify-center gap-2">
                            <form name="form" onSubmit={Submit}>
                                <input placeholder="Resposta" name="Question1" type="text" required className="p-2 w-[70%] shadow-sm mr-[5%]" />
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button type="submit" className="w-[10%]">Enviar</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Resposta Enviada!</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Para continuar clique na seta a direita e siga com o seu treinamento.
                                                A qualquer momento pode clicar na seta a esquerda para visualizar novamente o conteúdo!
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogAction>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1" dangerouslySetInnerHTML={{ __html: a }}></div>
                )}
                <div className="flex-none object-bottom py-4 text-center text-sm text-muted-foreground">
                    Página {count} de 8
                </div>
            </div>
            <div className="flex justify-center items-center"><Button className="rounded-full h-14 w-14" onClick={addCount}><MoveRight></MoveRight></Button></div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="absolute rounded-full left-0 bottom-0 z-50">|||</Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <div className="flex flex-col">
                        <Link href="/">Inicio</Link>
                        <Link href="/atendimentop">
                             Atendimento Passo a Passo
                        </Link>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Atendimento Vídeos
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Link href="/atendimentov">
                                        Entrando no Ambiente cVortex
                                    </Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentov" passHref legacyBehavior>
                                        <a onClick={pagetwoo}>
                                            Primeiro Atendimento
                                        </a>
                                    </Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentov" passHref legacyBehavior>
                                        <a onClick={pagethree}>
                                            Questão 1
                                        </a>
                                    </Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentov" passHref legacyBehavior>
                                        <a onClick={pagefour}>
                                            Enviando mensagem no canal de texto
                                        </a>
                                    </Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentov" passHref legacyBehavior>
                                        <a onClick={pagefive}>
                                            Ações de Atendimento
                                        </a>
                                    </Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentov" passHref legacyBehavior>
                                        <a onClick={pagesix}>
                                            Criando Atendimento
                                        </a>
                                    </Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentov" passHref legacyBehavior>
                                        <a onClick={pageseven}>
                                            Solicitando Pausa e Fazendo LogOut
                                        </a>
                                    </Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentov" passHref legacyBehavior>
                                        <a onClick={pageeight}>
                                            Formas de Atendimento pelo Canal de Voz
                                        </a>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}