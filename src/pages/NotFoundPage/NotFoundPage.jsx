import DancingBear from "../../../src/icons/dancingBear-cropped.gif"
import { Container, Image, TextContainer, Title, Subtitle, Text, DirectionLink, DirectionText, DirectionWrapper} from "./NotFoundPage.styled"
import { NavLinkStyled } from "components/Header/AuthNav/AuthNav.styled";

const primary = {
  "color": 0
}

const NotFoundPage = () => {
  return(
    <> 
      <Container> 
      
        <Image src={DancingBear} alt="dancing bear" />
        

        <TextContainer> 
        <Title>404</Title>
        <Subtitle> Oops, Page Not Found</Subtitle>
        <Text> You didn't break the internet, but we can't find what you are looking for.</Text>
          
          <DirectionWrapper>
          <DirectionText> Go back to </DirectionText>
          <DirectionLink> 
            <NavLinkStyled to="/" primary={primary}>Home</NavLinkStyled>
            </DirectionLink>
            </DirectionWrapper>
        </TextContainer>
    </Container>
  </>)
};

export default NotFoundPage;
