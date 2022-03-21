import { useEffect, useState } from 'react';

import { projectFirestore } from '../firebase/config';

interface IDocuments {
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
  id: string;
  url: string;
}

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<IDocuments[]>([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const documents = [] as IDocuments[];
        snap.forEach((doc) => {
          const { createdAt, url } = doc.data();
          documents.push({ createdAt, id: doc.id, url });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
