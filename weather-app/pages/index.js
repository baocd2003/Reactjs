import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
export default function Home({ data }) {
  console.log(data);
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      router.push(`?q=${input}`);
    }
  };

  return (
    <div>
      <div className= {styles.container}>
        <form onSubmit={handleSearch}>
          <input
            className={styles.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder = {'Nhập vị trí cần tra...'}
          />
        </form>
        <h1 className = {styles.text}>{data.name}</h1>
        <div className = {styles.text}> 
          {Math.round(data.main.temp - 273.15)} Độ C
        </div>
        <h2 className = {styles.text}>{data.weather[0].main}</h2>
        <div>
          <h3 className = {styles.text}>{data.visibility} (m)</h3>
          <h3 className = {styles.text}>{data.wind.speed} (m/s)</h3>
          <h3 className = {styles.text}>{data.main.humidity} (%)</h3>
        </div>
      </div>
    </div>
  );
}

const getWeather = async (position) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    position || "HaNoi"
  }&appid=8d484d5d7bcce56b92573204d8f12c49`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export async function getServerSideProps({ query }) {
  const { q } = query;
  const data = await getWeather(q); 

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
  };
}