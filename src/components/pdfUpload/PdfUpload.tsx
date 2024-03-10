import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

interface FileUploadAreaProps {
  onFileSelect: (file: File) => void
}

const PdfUploadArea = ({onFileSelect}: FileUploadAreaProps) => {
  const [fileName, setFileName] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: any) => {
      if (fileRejections.length > 0) {
        console.log('Rejected files:', fileRejections)
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        console.log('Accepted file:', file)
        setFileName(file.name)
        onFileSelect(file)
      }
    },
    [onFileSelect],
  )

  const {getRootProps, getInputProps, isDragActive, fileRejections} =
    useDropzone({
      onDrop: acceptedFiles => onFileSelect(acceptedFiles[0]),
      accept: 'application/pdf' as any,
      maxFiles: 1,
    })

  const style = {
    width: '100%',
    border: '2px dashed #cccccc',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#cccccc',
    marginTop: '16px',
    backgroundColor: isDragActive ? '#eaeaea' : '#fafafa',
  } as const

  return (
    <div style={style} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive && <p>Drop the PDF here...</p>}
      {!isDragActive && <p>Drag or click to upload your manuscript</p>}
      {fileName && <p>Selected file: {fileName}</p>}
      {fileRejections.length > 0 && (
        <p style={{color: 'red'}}>
          File type not accepted, please upload a PDF.
        </p>
      )}
    </div>
  )
}

export default PdfUploadArea
