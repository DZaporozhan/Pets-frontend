// import { IoLogOutOutline } from 'react-icons/io5';
import { ReactComponent as SvgLogout } from './img/svgLogout.svg';

const Logout = () => {
  return (
    <button type="submit">
      <SvgLogout />
      <span>Log Out</span>
    </button>
  );
};

export default Logout;
