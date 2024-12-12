import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
  containerId: 'tooltip-root' | 'modal-root' | 'toast-root';
}

const Portal = ({ children, containerId }: IProps) => {
  const container = document.getElementById(containerId);

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;
