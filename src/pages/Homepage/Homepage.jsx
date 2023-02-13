
import { Main, Text, Container, MobileWrapper, HeartWrapper, ImageWrapper, Image, SectionWrapper} from "./Homepage.styled"
import girtWithDogMob1x  from "./images/girlWithDog_1x-mobile-min.png"
import girtWithDogMob2x from "./images/girlWithDog_2x-mobile-min.png"
import girtWithDogTab1x from "./images/girlWithDog_1x-tablet-min.png"
import girtWithDogTab2x from "./images/girlWithDog_2x-tablet-min.png"
import girtWithDogDesk1x from "./images/girlWithDog_1x-desktop-min.png"
import girtWithDogDesk2x from "./images/girlWithDog_2x-desktop-min.png"
import heart from "./images/heart-min.png"


const Homepage = () => {
  return (
    <Main>
      <Container> 
        <SectionWrapper> 
          <Text>Take good care of your small pets</Text>
          <ImageWrapper> 
            
            <picture>
								<source srcSet={`${girtWithDogDesk1x} 1x, ${girtWithDogDesk2x} 2x`}
									media="(min-width: 1280px)"/>
								<source
									srcSet={`${girtWithDogTab1x} 1x, ${girtWithDogTab2x} 2x`}
									media="(min-width: 768px)"/>

								<Image
									src={girtWithDogMob1x}
									alt='Girl with a dog'
									width={645} 
								/>
              <HeartWrapper> <img src={heart} alt="cute heart" width={92} /> </HeartWrapper>
            
            </picture>
        </ImageWrapper>
      </SectionWrapper>
         
        
        <MobileWrapper> 
            <picture> 
              <source
              media="(min-width: 320px)"
              srcSet={`${girtWithDogMob1x} 1x, ${girtWithDogMob2x} 2x`}/>

              <img
							src={girtWithDogMob1x}
							alt='Girl with a dog'
							width={320}
						/>
            </picture>
          </MobileWrapper>
    </Container>
    </Main>
    
      )
};

export default Homepage;
