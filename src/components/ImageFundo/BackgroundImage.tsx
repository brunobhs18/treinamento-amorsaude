import Image from "next/image";
import { ImagenText } from "@/texts";
import { usePasso } from "@/context/PassoContext";

export function ImageFundo() {
    const { num } = usePasso()
    const a = ImagenText({ num })
    return(
            <Image
                src={`${a}`}
                alt="Imagem Inicial"
                layout="fill"
                objectFit="cover"
                className="w-full h-full absolute"
            />
    )   

}