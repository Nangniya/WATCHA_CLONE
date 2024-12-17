import { useState } from 'react';

export const useToolTip = (key: string) => {
  const [isShown, setIsShown] = useState(() => {
    const tooltipShown = localStorage.getItem('tooltip_shown');
    if (!tooltipShown) return true;

    const parsedTooltip = JSON.parse(tooltipShown);
    return !parsedTooltip[key]?.isShown;
  });

  const handleClose = () => {
    const tooltipShown = localStorage.getItem('tooltip_shown');
    const parsedTooltip = tooltipShown ? JSON.parse(tooltipShown) : {};

    localStorage.setItem(
      'tooltip_shown',
      JSON.stringify({
        ...parsedTooltip,
        [key]: { isShown: true },
      }),
    );
    setIsShown(false);
  };

  return { isShown, handleClose };
};
