// import { IoLogOutOutline } from 'react-icons/io5';
import { Button, LogoutIcon } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLoguot = () => dispatch(logout());

  return (
    <Button type="button" onClick={handleLoguot}>
      <LogoutIcon />
      <span>Log Out</span>
    </Button>
  );
};

export default Logout;
