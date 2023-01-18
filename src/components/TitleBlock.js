import { useEffect, useRef } from 'react';
import { getDate } from '../utils/getDate';

export default function TitleBlock({ ward }) {
  const humanDate = useRef();

  useEffect(() => { 
    humanDate.current.innerHTML = getDate();
  }, []);

  return [
    <img key="title-logo" src="./modern-logo.png" className="zero-auto w-3/4 md:w-1/2 lg:w-1/4" alt="church-logo" />,
    <div key="title-credits" className="church-font text-center p-1 py-2">
      <p className="font-md">{ward}</p>
      <p className="font-lg">Sacrament Meeting</p>
      <p className="font-md" ref={humanDate}></p>
      <hr className="h-px my-4 bg-gray-400 border-0" />
    </div>
  ];
}