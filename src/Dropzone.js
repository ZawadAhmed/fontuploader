import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { IconUpload } from '@tabler/icons-react';

export function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center w-full h-48 p-6 border-2 border-dashed border-gray-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
    >
      <input {...getInputProps()} />
      <IconUpload size={40} className="text-gray-600 mb-4" />
      {isDragActive ? (
        <p className="text-gray-700">Drop the files here ...</p>
      ) : (
        <p className="text-gray-700">Drag 'n' drop some files here, or click to select files Only Tiff files</p>
        
      )}
    </div>
  );
}