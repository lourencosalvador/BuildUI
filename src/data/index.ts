import { blue, cyan, zinc } from "tailwindcss/colors"

type colors = {
    violet: string,
    rose: string,
    default: string
}

export type colorSelect = "VIOLET" | "ROSE" | "DEFAULT"

export const Palletecolor = {
    violet: cyan[900],
    rose: blue[900],
    default: zinc[800]
} satisfies colors