import styled from 'styled-components';

export const Li = styled.li`
display: flex;

// justify-content: space-between;
justify-content: center;
font-weight: 500;
font-size: 12px;
line-height: 1.3;
`;

export const Time = styled.p`
text-align: center;
font-family: ${p => p.theme.fonts.body};
`;
export const Day = styled.p`
margin-right: 15px;
font-family: ${p => p.theme.fonts.body};
`;
export const Ul = styled.ul`
padding: 10px;
border: 1px solid #f59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 4px;
font-family: ${p => p.theme.fonts.body};
`;
