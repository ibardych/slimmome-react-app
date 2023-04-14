import { Menu, Link, List } from './MobileMenu.styled.jsx';

const MobileMenu = () => {
  return (
    <Menu>
      <List>
        <Link to="diary">diary</Link>
        <Link to="calculator">calculator</Link>
      </List>
    </Menu>
  );
};

export default MobileMenu;
