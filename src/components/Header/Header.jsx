import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

import { Container } from "./Container/Container";
import {InnerContainer} from "./Header.styled"


export const Header = () => {
  return (
    <header>
      <Container> 
        <InnerContainer> 
      <Logo />
        
      <Navigation />
      </InnerContainer>
    
    </Container>
    </header>
  );
};

