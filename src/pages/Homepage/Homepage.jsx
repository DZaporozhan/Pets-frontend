import { Main, Text, Background, SectionWrapper} from "./Homepage.styled"
import { useMediaQuery } from 'react-responsive';

const Homepage = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <Main>

      {isDesktop ? (<Background>  <SectionWrapper>
        <Text>Take good care of your small pets</Text> </SectionWrapper> </Background>)
        :(<Background> <Text>Take good care of your small pets</Text> </Background>)
      }
      
    </Main>
      
      )
};

export default Homepage;
