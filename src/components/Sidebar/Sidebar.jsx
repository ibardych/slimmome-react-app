import { SidebarStyled } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarStyled>
        <div className="summary">
      <h2 className="title">Summary for 13.04.2023</h2>
      <ul className="listData">
        <li className="item">Left</li>
        <li className="item">Consumed</li>
        <li className="item">Daily rate</li>
        <li className="item">n% of normal</li>
      </ul>
      </div>
      <div className="reccommended">
      <h2 className="title">Food not reccommended</h2>
      <ul className="listFood">
        <li className="item">Flour products</li>
        <li>625 kgal</li>
        <li className="item">Milk</li>
        <li>2175 kcal</li>
        <li className="item">Read meet</li>
        <li>2800 kcal</li>
        <li className="item">Smoked meats</li>
        <li>78 %</li>
      </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
