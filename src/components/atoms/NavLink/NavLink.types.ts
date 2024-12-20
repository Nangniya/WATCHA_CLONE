import { LinkProps } from 'react-router-dom';

/* NavLink.tsx */
export interface IProps extends LinkProps {
  text: string;
}

/* NavLink.styles.ts */
export interface IContainerProps {
  $isActive: boolean;
}
