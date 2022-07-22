import { useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import TextTruncate from 'react-text-truncate';

import defaultImage from '../../assets/service-card-default.png';
import { IEspecialidade } from '../../services/especialidadeApi';
import { Container } from './styles';

interface ServiceCardProps {
  isLoading?: boolean;
  service: IEspecialidade;
}

export function ServiceCard(props: ServiceCardProps) {
  const { isLoading, service } = props;

  const [srcImg, setSrcImg] = useState(service.imagem);

  return (
    <Container>
      <div>
        { 
          isLoading 
          ?
          <Skeleton 
            width='4rem'
            height='4rem' 
          /> 
          : 
          <img 
            src={srcImg} 
            alt={service.nome} 
            onError={() => setSrcImg(defaultImage)}
          />
        }
      </div>
        
      <h1>
        {
          isLoading 
          ? 
          <Skeleton /> 
          :
          <TextTruncate
            line={1}
            element="span"
            truncateText="…"
            text={service.nome || ""}
          />
        }
      </h1>

      <p>
        {
          isLoading 
          ? 
          <Skeleton count={3} /> 
          : 
          <TextTruncate
            line={3}
            element="span"
            truncateText="…"
            text={service.descricao || ""}
          />
        }
      </p>
    </Container>
  )
}