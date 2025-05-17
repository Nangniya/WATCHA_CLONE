import party from '@/assets/images/notification-party.png';
import * as S from './Notification.styles';
import { NOTICELIST } from '@/constants/mock';

const Notification = () => {
  return (
    <S.Container>
      <S.H4>소식함</S.H4>
      <ul>
        {NOTICELIST?.map(({ id, title, subtitle, humanizedReceivedAt }) => (
          <S.Li key={id}>
            <S.Img src={party} alt="party image" />
            <S.Content>
              <S.Title>{title}</S.Title>
              <S.SubTitle>{subtitle}</S.SubTitle>
              <S.Time>{humanizedReceivedAt}</S.Time>
            </S.Content>
          </S.Li>
        ))}
      </ul>
    </S.Container>
  );
};

export default Notification;
