import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import Head from "next/head";
import Link from "next/link";

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

export default function characterDetails(props: any) {
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
            {characterData?.data?.description && (
                <Container>
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
                </Container>
            )}
            {characterData?.data?.comics?.items && (
                <Container>
                    <Typography
                        gutterBottom
                        noWrap
                        variant="h6"
                        component="div"
                        align="center"
                    >
                        Quadrinhos em que esse personagem aparece:
                    </Typography>
                    <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
                        {characterData?.data?.comics?.items.map((comic: any) => (
                            <Grid key={comic.resourceURI?.split('comics/').pop()} xs={4} item >
                                <Card sx={{ maxWidth: 345 }}>
                                    <Link href={`/comics/${comic.resourceURI?.split('comics/').pop()}`}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    width="200px"
                                                    height="120px"
                                                >
                                                    {comic.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}
        </Container >
    )
}