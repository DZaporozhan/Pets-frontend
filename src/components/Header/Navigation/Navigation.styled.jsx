import styled from 'styled-components';


export const NavMobMenu = styled.div`
 position: absolute;
    top: 100%;
    left: 0;
    height: 100vh;
    width:100vw;
    text-align: center;
    z-index: 100;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${({ menuToggle }) => (menuToggle ? 1 : 0)};
    background-color: ${p => p.theme.colors.background};
    

@media (min-width: 1280px) {
   display: none;
  }
`

export const NavTag = styled.nav`
display: flex;
align-items: center;
justify-content: start;
flex-direction: column-reverse;
padding-top: 46px;

@media (min-width: 768px) {
display: flex; 
padding-top: 88px;
 }
`
export const NavHeader = styled.nav`
margin-left: auto;
margin-right: 20px;


 @media (min-width: 1280px) {
 display: flex;
 width: 100%;
 margin-right: 0px;
 margin-left: 0px;
  }
`
export const ModalBtn = styled.div`
  @media (min-width: 1280px) {
    display: none;
  }
`

export const NavWrapper = styled.div`
display: flex;
align-items: center; 
flex-direction: column;
gap: 40px;

@media (min-width: 768px) { 
  gap: 60px;
}

@media (min-width: 1280px) {
display: flex;
flex-direction: row;
margin-left: 80px;
width: 40%;

  &:not(:last-child) {
    gap: 80px; }
}
`

export const AuthWrapper = styled.div`
display: flex;
gap: 12px;
margin-bottom: 60px;

@media (min-width: 768px) {
display: none;
 }
`
export const TabletWrapper = styled.div`
display: flex;
align-items: center; 
justify-content: center;

@media (min-width: 768px) {
gap: 12px;
 }

 @media (min-width: 1280px) {
 margin-right: 0px;
 width: 60%;
 justify-content: flex-end;
  }

`
