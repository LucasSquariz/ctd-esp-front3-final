import { CardMedia, Container, Typography } from "@mui/material";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import Head from "next/head";

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params:
                    { id: "1009196" }
            }],
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    const data = await getCharacter(params.id)
    return {
        props: {
            data
        }
    }
}

export default function characterDetals(props: any) {
    const characterData = props    
    return (
        <Container>
            <Head>
                <title>Marvel - Characther</title>
            </Head>
            <CardMedia
                component="img"
                height="350"
                image={`${characterData?.data?.thumbnail?.path}.${characterData?.data?.thumbnail?.extension}`}
                alt={characterData?.name}
            />
            <Typography
                gutterBottom
                noWrap
                variant="h3"
                component="div"
                align="center"
            >
                {characterData?.data?.name}
            </Typography>
            <Typography
                gutterBottom
                noWrap
                variant="h5"
                component="div"
                align="center"
            >
                Descrição do personagem:
            </Typography>
            <Typography
                gutterBottom
                noWrap
                variant="subtitle1"
                component="div"
                align="center"
            >
                {characterData?.data?.description}
            </Typography>
        </Container >
    )
}