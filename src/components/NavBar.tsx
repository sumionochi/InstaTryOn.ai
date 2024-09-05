"use client"

import React, { useState } from 'react';
import logoImage from '@/assets/images/logosaas.png';
import MenuIcon from '@/assets/icons/menu.svg';
import Image from 'next/image';
import { Themetoggle } from './ui/Themetoggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type Props = {};

const NavBar = (props: Props) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
      <div className='w-full max-w-7xl mx-auto sticky top-0 bg-white dark:bg-black p-4 border-b z-50'>
      {/* Logo and title */}
      <div className='flex flex-row w-full items-center justify-between'>
        <div className='relative w-28 h-10 flex flex-col items-center justify-center'>
          <p className='text-xl relative text-center duration-1000 cursor-default animate-title whitespace-normal'>InstaTryOn</p>
          <p className='text-[10px] relative'>A BrandTech Company</p>
        </div>
        {/* Mobile menu and theme toggle */}
        <div className='flex flex-row items-center gap-2 sm:hidden'>
          <Themetoggle />
          <button onClick={toggleSheet}>
            <MenuIcon />
          </button>
        </div>
        {/* Desktop navigation menu */}
        <NavigationMenu className='hidden sm:flex'>
          <NavigationMenuList className='flex gap-6 items-center'>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image src={logoImage} alt="Logo" className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          InstaTryOn
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A BrandTech Company providing innovative solutions for seamless shopping experiences.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="#" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="#" title="Typography">
                    Styles for headings, paragraphs, lists...etc.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[
                    { title: "Solution 1", href: "#", description: "Description of solution 1." },
                    { title: "Solution 2", href: "#", description: "Description of solution 2." },
                    { title: "Solution 3", href: "#", description: "Description of solution 3." },
                  ].map((solution) => (
                    <ListItem key={solution.title} title={solution.title} href={solution.href}>
                      {solution.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="#" title="Our Story">
                    Learn about our journey and mission.
                  </ListItem>
                  <ListItem href="#" title="Team">
                    Meet the talented individuals behind InstaTryOn.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
            <Themetoggle />
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Shadcn Sheet for Mobile Menu with Accordion */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className='flex gap-0 pt-10 items-center w-full flex-col'>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigation menu for mobile devices</SheetDescription>
          <Separator />
          {/* Mobile navigation accordion */}
          <Accordion type="single" collapsible className='w-full mt-6'>
            <AccordionItem value="solutions">
              <AccordionTrigger>Solutions</AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-3 p-4">
                  {[
                    { title: "Solution 1", href: "#", description: "Description of solution 1." },
                    { title: "Solution 2", href: "#", description: "Description of solution 2." },
                    { title: "Solution 3", href: "#", description: "Description of solution 3." },
                  ].map((solution) => (
                    <li key={solution.title} className='p-2'>
                      <a href={solution.href} className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition">
                        <div className="text-sm font-medium">{solution.title}</div>
                        <p className="text-sm">{solution.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources">
              <AccordionTrigger>Resources</AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-3 p-4">
                  {[
                    { title: "Resource 1", href: "#", description: "Description of resource 1." },
                    { title: "Resource 2", href: "#", description: "Description of resource 2." },
                  ].map((resource) => (
                    <li key={resource.title} className='p-2'>
                      <a href={resource.href} className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition">
                        <div className="text-sm font-medium">{resource.title}</div>
                        <p className="text-sm">{resource.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="about">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-3 p-4">
                  <li className='p-2'>
                    <a href="#" className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition">
                      <div className="text-sm font-medium">Our Story</div>
                      <p className="text-sm">Learn about our journey and mission.</p>
                    </a>
                  </li>
                  <li className='p-2'>
                    <a href="#" className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition">
                      <div className="text-sm font-medium">Team</div>
                      <p className="text-sm">Meet the talented individuals behind InstaTryOn.</p>
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
      </div>
  );
};

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
});
ListItem.displayName = "ListItem";

export default NavBar;
