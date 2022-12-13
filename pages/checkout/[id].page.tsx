import { Container, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";

export default function checkout() {
    return (
        <Container maxWidth={'xs'} >
            <Container sx={{ marginTop: 5}}>
                <Typography>Dados pessoais</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Nome</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                  
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Sobrenome</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
            </Container>
            <Container sx={{ marginTop: 10}}>
                <Typography>Endereço de entrega</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Rua</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                  
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Bairro</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Numero</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Complemento</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">CEP</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Cidade</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Estado</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
            </Container>
            <Container sx={{ marginTop: 10}}>
                <Typography>Dados de pagamento</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Numero do cartão</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                  
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Nome como aparece no cartão</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Data de validade</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Código de segurança</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />                    
                </FormControl>                
            </Container>
        </Container>


    )
}