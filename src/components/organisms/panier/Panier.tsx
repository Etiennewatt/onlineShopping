"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

type product = {
    idArticle: string,
    valQuantity: number
}

const Product = [
    { idArticle: "1", valQuantity: 1 },
    { idArticle: "2", valQuantity: 3 },
]

function Panier() {
    const [product, setproduct] = useState<product[]>(Product)

    const decrementQuantity = (currentProduct: product) => {
        setproduct(prevProducts => 
            prevProducts.map(product => 
                product.idArticle === currentProduct.idArticle ? { ...product, valQuantity: Math.max(0, product.valQuantity - 1) } : product
            )

        );

    };

    const incrementQuantity = (currentProduct: product) => {
        setproduct( prevProduct =>
            prevProduct.map(
                product => product.idArticle === currentProduct.idArticle ? 
                {...product, valQuantity: Math.max(0, product.valQuantity + 1)} : product
            )
        )
    }

return (
    <Sheet>
        <SheetTrigger>
            <img src="panier.avif" className=" rounded-full w-7 mx-4" />
        </SheetTrigger>
        <SheetContent className="bg-gray-50">
            <SheetHeader>
                <SheetTitle className=" text-2xl">My Cart</SheetTitle>
                <SheetDescription className=" mt-7">
                    <div className="max-md:h-[100vw] overflow-auto p-2 space-y-6">

                        {product?.map((currentProduct) => (
                            <div key={currentProduct.idArticle}>

                                <div className=" flex gap-x-2  dark:bg-slate-900 rounded-md text-slate-700 dark:text-gray-100 max-sm:flex-wrap">
                                    <div className=" flex-1/3 p-2 border rounded-xl ">
                                        <img src="../../blackWatchMen.jpg" className=" rounded-2xl w-full" />
                                        {/* <Image src="../blackWatchMen.jpg" width={200} height={200} alt="picture of selection" /> */}
                                    </div>
                                    <div className=" flex flex-col flex-1/3 mt-2">
                                        <span className=" font-semibold text-lg text-wrap">Title of  my choice</span>
                                        {/* FLOWBIT INPUT QUANTITY */}
                                        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">quantity:</span>
                                        <div className="relative flex items-center max-w-[5rem]" >
                                            <button className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 h-7 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={() => decrementQuantity(currentProduct)}>
                                                <svg className="w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>

                                            <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={currentProduct.valQuantity} required />

                                            <button className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1 h-7 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={() => incrementQuantity(currentProduct)}>
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid gap-2 mt-2">
                                        <div className="flex flex-col gap-1">
                                            <span className=" font-semibold">23 000 XAF</span>
                                            <span>Color / Size</span>
                                        </div>

                                        {/* BOUTTON DELETE */}
                                        <button className="text-destructive dark:text-red-800 dark:bg-slate-900 dark:hover:text-red-400 bg-gray-100 h-fit px-2 py-1 hover:bg-red-100 cursor-pointer rounded-md  w-fit max-sm:mt-5">Delete</button>
                                    </div>
                                </div>

                            </div>
                        ))}


                    </div>

                    {/* BOUTTON PASSER A LA CAISSE */}
                    <div className=" flex justify-center relative p-4 bg-blue-100 rounded-2xl mt-10">
                        <Button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600 '>Cash Desk</Button>
                    </div>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet >

)
}

export default Panier
