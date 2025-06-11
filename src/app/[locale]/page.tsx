"use client"

import { LargestHomePageCaroussel } from "@/components/moleculs/HomePageCaroussel";
import Footer from "@/components/organisms/footer/footer";
import SmallCaroussel from "@/components/organisms/Smallcaroussel/SmallCaroussel";
import { Article } from "@/types/Article";
import { useState } from "react";
import {useTranslations} from 'next-intl';

export default function Home() {

  const [articleForCategory, setArticleForCategory] = useState<Article>({
    articleImage: "blackHattWhitWhiteBasketShoes.jpg",
    articleName: "Mostro",
    articlePrice: 15000,
    articleDevice: "XAF"
  })
  const t = useTranslations()


  return (
    <div className="">
       {/* <Toaster/>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }>
        Show Toast
      </Button>  */}

      <LargestHomePageCaroussel />
      <div className="min-md:mt-14 mt-40"> 
        <SmallCaroussel article={articleForCategory} hightValue="h-[20vw]" />
      </div>

      {/* SHOW CATEGORIES */}
      {/* ARTICLES IN THIS CATEGORIY */}
      <div className="w-4/5 m-auto mt-16">
        <h2 className=' font-semibold text-2xl text-gray-900 dark:text-gray-100 mb-4'> {t("hello_world")}</h2>

        <div className=" m-auto">
          <div className=" flex flex-wrap gap-6 ">

            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>
            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>
            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>
            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>
            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>
            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>
            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>
            <div className=" m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span className=" font-semibold text-base">Article Category Name</span>
                <span><i>Small Description</i></span>
                <button className='bg-blue-100 text-gray-950 px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-200'>See details here ...</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className=" min-md:mt-24 mt-20 ">
        <img src="theThree.avif" className="w-full h-[30vw] max-sm:h-[45vw] m-auto " alt="" />
      </div>

      <div className="w-4/5 mt-20 max-sm:mt-7 space-y-7 m-auto">

        <h2 className=" font-semibold text-2xl max-sm:text-xl">Discover your fashion accessories</h2>
        <div className=" grid grid-cols-3 gap-11 max-sm:gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 rounded-2xl ">

          {/* POPULAR SHOES */}
          <div className=" bg-gray-50 p-7 dark:bg-slate-800 rounded-2xl">
            <div className="grid gap-3">

              <span className=" font-semibold">Most popular</span>
              <span>For Shoes</span>
              <img src="blackSupShoe.jpg" className="h-[30vw] max-sm:h-[60vw] w-full rounded-3xl hover:scale-105 duration-150" />

              <div className="grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1 gap-4">
                <img src="basket.jpg" className=" rounded-2xl hover:scale-105 duration-150 max-sm:h-[20vw]" />
                <img src="basket.jpg" className=" rounded-2xl hover:scale-105 duration-150  max-sm:h-[20vw]" />
                <img src="basket.jpg" className=" rounded-2xl hover:scale-105 duration-150 max-sm:hidden" />

              </div>
            </div>
          </div>

          {/* POPULAR GARMENTS */}
          <div className="">
            <div className="grid gap-3  bg-gray-50 p-7 dark:bg-slate-800 rounded-2xl">

              <span className=" font-semibold">Most popular</span>
              <span>For Garment</span>

              <div className=" grid grid-cols-2 gap-4">
                <img src="blackSupShoe.jpg" className=" h-[12vw] w-full rounded-2xl hover:scale-105 duration-150 max-sm:h-[30vw]" />
                <img src="towWomenCity.jpg" className=" h-[12vw] w-full rounded-2xl hover:scale-105 duration-150 max-sm:h-[30vw]" />
              </div>
              <div className=" grid grid-cols-2 gap-4">
                <img src="pullOverWithShoes.jpg" className=" h-[12vw] w-full rounded-2xl hover:scale-105 duration-150 max-sm:h-[30vw]" />
                <img src="blackSupShoe.jpg" className=" h-[12vw] w-full rounded-2xl hover:scale-105 duration-150 max-sm:h-[30vw]" />
              </div>

              <div className="flex gap-4 h-[10vw] w-full">
                <img src="towWomenCity.jpg" className=" rounded-2xl flex-1/3 hover:scale-105 duration-150 max-sm:hidden" />
                <span className="grid">
                  <span className=" text-2xl max-sm:text-sm font-semibold">New this week</span>
                  <span className="max-sm:text-sm text-gray-600">Look where all you need</span>

                </span>

              </div>
            </div>
          </div>

          {/* POPULAR ACCESSOIRIES */}
          <div className=" dark:bg-slate-800 rounded-2xl p-7 bg-gray-50">
            <div className="grid gap-3">

              <span className=" font-semibold">Most popular</span>
              <span>For Accessories</span>
              <img src="decorativeAccessories.jpg" className="h-[20vw] max-sm:h-[60vw] w-full rounded-3xl hover:scale-105 duration-150" />

              <div className="grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1 gap-4">
                <img src="blackWatchMen.jpg" className="rounded-2xl  h-[10vw] w-full hover:scale-105 duration-150 max-sm:h-[20vw]" />
                <img src="kitwifeformode.jpg" className="  h-[10vw] w-full hover:scale-105 duration-150  rounded-2xl  max-sm:h-[20vw]" />
                <img src="goldwatch" className=" h-[10vw] w-full hover:scale-105 duration-150   rounded-2xl max-sm:hidden max-sm:h-[20vw] max-sm:h-[20vw]" />

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CAROUSSEL */}
      <div className="mt-20">
        <div className="m-auto w-4/5 -mb-10">
          <h2 className=" font-semibold text-2xl  max-sm:text-md">find the clothes that match your radiance</h2>
        </div>
        <div className="mt-16 ">

          <SmallCaroussel article={articleForCategory} hightValue="h-[20vw]" />
        </div>
      </div>


      {/* FASHON SHOW */}
      <div className="  mt-20 text-slate-200 dark:text-slate-200">
        <div className="w-full ">
          <img src="prada_home_DT.avif" className=" bg-black opacity-95 w-full h-[35vw] max-sm:h-[62vw] opacity-40" alt="" />
        </div>
      </div>

      <div className="  w-full mt-40">
        <Footer />
      </div>

    </div>
  );
}
