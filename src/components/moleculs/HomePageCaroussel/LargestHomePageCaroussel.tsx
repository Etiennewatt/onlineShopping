
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SearchWithCombobox } from "../SelectResearch";

export default function LargestHomePageCaroussel() {
  return (
    <Carousel
      opts={{ align: "start" }} className="w-full max-sm:h-[45vw] m-auto" >

      <Carousel>
        <CarouselContent className="h-[65vw] min-md:h-[40vw]">
          <CarouselItem className=" ">

            <div className=" relative h-full">
              <div className=" absolute z-0 bg-black">
                <img src="blackHattWhitWhiteBasketShoes.jpg" className=" bg-black opacity-95 h-full" alt="" />
              </div>

              <div className=" absolute z-20 w-full px-11 mt-36">
                <div className="">
                  <div className=" flex justify-between max-md:mt-0 dark:text-slate-900 text-slate-50">
                    <div className="grid">
                      <span className="text-3xl font-semibold max-sm:text-sm ">Nano.com</span>
                      <div className=" my-2"><SearchWithCombobox /></div>
                    </div>
                    <div className="">
                      <select name="" id="">
                        <option value="">English</option>
                        <option value="">Francais</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </CarouselItem>
          <CarouselItem className=" bg-red-100 ">

            <div className=" relative h-full ">
              <div className=" absolute z-0 bg-black">

                {/* <video width="600" controls>
                  <source src="mostro.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video> */}

                {/* <video className="w-full" autoPlay>
                  <source src="../../../../videos/mostro.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> */}
              </div>
              <div className=" absolute top-20 z-20 w-full px-7   ">
                <div className="">
                  <div className=" flex justify-between   dark:text-slate-900 text-slate-50">
                    <div className="grid">
                      <span className="text-3xl font-semibold">Nano.com</span>
                      <div className=" my-2"><SearchWithCombobox /></div>
                    </div>
                    <span>
                      <select name="" id="">
                        <option value="">English</option>
                        <option value="">Francais</option>
                      </select>
                    </span>
                  </div>

                  <div className=" flex justify-items-center">

                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>



          <CarouselItem className="">

            <div className=" relative h-full ">
              <div className=" absolute z-0 bg-black">
                <img src="whiteGirlWhitBlackTshirt.jpg" className=" bg-black opacity-65" alt="" />
              </div>
              <div className=" absolute top-20 z-20 w-full px-7   ">
                <div className="">
                  <div className=" flex justify-between   dark:text-slate-900 text-slate-50">
                    <div className="grid">
                      <span className="text-3xl font-semibold">Nano.com</span>
                      <div className=" my-2"><SearchWithCombobox /></div>
                    </div>
                    <span>
                      <select name="" id="">
                        <option value="">English</option>
                        <option value="">Francais</option>
                      </select>
                    </span>
                  </div>

                  <div className=" flex justify-items-center">

                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className=" w-4/5 m-auto p-4 z-40">
          <CarouselPrevious className=" max-sm:w-7 max-sm:ml-4" />
          <CarouselNext className=" max-sm:w-7 max-sm:mr-4" />
        </div>
      </Carousel>

    </Carousel>
  )
}
