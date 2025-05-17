import { useEffect } from 'react';
import Portal from '@/providers/Portal/Portal';
import { IProps } from './Modal.types';
import * as S from './Modal.styles';

const Modal = ({ text, onClose }: IProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Portal containerId="modal-root">
      <S.Overlay onClick={onClose}>
        <S.InnerContainer>
          <S.Text>{text}</S.Text>
          <S.BottomBar>
            <S.BottomBtn onClick={onClose}>닫기</S.BottomBtn>
          </S.BottomBar>
        </S.InnerContainer>
      </S.Overlay>
    </Portal>
  );
};

export default Modal;
