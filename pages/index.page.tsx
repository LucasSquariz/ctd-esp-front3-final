import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { useGetComicsPagination } from "dh-marvel/services/marvel/useGetComicsPagination";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import { Grid, Card, CardActionArea, Typography, CardMedia, CardContent, CardActions, Button, Pagination, Container } from "@mui/material";
import Link from "next/link";



const Index: NextPage = () => {
  const { data, fetchPageComics, isLoading } = useGetComicsPagination();
  const limitPage = Math.round(data?.data?.total / 12) - 1;
  // @ts-ignore
    
  return (
    <Container sx={{ marginTop: '50px' }}>
      <Head>
        <title>Marvel</title>
      </Head>
      <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
        {data?.data?.results.map((comic: any) => (
          <Grid key={comic.id} xs={4} item >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="200px"
                  height="200px"
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    width="200px"
                    height="120px"
                  >
                    {comic.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href={`/checkout/${comic.id}`}>
                  <Button size="small" color="primary">Comprar</Button>
                </Link>
                <Link href={`/comics/${comic.id}`}>
                  <Button size="small">Ver detalhes</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Container sx={{ margin: '30px 0' }}>          
            {/* @ts-ignore      */}
            <Pagination count={limitPage} onClick={e => fetchPageComics(+e.target.innerText)} />          
        </Container>
      </Grid>
    </Container>
  );
};

export default Index;
