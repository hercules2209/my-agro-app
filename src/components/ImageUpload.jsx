import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles.css';


const ImageUpload = ({ setSelectedFile }) => {
const [previewSource, setPreviewSource] = useState();
   
const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      previewFile(file);
}, [setSelectedFile]);

 const previewFile = (file) => {
 const reader = new FileReader();
 reader.readAsDataURL(file);
 reader.onloadend = () => {
   setPreviewSource(reader.result);
 }
 }

 const {getRootProps, getInputProps} = useDropzone({
 accept: 'image/*',
 onDrop,
 })

 return (
    <div style={{alignContent:"center"}}>
     <div {...getRootProps()} className="dropzone">
       <input {...getInputProps()} />
       <p>Drag 'n' drop some files here, or click to select files</p>
     </div>
     <aside>
       <h4 style={{textAlign:"center"}}>Files</h4>
     </aside>
     {
       previewSource && (
         <div style={{ display: 'flex', justifyContent: 'center' }}>
           <img src={previewSource} alt="chosen" style={{ height: '300px' }}/>
         </div>
       )
     }
    </div>
    )
}

export default ImageUpload;