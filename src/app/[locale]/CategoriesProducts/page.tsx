"use client"
import { SmallCaroussel } from '@/components/organisms/Smallcaroussel'
import { Article } from '@/types/Article'
import React, { useState } from 'react'

function CategoriesProducts() {

  const [articleForCategory, setArticleForCategory] = useState<Article>({
    articleImage: "blackHattWhitWhiteBasketShoes.jpg",
    articleName: "",
    articleDevice: ""
  })

  const hightValueLargeScreen = "h-[5vw]"
  const hightValueSmallScreen = "h-[1vw]"


  return (
    <div className='flex flex-col gap-y-16 mt-20'>
      <div className=" grid grid-cols-2 max-sm:grid-cols-1 shadow w-4/5 m-auto p-7">
        <div className=" w-[30vw] grid max-sm:w-auto">
          
          <img src="../blackWatchMen.jpg" className=' w-full h-[25vw] max-sm:h-[35vw]  rounded-xl' alt="" />
          <div className=" w-full mt-16 h-full max-sm:hidden">
            <SmallCaroussel article={articleForCategory} hightValue={hightValueLargeScreen} />
          </div>
          <div className=" w-full mt-6 h-full min-sm:hidden">
            <SmallCaroussel article={articleForCategory} hightValue={hightValueSmallScreen} />
          </div>

        </div>

        <div className=" flex flex-col space-y-6">
          <div className=" grid gap-2">
            <h1 className=' text-2xl font-semibold'>Name of article</h1>
            <span className=" text-xl">price: 15 000 XAF</span>
            <hr />
          </div>

          <div className="grid gap-2">
            <span className=" font-semibold ml-2 ">Color</span>
            <div className=" flex gap-2">
              <button className=' py-2 px-4 rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:px-2 shadow'>Black</button>
              <button className=' py-2 px-4 rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:px-2 shadow'>Red</button>
              <button className=' py-2 px-4 rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:px-2 shadow'>Yellow</button>
              <button className=' py-2 px-4 rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:px-2 shadow'>Blue</button>
            </div>
          </div>

          <div className="grid">
            <span className=" font-semibold ml-2 ">Size</span>
            <div className=" flex-wrap gap-4 space-x-2">
              <button className='  py-2 px-4  rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:p-2 shadow'>XS</button>
              <button className='  py-2 px-4  rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:p-2 shadow'>X</button>
              <button className='  py-2 px-4  rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:p-2 shadow'>M</button>
              <button className='  py-2 px-4  rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:p-2 shadow'>L</button>
              <button className='  py-2 px-4  rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:p-2 shadow'>XL</button>
              <button className='  py-2 px-4  rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:p-2 shadow'>XXL</button>
              <button className='  py-2 px-4  rounded-full border hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer max-sm:text-sm max-sm:p-2 shadow'>XXXL</button>
            </div>
          </div>

          <button className=' mt-7 ml-2 bg-blue-700 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-500'>Add to the Card</button>
        </div>
      </div>

      {/* ARTICLES IN THIS CATEGORIY */}
      <div className="w-4/5 m-auto">
        <h2 className=' font-semibold text-2xl text-gray-900 dark:text-gray-100 mb-4'>Articles in category</h2>

        <div className=" m-auto">
          <div className=" flex flex-wrap gap-6 ">

            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>
            <div className=" max-lg:m-auto flex flex-col gap-4 space-x-3 w-56 p-4 shadow rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800  hover:scale-105 duration-150">
              <img src="../blackWatchMen.jpg" className=' rounded-xl' alt="" />
              <div className="grid gap-2">
                <span>Article Name</span>
                <span>Price 7 500 XAF</span>
                <button className='bg-blue-800 text-white px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-blue-600'>Add the Card</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesProducts
