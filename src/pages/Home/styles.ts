import styled from "styled-components";

import backgroundImg from '../../assets/background-image.jpg';
import { rootColors } from "../../styles/global";

export const Container = styled.main`
  section + section {
    max-width: 1600px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
  }
`;

export const HomeSection = styled.section`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;

  height: 500px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;

    background-color: rgba(0,0,0,0.5);

    color: ${rootColors.white};

    h1 {
      font-size: 2.5rem;
    }

    p {
      text-align: center;
      font-size: 0.95rem;

      margin-top: 1rem;

      width: 90%;
      max-width: 40rem;
    }

    section {
      display: flex;
      justify-content: center;
      column-gap: 1rem;

      margin-top: 4rem;

      height: max-content;
      
    }
  }
`;

export const ServicosSection = styled.section`
  display: flex;
  flex-direction: column;

  height: 300px;
`;

export const ContatoSection = styled.section`
  height: 300px;
`;