import DancingBear from '../../../src/icons/dancingBear_min2.gif';
import { Text, ErrorPosition, Img } from './ErrorSearch.styled';

export const ErrorSearch = () => {
  return (
    <ErrorPosition>
      <Text> Oops, Notices Not Found</Text>
      <Img src={DancingBear} alt="dancing bear" />
    </ErrorPosition>
  );
};
