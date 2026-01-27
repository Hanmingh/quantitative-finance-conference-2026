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
  import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
  
  interface MenuItem {
    title: string;
    url: string;
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
      { title: "Home", url: "/" },
      { title: "Keynotes", url: "/#keynotes" },
      { title: "About", url: "/#about" },
      { title: "Registration", url: "/#register" },
      { 
        title: "Program", 
        url: "/program",
        items: [
          { title: "Summer School", url: "/summer-school" },
          { title: "Workshop", url: "/workshop" },
        ]
      },
    ],
  }: NavbarProps) => {
    return (
      <section className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-center px-6">
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="h-17 w-auto" alt={logo.alt} loading="eager" />
              </a>
              <div className="flex items-center">
                <NavigationMenu viewport={false}>
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
                <img src={logo.src} className="h-full w-auto" alt={logo.alt} loading="eager" />
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
                        <img src={logo.src} className="h-8 w-auto" alt={logo.alt} loading="eager" />
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
  
  const HashLink = ({ item, className }: { item: MenuItem; className: string }) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const scrollToElement = (hash: string) => {
      const element = document.getElementById(hash);
      if (element) {
        const navbarHeight = 80; // Height of sticky navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    };
    
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      const [path, hash] = item.url.split('#');
      const targetPath = path || '/';
      
      if (location.pathname === targetPath) {
        // Already on the page, just scroll
        scrollToElement(hash);
      } else {
        // Navigate to the page first, then scroll
        navigate(targetPath);
        setTimeout(() => {
          scrollToElement(hash);
        }, 100);
      }
    };

    return (
      <a href={item.url} onClick={handleClick} className={className}>
        {item.title}
      </a>
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <Link to={item.url} className="outline-none">
            <NavigationMenuTrigger className="bg-background data-[state=open]:bg-muted">{item.title}</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="w-36 p-1">
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={subItem.url}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                    >
                      {subItem.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    // Check if it's a hash link
    const isHashLink = item.url.includes('#');
    const baseClassName = "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground bg-background";
  
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink asChild>
          {isHashLink ? (
            <HashLink item={item} className={baseClassName} />
          ) : (
            <NavLink
              to={item.url}
              end={item.url === '/'}
              className={({ isActive }) =>
                `group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground ${
                  isActive ? 'bg-muted text-accent-foreground' : 'bg-background'
                }`
              }
            >
              {item.title}
            </NavLink>
          )}
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
          <AccordionContent className="mt-2 pl-4 flex flex-col gap-2">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                to={subItem.url}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {subItem.title}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    // Check if it's a hash link
    const isHashLink = item.url.includes('#');
  
    if (isHashLink) {
      return (
        <HashLink
          key={item.title}
          item={item}
          className="text-md font-semibold"
        />
      );
    }

    return (
      <NavLink
        key={item.title}
        to={item.url}
        end={item.url === '/'}
        className={({ isActive }) =>
          `text-md font-semibold ${isActive ? 'text-accent' : ''}`
        }
      >
        {item.title}
      </NavLink>
    );
  };
  
  export { Navbar };
