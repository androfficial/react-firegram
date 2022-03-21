import { motion } from 'framer-motion';
import { useEffect } from 'react';

import useStorage from '../../hooks/useStorage';

interface IProgressBarProps {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export const ProgressBar = ({ file, setFile }: IProgressBarProps) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};
