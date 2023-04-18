import { ForbiddenProducts, SidebarStyled } from './Sidebar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectSelectedDate } from 'redux/diary/selectors';
import { formatDate } from 'helpers';
import { selectUser } from 'redux/auth/selectors';
import { LoaderSmall } from 'components/Loader/Loader';

const Sidebar = () => {
  const today = new Date();
  const isoDate = today.toISOString().slice(0, 10);
  const user = useSelector(selectUser);
  console.log(user);
  const daySummaryFiltered =
    user.days?.filter(day => day.daySummary.date === isoDate) || [];
  const daySummary = daySummaryFiltered[0]?.daySummary || [];
  const selectedDate = useSelector(selectSelectedDate);

  const forbiddenProducts = user.userData.notAllowedProducts;

  const isLoading = useSelector(selectIsLoading);

  return (
    <SidebarStyled>
      <div className="container">
        <div className="summary">
          <h2 className="title">Summary for {formatDate(selectedDate)}</h2>
          {isLoading && <LoaderSmall />}
          {!isLoading && (
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
          )}
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
