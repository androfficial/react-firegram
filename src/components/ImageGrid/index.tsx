import { motion } from 'framer-motion';

import useFirestore from '../../hooks/useFirestore';

interface IImageGridProps {
  setSelectedImg: React.Dispatch<React.SetStateAction<string>>;
}

export const ImageGrid = ({ setSelectedImg }: IImageGridProps) => {
  const { docs } = useFirestore('images');

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='img-wrap'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
