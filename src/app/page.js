import "./globals.css";
import { DM_Serif_Display } from "next/font/google";
import ProjectClick from "./ProjectClick";
const inter = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
export default function Home() {
  return (
    <main className={inter.className}>
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid lightgrey",
          paddingTop: "5%",
          paddingBottom: "10%",
        }}
      >
        <div style={{ fontSize: "400%" }}>Sahil Bakoru</div>
        <div style={{ fontSize: "400%" }}>is a</div>
        <div style={{ fontSize: "400%" }}>developer.</div>
      </div>
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid lightgrey",
          paddingTop: "5%",
          paddingBottom: "10%",
        }}
      >
        <div style={{ fontSize: "400%" }}>Projects</div>
        <ProjectClick route={'/about'} text={'View Projects'}/>
      </div>
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid lightgrey",
          paddingTop: "5%",
          paddingBottom: "10%",
        }}
      >
        <div style={{ fontSize: "400%" }}>Booklist.</div>
        <ProjectClick route={'/booklist'} text={'View booklist'} />
      </div>
    </main>
  );
}
