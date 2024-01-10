import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles.css';

const ImageUpload = ({ setSelectedFile, showSubmitButton }) => {
  const [selectedFile, setInternalSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState();
  const [showUploadSection, setShowUploadSection] = useState(true);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setInternalSelectedFile(file);
    setSelectedFile(file);
    previewFile(file);
    setShowUploadSection(false);
  }, [setSelectedFile]);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleCancel = () => {
    setInternalSelectedFile(null);
    setPreviewSource(null);
    setShowUploadSection(true);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div style={{ alignContent: 'center' }}>
      {showUploadSection && (
        <div id="Upload">
          <h1 style={{ alignContent: 'center', textAlign: 'center' }}>Image Upload</h1>
          <div {...getRootProps()} className="dropzone" style={{ height: '300px', justifyContent: 'center', textAlign: 'center', display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      )}

      {!showUploadSection && (
        <div id="Display">
          <aside>
            <h4 style={{ textAlign: 'center' }}>Files</h4>
          </aside>
          {previewSource && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={previewSource} alt="chosen" style={{ height: '300px' }} />
            </div>
          )}
        </div>
      )}

      {selectedFile && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', backgroundColor:"ffe4c4" }}>
          <button onClick={handleCancel} style={{ marginRight: '10px' }}>
            Cancel
          </button>
          {showSubmitButton && (
            // Your submit button functionality here
            <button onClick={() => console.log('Submit button clicked')}>
              Submit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
