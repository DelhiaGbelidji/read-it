import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ImageUploadArea from '../imageUpload/ImageUpload';
import PdfUploadArea from '../pdfUpload/PdfUpload';
import { useState } from 'react';

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

interface IFormInput {
    projectName: string;
}

const schema_project = yup.object({
    projectName: yup.string().required('Project name is required'),
    image: yup.mixed()
        .test('fileSize', 'The file is too large', value => !value)
        .test('fileType', 'Unsupported file format', value => !value)
        // You can add more tests as needed.
}).required();




const Modal = ({open, handleClose}: ModalProps) => {

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [pdfFile, setPDFFile] = useState<File | null>(null);

    const handleImageSelect = (file: File) => {
        setImageFile(file);
    };

    const handlePDFSelect = (file: File) => {
        setPDFFile(file);
    };

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema_project),
        });
    
const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formData = new FormData();
    formData.append('projectName', data.projectName);
    if (imageFile) {
        formData.append('image', imageFile);
    }
    if (pdfFile) {
        formData.append('pdf', pdfFile);
    }
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    // Here, you would handle the form data submission to your backend.
    // For example, using fetch to send it to a server endpoint:
    // fetch('your-endpoint', {
    //     method: 'POST',
    //     body: formData,
    // });

    handleClose();
};

return (
    <>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New project</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
            <label htmlFor="projectName">Project Name</label>
            <input {...register("projectName")} placeholder="Project Name" id="projectName"/>
            {errors.projectName && <p>{errors.projectName.message}</p>}
            <ImageUploadArea onImageSelect={handleImageSelect} />
            <PdfUploadArea onFileSelect={handlePDFSelect} />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
        </DialogActions>
        </form>
        </Dialog>
    </>
    );
}

export default Modal;