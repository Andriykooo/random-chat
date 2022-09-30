import { Alert, Snackbar } from '@mui/material';
import { createContext, PropsWithChildren, useState } from 'react';

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
}

interface ContextInterface {
  open: boolean;
  type: MessageType;
  message: string;
  setType: (type: MessageType) => void;
  setMessage: (message: string) => void;
  handleClose: () => void;
  handleOpen: () => void;
}

export const MessagesContext = createContext<ContextInterface>({
  open: false,
  type: MessageType.SUCCESS,
  message: '',
  setType: () => {},
  setMessage: () => {},
  handleClose: () => {},
  handleOpen: () => {},
});

export const Messages: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(MessageType.SUCCESS);
  const [message, setMessage] = useState('');

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  return (
    <MessagesContext.Provider
      value={{
        open,
        type,
        message,
        setType,
        setMessage,
        handleClose,
        handleOpen,
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </MessagesContext.Provider>
  );
};
