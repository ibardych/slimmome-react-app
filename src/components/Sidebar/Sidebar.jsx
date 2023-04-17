import { SidebarStyled } from './Sidebar.styled';
import { useSelector } from 'react-redux';
import { DiaryStyledList } from 'components/Diary/Diary.styled';
import { selectDaySummary, selectSelectedDate } from 'redux/diary/selectors';
import { selectUser } from 'redux/auth/selectors';
import { formatDate } from 'helpers';

const Sidebar = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const daySummary = useSelector(selectDaySummary);
  const forbiddenProducts = useSelector(
    state => state.auth.user.userData.notAllowedProducts
  );
  const userState = useSelector(selectUser);

  return (
    <SidebarStyled>
      <div className="summary">
        <h2 className="title">Summary for {formatDate(selectedDate)}</h2>
        <ul className="listData">
          <li className="item">
            <h3 className="title__name">Left</h3>
            <p>{daySummary?.kcalLeft?.toFixed(2) ?? 0} kgal</p>
          </li>
          <li className="item">
            <h3 className="title__name">Consumed</h3>
            <p>{daySummary?.kcalConsumed?.toFixed(2) ?? 0} kcal</p>
          </li>
          <li className="item">
            <h3 className="title__name">Daily rate</h3>
            <p>{daySummary?.dailyRate?.toFixed(2) ?? 0} kcal</p>
          </li>
          <li className="item">
            <h3 className="title__name">n% of normal</h3>
            <p>{daySummary?.percentsOfDailyRate?.toFixed(2) ?? 0} %</p>
          </li>
        </ul>
      </div>
      {forbiddenProducts.length > 0 && userState && (
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
      )}
    </SidebarStyled>
  );
};

export default Sidebar;
