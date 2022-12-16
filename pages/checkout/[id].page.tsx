import { Container, FormControl, Button, Input, InputLabel, Typography, Stack, CardContent, CardMedia, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../shared/yupValidation/schema";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { Comic } from "shared/types/types";
import { useRouter } from "next/router";
import { useCheckout } from "dh-marvel/services/checkout/checkout.service";
import { useCheckoutDispatch } from "../../context/context";
import Swal from "sweetalert2";
import { creditCardExpFormatter } from "../../util/formatters/creditCardExpFormatter";
import { creditCardFormatter } from "../../util/formatters/creditCardFormatter";
import { cepFormatter } from "../../util/formatters/cepFormatter";

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
    const { register, handleSubmit,setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const comicDetails = props;    
    const { mutate: createCheckout } = useCheckout();
    const router = useRouter();    
    const { registerCheckout, registerOrder } = useCheckoutDispatch();

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
                                    <TextField
                                        id="firstName"
                                        label="Nome"
                                        variant="outlined"
                                        error={!!errors?.firstName?.message}
                                        {...register("firstName")}
                                    />
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
                                    <TextField
                                        id="lastName"
                                        label="Sobrenome"
                                        variant="outlined"
                                        error={!!errors?.lastName?.message}
                                        {...register("lastName")} />
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
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        error={!!errors?.email?.message}
                                        {...register("email")} />
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
                                    <TextField
                                        id="addressStreet"
                                        label="Rua"
                                        variant="outlined"
                                        error={!!errors?.addressStreet?.message}
                                        {...register("addressStreet")} />
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
                                    <TextField
                                        id="addressDistrict"
                                        label="Bairro"
                                        variant="outlined"
                                        error={!!errors?.addressDistrict?.message}
                                        {...register("addressDistrict")} />
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
                                    <TextField
                                        id="addressNumber"
                                        label="Número"
                                        variant="outlined"
                                        error={!!errors?.addressNumber?.message}
                                        {...register("addressNumber")} />
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
                                    <TextField
                                        id="addressComp"
                                        label="Complemento"
                                        variant="outlined"
                                        {...register("addressComp")} />
                                </FormControl>
                                <FormControl sx={{ margin: '6px 0' }}>
                                    <TextField
                                        id="zipCode"
                                        label="CEP"
                                        variant="outlined"
                                        error={!!errors?.zipCode?.message}
                                        {...register("zipCode", {
                                            onChange: e => {
                                                setValue('zipCode', cepFormatter(e.target.value));
                                            },
                                        })} />
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
                                    <TextField
                                        id="city"
                                        label="Cidade"
                                        variant="outlined"
                                        error={!!errors?.city?.message}
                                        {...register("city")} />
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
                                    <TextField
                                        id="state"
                                        label="Estado"
                                        variant="outlined"
                                        error={!!errors?.state?.message}
                                        {...register("state")} />
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
                                    <TextField
                                        id="cardNumber"
                                        label="Número do cartão"
                                        variant="outlined"
                                        error={!!errors?.cardNumber?.message}
                                        {...register("cardNumber", {
                                            onChange: e => {
                                                setValue('cardNumber', creditCardFormatter(e.target.value));
                                            },
                                        })} />
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
                                    <TextField
                                        id="cardName"
                                        label="Nome no cartão"
                                        variant="outlined"
                                        error={!!errors?.cardName?.message}
                                        {...register("cardName")} />
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
                                    <TextField
                                        id="cardExpDate"
                                        label="Data de validade"
                                        variant="outlined"
                                        error={!!errors?.cardExpDate?.message}
                                        {...register("cardExpDate", {
                                            onChange: e => {
                                                setValue('cardExpDate', creditCardExpFormatter(e.target.value));
                                            },
                                        })} />
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
                                    <TextField
                                        id="cardCvv"
                                        label="Código de segurança"
                                        variant="outlined"
                                        error={!!errors?.cardCvv?.message}
                                        {...register("cardCvv")} />
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
                            image={`${comicDetails?.data?.thumbnail?.path}.${comicDetails?.data?.thumbnail?.extension}`}
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

