import { LinkProps } from 'react-router';

/* NavLink.tsx */
export interface IProps extends LinkProps {
  to: string;
  text: string;
  isActive: boolean;
}

/* NavLink.styles.ts */
export interface IContainerProps {
  $isActive: boolean;
}
