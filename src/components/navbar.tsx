import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "@/components/ui/button";
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from "lucide-react";
  
  interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
  }
  
  interface NavbarProps {
    logo?: {
      url: string;
      src: string;
      alt: string;
    };
    menu?: MenuItem[];
  }
  
  const Navbar = ({
    logo = {
      url: "https://www.math.nus.edu.sg/cqf/",
      src: "/cqf-logo.png",
      alt: "Center for Quantitative Finance",
    },
    menu = [
      { title: "Home", url: "#hero" },
      { title: "About", url: "#about" },
      { title: "Speakers", url: "#speakers" },
      { title: "Venue", url: "#venue" },
    ],
  }: NavbarProps) => {
    return (
      <section className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-center px-6">
          {/* Desktop Menu */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="h-17 w-auto" alt={logo.alt} />
              </a>
              <div className="flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </nav>
  
          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="h-full w-auto" alt={logo.alt} />
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <img src={logo.src} className="h-8 w-auto" alt={logo.alt} />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover text-popover-foreground">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title} className="w-80">
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
  
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink asChild>
          <a
            href={item.url}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
          >
            {item.title}
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };
  
  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} />
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }
  
    return (
      <a key={item.title} href={item.url} className="text-md font-semibold">
        {item.title}
      </a>
    );
  };
  
  const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
      <a
        className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
        href={item.url}
      >
        <div className="text-foreground">{item.icon}</div>
        <div>
          <div className="text-sm font-semibold">{item.title}</div>
          {item.description && (
            <p className="text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          )}
        </div>
      </a>
    );
  };
  
  export { Navbar };