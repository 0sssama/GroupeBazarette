import { windowState } from "atoms/states";
import Head from "next/head";
import { useRecoilValue } from "recoil";

export default function Home() {
  // screen width
  const { width } = useRecoilValue(windowState);

  return (
    <div className="Home Page wrapper">
      <Head>
        <title>
          Groupe Bazarette - Lunettes, lunettes de soleil et lentilles
        </title>
      </Head>
      <div className="container w-full padding-x text-center">
        <p className="title primary">Welcome to Groupe Bazarette</p>
        <p className="title secondary">current width : {width}</p>
      </div>
    </div>
  );
}
