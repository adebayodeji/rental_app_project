import React from 'react';
import Image from 'next/image';

interface PropertyProps {
  name: string;
  image: string;
  innerRef?: (node?: Element | null | undefined) => void;
}

const Pokemon: React.FC<PropertyProps> = ({ name, image, innerRef }) => {
  return (
    <React.Fragment>
      <div className='' ref={innerRef}>
        <div className='flex cursor-pointer flex-row items-center gap-4 rounded  border-r-4 bg-white p-2 shadow-lg'>
          <div className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          ">
            <Image
              src={image}
              alt='profileImg'
              width={200}
              height={200}
              className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            />
          </div>
          <div>
            <span>{name}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pokemon;
