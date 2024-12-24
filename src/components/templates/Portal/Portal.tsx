import { createPortal } from 'react-dom';
import { IProps } from './Portal.types';

const Portal = ({ children, containerId }: IProps) => {
  const container = document.getElementById(containerId);

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;
