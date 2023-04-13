import { MessageStyled } from './Message.styled';

const Message = ({ children }) => {
  return (
    <MessageStyled>
      <div>{children}</div>
    </MessageStyled>
  );
};

export default Message;
