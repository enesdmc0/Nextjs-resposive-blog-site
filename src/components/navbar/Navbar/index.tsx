import React from 'react';
import Logo from "@/components/navbar/Logo";
import Container from "@/components/Container";
import Menu from "@/components/navbar/Menu";

const Navbar = () => {
    return (
        <div className="fixed w-full z-10 p-4 shadow bg-col1">
            <Container>
               <div className="flex flex-row items-center justify-between">
                   <Logo/>
                   <Menu/>
               </div>
            </Container>
        </div>
    );
};

export default Navbar;
