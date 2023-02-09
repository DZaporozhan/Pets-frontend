import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  width: 280px;
  height: 40px;
  border: none;
  border-radius: ${p => p.theme.radii.small};
  background: ${p => p.theme.colors.white};
  display: inline-block;
  outline: none;
  padding-left: 12px;

  &::placeholder {
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;

    line-height: 1.375;

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #535353;
    @media screen and (${p => p.theme.media.tablet}) {
      font-size: ${p => p.theme.fontSizes[4]}px;

      line-height: 1.35;
    }
  }

  @media screen and (${p => p.theme.media.tablet}) {
    width: 608px;
    height: 44px;
  }
`;

export const SearchFormButton = styled.button`
  right: 10px;
  display: inline-block;
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;

  margin-left: -40px;
`;
