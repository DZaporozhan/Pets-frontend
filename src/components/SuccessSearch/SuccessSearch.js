import { useEffect, useState } from 'react';
import SnowMan from '../../../src/icons/snowMan2.gif';
import { ImgSearch } from './SuccessSearch.styled';

export const SuccessSearch = () => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setStyle(true);
    }, 500);
    setTimeout(function () {
      setStyle(false);
    }, 8000);
  }, []);
  return style && <ImgSearch src={SnowMan} alt="snow-man" />;
};
