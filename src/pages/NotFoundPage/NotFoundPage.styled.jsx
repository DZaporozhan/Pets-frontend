import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto;
padding: 50px 15px;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
gap: 30px;


@media (min-width: 768px) { 
     padding: 120px 30px;
     
}

@media (min-width: 900px) {
    padding: 120px 30px;
    flex-direction: row; 
 }

 @media (min-width: 1280px) {
padding: 120px 50px;

}
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
font-family: ${p => p.theme.fonts.body};
align-items: center;
justify-content: center;
text-align: center;

@media (min-width: 768px) {
justify-content: start;
   
 }
`
export const Title = styled.h1`
font-size: ${p => p.theme.fontSizes[11]}px;
color: ${p => p.theme.colors.hoverButton};
font-weight: ${p => p.theme.fontWeights.bold};
`

export const Subtitle = styled.p`
font-size: ${p => p.theme.fontSizes[7]}px;
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.accent};
font-weight: ${p => p.theme.fontWeights.bold};

@media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[8]}px;
 }
`
export const Text = styled.p`
font-size: ${p => p.theme.fontSizes[5]}px;
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.gray};


@media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[6]}px;
 }
`
export const DirectionLink = styled.div`
max-width: 200px;
`
export const DirectionText = styled.p`
font-size: ${p => p.theme.fontSizes[5]}px;
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.gray};
`

export const DirectionWrapper = styled.div`
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;
gap: 20px;

@media (min-width: 768px) {
   flex-direction: row;
 }
`
export const Image = styled.img`
border-radius: 50%; `