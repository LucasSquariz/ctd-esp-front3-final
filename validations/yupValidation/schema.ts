import Yup from "./yup";

export const schema = Yup.object().shape({
    name: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email('Formato de email inválido').required(),
    addressStreet: Yup.string().required(),
    addressDistrict: Yup.string().required(),
    addressNumber: Yup.string().required(),
    addressComp: Yup.string(),
    zipCode: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    cardNumber: Yup.string().required(),
    cardName: Yup.string().required(),
    cardExpDate: Yup.string()
        .required()
        .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, 'Validade incorreta')
        .min(
            7,
            'Data de validade deve conter mês com 2 dígitos e ano com 4 dígitos',
        ),
    cardCvc: Yup.string().max(3).min(3).required(),

})