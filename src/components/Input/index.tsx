import { useState } from "react";
import { ListPokemons } from "../../utils/types";
import { Container, ContainerInput, Icon, ContainerResults } from "./styles";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";


interface InputProps {
  placeHolder: string;
  data: ListPokemons[];
  onClickInput: (event: string) => void
}

const Input = ({ placeHolder, data, onClickInput }: InputProps) => {
  const [filteredData, setFilteredData] = useState<ListPokemons[]>([] as ListPokemons[])
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: string) => {
    const searchWord = event;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase());
    })

    if (searchWord === '') {
      setFilteredData([] as ListPokemons[])
    } else {
      setFilteredData(newFilter);
    }
  }

  const clearInput = () => {
    setWordEntered('');
    setFilteredData([] as ListPokemons[]);
    onClickInput('');
  }

  const handleClickPokemonName = (pokemonName: string) => {
    setWordEntered(pokemonName);
    setFilteredData([] as ListPokemons[]);
    onClickInput(pokemonName);
  }

  return (
    <Container>
      <ContainerInput>
        <input
          type="text"
          placeholder={placeHolder}
          value={wordEntered}
          onChange={(event) => handleFilter(event.target.value)}
        />
        <Icon>
          {wordEntered === "" ? (
            <SearchOutlined />
          ) : (
            <CloseOutlined id="clearBtn" onClick={clearInput} />
          )}
        </Icon>
      </ContainerInput>
      {filteredData.length !== 0 && (
        <ContainerResults>
          {filteredData.slice(0, 4).map((value) => {
            return (
              <div onClick={() => handleClickPokemonName(value.name)}>
                <p>{value.name} </p>
              </div>
            );
          })}
        </ContainerResults>
      )}
    </Container>
  );

};

export default Input;
