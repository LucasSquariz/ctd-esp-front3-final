import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import Head from "next/head";
import Link from "next/link";

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

export default function comicDetails(props: any) {
    const comicProps = props;
    const images = comicProps.data?.images[0];
    const characters = comicProps?.data?.characters?.items;
    return (
        <Container>
            <Head>
                <title>Marvel - Comic</title>
            </Head>
            <Card sx={{ display: 'flex' }}>
                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {comicProps?.data?.title}
                        </Typography>
                        <CardMedia
                            component="img"
                            image={`${images?.path}.${images?.extension}`}
                            alt={comicProps?.title}
                        />
                    </CardContent>
                </Container>
                <Container sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Container>
                        <Container>
                            <Typography>
                                {`R$${comicProps.data?.price}`}
                            </Typography>
                        </Container>
                        <Container>
                            {comicProps.data?.stock > 0
                                ? <CardActions>
                                    <Button size="small" color="primary">Comprar</Button>
                                </CardActions>
                                : <Typography>
                                    Sem estoque
                                </Typography>}
                        </Container>
                        <Container>
                            <Typography>Personagens: </Typography>
                            {characters && characters.map((char: any) => (
                                <>
                                    <Link href={`/characters/${char.resourceURI.split('characters/').pop()}`}>
                                        <Button key={char.name} >{char.name}</Button>
                                    </Link>
                                </>
                            ))}
                        </Container>
                    </Container>
                </Container>
            </Card>
        </Container>
    )
}

