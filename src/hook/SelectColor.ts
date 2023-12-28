
import { useState } from "react";
import { blue, violet } from "tailwindcss/colors";

export function useColor(color: string){
       console.log("a cor seleciona é " + color)
      return {
            color
      }   
}