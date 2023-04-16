import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import SoftButton from 'components/SoftButton';
import SoftTypography from 'components/SoftTypography';

function ImageUploader({ file, setFile }) {
  const [confirmationText, setConfirmationText] = useState('')

  useEffect(() => {
    if (file) {
      setConfirmationText('Image Uploaded')
    }
  }, [file])

  const uploadFile = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setFile(file)
  }

  return (
    <>
      <input
        onChange={uploadFile}
        style={{ display: 'none' }}
        type='file'
        id='select-file'
      />
      <label htmlFor='select-file'>
        <SoftButton
          fullWidth
          color="secondary" 
        >
          {'Upload Image'}
        </SoftButton>
      </label>
      <SoftTypography
        variant={'h4'}
        sx={{ textAlign: 'center', marginTop: 3, marginBottom: 5 }}
        >
        {confirmationText}
      </SoftTypography>
      {confirmationText && <img src={URL.createObjectURL(selectedFile)} alt="Selected file" />}
    </>
  );
}

ImageUploader.propTypes = {
  file: PropTypes.isRequired,
  setFile: PropTypes.isRequired
};

export default ImageUploader