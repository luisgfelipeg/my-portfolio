import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

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
    <div className='flex justify-center items-center flex-col'>
      <h5>Entre em</h5>
      <h2>Contato</h2>

      <div className='w-3/5 grid grid-cols-8 text-white'>
        <div className='contact__options col-span-3 flex flex-col'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-Mail</h4>
            <h5>lfelipeggarcia@gmail.com</h5>
            <a
              target='_blank'
              rel='noreferrer'
              href='mailto:lfelipeggarcia@gmail.com'
            >
              Enviar Mensagem
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55(18)99710-0140</h5>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://wa.me/+5518997100140'
            >
              Enviar Mensagem
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail} className='col-span-5 flex flex-col'>
          <input
            className='w-full p-6 rounded-lg bg-transparent border border-2 border-solid border-sky-300'
            type='text'
            name='name'
            placeholder='Seu Nome Completo'
            required
            onChange={(e: any) =>
              setForm((rest) => ({ ...rest, name: e.target.value }))
            }
          />
          <input
            className='w-full p-6 rounded-lg bg-transparent border border-2 border-solid border-sky-300'
            type='email'
            name='email'
            placeholder='Seu E-Mail'
            required
            onChange={(e: any) =>
              setForm((rest) => ({ ...rest, email: e.target.value }))
            }
          />
          <textarea
            className='w-full p-6 rounded-lg bg-transparent border border-2 border-solid border-sky-300 resize-none'
            name='message'
            placeholder='Sua Mensagem'
            required
            rows={7}
            onChange={(e: any) =>
              setForm((rest) => ({ ...rest, message: e.target.value }))
            }
          />
          <button type='submit' className='btn btn-primary'>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
