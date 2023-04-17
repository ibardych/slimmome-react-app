import { CalculatorEl } from 'components/Calculator/Calculator';
import Sidebar from 'components/Sidebar/Sidebar';
import { HomeStyled } from 'components/Styled/HomePage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HomeStyled>
        <CalculatorEl />
        {isLoggedIn && <Sidebar />}
      </HomeStyled>
    </>
  );
};

export default Home;
