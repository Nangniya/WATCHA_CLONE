import party from '@/assets/images/notification-party.png';
import { useNotification } from '@/queries/system';
import * as S from './Notification.styles';

const Notification = () => {
  const { data } = useNotification();

  return (
    <S.Container>
      <S.H4>소식함</S.H4>
      <ul>
        {data?.map(({ id, title, subtitle, humanizedReceivedAt }) => (
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
