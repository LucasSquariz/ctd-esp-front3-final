import { Container, FormControl, Button, Input, InputLabel, Typography, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../validations/yupValidation/schema";

export default function checkout() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <Container maxWidth={'xs'} >
            <Container sx={{ marginTop: 5 }}>
                <Typography>Dados pessoais</Typography>
                <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>                  
                        <Container>
                            <FormControl>
                                <InputLabel htmlFor="name">Nome</InputLabel>
                                <Input id="name" aria-describedby="name" {...register('firstName')} />                                
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="lastName">Sobrenome</InputLabel>
                                <Input id="lastName" aria-describedby="my-helper-text" {...register('lastName')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('email')} />
                            </FormControl>
                        </Container>
                        <Container sx={{ marginTop: 10 }}>
                            <Typography>Endereço de entrega</Typography>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Rua</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('addressStreet')} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Bairro</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('addressDistrict')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Numero</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('addressNumber')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Complemento</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('addressComp')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">CEP</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('zipCode')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Cidade</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('city')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Estado</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('state')}/>
                            </FormControl>
                        </Container>
                        <Container sx={{ marginTop: 10 }}>
                            <Typography>Dados de pagamento</Typography>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Numero do cartão</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('cardNumber')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Nome como aparece no cartão</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('cardName')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Data de validade</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('cardExpDate')}/>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Código de segurança</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" {...register('cardCvc')}/>
                            </FormControl>                            
                        </Container> 
                        <Button type="submit" variant="contained">Finalizar Compra</Button>                  
                </form>
            </Container>
        </Container>
    )
}


