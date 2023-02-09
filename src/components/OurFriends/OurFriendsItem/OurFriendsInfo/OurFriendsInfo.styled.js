import styled from 'styled-components';

export const Info = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
text-align: start;
margin-left: 10px;
gap: 5px;
text-decoration: none;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.3;
word-break: break-all;
width: 55%;
color: #000000;
& a:visited,
& a:link {
	color: #000000;
	}
@media ${p => p.theme.device.tablet} {
    font-size: 14px;
	line-height: 1.35;
    }
`;
export const Time = styled.p`
font-family: ${p => p.theme.fonts.body};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes[0]}px;
line-height: 1.3;
display: flex;
align-items: center;
background-color: transparent;
outline: none;
box-shadow: none;
margin: 0;
padding: 0;
text-transform: capitalize;
text-align: start;
min-width: 0;
color: #000000;
@media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[1]}px;
	line-height: 1.35;
    }
@media ${p => p.theme.device.desktop} {
    font-size: ${p => p.theme.fontSizes[2]}px;
        line-height: 1.35;
      
        }
`
export const Links = styled.a`
&:link,
&:visited {
		text-decoration: none;
		transition: ${p=>p.theme.transition};
		&:hover {
			color: #f59256;
		}
	}
`