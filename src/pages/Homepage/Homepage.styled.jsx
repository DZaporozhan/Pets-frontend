import styled from 'styled-components';
import backgroundImageMob from "./images/background-mobile-min.png"
import backgroundImageTablet from "./images/background-tablet-min.png"
import backgroundImageDesk from "./images/background-desktopE5-min.png"


export const Main = styled.main`
	margin: 0 auto;
	
	@media screen and (min-width: 1280px) {
		max-width: 1280px;
		margin-top: 30px;
	}

}
`

export const Text = styled.h1`
	font-weight: 700;
	font-size: 32px;
	line-height: 1.38;
    font-family: ${p => p.theme.fonts.body};
    padding: 60px 20px 60px 20px;

   @media (min-width: 768px) {
        font-size: 68px;
		line-height: 1.47;
        padding: 88px 32px 118px 32px;
   }

   	@media screen and (min-width: 1024px) {
        padding: 32px 0 0 0;
        width: 100%;
    }
`

export const Container = styled.div`

    background: url(${backgroundImageMob});
    background-position: bottom -15px right calc(50vw - 375px);
	background-repeat: no-repeat;
	height: calc(100vh - 59px);

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

    @media screen and (min-width: 768px) {  
        flex-direction: column;
		background: url(${backgroundImageTablet});
		background-position: 22% calc(9vh + 100%);
		background-repeat: no-repeat;
        height: calc(100vh - 74px);
        }

	@media screen and (min-width: 1024px) {
        padding-top: 40px;
        
		background:  url(${backgroundImageTablet});
		background-position: 60% calc(22vh + 100%);
        background-repeat: no-repeat;
        background-size: contain;
        height: calc(100vh - 99px);

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
	
	}
	@media screen and (min-width: 1180px) {
        padding-top: 40px;
        flex-direction: column;
		background:  url(${backgroundImageDesk});
		background-position:  100% calc(10vh + 100%);
        background-repeat: no-repeat;
        background-size: contain;
		
	}

`
export const ImageWrapper = styled.div`
	display: none;
    
  
    @media (min-width: 768px) { 
        display: flex;
		justify-content: center;
        position: relative;
  }

`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
   
	@media screen and (min-width: 1024px) {
		flex-direction: row;
        padding: 0 16px;
        justify-content: flex-end;
	}
	`

export const MobileWrapper = styled.div`

justify-content: center;
display: flex;

  @media (min-width: 768px) { 
    display: none;
  }

`
export const Image = styled.img`
	display: flex;
	width: 100%;


    @media (min-width: 768px) { 
		max-width: 645px;
        width: 100%;
	}
	@media screen and (min-width: 1024px) {
		width: 590px;
		
	}
	@media screen and (min-width: 1180px) {
		width: 590px;
	}
`

export const HeartWrapper = styled.div`
        
    display: none;

	@media screen and (min-width: 1180px) {
		display: flex;
		position: absolute;
		left: 48px;
		top: 43px;
	}
`
