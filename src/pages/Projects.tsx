import { ImageSlider } from '../shared/components';
import { LayoutBase } from '../shared/layouts';
import { myProjects } from '../shared/services/my-projects';

export const Projects = () => {
  return (
    <LayoutBase>
      <div className='flex justify-center items-center flex-col gap-3 text-white mb-20'>
        <h5>Vou mostrar alguns dos</h5>
        <h1 className='text-5xl font-bold text-center'>Meus Projetos!!</h1>
        <h5 className='text-gray-400 font-bold text-sm'>
          Desenvolvedor Front-End
        </h5>
        <div className='mt-20 grid grid-cols-3 w-full h-full gap-10 max-2xl:grid-cols-2 max-xl:gap-5 max-lg:grid-cols-1 max-xl:mt-10 max-lg:w-3/4 max-sm:w-full'>
          {myProjects.map((project) => (
            <div
              key={project.name}
              className={`h-full gap-4 bg-blue-900 flex justify-center items-center flex-col rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200`}
            >
              <strong className='mt-3 text-xl text-center'>
                {project.name}
              </strong>
              <ImageSlider items={project.thumbnail} />
              <p className='text-lg mx-3 text-center'>{project.description}</p>
              {project.description.length > 0 && (
                <a
                  href={project.url}
                  className='p-4 mb-3 rounded-full text-lg text-sky-300 hover:text-slate-900 hover:bg-white duration-300'
                >
                  Ver Projeto
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </LayoutBase>
  );
};
