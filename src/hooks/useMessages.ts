import { useContext } from 'react';
import { MessagesContext, MessageType } from '../components/Messages/Messages';

export const useMessage = () => {
  const { handleOpen, setType, setMessage } = useContext(MessagesContext);

  const message = {
    success(message?: string) {
      handleOpen();
      setType(MessageType.SUCCESS);
      setMessage(message || '');
    },
    error(message?: string) {
      handleOpen();
      setType(MessageType.ERROR);
      setMessage(message || '');
    },
  };

  return message;
};
