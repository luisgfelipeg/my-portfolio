import MeAbout from '../../assets/images/meAbout.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Tilt from 'react-parallax-tilt';
import frontend from '../../assets/images/web.png';
import backend from '../../assets/images/backend.png';
import mobile from '../../assets/images/mobile.png';

export const About = () => {
  return (
    <section className='flex justify-center flex-col items-center'>
      <h5 className='text-gray-400 font-bold text-sm'>Um pouco</h5>
      <h1 className='text-4xl font-bold text-sky-300'>Sobre mim!</h1>
      <div className='mt-20 max-xl:mt-10 flex justify-center gap-48 max-lg:flex-col max-lg:items-center max-lg:gap-10'>
        <Tilt>
          <img
            className='w-96 rounded-3xl ring-8'
            src={MeAbout}
            alt='Minha foto'
          />
        </Tilt>
        <div className='w-2/5 max-lg:w-3/4 max-md:w-full'>
          <p className='text-gray-400 text-xl'>
            <>
              Desenvolvedor Full Stack com experiência desde o inicio de 2022
              com projetos pessoais e comerciais. Sou apaixonado por tecnologia
              sempre em busca em me propor a novos desafios e aprendizado no
              desenvolvimento. A curiosidade sempre me mantém constantemente
              atualizado aprimorando ainda mais minhas habilidades. Minhas
              habilidades são: JavaScript, Typescript, Java, Python, SQL,
              ReactJS, React Native, HTML5, CSS3, JQuery, TailwindCSS,
              Bootstrap, NodeJS, MongoDB, Firebase, MySQL dentre outras
              tecnologias com foco em desenvolvimento web/mobile com qualidade e
              valor. Me considero uma pessoa eficiente e ágil em aprender novas
              linguagens e tecnologias, além de possuir habilidades de me
              adaptar facilmente a novos desafios que surgem no dia a dia! Se eu
              pudesse me definir em 3 palavras: perseverante, esforçado e
              otimista!
            </>
          </p>
          <div className='flex justify-center items-center gap-14 max-2xl:gap-8 max-xl:gap-3 relative max-xl:right-14 max-lg:right-0 max-sm:gap-1 max-sm:flex-wrap'>
            <Tilt>
              <motion.div
                variants={fadeIn('right', 'spring', 0.25, 0.75)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.6 }}
                className='w-full green-ping-gradient p-1 rounded-3xl shadow'
              >
                <div className='bg-blue-900 rounded-3xl py-5 px-12 min-h-[200px] max-w-[200px] flex justify-evenly items-center flex-col mt-16 max-xl:py-2 max-xl:px-6'>
                  <img
                    src={frontend}
                    alt='web logo'
                    className='w-16 h-16 object-contain'
                  />
                  <h3 className='text-white text-lg font-bold text-center'>
                    Desenvolvedor Front-End
                  </h3>
                </div>
              </motion.div>
            </Tilt>
            <Tilt>
              <motion.div
                variants={fadeIn('right', 'spring', 0.5, 0.75)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.6 }}
                className='w-full green-ping-gradient p-1 rounded-3xl shadow'
              >
                <div className='bg-blue-900 rounded-3xl py-5 px-12 min-h-[200px] max-w-[200px] flex justify-evenly items-center flex-col mt-16 max-xl:py-2 max-xl:px-6'>
                  <img
                    src={backend}
                    alt='web logo'
                    className='w-16 h-16 object-contain'
                  />
                  <h3 className='text-white text-lg font-bold text-center'>
                    Desenvolvedor Back-End
                  </h3>
                </div>
              </motion.div>
            </Tilt>
            <Tilt>
              <motion.div
                variants={fadeIn('right', 'spring', 0.75, 0.75)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.6 }}
                className='w-full green-ping-gradient p-1 rounded-3xl shadow'
              >
                <div className='bg-blue-900 rounded-3xl py-5 px-12 min-h-[200px] max-w-[200px] flex justify-evenly items-center flex-col mt-16 max-xl:py-2 max-xl:px-6'>
                  <img
                    src={mobile}
                    alt='web logo'
                    className='w-16 h-16 object-contain'
                  />
                  <h3 className='text-white text-lg font-bold text-center'>
                    Desenvolvedor React-Native
                  </h3>
                </div>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};
