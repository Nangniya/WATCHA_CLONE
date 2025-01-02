import { LinkProps } from 'react-router-dom';

/* NavLink.tsx */
export interface IProps extends LinkProps {
  to: string;
  text: string;
}

/* NavLink.styles.ts */
export interface IContainerProps {
  $isActive: boolean;
}
