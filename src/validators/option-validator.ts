// bg-blue-950 border-blue-950
// bg-rose-950 border-rose-950
// bg-zinc-950 border-zinc-950

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    { label: 'Black', value: 'black', tw: 'zinc-950' },
    { label: 'Rose', value: 'rose', tw: 'rose-950' },
    { label: 'Blue', value: 'blue', tw: 'blue-950' }
] as const

export const MODELS = {
    name: "models",
    options: [
        {
            label: "iphone X",
            value: "iphone-x"
        },
        {
            label: "iphone 11",
            value: "iphone-11"
        },
        {
            label: "iphone 12",
            value: "iphone-12"
        },
        {
            label: "iphone 13",
            value: "iphone-13"
        },
        {
            label: "iphone 14",
            value: "iphone-14"
        },
        {
            label: "iphone 15",
            value: "iphone-15"
        }
    ]
} as const

export const MATERIALS={
    name:"materials",
    options:[
        {
            label:"Silicone",
            value:"silicone",
            descripiton: undefined,
            price: PRODUCT_PRICES.material.silicone
        },
        {
            label:"Soft Polycarbonate",
            value:"polycarbonate",
            descripiton: undefined,
            price: PRODUCT_PRICES.material.polycarbonate
        }
    ]
} as const

export const FINISHES={
    name:"finish",
    options:[
        {
            label:"Smooth",
            value:"smooth",
            descripiton: undefined,
            price: PRODUCT_PRICES.finish.smooth
        },
        {
            label:"Textured",
            value:"textured",
            descripiton: undefined,
            price: PRODUCT_PRICES.finish.textured
        }
    ]
}
