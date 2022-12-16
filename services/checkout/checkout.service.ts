import axios from "axios";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import { FormData } from "shared/types/types";

export async function createCheckout(data: FormData) {
    try {
        const response = await axios.post(
            '/api/checkout',
            {
                customer: {
                    name: data.name,
                    lastname: data.lastname,
                    email: data.email,
                    address: {
                        address1: data.address1,
                        address2: data.address2,
                        city: data.city,
                        state: data.state,
                        zipCode: data.zipCode,
                    }
                },
                card: {
                    number: data.number,
                    cvc: data.cvc,
                    expDate: data.expDate,
                    nameOnCard: data.nameOnCard,
                }
            }
        )

        return response;
    } catch (e: any) {        
        if (e.response.data.message === "The card doesn't have the require amount to do the transfer") {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'O cartão não tem o valor necessário para fazer a transferência',                
            });
        }

        if (e.response.data.message === "The card cannot authorize the payment. Please call your bank before try again") {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'O cartão não pode autorizar o pagamento. Ligue para o seu banco antes de tentar novamente',                
            });            
        }

        if (e.response.data.message === "The address data is invalid. Please review your data and submit it again") {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'O endereço é invalido, Por favor verifique os dados e envie novamente!',                
            });             
        }

        if (e.response.data.message === "The card data is not valid. Please review your data and submit it again") {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Número do cartão invalido, Por favor verifique os dados e envie novamente!',                
            });              
        }

        return Promise.reject(e);
    }
}

export function useCheckout() {
    return useMutation(createCheckout);
}