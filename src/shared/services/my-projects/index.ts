import ToDo from '../../assets/images/to-do-list.svg';
import ToDo2 from '../../assets/images/to-do-list-2.svg';
import ToDo3 from '../../assets/images/to-do-list-3.svg';

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
];
