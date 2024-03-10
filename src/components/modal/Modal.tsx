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
import { DefaultButton, ClearButton } from '../buttons/Buttons';


// Définition des props pour le composant Modal
interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

// interface est une manière de définire la forme(le contenue) d'un object
interface IFormInput {
    projectName: string;
}

// Shema de Validation avec YUP
const schema_project = yup.object({
    projectName: yup.string().required('Project name is required')
}).required();




const Modal = ({open, handleClose}: ModalProps) => {
// State pour gérer l'etat de l'image et du pdf
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [pdfFile, setPDFFile] = useState<File | null>(null);
// Handler -> gestionnaires d'événements qui mettent à jour l'état du composant avec l'image et le pdf sélectioné
    const handleImageSelect = (file: File) => {setImageFile(file);};
    const handlePDFSelect = (file: File) => {setPDFFile(file);};
// Set up de yup pour utilisé le shema de validation mis en place plus
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema_project),
        });
    
const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formData = new FormData();
    formData.append('projectName', data.projectName);
    if (imageFile) {
        formData.append('image', imageFile);
    } else {
        // Fetch and append the default image as a blob
        fetch('/src/assets/logo.png')
            .then(response => response.blob())
            .then(blob => {
                const defaultImageFile = new File([blob], 'default.jpg', { type: 'image/jpeg' });
                formData.append('image', defaultImageFile);
            })
            .catch(error => console.error('Error fetching default image:', error));
    }

    if (pdfFile) {
        formData.append('pdf', pdfFile);
    }
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    // Ici tu peux gerer la connexion avec le back ex:
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
            <DefaultButton onClick={handleClose}>Cancel</DefaultButton>
            <ClearButton type="submit">Create</ClearButton>
        </DialogActions>
        </form>
        </Dialog>
    </>
    );
}

export default Modal;