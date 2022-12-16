import { Container, FormControl, Button, Input, InputLabel, Typography, Stack, CardContent, CardMedia, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../shared/yupValidation/schema";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { Comic } from "shared/types/types";
import { useRouter } from "next/router";
import { useCheckout } from "dh-marvel/services/checkout/checkout.service";
import { useCheckoutDispatch, useCheckoutState } from "../../context/context";
import Swal from "sweetalert2";

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

type PropsDetails = {
    title: string;
    data: Comic
}

export default function Checkout(props: PropsDetails) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const comicDetails = props;
    const images = comicDetails.data?.images[0];
    const { mutate: createCheckout } = useCheckout()
    const router = useRouter()
    const { checkout } = useCheckoutState()
    const { registerCheckout, registerOrder } = useCheckoutDispatch()

    const onCheckoutSubmit = (data: any) => {
        createCheckout(data, {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Compra realizada com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                })
                registerCheckout(data)
                registerOrder({
                    title: comicDetails?.data?.title,
                    price: comicDetails?.data?.price,
                    path: comicDetails?.data?.thumbnail?.path,
                    extension: comicDetails?.data?.thumbnail?.extension
                })
                router.push('successfulorder')
                console.log(checkout)
            }
        })
    }

    return (
        <Container >
            <Grid sx={{ marginTop: 5, textAlign: 'center' }} container direction='row'>
                <Grid xs={8.25} item>
                    <form className="form" onSubmit={handleSubmit(onCheckoutSubmit)}>
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
                                    {errors.firstName?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors?.firstName?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="lastName">Sobrenome</InputLabel>
                                    <Input id="lastName" aria-describedby="my-helper-text" {...register('lastName')} />
                                    {errors.lastName?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.lastName?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('email')} />
                                    {errors.email?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.email?.message}`}
                                        </Typography>
                                        : ''}
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
                                    {errors.addressStreet?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.addressStreet?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Bairro</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('addressDistrict')} />
                                    {errors.addressDistrict?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.addressDistrict?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Numero</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('addressNumber')} />
                                    {errors.addressNumber?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.addressNumber?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Complemento</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('addressComp')} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">CEP</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('zipCode')} />
                                    {errors.zipCode?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.zipCode?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Cidade</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('city')} />
                                    {errors.city?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.city?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Estado</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('state')} />
                                    {errors.state?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.state?.message}`}
                                        </Typography>
                                        : ''}
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
                                    {errors.cardNumber?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.cardNumber?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Nome no cartão</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('cardName')} />
                                    {errors.cardName?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.cardName?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Data de validade</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('cardExpDate')} />
                                    {errors.cardExpDate?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.cardExpDate?.message}`}
                                        </Typography>
                                        : ''}
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <InputLabel htmlFor="my-input">Código de segurança</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" {...register('cardCvv')} />
                                    {errors.cardCvv?.message ?
                                        <Typography
                                            color="red"
                                            gutterBottom
                                            noWrap
                                            variant="body1"
                                            component="div"
                                        >
                                            {`${errors.cardCvv?.message}`}
                                        </Typography>
                                        : ''}
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

