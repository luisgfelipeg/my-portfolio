import { BsCheckLg } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import html from '../../assets/images/tech/html.png';
import css from '../../assets/images/tech/css.png';
import js from '../../assets/images/tech/javascript.png';
import tail from '../../assets/images/tech/tailwind.png';
import react from '../../assets/images/tech/react.png';
import typescript from '../../assets/images/tech/typescript.png';
import boots from '../../assets/images/tech/boots.png';
import node from '../../assets/images/tech/nodejs.png';
import mongo from '../../assets/images/tech/mongodb.png';
import firebase from '../../assets/images/tech/firebase.png';
import sql from '../../assets/images/tech/sql.png';
import mysql from '../../assets/images/tech/mysql.png';
import postgre from '../../assets/images/tech/postgre.png';
import { Row } from './skills-row/Row';

export const Skills = () => {
  return (
    <section className='flex justify-center flex-col items-center' id='skills'>
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
      <div className='flex flex-1 gap-40 mt-20 max-2xl:gap-20 max-xl:gap-10 max-lg:flex-col max-xl:mt-10 flex-wrap justify-center'>
        <motion.div
          className='bg-blue-900 flex justify-evenly items-center flex-col px-16 py-8 max-md:px-10 rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn('right', 'spring', 0.5, 1.5)}
        >
          <h2 className='text-sky-300 text-4xl font-bold'>Frontend</h2>
          <div className='grid grid-cols-2 justify-items-center justify-center gap-32 mt-5'>
            <div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.6, 2)}
              >
                <Row icon={html} title='HTML5' first />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.7, 2)}
              >
                <Row icon={css} title='CSS3' />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.8, 2)}
              >
                <Row icon={js} title='JavaScript' />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.9, 2)}
              >
                <Row icon={typescript} title='Typescript' />
              </motion.div>
            </div>
            <div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.6, 2)}
              >
                <Row icon={react} title='ReactJS' first />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.7, 2)}
              >
                <Row icon={react} title='React Native' />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.8, 2)}
              >
                <Row icon={tail} title='TailwindCSS' />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.9, 2)}
              >
                <Row icon={boots} title='Bootstrap' />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn('right', 'spring', 0.5, 1.5)}
          className='bg-blue-900 flex justify-evenly items-center flex-col px-16 py-8 max-md:px-10 rounded-3xl hover:bg-slate-900 hover:outline hover:outline-2 hover:outline-sky-300 duration-200'
        >
          <h2 className='text-sky-300 text-4xl font-bold'>Backend</h2>
          <div className='grid grid-cols-2 justify-items-center justify-center gap-32 mt-5'>
            <div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.6, 2)}
              >
                <Row icon={node} title='NodeJS' first />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.7, 2)}
              >
                <Row icon={sql} title='SQL' />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.8, 2)}
              >
                <Row icon={mysql} title='MySQL' />
              </motion.div>
            </div>
            <div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.6, 2)}
              >
                <Row icon={postgre} title='PostgreSQL' first />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.7, 2)}
              >
                <Row icon={mongo} title='MongoDB' />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={fadeIn('right', 'spring', 0.8, 2)}
              >
                <Row icon={firebase} title='Firebase' />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
