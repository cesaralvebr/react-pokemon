import { useCallback, useEffect, useState } from 'react';

import { Pokemon, PokemonGender, Itens, ListPokemons } from "../../utils/types";

import { SearchOutlined } from '@ant-design/icons';

import Header from '../../components/Header';

import headerImg from '../../assets/images/header.jpg';
import poekbolaImg from '../../assets/images/pokebola.jpg';
import logoImg from '../../assets/images/logo.png';
import RadioButton from '../../components/RadioButton';

import  {api}  from '../../services/api';

import {
  Container,
  ContainerCard,
  ContainerRadio,
  Card,
  HeaderCard,
  CardBody,
  CardFooter,
} from './styles';


const Home = () => {
const [listPokemons, setListPokemons] = useState<ListPokemons[]>([] as ListPokemons[]);
const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
const [pokemonGender, setPokemonGender] = useState<PokemonGender>({} as PokemonGender)

const itens: Itens[] = [
  {
    value: "default",
    name: "gender",
    label: "Default",
    disabled: pokemonGender === "" || pokemon.frontImgDefault === null,
    checked: pokemonGender === "default",
  },
  {
    value: "female",
    name: "gender",
    label: "Female",
    disabled: pokemonGender === "" || pokemon.fontImgFemale === null,
    checked: pokemonGender === "female",
  },
  {
    value: "shiny",
    name: "gender",
    label: "Shiny",
    disabled: pokemonGender === "" || pokemon.frontImgShiny === null,
    checked: pokemonGender === "shiny",
  },
];

const loadListPokemons = useCallback(async()=>{
  try{
    await api.get("?limit=20000000").then((response) =>{
      setListPokemons(response.data.results);
    });
  }catch{
    setListPokemons({} as ListPokemons[])
  }
}, []);

const loadPokemon = useCallback(
  async (pokemonName: string) => {
    try {
      await api.get(`/${pokemonName}`).then((response) =>
        setPokemon({
          id: response.data.id,
          name: response.data.name
            .toLowerCase()
            .replace(/(?:^|\s)(?!da|de|do)\S/g, (name: String) =>
              name.toUpperCase()
            ),
          baseExp: response.data.base_experience,
          height: response.data.height,
          weight: response.data.weight,
          frontImgDefault: response.data.sprites.front_default,
          fontImgFemale: response.data.sprites.front_female,
          frontImgShiny: response.data.sprites.front_shiny,
          backImg: response.data.sprites.back_default
        })
      );
    } catch {
      setPokemon({} as Pokemon)
    }
  },
  []
);

const onChangeGender = useCallback(() =>
{

},[])

const onChangeInputPokemonName = useCallback((pokemonName: string)=>{
    pokemonName != '' ? loadPokemon(pokemonName): setPokemon({} as Pokemon)
},[loadPokemon])


useEffect(() => {
  loadListPokemons();
}, [loadListPokemons]);


  return (
    <Container>
    <Header logoImg={logoImg}
    placeholderInput="Digite o nome do Pokemon aqui"
    listPokemons={listPokemons}
    onClickInput={onChangeInputPokemonName}/>

      <ContainerCard>
        <Card>
          <HeaderCard src={headerImg} alt="Header Cart" />
          <CardBody>
            <img src={poekbolaImg} alt="Pokemon Img" />

            <h1>{'Pokémon Name'}</h1>

           <RadioButton itens={itens} onChangeRadio={onChangeGender}/>

            <p>{0} xp</p>
          </CardBody>

          <CardFooter>
            <div>
              <h3>{0} Kg</h3>
              <p>Weight</p>
            </div>

            <div>
              <h3>{0} m</h3>
              <p>Height</p>
            </div>
          </CardFooter>
        </Card>
      </ContainerCard>
    </Container>
  );
};

export default Home;
