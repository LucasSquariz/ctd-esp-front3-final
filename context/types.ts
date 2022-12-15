import { Dispatch, SetStateAction } from "react";

export type Order = {
    title: string;
    path: string;
    extension: string;
    price: number;
}

export type Checkout = {
    firstName: string;
    lastName: string;
    email: string;
    addressStreet: string;
    addressDistrict: string;
    addressNumber: string;
    addressComp?: string | null;
    zipCode: string;
    city: string;
    state: string;
    cardNumber: string;
    cardName: string;
    cardExpDate: string;
    cardCvv: string;
}

export type CheckoutStateContextData = {
    checkout: Checkout;
    order: Order;
};

export type CheckoutDispatchContextData = {
    registerCheckout: Dispatch<SetStateAction<Checkout>>;
    registerOrder: Dispatch<SetStateAction<Order>>;
};