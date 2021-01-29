import React from 'react';

import {
  Container,
  ComentarioContainer,
  Comentario,
  Mensagem,
  Avatar,
} from './styles';

const Coments: React.FC = () => {
  return (
    <Container>
      <p>Testemunhos</p>
      <h3>Aqui vão alguns depoimentos de nossos clientes</h3>
      <ComentarioContainer>
        <Comentario>
          <Mensagem>
            <span>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </span>
          </Mensagem>
          <Avatar>
            <img
              src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4"
              alt=""
            />
          </Avatar>
        </Comentario>
        <Comentario>
          <Mensagem>
            <span>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </span>
          </Mensagem>
          <Avatar>
            <img
              src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4"
              alt=""
            />
          </Avatar>
        </Comentario>
        <Comentario>
          <Mensagem>
            <span>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </span>
          </Mensagem>
          <Avatar>
            <img
              src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4"
              alt=""
            />
          </Avatar>
        </Comentario>
      </ComentarioContainer>
    </Container>
  );
};

export default Coments;
