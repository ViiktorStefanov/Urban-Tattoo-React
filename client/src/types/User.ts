import { Reservation } from "./Reservation"

export  type User = {
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    reservations: Reservation[],
    _role: string,
    accessToken: string,
};

export type LoginData = {
    email: string,
    password: string,
};

export type RegisterData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string
    phone: string,
};