import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: #141414;
  color: #fff;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Adicionei o estilo de sombra aqui */
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #00bcd4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0;
  margin: 0;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1f1f1f;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    max-height: 350px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  span {
    font-weight: bold;
    font-size: 1.4rem;
    text-align: center;
    margin: 1rem 0;
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export const Btn = styled.button`
  margin-top: 10px;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 15px;
  color: #fff;
  background-color: #00bcd4;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0097a7;
  }
`;

export const Nav = styled.nav`
  background-color: #141414;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const NavTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;
