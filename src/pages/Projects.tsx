import { LayoutBase } from '../shared/layouts';

export const Projects = () => {
  return (
    <LayoutBase>
      <div className='flex justify-center items-center flex-col gap-3 text-white'>
        <h5>Vou mostrar alguns dos</h5>
        <h1 className='text-5xl font-bold'>Meus Projetos!!</h1>
        <h5 className='text-gray-400 font-bold text-sm'>
          Desenvolvedor Front-End
        </h5>
        <div className='mt-40 grid grid-cols-3 gap-10'>
          <div className='bg-blue-900 flex justify-center items-center flex-col p-24 rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'>
            Teste
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};
