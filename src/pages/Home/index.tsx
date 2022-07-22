import { useEffect, useState } from "react";

import ScrollContainer from "react-indiana-drag-scroll";
import { Button } from "../../components/Button";
import { ServiceCard } from "../../components/ServiceCard";
import { rootColors } from "../../styles/global";

import mapImg from '../../assets/map.png';

import especialidadeApi, { IEspecialidade } from "../../services/especialidadeApi";

import { 
  Container, 
  HomeSection,
  ServicosSection,
  ContatoSection,
  ContactInfo,
  ContactMap
} from "./styles";

export function Home() {
  const [services, setServices] = useState<IEspecialidade[]>([]);
  const [isServicesLoading, setIsServicesLoading] = useState(true);

  useEffect(() => {
    especialidadeApi.getEspecialidades().then((data) => {
      setServices(data.especialidades);
      setIsServicesLoading(false);
    }).catch((error) => console.log(error));
  }, []);

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
        <h1>Nosssos serviços</h1>

        <ScrollContainer
          horizontal
          hideScrollbars
          nativeMobileScroll
          className='scrollContainer'
        >
          {
            isServicesLoading 
            ?
            <ServiceCard isLoading={true} service={{} as IEspecialidade} />
            :
            services.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
              />
            ))
          }
        </ScrollContainer>
      </ServicosSection>

      <ContatoSection id='contato'>
        <h1>Contato</h1>
        <div>
          <ContactInfo>
            <strong>Telefone:<span>+55 (99) 9 91817161</span></strong>
            <strong>WhatsApp:<span>+55 (99) 9 92827262</span></strong>
            <strong>Email:<span>contato@clickbarber.com</span></strong>
            <strong>Endereço:<span>Rua 01, 02, Algum Bairro, Alguma Cidade, MA</span></strong>
          </ContactInfo>

          <ContactMap>
            <h2>Onde nos encontrar?</h2>
            <img src={mapImg} alt="Mapa" />
          </ContactMap>
        </div>
      </ContatoSection>
    </Container>
  );
}