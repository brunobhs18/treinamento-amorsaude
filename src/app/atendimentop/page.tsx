'use client'

import { ImageFundo } from "@/components/ImageFundo/BackgroundImage";
import { Passo } from "@/components/Passo";
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
import { PassoProvider, usePasso } from "@/context/PassoContext";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";



export default function AtendimentoPasso() {
    const { handleclick } = usePasso()
    return (
        <div className="relative">
            <ImageFundo />
            <Passo.Root>
                <Passo.Content />
                <Passo.Flag />
            </Passo.Root>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="absolute rounded-full left-0 bottom-0 z-50">|||</Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <div className="flex flex-col">
                        <Link href="/">Inicio</Link>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Atendimento Passo
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Link href="/atendimentop" passHref legacyBehavior>
                                        <a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleclick(e, 0)}>
                                            Entrando no cVortex
                                        </a></Link>
                                </AccordionContent>
                                <AccordionContent>
                                    <Link href="/atendimentop" passHref legacyBehavior>
                                        <a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleclick(e, 4)}>
                                            Permissão do Microfone
                                        </a>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Link href="/atendimentov">
                            Atendimento Vídeos
                        </Link>

                    </div>
                </SheetContent>
            </Sheet>
        </div>

    );
}
