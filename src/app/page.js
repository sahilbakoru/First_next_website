import "./globals.css";
import { DM_Serif_Display } from "next/font/google";
import ProjectClick from "./ProjectClick";
const inter = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
import styles from "/src/app/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={inter.className}>
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
          <div className={styles.text}>I'm Sahil Bakoru </div>
          <div className={styles.text}>a digital virtuoso.</div>
          <div className={styles.text}>Within the intricate </div>
          <div className={styles.text}> tapestry of code,</div>
          <div className={styles.text}>I craft elegant </div>
          <div className={styles.text}>and sophisticated</div>
          <div className={styles.text}>web and mobile </div>
          <div className={styles.text}>experiences, </div>
          <div className={styles.text}> fusing artistry </div>
          <div className={styles.text}> with precision.</div>
          <div className={styles.text}> sculpting digital </div>
          <div className={styles.text}> wonders that meld</div>
          <div className={styles.text}> the complexities </div>
          <div className={styles.text}> of technology with </div>
          <div className={styles.text}>the finesse of</div>
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
