import styled from 'styled-components';

export const Item = styled.li`
    min-height: 200px;
	width: 80%;
	background: ${p => p.theme.colors.white};
	box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
	border-radius: 40px;
	padding: 15px;
	text-align: center;


    @media ${p => p.theme.device.tablet} {
        width: calc(40%);
        }
    @media ${p => p.theme.device.desktop} {
        height: 287px;
		// width: calc(30%);
		width: 100%;
            }
`;
export const Title = styled.a`
display: inline-block;
color: ${p => p.theme.colors.accent};
font-weight: 700;
font-size: 12px;
line-height: 1.3;
text-transform: uppercase;
@media ${p => p.theme.device.tablet} {
    font-size: 16px;
    line-height: 1.37;
    height: 50px;
    }
@media ${p => p.theme.device.desktop} {
    height: 50px;
        }
`
export const Wrap = styled.div`
display: flex;
flex-wrap: nowrap;
margin-top: 12px;
@media ${p => p.theme.device.tablet} {
    margin-top: 0;
    }
`
export const ImageWrap = styled.div`
width: 158px;
`
export const Image = styled.img`
width: 100%;
`