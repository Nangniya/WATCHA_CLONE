import { useSearchParams } from 'react-router-dom';
import * as S from './Tab.styles';

interface IProps {
  text: string;
  queryValue: string;
}

const Tab = ({ text, queryValue }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('tab') === queryValue;

  const onClick = () => {
    setSearchParams((prev) => {
      prev.set('tab', queryValue);
      return prev;
    });
  };

  return (
    <li>
      <S.Button $isActive={isActive} onClick={onClick}>
        {text}
      </S.Button>
    </li>
  );
};

export default Tab;
