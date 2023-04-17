import { ForbiddenProducts, SidebarStyled } from './Sidebar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectDaySummary } from 'redux/diary/selectors';
import { formatDate } from 'helpers';
import { diaryDayInfo } from 'redux/diary/operations';
// import { selectNotAllowedProducts } from 'redux/calculator/selectors';
import { selectUser } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { useMemo } from 'react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const memoizedDayNow = useMemo(() => new Date(), []);
  const daySummary = useSelector(selectDaySummary);
  const forbiddenProducts = user.userData.notAllowedProducts;
  

  useEffect(() => {
    const date = memoizedDayNow.toISOString().slice(0, 10);
    dispatch(diaryDayInfo(date));
  }, [dispatch, memoizedDayNow]);

  return (
    <SidebarStyled>
      <div className="container">
        <div className="summary">
          <h2 className="title">Summary for {formatDate(memoizedDayNow)}</h2>
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
        {forbiddenProducts.length > 0 && (
          <div className="reccommended">
            <h2 className="title">Food not reccommended</h2>
            <ForbiddenProducts className="listFood">
              {forbiddenProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ForbiddenProducts>
          </div>
        )}
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
