import { useState } from 'react';
import { Footer } from '../../../shared/components';

export function BDC() {
  const [bin, setBin] = useState('');
  const [dec, setDec] = useState('');
  const [textError, setTextError] = useState('');
  const regex = /^[0-1]+$/g;

  function bin2dec() {
    if (bin.match(regex) == null) {
      setTextError('Somente 0 ou 1 pra números Binários');
      setDec('');
    } else {
      setTextError('');
      let n = 0;
      for (let i = 0; i < bin.length; i++) {
        n += Math.pow(2, i) * Number(bin[bin.length - i - 1]);
      }
      setDec(n.toString());
    }
  }

  return (
    <div className='relative min-h-screen flex flex-col'>
      <div className='flex flex-col justify-center items-center h-screen w-full m-auto'>
        <h1 className='text-xl text-sky-300'>
          Conversor de Binário para Decimal
        </h1>
        <form className='flex flex-col border-2 border-solid rounded-3xl p-8 border-sky-300'>
          <div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
            <span className='block text-sky-300'>Número Binário:</span>
            <span className='text-red-600 block'>{textError}</span>
            <input
              className='w-72 border-2 border-solid border-transparent border-b-sky-300 p-2 bg-transparent text-white duration-500 focus:rounded-2xl focus:border-sky-300 hover:rounded-2xl hover:border-sky-300 placeholder:text-gray-400'
              required
              type='text'
              name='binário'
              placeholder='Coloque o valor Binário'
              onChange={(e) => {
                setBin(e.target.value);
                console.log(bin);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                bin2dec();
              }}
              className='bdcButton text-xl max-sm:mt-8 hover:text-sky-300'
            >
              <span className='bdcSpan text-white ml-2'>converter</span>
            </button>
          </div>
          <br />
          <div className='flex justify-center items-center flex-col'>
            <span className='block text-sky-300'>Número Decimal:</span>
            <h2 className='flex w-min items-center justify-center p-2 text-white'>
              {dec}
            </h2>
          </div>
        </form>
      </div>
      <Footer shortPage />
    </div>
  );
}
