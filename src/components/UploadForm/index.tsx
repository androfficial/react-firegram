/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useState } from 'react';

import { ProgressBar } from '../ProgressBar';

export const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const selected = e.target.files[0];

      if (types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };

  return (
    <form>
      <label>
        <input type='file' onChange={handleChange} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
