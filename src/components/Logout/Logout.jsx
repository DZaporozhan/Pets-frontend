// import { IoLogOutOutline } from 'react-icons/io5';
import { Button, LogoutIcon } from './Logout.styled';

const Logout = () => {
  return (
    <Button type="submit">
      <LogoutIcon />
      <span>Log Out</span>
    </Button>
  );
};

export default Logout;
