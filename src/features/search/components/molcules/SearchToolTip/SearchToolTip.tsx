import { useLayoutEffect, useRef, useState } from 'react';
import Portal from '@/components/templates/Portal/Portal';
import * as S from './SearchToolTip.styles';

interface IProps {
  message: string;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const SearchToolTip = ({ message, anchorEl, onClose }: IProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (anchorEl && tooltipRef.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      setPosition({
        top: anchorRect.bottom,
        left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
      });
    }
  }, [anchorEl]);

  if (!anchorEl) return null;

  return (
    <Portal containerId="tooltip-root">
      <S.Wrapper ref={tooltipRef} $top={position.top} $left={position.left}>
        <S.Container>
          <S.Arrow />
          <S.MessageBox>
            <S.Message>{message}</S.Message>
            <S.CloseBtn onClick={onClose}>확인</S.CloseBtn>
          </S.MessageBox>
        </S.Container>
      </S.Wrapper>
    </Portal>
  );
};

export default SearchToolTip;
