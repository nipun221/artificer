import { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import Image from 'next/image';

type Props = {
    title: string;
    state: string;
    filters: Array<string>;
    setState: (value: string) => void;
}

const CustomMenu = ({ title, state, filters, setState } : Props) => {
  return (
    <div className='flexStart flex-col w-full gap-7 relative'>
        <label htmlFor={title} className='w-fill text-gray-100'>
            {title}
        </label>
    </div>
  )
}

export default CustomMenu;