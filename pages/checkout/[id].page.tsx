import { Container, FormControl, Button, Input, InputLabel, Typography, Stack, CardContent, CardMedia, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../validations/yupValidation/schema";
import { getComic } from "dh-marvel/services/marvel/marvel.service";

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params:
                    { id: "2088" }
            }],
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    const data = await getComic(Number(params.id));
    return {
        props: {
            data
        }
    }
}

export default function checkout(props: any) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const comicDetails = props;
    const images = comicDetails.data?.images[0];
    console.log(comicDetails?.data)

    return (
        <Container >
            <Grid sx={{ marginTop: 5, textAlign: 'center' }} container direction='row'>
                <Grid xs={8.25} item>
                    <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>
                        <Grid container direction='row' sx={{ margin: '57px 0', boxShadow: ' #00000059 0px 5px 15px' }}>
                            <Grid sx={{ margin: '10px 0' }} xs item>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Dados pessoais
                                </Typography>
                                <FormControl sx={{ marginTop: '10px' }}>
                                    <InputLabel htmlFor="name">Nome</InputLabel>
                                    <Input id="name" aria-describedby="name" {...register('firstName')} />                                    
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="lastName">Sobrenome</InputLabel>
                                    <Input id="lastName" aria-describedby="my-helper-text" {...register('lastName')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('email')} />
                                </FormControl>
                            </Grid>
                            <Grid sx={{ margin: '10px 0' }} xs item>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Endereço de entrega
                                </Typography>
                                <FormControl sx={{ marginTop: '10px' }}>
                                    <InputLabel htmlFor="my-input">Rua</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('addressStreet')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Bairro</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('addressDistrict')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Numero</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('addressNumber')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Complemento</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('addressComp')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">CEP</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('zipCode')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Cidade</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('city')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Estado</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('state')} />
                                </FormControl>
                            </Grid>
                            <Grid sx={{ margin: '10px 0' }} xs item>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Dados de pagamento
                                </Typography>
                                <FormControl sx={{ marginTop: '10px' }}>
                                    <InputLabel htmlFor="my-input">Numero do cartão</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('cardNumber')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Nome no cartão</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('cardName')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Data de validade</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('cardExpDate')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Código de segurança</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('cardCvv')} />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ marginTop: '20px', width: '100%' }}
                        >
                            Finalizar Compra
                        </Button>
                    </form>
                </Grid>
                <Grid xs={3.75} item>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        Informações do produto:
                    </Typography>
                    <CardContent >
                        <CardMedia
                            component="img"
                            image={`${images?.path}.${images?.extension}`}
                            alt={comicDetails?.title}
                        />
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {comicDetails?.data?.title}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Container >
    )
}

