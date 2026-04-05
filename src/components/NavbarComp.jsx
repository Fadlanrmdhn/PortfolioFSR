
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import image from "../assets/logos.png"


export default function NavbarComp() {
  return (
    <Navbar fluid rounded className="font-['Poppins'] fixed left-0 z-50 w-full px-4 md:px-12 transition-all duration-500 ease-in-out top-0 py-6 bg-[#0303032b] backdrop-blur">
      <NavbarBrand href="https://flowbite-react.com" className="text-white ms-3">
        <img src={image} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap font-semibold dark:text-white font-mono">Fadlan Septian Ramadhan</span>
      </NavbarBrand>
      <div className="flex md:order-2 ">
        <Button className="rounded-4xl bg-white text-black me-4 transition-transform duration-500 hover:scale-110 hover:bg-white">Contact</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="border-2 p-2 rounded-4xl text-grey-400 border-gray-500 bg-gray-900 ">
        <Button href="#" className="bg-gray-700 hover:bg-gray-700" pill>
          Home
        </Button>
        <Button href="#" className="bg-gray-900 hover:bg-gray-700/50" pill>About</Button>
        <Button href="#" className="bg-gray-900 hover:bg-gray-700/50" pill>Services</Button>
        <Button href="#" className="bg-gray-900 hover:bg-gray-700/50" pill>Pricing</Button>
      </NavbarCollapse>
    </Navbar>
  );
}

