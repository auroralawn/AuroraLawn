import { IconType } from 'react-icons';

interface ProcessProps {
  icon: IconType;
  name: string;
  description: string;
}

export default function Trait({ icon: Icon, name, description }: ProcessProps) {
  return (
    <div className='flex flex-col items-center m-10'>
      <Icon
        size={120}
        className='text-primary'
      />
      <h5 className='text-primary'>{name}</h5>
      <p className='text-center max-w-[20rem]'>{description}</p>
    </div>
  );
}
