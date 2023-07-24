
import Pagina from "@/components/Pagina";
import { useEffect, useState } from "react";

export default function Home() {

  const [teste,setTeste] = useState("")

  useEffect(() => {
    setTeste("https://as2.ftcdn.net/v2/jpg/03/38/66/77/1000_F_338667730_zjFA72PFPu7dDvj5uf3mCADlgiOic0FR.jpg")
  })
  return (

    <>
      <style type="text/css">
      {`
        body {
          background: url(${teste});
          background-size : cover;
        }
      
      `}
      </style>

      <Pagina titulo="Not Found" title="QaSchool">
      </Pagina>
    </>
  )
}
