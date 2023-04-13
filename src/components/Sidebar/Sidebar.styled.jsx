import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/loader/selectors';

export const SideBar = () => {
  const isLoading = useSelector(selectIsLoading);

  return <></>;
};
