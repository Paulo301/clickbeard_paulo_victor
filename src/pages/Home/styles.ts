import styled from "styled-components";

import backgroundImg from '../../assets/background-image.jpg';
import { rootColors } from "../../styles/global";

export const Container = styled.main`
  width: 100%;
  
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
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }

    p {
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

  align-items: center;

  & > h1 {
    font-size: 2rem;
  }

  .scrollContainer {
    display: flex;

    width: 100%;

    margin-top: 2.5rem;
    column-gap: 1rem;
    padding: 0.25rem;
  }
`;

export const ContatoSection = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  h1 {
    font-size: 2rem;
  }

  & > div {
    display: flex;

    margin-top: 2.5rem;

    @media(max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    font-size: 1rem;
    color: ${rootColors.textPrimary};

    margin-top: 1rem;

    span {
      font-size: 1rem;
      font-weight: 400;
      color: ${rootColors.textSecondary};
      
      margin-left: 0.5rem;
    }
  }
`;

export const ContactMap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    font-size: 1.5rem;
  }

  img {
    margin: 1.5rem auto 0;
    width: 80%;
  }

  @media(max-width: 768px) {
    margin-top: 2rem;
  }
  @media(max-width: 425px) {
    img {
      width: 100%;
    }
  }
`;