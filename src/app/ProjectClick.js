'use client';
import { useState, useEffect } from "react"
import Link from "next/link";
const ProjectClick = ({route, text}) => {
  useEffect(()=>{

  },[])


  return (
    <>
    <Link href={route}>
    <button
    style={{
      border: "none",
      padding: "20px",
      background: "#F5F5F5",
      borderRadius: "10px",
      marginTop: "2%",
      cursor: "pointer",
    }}
  >
    <div style={{ fontSize: "20px" }}>{text}</div>
  </button>
  </Link>
  </>
  )
}

export default ProjectClick