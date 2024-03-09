import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadAreaProps {
    onImageSelect: (file: File) => void;
}

const ImageUploadArea = ({ onImageSelect }: FileUploadAreaProps) => {

const [previewUrl, setPreviewUrl] = useState<string | null>(null);

const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    onImageSelect(file);
    setPreviewUrl(URL.createObjectURL(file));
}, [onImageSelect]);

const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*' as any,
});

// Define your inline styles
const style = {
    border: '2px dashed #cccccc',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#cccccc',
    backgroundColor: isDragActive ? '#eaeaea' : '#fafafa'
} as const;

return (
    <div style={style} {...getRootProps()} >
        <input {...getInputProps()} />
        {isDragActive ? (
        <p>Drop the files here ...</p>
        ) : (
        <p>
            Drag or click to upload your book cover
        </p>
        )}
        {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: '100%', height: 'auto' }} />}
    </div>
    );
};

export default ImageUploadArea;
