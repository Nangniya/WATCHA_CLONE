import party from '@/assets/images/notification-party.png';
import { NOTICELIST } from '@/constants/mock';
import * as S from './Notification.styles';

export const Notification = () => {
  return (
    <S.Container>
      <S.H4>소식함</S.H4>
      <ul>
        {NOTICELIST.map((item) => (
          <S.Li key={item.id}>
            <S.Img src={party} alt="party image" />
            <S.Content>
              <S.Title>{item.title}</S.Title>
              <S.SubTitle>{item.subtitle}</S.SubTitle>
              <S.Time>{item.humanized_received_at}</S.Time>
            </S.Content>
          </S.Li>
        ))}
      </ul>
    </S.Container>
  );
};
