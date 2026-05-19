import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

export function Template(){
    return(
        <>
            <NavbarComp />
            {/* Menentukan tempat untuk konten dinamis */}
            <Outlet />
            <FooterComp/>
        </>
    )
}