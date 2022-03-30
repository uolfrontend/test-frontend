import { BiUser } from 'react-icons/bi';

import './styles.scss';

const Header = ({ title }) => {
  return (
    <div id="header">
      <BiUser />
      <p>{title}</p>
    </div>
  );
};

export default Header;
