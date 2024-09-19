'use client'

import { usePasso } from "@/context/PassoContext";
import { ReactNode } from "react";

interface PassoRootProps {
  children: ReactNode
}

export function PassoRoot({ children }: PassoRootProps) {
  const { num } = usePasso()
  let a
  if(num === 0){
      a = `flex mt-[10%] ml-[18%] max-w-[30%] block absolute visible`
  } else {
      a = `flex mt-[10%] ml-[18%] max-w-[30%] block invisible absolute`
  }
  return (
    <div className={`flex flex-col relative inset-0 z-50 bg-black/70 w-screen h-screen`} >
      <div className={`${a}`}>
        <img src="/Mascote.png" className="w-[80%] h[80%]"/>
      </div>
      {children}
    </div>     
  );
};

