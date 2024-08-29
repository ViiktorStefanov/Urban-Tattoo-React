import { User } from "../types/User";

const key = process.env.REACT_APP_LOCAL_STORAGE;

export const setLocalStorage = (user: User) => {
    localStorage.setItem(key!, JSON.stringify(user));
};

export const getLocalStorage = () => {
    const user = localStorage.getItem(key!);
    return user ? JSON.parse(user) : null;
};

export const clearLocalStorage = () => {
    localStorage.removeItem(key!);
};