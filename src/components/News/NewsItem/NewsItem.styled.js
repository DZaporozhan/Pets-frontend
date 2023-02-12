import styled from 'styled-components';

export const Article = styled.article`
position: relative;
&::before { 
    content:'';
    background: red;
    display: block;
    // position: absolute;
    // left:0;
    // top: 0;
    width: 200px;
    height: 4px;
    margin-bottom: 5px;
    backgruond-color: red;
    border-radius: 40px;
    background-image: linear-gradient(to right, rgba(255, 99, 78, 1), rgba(255, 223, 72, 1));
    @media ${p => p.theme.device.tablet} {
        height: 8px;
        width: 280px;
      }
    @media ${p => p.theme.device.desktop} {
        width: 340px;
      }

`
export const Heading = styled.h3`
display: -webkit-box;
    height: 66px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.35;
margin-bottom: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Link = styled.a`

color: ${p => p.theme.colors.accent};
   &:hover{
         color: ${p => p.theme.colors.buttonAccent};
     }
     transition: ${p=> p.theme.transition}
`
export const DateSpan = styled.span`
color: rgba(17, 17, 17, 0.6);
font-weight: 400;
font-size: 16px;
line-height: 1.37;
`
export const Text = styled.p`
color: ${p => p.theme.colors.newsText};
display: -webkit-box;
-webkit-line-clamp: 7;
 -webkit-box-orient: vertical;
 overflow: hidden;
  text-overflow: ellipsis;
@media ${p => p.theme.device.tablet} {
    -webkit-line-clamp: 6;
  }
@media ${p => p.theme.device.desktop} {
    -webkit-line-clamp: 5;
  }
`
export const Details = styled.div`
margin-top: 20px;
 display: flex;
justify-content: space-between;
`