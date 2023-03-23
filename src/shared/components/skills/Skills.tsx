import { BsCheckLg } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

export const Skills = () => {
  return (
    <section className='flex justify-center flex-col items-center'>
      <motion.div
        variants={textVariant(0.25)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 1 }}
        className='flex justify-center flex-col items-center'
      >
        <h5 className='text-gray-400 font-bold text-sm'>Minhas</h5>
        <h1 className='text-4xl font-bold text-sky-300'>Habilidades!</h1>
      </motion.div>
      <div className='flex flex-1 gap-40 mt-20 max-2xl:gap-20 max-xl:gap-10 max-lg:flex-col max-xl:mt-10'>
        <motion.div
          className='bg-blue-900 flex justify-center items-center flex-col p-24 max-md:p-14 rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
        >
          <h2 className='text-sky-300 text-xl font-bold'>Frontend</h2>
          <div className='grid grid-cols-2 justify-items-center justify-center gap-32 mt-5'>
            <div>
              <div className='flex gap-2'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>HTML</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Avançado
                  </small>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>JavaScript</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Avançado
                  </small>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>CSS</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Avançado
                  </small>
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-2'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>React</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Intermediário
                  </small>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>TailwindCSS</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Intermediário
                  </small>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>TypeScript</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Intermediário
                  </small>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='bg-blue-900 flex justify-center items-center flex-col p-24 max-md:p-14 rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'>
          <h2 className='text-sky-300 text-xl font-bold'>Backend</h2>
          <div className='grid grid-cols-2 justify-items-center justify-center gap-32 mt-5'>
            <div>
              <div className='flex gap-2'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>NodeJS</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Intermediário
                  </small>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>APIs RESTful</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Intermediário
                  </small>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>MySQL</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Básico
                  </small>
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-2'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>Firebase</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Intermediário
                  </small>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <BsCheckLg className='text-sky-300 mt-1' />
                <div>
                  <p className='text-white font-bold text-lg'>MongoDB</p>
                  <small className='text-gray-400 font-bold text-sm'>
                    Básico
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
