import { SidebarStyled } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <div className="summary">
        <h2 className="title">Summary for 13.04.2023</h2>
        <ul className="listData">
          <li className="item">
            <h3 className="title__name">Left</h3>
            <p>625 kgal</p>
          </li>
          <li className="item">
            <h3 className="title__name">Consumed</h3>
            <p>2175 kcal</p>
          </li>
          <li className="item">
            <h3 className="title__name">Daily rate</h3>
            <p>2800 kcal</p>
          </li>
          <li className="item">
            <h3 className="title__name">n% of normal</h3>
            <p>78 %</p>
          </li>
        </ul>
      </div>
      <div className="reccommended">
        <h2 className="title">Food not reccommended</h2>
        <ul className="listFood">
          <li className="item">Flour products</li>
          <li className="item">Milk</li>
          <li className="item">Read meet</li>
          <li className="item">Smoked meats</li>
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
