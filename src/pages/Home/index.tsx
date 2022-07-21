import { Button } from "../../components/Button";
import { rootColors } from "../../styles/global";
import { 
  Container, 
  HomeSection,
  ServicosSection,
  ContatoSection
} from "./styles";


export function Home() {
  return (
    <Container>
      <HomeSection id='home'>
        <div>
          <h1>Encontre aqui o corte certo para você!</h1>

          <p>
            Na ClickBarber você encontra os melhores barbeiros e todos estão compromissados em entregar
            o corte que mais combina com você. Não perca tempo e agende o seu.
          </p>

          <section>
            <Button>
              Agendar
            </Button>
            <Button
              background='transparent'
              textColor={rootColors.button}
            >
              Entrar em contato
            </Button>
          </section>
        </div>
      </HomeSection>

      <ServicosSection id='servicos'>
        servicos
      </ServicosSection>

      <ContatoSection id='contato'>
        contato
      </ContatoSection>
    </Container>
  );
}