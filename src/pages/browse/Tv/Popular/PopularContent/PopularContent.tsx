import InfiniteSlide from 'react-infinite-carousel-component';
import Modal from '@/components/templates/Modal/Modal';
import Arrow from '@/assets/icons/arrow.svg';
import { usePopularTvs } from '@/queries/tv';
import useModal from '@/hooks/useModal';
import 'react-infinite-carousel-component/style.css';
import * as S from './PopularContent.styles';

const PopularContent = () => {
  const { data } = usePopularTvs();

  const { isModalOpened, openModal, closeModal } = useModal();

  const handleClickTvLink = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    openModal();
  };

  const settings = {
    auto: true,
    arrowsOverlay: true,
    leftArrow: (
      <S.ArrowWrapper className="left">
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    ),
    rightArrow: (
      <S.ArrowWrapper className="right">
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    ),
  };

  return (
    <>
      <InfiniteSlide {...settings}>
        {data.results.map(({ id, name, backdropPath }, index) => (
          <S.MovieLink key={`main-tv-${id}-${index}`} to="#" onClick={handleClickTvLink}>
            <S.Image src={`${process.env.IMAGE_URL}/original${backdropPath}`} alt={`${name} image`} />
            <S.Title>{name}</S.Title>
          </S.MovieLink>
        ))}
      </InfiniteSlide>
      {isModalOpened && <Modal text={'TV 상세 페이지는 준비중입니다.'} onClose={closeModal} />}
    </>
  );
};

export default PopularContent;
