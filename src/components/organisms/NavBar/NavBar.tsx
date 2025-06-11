"use client"

import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import { Panier } from "@/components/organisms/panier"
import { ButtonThemeMode } from "@/components/ui/ButtonThemeMode"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import {useTranslations} from 'next-intl';

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

export default function NavBar() {
  const t = useTranslations('NavBar');
  return (
    <NavigationMenu className=" m-auto my-4 fixed z-20 mx-10 text-xl max-sm:overflow-auto">
      <NavigationMenuList className="">

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("Articles of the moment")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[30vw] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/fr">
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Link href="/" >{t("Home Page")}</Link>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t("Lots of shoes, accessories, and clothes for all occasions")}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <div className=" grid grid-cols-2">
                <div className=" grid">
                  <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                    {t("Find here lot of clothes for raining season and winter")}
                  </ListItem>
                  <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                    {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                  </ListItem>
                  <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                    {t("Accessories of week")}
                  </ListItem>
                </div>

                <div className=" grid">
                  {/* <ListItem href="/productOfWeekForBabies" title="For Babies"> */}
                  <ListItem title={t("For Babies")}>
                    <Link href="CategoriesProducts?categorie=babies" > {t("Product of week for babies")}</Link>
                  </ListItem>

                  {/* <ListItem href="/productOfWeekForWomen" title={t("For Women")}> */}
                  <ListItem title={t("For Women")}>
                    <Link href="CategoriesProducts?categorie=women" > {t("Product of week for Women")}</Link>
                  </ListItem>

                  {/* <ListItem href="/productOfWeekForMen" title="For Men"> */}
                  <ListItem href="CategoriesProducts?categorie=men"  title={t("For Men")}>
                     {t("Produt of week for Men")}
                  </ListItem>
                </div>
              </div>
            </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("Women")}</NavigationMenuTrigger>
          <NavigationMenuContent >
            <div className=" flex">

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Ready to wear")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Shoes")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              {/* PETITS MOROQUINERIE */}
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("small leather goods")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Bags")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>


              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Accessories")}</h2>
                <hr />
                {/* {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  >
                  {component.description}
                </ListItem>
              ))} */}

                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>
            </div>

          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("Men")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" flex">

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Ready to wear")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Shoes")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              {/* PETITS MOROQUINERIE */}
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("small leather goods")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Bags")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>


              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Accessories")}</h2>
                <hr />
                {/* {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    >
                    {component.description}
                  </ListItem>
                ))} */}

                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("Babies")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" flex">

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Ready to wear")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Shoes")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              {/* PETITS MOROQUINERIE */}
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("small leather goods")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>{t("Bags")}</h2>
                <hr />
                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>


              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[15vw] ">
                <h2>Accessories</h2>
                <hr />
                {/* {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    >
                    {component.description}
                  </ListItem>
                ))} */}

                <ListItem href="/warmClothesOfWeek" title={t("Warm Clothing of the week")}>
                  {t("Find here lot of clothes for raining season and winter")}
                </ListItem>
                <ListItem href="/lightClothesOfWeek" title={t("Light clothing of the week")}>
                  {t("The weather is getting warmer and you feel stuffy in your clothes? Find suitable clothes here")}
                </ListItem>
                <ListItem href="/accessoriesOfWeek" title={t("Typography")}>
                  {t("Accessories of week")}
                </ListItem>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Panier />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ButtonThemeMode />
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
