import { SidebarStyled } from './Sidebar.styled';
import imagedesk from 'images/Sidebarimg/imgdesk2x.png';
import imagetab from 'images/Sidebarimg/imgtab2x.png';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DiaryStyledList } from 'components/Diary/Diary.styled';

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const forbiddenProducts = useSelector(
    state => state.calculator.notAllowedProducts
  );
  let styles = {
    background: `url(${isSmallScreen ? imagetab : imagedesk}) ${
      isSmallScreen ? `bottom right` : `right`
    } #F0F1F3 no-repeat`,
    backgroundSize: `${isSmallScreen ? `335px 510px` : `auto 100%`}`,
  };
  if (isMobileScreen) {
    styles = {
      background: `#F0F1F3`,
    };
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.outerWidth <= 320);
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SidebarStyled style={styles}>
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
        <DiaryStyledList className="listFood">
          {forbiddenProducts.map(product => (
            <li className="item">{product}</li>
          ))}
        </DiaryStyledList>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
