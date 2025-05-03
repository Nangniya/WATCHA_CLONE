import { IProps } from './Skeleton.types';
import * as S from './Skeleton.styles';

const Skeleton = ({ width, height }: IProps) => {
  return <S.SkeletonWrapper $width={width} $height={height} />;
};

export default Skeleton;
