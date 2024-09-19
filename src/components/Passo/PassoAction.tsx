'use client'

import { Button } from "@/components/ui/button";
import { usePasso } from "@/context/PassoContext"; 
import { Textos } from "@/texts";


export function PassoAction() {
  const { num, decrement, increment } = usePasso()
  const text = Textos({ num })
  const a = num
  console.log({num})
  let b
  if(num === 0){
      b = `grid justify-items-end mt-[10%] visible`
  } else {
      b = `grid justify-items-end mt-[1%]`
  }
  return (
    <>
      <p className="relative flex text-[1.1vw] text-wrap">
                    {a}. {text}
      </p>
      {num < 1 ?
        <div className={`${b}`}>
          <Button onClick={increment} size={"sm"}> Próximo </Button>
        </div> 
        : num < 6 ?
        <div className="relative flex justify-between mt-[1%]">
          <Button onClick={decrement} size={"sm"}> Anterior </Button>
          <Button onClick={increment} size={"sm"}> Próximo </Button>
        </div> : 
        <div className={`${b}`}>
        <Button onClick={decrement} size={"sm"}> Anterior </Button>
      </div>
      }
    </>

  )
}
