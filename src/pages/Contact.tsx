import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { LayoutBase } from '../shared/layouts';
import { Footer } from '../shared/components';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .send('service_qau9efp', 'template_ragkpoe', form, 'H0O8hwviJxCgrZ-XS')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <LayoutBase>
        <div className='flex justify-center items-center flex-col'>
          <h5 className='text-gray-400 font-bold text-sm'>Entre em</h5>
          <h1 className='text-4xl font-bold text-sky-300'>Contato</h1>

          <div className='w-3/5 grid grid-cols-8 text-white gap-[12%] mt-20 max-xl:flex max-xl:flex-col max-xl:mt-10'>
            <div className='gap-5 col-span-3 flex flex-col'>
              <article className='bg-blue-900 p-5 rounded-3xl center text-center flex justify-center items-center flex-col border-solid border-2 border-transparent transition hover:bg-transparent hover:border-sky-300'>
                <MdOutlineEmail className='text-2xl mb-2' />
                <h4 className='font-bold'>E-Mail</h4>
                <h5 className='mb-3 font-bold'>lfelipeggarcia@gmail.com</h5>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='mailto:lfelipeggarcia@gmail.com'
                  className='text-sky-300 hover:text-white transition'
                >
                  Enviar Mensagem
                </a>
              </article>
              <article className='bg-blue-900 p-5 rounded-3xl center text-center flex justify-center items-center flex-col border-solid border-2 border-transparent transition hover:bg-transparent hover:border-sky-300'>
                <BsWhatsapp className='text-2xl mb-2' />
                <h4 className='font-bold'>WhatsApp</h4>
                <h5 className='mb-3 font-bold'>+55(18)99710-0140</h5>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://wa.me/+5518997100140'
                  className='text-sky-300 hover:text-white transition'
                >
                  Enviar Mensagem
                </a>
              </article>
            </div>
            <form
              onSubmit={sendEmail}
              className='col-span-5 flex flex-col items-center gap-5 max-xl:mt-5'
            >
              <div className='w-full text-center'>
                <label className='text-gray-400 font-bold text-sm'>
                  Envie uma Mensagem abaixo
                </label>
                <input
                  className='w-full p-6 rounded-lg bg-transparent border border-solid border-sky-300'
                  type='text'
                  name='name'
                  placeholder='Seu Nome Completo'
                  required
                  onChange={(e: any) =>
                    setForm((rest) => ({ ...rest, name: e.target.value }))
                  }
                />
              </div>
              <input
                className='w-full p-6 rounded-lg bg-transparent border border-solid border-sky-300'
                type='email'
                name='email'
                placeholder='Seu E-Mail ou Número para Contato'
                required
                onChange={(e: any) =>
                  setForm((rest) => ({ ...rest, email: e.target.value }))
                }
              />
              <textarea
                className='w-full p-6 rounded-lg bg-transparent border border-solid border-sky-300 resize-none'
                name='message'
                placeholder='Sua Mensagem'
                required
                rows={7}
                onChange={(e: any) =>
                  setForm((rest) => ({ ...rest, message: e.target.value }))
                }
              />
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='p-2 text-lg text-sky-300 hover:text-white duration-300 w-40'
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </LayoutBase>
      <Footer />
    </>
  );
}
