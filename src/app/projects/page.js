import { DM_Serif_Display } from "next/font/google";
const inter = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
import Image from "next/image";
import '/public/mypos.png'
export default function Projects() {
  return (
    <main style={{marginLeft:'10%',marginRight:'10%'}} className={inter.className}>
      <div
        style={{
          textAlign: "center",
          paddingTop: "5%",
          paddingBottom: "4%",
        }}
      >
        <div style={{ fontSize: "400%" }}>Projects</div>
      </div>

      <div
        style={{
          border: "0.5px solid grey",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      />
           <Image
           style={{alignSelf:'center'}}
       width={500}
        height={500} src='/mypos.png'  alt="img" />
    </main>
  );
}
