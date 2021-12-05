import NavBar from "../components/NavBar";
import Image from "next/image";

import WilsonImage from "../assets/wilson.jpg";

export default function Home() {
  return (
    <>
      <NavBar />
      <Image
        style={{
          borderRadius: "360px",
          border: "1rem solid white",
          borderRadius: "360px",
          width: "15rem",
          backgroundColor: "red",
        }}
        src={WilsonImage}
      />
    </>
  );
}
