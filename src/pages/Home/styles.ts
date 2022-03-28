import styled from 'styled-components';

export const Container = styled.main``;

export const ContainerHeader = styled.main`
  border-bottom: 1px solid black;
`;

export const Header = styled.div`
  max-width: 100%;
  margin: 10px 10% 10px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 50px;
  }
`;

export const ContainerInput = styled.main`
  display: flex;

  input {
    background-color: white;
    border: 0;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 20px;
    width: 250px;

    &:focus {
      outline: none;
    }
  }
`;

export const Icon = styled.main`
  height: 50px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
  svg {
    font-size: 35px;
  }

  #clearBtn {
    cursor: pointer;

    &:hover {
      opacity: 0.6;
      transition: 0.3s;
    }
  }
`;

export const ContainerResults = styled.main`
  position: fixed;
  margin-top: 5px;
  width: 330px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  font
  &::-webkit-scrollbar {
    display: none;
  }

  a {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;

    &:hover {
      background-color: lightgrey;
      cursor: pointer;
    }

    p {
      margin-left: 10px;
    }
  }
`;

export const ContainerCard = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 89vh;
`;

export const ContainerRadio = styled.main`
  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    flex-direction: row;

    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;

    input {
      -webkit-appearance: none;
      width: 12px;
      height: 12px;
      border: 1px solid darkgray;
      border-radius: 50%;
      outline: none;
      box-shadow: 0 0 1px 0px red inset;
      margin-top: 5px;
      margin-right: 5px;

      &:nth-child(3) {
        margin-left: 24px;
      }

      &:hover {
        box-shadow: 0 0 2px 0px red inset;
      }

      &:disabled {
        box-shadow: 0 0 0px 0px red inset;
      }

      &:checked {
        background-color: red;
      }
    }

    p {
      font-size: 15px;
      letter-spacing: 1px;

      &:nth-child(4) {
        margin-right: 24px;
      }
    }
  }
`;

export const Card = styled.article`
  background-color: white;
  width: 326px;
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  transition: all 0.5s;

  /* &:hover {
    -webkit-filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    -webkit-transform: rotateZ(-360deg) scale(1.2);
    transform: rotateZ(360deg) scale(1.2);
  } */
`;

export const HeaderCard = styled.img`
  width: 100%;
  height: 150px;
  display: block;
`;

export const CardBody = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(153, 153, 153, 0.383);

  img {
    width: 180px;
    height: 180px;
    border: 0.15rem solid #8b0000;
    border-radius: 50%;
    margin-top: -90px;
    margin-bottom: 1rem;
    background-color: white;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 0.15rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--dark-gray);
    font-size: 1.6rem;
    margin-top: 0.15rem;
    margin-bottom: 0.5rem;
  }
`;

export const CardFooter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;

  div {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;

    p {
      letter-spacing: 1px;
    }
  }
`;
