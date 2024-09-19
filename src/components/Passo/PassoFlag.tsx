import { TexDiv } from "@/texts";
import { usePasso } from "@/context/PassoContext";

interface Text {
    text: string;
}

export function PassoFlag() {
    const { num } = usePasso();
    
    const a = TexDiv({ num });

    let text: string;
    let b: string;
    b = ''
    if (num === 0){
        text = `Para acessar o seu ambiente de treinamento clique no link abaixo: <br> <a href="https://amorsaude-treinamento.cvortex.com/" target="_blank">amorsaude-treinamento.cvortex.com</a> <br> e siga os passos indicados! Lembre-se, a qualquer momento pode clicar no botão
        de menu no canto inferior direito.`    
        b = `border-zinc-600 bg-zinc-100 rounded-md ml-[38%] h-max p-2`
    } else if (num < 3) {
        text = 'Insira Aqui';
        b = `border-red-500 bg-zinc-300/25 animate-pulse text-white`
    } else {
        text = 'Clique Aqui';
        b = `border-red-500 bg-zinc-300/25 animate-pulse text-white`
    }

    return (
        <div className={`relative inset-0 flex justify-center items-center border-2 ${a} ${b}`}>
            <p dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    );
}
