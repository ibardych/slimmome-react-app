// import { useSelector } from 'react-redux';
// import { selectIsLoading } from 'redux/loader/selectors';

// export const SideBar = () => {
//   const isLoading = useSelector(selectIsLoading);

//   return <></>;
// };

import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';

export const SidebarStyled = styled.div`
padding-top: 40px;
padding-bottom: 40px;
font-family: 'Verdana';
background-color: #F0F1F3;
padding-left: 20px;

@media screen and (min-width: ${mediaSizes.tablet}) {
 display: flex;
 background-image: url(images/Sidebarimg/imgtab2x);
 padding-left: 32px;
 padding-bottom: 80px;
 padding-top: 80px;
}

@media screen and (min-width: ${mediaSizes.desktop}) {
  width: 517px;
  display: block;
  padding: 0;
  padding-left: 106px;
  padding-bottom: 166px;
  background-image: url(images/Sidebarimg/imgdesk2x);

  & .summary {
    padding-top: 149px;
    margin-bottom: 60px;
  }
  
 }

& .title {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #212121;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 40px;
  
  }
}

& .item {
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: #9B9FAA;
}

& .item:last-child {
  margin-bottom: 0;
}

& .listData {
  margin-bottom: 40px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 60px;
  
  }
}
`
