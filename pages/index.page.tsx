import type { NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from "dh-marvel/services/marvel/marvel.service";

export async function getStaticProps(){
  const comicsData = await getComics(12,12);
  return {
    props:{
      comicsData
    }
  }
}

const Index: NextPage = (props) => { 
  // @ts-ignore
  const { comicsData } = props;
  // console.log(comicsData);
  return (
    <>
      <Head>
        <title>Marvel</title>       
      </Head>      
      <div>  
                  
      </div>
    </>
  );
};

export default Index;
