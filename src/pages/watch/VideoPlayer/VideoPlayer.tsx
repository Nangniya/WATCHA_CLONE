import { useNavigate, useParams } from 'react-router-dom';
import Portal from '@/providers/Portal/Portal';
import X from '@/assets/icons/x.svg';
import * as S from './VideoPlayer.styles';

const VideoPlayer = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();
  const handleClickXBtn = () => navigate(-1);

  return (
    <Portal containerId="modal-root">
      <S.Container>
        <S.Header>
          <S.GoBack onClick={handleClickXBtn}>
            <X width="24" height="24" />
          </S.GoBack>
        </S.Header>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </S.Container>
    </Portal>
  );
};

export default VideoPlayer;
