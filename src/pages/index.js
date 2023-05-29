import Head from "next/head";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar";
import Card from "@/components/card/card"
import SectionCards from "@/components/card/section-cards";
import {getVideos, getPopularVideos} from "@/lib/videos";

const inter = Roboto_Slab({ subsets: ["latin"] });

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer")
  const travelVideos = await getVideos("travel ")
  const ProductivityVideos = await getVideos("productivity")
  const PopularVideos = await getPopularVideos()

  
  return {props:{disneyVideos, travelVideos, ProductivityVideos, PopularVideos}} 
}

export default function Home({disneyVideos,travelVideos,ProductivityVideos, PopularVideos}) {
  
  return (
    <div className={styles.container}>
      <NavBar username="sooraj"/>
      <Head>
        <title>Netflix</title>
      </Head>
      
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="static/clifford.webp"
      />
      <div className={styles.sectionWrapper}>
      <SectionCards title="Disney" videos={disneyVideos} size="large"/>
      <SectionCards title="Travel" videos={travelVideos} size="medium"/>
      <SectionCards title="Productivity" videos={ProductivityVideos} size="small"/>
      <SectionCards title="Popular" videos={PopularVideos} size="medium"/>


      </div>


     
    </div>
  );
}


