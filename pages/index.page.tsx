import type { NextPage } from "next";
import React from "react";
import { useState, useContext } from "react";
import Head from "next/head";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import { Grid, Card, CardActionArea, Typography, CardMedia, CardContent, CardActions, Button, styled, Paper, Pagination } from "@mui/material";
import Link from "next/link";

export async function getServerSideProps() {
  const comicsData = await getComics((12), 12);
  return {
    props: {
      comicsData
    }
  }
}

const changePage = async (page: number) => {
  const comicsData = await getComics((page * 12), 12);
  return {
    props: {
      comicsData
    }
  }
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Index: NextPage = (props: any) => {
  const [page, setPage] = useState(1);
  // @ts-ignore
  const { comicsData } = props;
  // console.log(comicsData)
  return (
    <>
      <Head>
        <title>Marvel</title>
      </Head>
      <Grid container spacing={2}>
        {comicsData.data.results.map((comic: any) => (
          <Grid key={comic.id} >
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
                <Button size="small" color="primary">Comprar</Button>
                <Link href={`/comics/${comic.id}`}>
                  <Button size="small">Ver detalhes</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Link href={`/${page}`}>
          {/* @ts-ignore      */}
          <Pagination count={10} onClick={e => setPage(+e.target.innerText)} />
        </Link>
      </Grid>
    </>
  );
};

export default Index;
