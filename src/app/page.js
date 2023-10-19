import "./globals.css";
import { DM_Serif_Display } from "next/font/google";
import ProjectClick from "./ProjectClick";
const inter = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
import styles from "/src/app/Home.module.css";
import Image from "next/image";
import NavBar from "../app/components/NavBar";

export default function Home() {
  return (
    <main className={inter.className}>
      <NavBar />

      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <div
          style={{
            textAlign: "center",
            borderBottom: "1px solid lightgrey",
            paddingTop: "5%",
            paddingBottom: "10%",
            alignContent: "center",
            alignItems: "center",
          }}
        >


          <div className={styles.text}>Welcome ,</div>
          <br></br>
          <div className={styles.text}>Sahil Bakoru </div>
          <div className={styles.text}>is a full-stack </div>
          <div className={styles.text}>software developer, </div>
          <div className={styles.text}> meticulously</div>
          <div className={styles.text}> crafting,</div>
          <div className={styles.text}>designing, </div>
          <div className={styles.text}> & innovating</div>
          <div className={styles.text}>for the dynamic</div>
          <div className={styles.text}>realms of mobile </div>
          <div className={styles.text}> & web technology, </div>
          <div className={styles.text}> with the finesse of </div>
          <div className={styles.text}> craftsmanship.</div>
        </div>
        <div
          style={{
            textAlign: "center",
            borderBottom: "1px solid lightgrey",
            paddingTop: "5%",
            paddingBottom: "10%",
          }}
        >
          <div className={styles.text}>Projects</div>
          <ProjectClick route={"/projects"} text={"View Projects"} />
        </div>
      </div>
    </main>
  );
}
