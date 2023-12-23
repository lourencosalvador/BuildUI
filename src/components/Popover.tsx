import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    Box,
    ButtonGroup,
  } from "@chakra-ui/react"
import { useRef } from "react"
import { blue, zinc } from "tailwindcss/colors"
import { Player1 } from "./Player"



  export function PopoverRH(){
    const initialFocusRef =  useRef(null)
    return(
        <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button
           className="text-white  text-[18px] font-semibold hover:text-violet-400 "
          >💆🏽‍♂️🎵</Button>
        </PopoverTrigger>
        <PopoverContent className="bg-blue-800 w-96 h-[200px] mt-[30px] rounded" borderColor='blue.800'>
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
          
          </PopoverHeader>
          <PopoverArrow bg='blue.800' />
          
          <PopoverBody>
            {/* <Player1 /> */}
          </PopoverBody>
          
        </PopoverContent>
      </Popover>
    )
  }