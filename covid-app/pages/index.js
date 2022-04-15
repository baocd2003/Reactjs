import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({ covid }) {
  console.log(covid);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Covid info</h1>
      <div className={styles.wrapper}>
      {covid?.map(props =>{
        return (
        <div className={styles.box}>
          <div>{props.Country}</div>
          <div>{props.CountryCode}</div>
          <div>{props.Province}</div>
          <div>{props.CityCode}</div>
          <div>{props.Lat}</div>
          <div>{props.Lon}</div>
          <div>{props.Cases}</div>
          <div>{props.Date}</div>
        </div>
      )
      })}
      </div>
    </div>
  )
}
 export async function getStaticProps(context) {
    const res = await fetch(
      `https://api.covid19api.com/dayone/country/VietNam/status/confirmed`
    );
    const data = await res.json();
    return {
      props: {
        covid: data,
      }, 
    };
  }