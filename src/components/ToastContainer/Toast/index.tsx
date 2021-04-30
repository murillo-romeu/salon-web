import React, { useEffect } from 'react';
import {
  FiXOctagon,
  FiX,
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
} from 'react-icons/fi';
import { Container } from './styles';
import { useToast, ToastMessage } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  success: <FiCheckCircle size={24} />,
  error: <FiXOctagon size={24} />,
  warning: <FiAlertTriangle size={24} />,
  info: <FiInfo size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
    >

      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description
            && <p>{message.description}</p>}
      </div>

      <button
        type="button"
        onClick={() => removeToast(message.id)}
      >
        <FiX size={18} />
      </button>

    </Container>
  );
};

export default Toast;
