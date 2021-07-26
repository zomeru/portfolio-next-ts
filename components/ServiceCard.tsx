import React from 'react';
import { IService } from '../type';

const ServiceCard: React.FC<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  return (
    <div className='flex items-center p-2 space-x-4'>
      <Icon className='w-12 h-12 text-blue' />
      <div>
        <h4 className='font-bold'>{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: about }} />
      </div>
    </div>
  );
};

export default ServiceCard;
