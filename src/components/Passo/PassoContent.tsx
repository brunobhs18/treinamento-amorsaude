import { ContentDiv, Textos } from "@/texts";
import { PassoAction } from "./PassoAction";
import { usePasso } from "@/context/PassoContext";


export function PassoContent() {
    const { num } = usePasso()
    const a = ContentDiv({ num })
    return (        
            <div className={`relative flex flex-col ${a} p-2 border-2 border-zinc-600 bg-zinc-100 rounded-md w-[40%] shadow-sm shadow-cyan-400`}>
                <PassoAction />                 
            </div>
    )
}