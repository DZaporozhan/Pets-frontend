import styled from 'styled-components';

export const List = styled.ul`
display: flex;
 	flex-wrap: wrap;
	gap: 12px;
	max-width: 500px;
	margin: 0 auto;
	margin-top: 28px;
	justify-content: center;
    @media ${p => p.theme.device.tablet} {
        margin-top: 40px;
		justify-content: space-evenly;
		gap: 32px;
		max-width: 100%;
        }
    @media ${p => p.theme.device.desktop} {
        margin-top: 60px;
        display: grid;
        gap: 32px;
        grid-template-columns: 1fr 1fr 1fr;
            }
`
