import toast from "react-hot-toast";

export const notifyError = (error: any) => {
    toast.error(error, {
      duration: 5000,
      position: 'bottom-left',
    })
}

export const notifySuccess = (success: any) => {
  toast.success(success, {
    duration: 5000,
    position: 'bottom-left',
  })
}
export const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const backendUrl = process.env.BACKEND_URL!!
