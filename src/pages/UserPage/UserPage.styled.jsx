const { default: styled } = require('styled-components');

export const UserContainer = styled.div`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;

  display: block;
  padding: 20px;
`;

export const UserSection = styled.section`
  padding: 20px 16px;
  margin-bottom: 40px;

  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleUser = styled.h2`
  display: flex;
  align-items: center;

  margin-bottom: 18px;

  font-family: inherit;
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 27px;
  letter-spacing: 0.04em;

  color: #111111;
`;

// //You can delete or modify styles below before importing your's pet cards section styles
export const PetSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const PetContainer = styled.div`
  height: 541px;
  display: inline-block;
  width: 100%;

  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: ${p => p.theme.radii.normal};
`;

export const TitlePets = styled.h2`
  display: flex;
  align-items: center;

  font-family: inherit;
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 27px;
  letter-spacing: 0.04em;

  color: #111111;
`;
// ///////////////////////////////////////////////
