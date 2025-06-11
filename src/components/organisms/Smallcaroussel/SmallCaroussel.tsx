
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Article } from "@/types/Article";

interface IcarousselProps {
  article: Article;
  hightValue: string;
}

export default function SmallCaroussel({ article, hightValue }: IcarousselProps) {
  console.log(article.articleName)
  return (
    <Carousel
      opts={{ align: "center" }} className="w-4/5 h-fit max-sm:w-4/5 m-auto  dark:bg-slate-900 bg-opacity-20 rounded-2xl" >
      <Carousel>
        <CarouselContent className={" max-sm:h-[40vw] max-md:h-[40vw] m-auto " + hightValue}>
          
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/3 max-md:basis-2/3 max-sm:basis-3/3">
            <div className=" relative bg-transparent h-full w-full ">
              <div className=" absolute">

                <img src={article.articleImage} className="rounded-3xl max-sm:rounded-sm max-sm:w-full" alt="" />
              </div>
              <div className=" absolute bottom-4 max-sm:top-0 w-full">
                <div className="flex justify-between w-full px-4  font-semibold">
                  <span>
                    {article.articleName}
                  </span>
                  <span className=" ">
                    {article.articlePrice ? article.articlePrice + ' ' + article.articleDevice : ''}

                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className=" max-sm:w-7 max-sm:ml-4" />
        <CarouselNext className=" max-sm:w-7 max-sm:mr-4" />
      </Carousel>

    </Carousel>
  )
}
