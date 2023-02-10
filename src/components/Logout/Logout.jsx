// import { IoLogOutOutline } from 'react-icons/io5';
import { ReactComponent as SvgLogout } from './img/logout-icon.svg';
import { Button } from './Logout.styled';

const Logout = () => {
  return (
    <Button type="submit">
      <SvgLogout />
      <span>Log Out</span>
    </Button>
  );
};

export default Logout;
