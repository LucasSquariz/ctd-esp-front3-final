import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
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
    const data = await getComic(Number(params.id))
    return {
        props: {
            data
        }
    }
}



export default function comicDetails(props: any) {
    const comicProps = props;
    const images = comicProps.data?.images[0];
    console.log(comicProps)
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
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
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Box>
                        <Typography>
                            {`R$${comicProps.data?.price}`}
                        </Typography>
                    </Box>
                    <Box>
                        {comicProps.data?.stock > 0
                            ? <CardActions>
                                <Button size="small" color="primary">Comprar</Button>
                            </CardActions>
                            : <Typography>
                                Sem estoque
                            </Typography>}
                    </Box>                    
                </Box>
            </Card>
        </>

    )
}