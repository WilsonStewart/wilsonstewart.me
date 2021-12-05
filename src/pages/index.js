import NavBar from "../components/NavBar";
import Image from "next/image";

import WilsonImage from "../assets/wilson.jpg";

export default function Home() {
  return (
    <>
      <NavBar />
      <div
        style={{
          borderRadius: "360",
          backgroundColor: "red",
          border: "1rem solid white",
          borderRadius: "360px",
          zIndex: "100000",
        }}
      >
        <Image src={WilsonImage} />
      </div>
    </>
  );
}
