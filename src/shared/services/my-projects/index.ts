import ToDo from '../../assets/images/to-do-list.svg';
import ToDo2 from '../../assets/images/to-do-list-2.svg';
import ToDo3 from '../../assets/images/to-do-list-3.svg';
import BDC from '../../assets/images/bdc.svg';
import BDC2 from '../../assets/images/bdc-2.svg';
import manageStock from '../../assets/images/manage-stock.svg';
import manageStock2 from '../../assets/images/manage-stock-2.svg';
import manageStock3 from '../../assets/images/manage-stock-3.svg';

export const myProjects = [
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
        imageSrc: manageStock,
        imageAlt: 'Prévia do auxiliar de estoque',
      },
      {
        imageSrc: manageStock2,
        imageAlt: 'Prévia do auxiliar de estoque',
      },
      {
        imageSrc: manageStock3,
        imageAlt: 'Prévia do auxiliar de estoque',
      },
    ],
  },
];
