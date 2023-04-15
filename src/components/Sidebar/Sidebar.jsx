import { SidebarStyled } from './Sidebar.styled';
import { useSelector } from 'react-redux';
import { DiaryStyledList } from 'components/Diary/Diary.styled';

const Sidebar = () => {
  const forbiddenProducts = useSelector(
    state => state.calculator.notAllowedProducts
  );

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
      { forbiddenProducts.length>0 && 
        <div className="reccommended">
        <h2 className="title">Food not reccommended</h2>
        <DiaryStyledList className="listFood">
          {forbiddenProducts.map((product, index) => (
            <li key={index} className="item">
              {product}
            </li>
          ))}
        </DiaryStyledList>
      </div>
      }
      
    </SidebarStyled>
  );
};

export default Sidebar;
