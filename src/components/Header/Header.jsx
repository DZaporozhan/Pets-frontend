import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

import { Container } from "./Container/Container";
import {InnerContainer, HeaderStyle} from "./Header.styled"


export const Header = () => {
  return (
    <HeaderStyle>
      <Container> 
        <InnerContainer> 
      <Logo />
        
      <Navigation />
      </InnerContainer>
    
    </Container>
    </HeaderStyle>
  );
};

