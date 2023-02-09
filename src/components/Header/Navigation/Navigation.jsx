
import { NavMobMenu, NavTag, NavHeader, NavWrapper, AuthWrapper, ModalBtn, TabletWrapper } from "./Navigation.styled";
import  {ReactComponent as BurgerBtn }  from "../Icons/burger.svg"
import { ReactComponent as CloseBtn } from "../Icons/close.svg"
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Nav } from "../Nav/Nav";
// import { UserNav } from "../UserNav/UserNav";
import { AuthNav } from "../AuthNav/AuthNav";




export const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({  query: '(min-width: 1280px)' });

    const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <> 
  <NavHeader> 
    {isDesktop ? (<NavWrapper> <Nav /></NavWrapper>) : ""} 
      
    {!isMenuOpen ? (isTablet && (
      <TabletWrapper>
        <AuthNav />
        {/* <UserNav /> */}
      </TabletWrapper>)) : ("") }
  </NavHeader>
      
    <ModalBtn>
        {isMenuOpen ? (
          <CloseBtn size="40" onClick={toggleMenu} />) :
          (<BurgerBtn size="40" onClick={toggleMenu} />)}
    </ModalBtn>
     
    
    <NavMobMenu menuToggle={isMenuOpen}>
    <NavTag> 
    <NavWrapper>
      <Nav />
    </NavWrapper>
      
   <AuthWrapper> 
    <AuthNav /> 
     {/* <UserNav />  */}
   </AuthWrapper> 
      </NavTag>
    </NavMobMenu>
     
  </>
  );

 
};

