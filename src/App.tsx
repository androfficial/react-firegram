import { useState } from 'react';

import { ImageGrid, Modal, Title, UploadForm } from './components';

const App = () => {
  const [selectedImg, setSelectedImg] = useState('');

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;
