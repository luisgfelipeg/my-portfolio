import { ImageSlider } from '../shared/components';
import { LayoutBase } from '../shared/layouts';
import { myProjects } from '../shared/services/my-projects';

export const Projects = () => {
  return (
    <LayoutBase>
      <div className='flex justify-center items-center flex-col gap-3 text-white'>
        <h5>Vou mostrar alguns dos</h5>
        <h1 className='text-5xl font-bold'>Meus Projetos!!</h1>
        <h5 className='text-gray-400 font-bold text-sm'>
          Desenvolvedor Front-End
        </h5>
        <div className='mt-40 grid grid-cols-3 h-96 w-full gap-10'>
          {myProjects.map((project) => (
            <>
              {/* <a className='cursor-pointer' href={project.url}> */}
              <div className='gap-5 bg-blue-900 flex justify-center items-center flex-col h-full rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'>
                <strong className='text-xl'>{project.name}</strong>
                <ImageSlider items={project.thumbnail} />
                <p className='text-lg'>{project.description}</p>
              </div>
              {/* </a> */}
              <a
                className='cursor-pointer'
                href='https://rococo-cucurucho-3fdd39.netlify.app/meus-projetos'
              >
                <div className='gap-9 bg-blue-900 flex justify-center items-center flex-col h-full rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'>
                  <strong className='text-xl'>Projeto em andamento</strong>
                  {/* <img
                    className='outline outline-2 outline-sky-300 rounded-lg'
                    src={project.thumbnail}
                    alt='imagem do projeto'
                  />
                  <p className='text-lg'>{project.description}</p> */}
                </div>
              </a>
              <a
                className='cursor-pointer'
                href='https://rococo-cucurucho-3fdd39.netlify.app/meus-projetos'
              >
                <div className='gap-9 bg-blue-900 flex justify-center items-center flex-col h-full rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'>
                  <strong className='text-xl'>Projeto em andamento</strong>
                  {/* <img
                    className='outline outline-2 outline-sky-300 rounded-lg'
                    src={project.thumbnail}
                    alt='imagem do projeto'
                  />
                  <p className='text-lg'>{project.description}</p> */}
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </LayoutBase>
  );
};
