import toast from "react-hot-toast";

export const BACKEND_URL = "http://localhost:8000";

export const notify = (error: any) => {
    toast.error(error, {
      duration: 5000,
      position: 'bottom-left',
    })
}