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
        <div style={{ fontSize: "400%" }}>Welcome</div>
        <div style={{ fontSize: "400%" }}>to</div>
        <div style={{ fontSize: "400%" }}>Sahilbakoru.in</div>
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
        <ProjectClick route={'/projects'} text={'View Projects'}/>
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
