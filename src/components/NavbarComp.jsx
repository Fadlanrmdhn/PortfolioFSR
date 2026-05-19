
import { Button, Navbar, NavbarBrand } from "flowbite-react";
import image from "../assets/logos.png";
import SidebarComp from "./SidebarComp";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const navItems = [
  { label: "Home", href: "#",  },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Pricing", href: "#" },
];

export default function NavbarComp() {
  return (
    <Navbar fluid rounded className="font-['Poppins'] fixed left-0 z-50 w-full px-4 md:px-12 transition-all duration-500 ease-in-out top-0 py-6 bg-[#0303032b] backdrop-blur">
      <NavbarBrand href="/" className="text-white ms-3">
        <img src={image} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap font-semibold dark:text-white font-mono hidden md:block">
          Fadlan Septian Ramadhan
        </span>
      </NavbarBrand>

      <div className="hidden md:flex items-center gap-4 border-2 p-2 rounded-4xl text-grey-400 border-gray-500 bg-[#0a0a0a]">
        {navItems.map((item) => (
          <Button
            key={item.label}
            href={item.href}
            className={'rounded-full bg-[#0a0a0a] text-white hover:bg-gray-700'}
            pill
          >
            {item.label}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-4 md:order-2">
        <Button className="rounded-4xl bg-white text-black me-4 transition-transform duration-500 hover:scale-110 hover:bg-white">
          Contact <PiPaperPlaneTiltFill className="m-3"/>
        </Button>
        <div className="md:hidden">
          <SidebarComp items={navItems} />
        </div>
      </div>
    </Navbar>
  );
}

