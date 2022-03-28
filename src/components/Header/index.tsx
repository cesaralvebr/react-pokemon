import { ListPokemons } from '../../utils/types'
import Logo from '../../components/Logo/index';
import Input from '../Input';


import { Container, Content } from './styles'

interface HeaderProps {
  logoImg: string;
  placeholderInput: string;
  listPokemons: ListPokemons[];
  onClickInput: (event: string) => void;
}

const Header = ({ logoImg, placeholderInput, listPokemons, onClickInput }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo logoImg={logoImg} />
        <Input
          placeHolder={placeholderInput}
          data={listPokemons}
          onClickInput={onClickInput} />
      </Content>
    </Container>
  )
};

export default Header;
