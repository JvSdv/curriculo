import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import ANTT from './../imgs/ANTT.jpg';
import COND from './../imgs/COND.jpg';
import FINANCE from './../imgs/FINANCE.jpg';
import MOVIE from './../imgs/MOVIE.jpg';
import REGRESSION from './../imgs/REGRESSION.jpg';
import TODO from './../imgs/TODO.jpg';

type Projetos = {
   nome: string;
   descricao: string;
   github: string;
   link: string;
   imagem: string;
};

const meusProjetos: Projetos[] = [
   {
      nome: 'Calculadora ANTT',
      descricao: 'Calculadora do frete mínimo da ANTT',
      github: 'https://github.com/JvSdv/tabelafrete',
      link: 'https://tabelaantt.netlify.app/',
      imagem: ANTT,
   },
   {
      nome: 'Lista de Tarefas com login',
      descricao:
         'Lista de tarefas feito com React, Typescript e Node. Cada usuário tem sua lista de tarefas com categorias',
      github: 'https://github.com/JvSdv/09_Todo_Front_React',
      link: 'https://todoreactcomlogin.netlify.app/',
      imagem: TODO,
   },
   {
      nome: 'Gerenciador de Condomínio',
      descricao: 'Feito a com CoreUI e React, versão mais antiga ainda com javascript',
      github: 'https://github.com/JvSdv/administrar_condominio_CoreUi',
      link: 'https://administrarcondominio.netlify.app/',
      imagem: COND,
   },
   {
      nome: 'Filmes em cartaz',
      descricao: 'Consumindo uma api para retornar os filmes, feito com React e Typescript',
      github: 'https://github.com/JvSdv/Filmes_em_Cartaz',
      link: 'https://filmesnocartaz.netlify.app/',
      imagem: MOVIE,
   },
   {
      nome: 'Gestão das Finanças mensais',
      descricao: 'Finanças pessoais feito somente o front-end com React',
      github: 'https://github.com/JvSdv/3_Projetos_React',
      link: 'https://gestaofinanceira.netlify.app/',
      imagem: FINANCE,
   },

   {
      nome: 'Regressão Linear',
      descricao: 'Regressão Linear feito com a biblioteca e-chart e calculo de regressão linear',
      github: 'https://github.com/JvSdv/Linear-regression',
      link: 'https://regressaolinear.netlify.app/',
      imagem: REGRESSION,
   },
];

const App = () => {
   return (
      <Container>
         <Row>
            <Col className='d-flex justify-content-between'>
               <h2>
                  Meus Projetos<h5>Todos os projetos estão no ar</h5>
                  <h6>Caso necessite de autenticação utilize o método padrão</h6>
               </h2>
               <a
                  className='mt-2 text-decoration-none'
                  href='https://www.linkedin.com/in/joao-victor-sezanosky-dalla-valle-2195211a3/'
                  target='_blank'
               >
                  Linkedin: <Icon.Linkedin size={50} />
               </a>
            </Col>
         </Row>
         <Row>
            {meusProjetos.map((projeto, index) => (
               <Col key={index} xs={12} sm={12} md={4} lg={3}>
                  <div className='card border-3 shadow mt-3'>
                     <a target='_blank' href={projeto.link}>
                        <img src={projeto.imagem} className='card-img-top' alt='...' />
                     </a>
                     <div className='card-body'>
                        <h5 className='card-title'>{projeto.nome}</h5>
                        <p className='card-text'>{projeto.descricao}</p>
                        <a target='_blank' href={projeto.github} className='btn btn-primary'>
                           <Icon.Github />
                        </a>
                        <a target='_blank' href={projeto.link} className='btn btn-primary ms-3'>
                           <Icon.BoxArrowUpRight />
                        </a>
                     </div>
                  </div>
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default App;
