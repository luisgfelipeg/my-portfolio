import ToDo from '../../assets/images/to-do-list.svg';
import ToDo2 from '../../assets/images/to-do-list-2.svg';
import ToDo3 from '../../assets/images/to-do-list-3.svg';
import BDC from '../../assets/images/bdc.svg';
import BDC2 from '../../assets/images/bdc-2.svg';
import ManageStock from '../../assets/images/manage-stock.svg';
import ManageStock2 from '../../assets/images/manage-stock-2.svg';
import ManageStock3 from '../../assets/images/manage-stock-3.svg';
import Catalog from '../../assets/images/catalog.svg';
import PokeDiscovery from '../../assets/images/pokeDiscovery.svg';

export const myProjects = [
  {
    name: 'Catálogo para uma Loja de Lingerie',
    description:
      'A criação de um catálogo abrangente de uma loja de lingerie utilizando a biblioteca de componentes MUI juntamente com o banco de dados Firebase.',
    url: 'https://fanciful-croissant-d36648.netlify.app/pagina-inicial',

    thumbnail: [
      {
        imageSrc: Catalog,
        imageAlt: 'Prévia do Catálogo',
      },
    ],
  },
  {
    name: 'Pokemon Discovery',
    description:
      'A proposta é utilizar o framework Vue para desenvolver um site que permita aos usuários pesquisar um Pokémon de interesse e visualizar seus atributos e evoluções, fazendo uso da API PokeAPI V2 como fonte de dados.',
    url: 'https://melodic-vacherin-2069c8.netlify.app/',

    thumbnail: [
      {
        imageSrc: PokeDiscovery,
        imageAlt: 'Prévia do Poke Discovery',
      },
    ],
  },
  {
    name: 'Lista de tarefas (To Do List)',
    description:
      'Uma simples lista de tarefa que fica armazenada no localstorage do Navegador',
    url: 'https://rococo-cucurucho-3fdd39.netlify.app/meus-projetos/to-do-list',

    thumbnail: [
      {
        imageSrc: ToDo,
        imageAlt: 'Prévia do To Do List',
      },
      {
        imageSrc: ToDo2,
        imageAlt: 'Prévia da Criação da Lista',
      },
      {
        imageSrc: ToDo3,
        imageAlt: 'Prévia da Criação das Tarefas',
      },
    ],
  },
  {
    name: 'Conversor de número binário para decimal',
    description: 'Um simples conversor de número binário para decimal',
    url: 'https://rococo-cucurucho-3fdd39.netlify.app/meus-projetos/binary-decimal-converter',

    thumbnail: [
      {
        imageSrc: BDC,
        imageAlt: 'Prévia do conversor de número binario pra decimal',
      },
      {
        imageSrc: BDC2,
        imageAlt: 'Prévia do conversor de número binario pra decimal',
      },
    ],
  },
  {
    name: 'Controle de estoque auxiliar',
    description:
      'Um projeto que está em uso para uma loja com a finalidade de auxiliar o controle do estoque, infelizmente nao é possível acessar o projeto por enquanto, mas em breve disponibilizarei um login e senha para que possa ser visitado!',
    url: 'https://magical-sfogliatella-bc3b3a.netlify.app/',

    thumbnail: [
      {
        imageSrc: ManageStock,
        imageAlt: 'Prévia do auxiliar de estoque',
      },
      {
        imageSrc: ManageStock2,
        imageAlt: 'Prévia do auxiliar de estoque',
      },
      {
        imageSrc: ManageStock3,
        imageAlt: 'Prévia do auxiliar de estoque',
      },
    ],
  },
];
