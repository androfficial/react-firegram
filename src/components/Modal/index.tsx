import { motion } from 'framer-motion';
import { MouseEvent } from 'react';

interface IModalProps {
  setSelectedImg: React.Dispatch<React.SetStateAction<string>>;
  selectedImg: string;
}

export const Modal = ({ setSelectedImg, selectedImg }: IModalProps) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('backdrop')) {
      setSelectedImg('');
    }
  };

  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt='enlarged pic'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};
