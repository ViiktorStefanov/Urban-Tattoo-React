import { toast } from 'react-toastify';

let id: any;

const notification = {
     info : (message: string, autoClose?: any) => toast.info(message, {
        position: "top-left",
        autoClose: autoClose || 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
}),

success : (message: string, autoClose?: any) => {
    toast.success(message, {
    position: "top-left",
    autoClose: autoClose || 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
})},

 warning : (message: string, autoClose?: any) => toast.warn(message, {
    position: "top-left",
    autoClose: 3000 || autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
}),

 error : (message: string, autoClose?: any) => toast.error(message, {
    position: "top-left",
    autoClose: autoClose || 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
}),

 loading : (message: string) => {
    id = toast.loading(message);
},

 update : (newMessage: string, autoClose?: any, type?: any) => toast.update(id, { 
    render: newMessage, type: type || 'success', isLoading: false , autoClose: autoClose || 2000, hideProgressBar: true
}),

destroy: () => toast.dismiss(),

};

export default notification;