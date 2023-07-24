import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CgFolderRemove, CgPen } from 'react-icons/cg'

export default function Home() {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem("Cursos")) ?? []
  }

  function removeItem(iditem,curso) {
    if (confirm(`Deseja remover o curso ${curso}`)) {
      const storage = getAll()
      storage.splice(iditem, 1)
      window.localStorage.setItem("Cursos", JSON.stringify(storage))
      setCursos(getAll())
    }
  }

  return (
    <>
      <Pagina titulo="Cursos" title="QaSchool" navBarItem="Initial">
        <Link className="btn btn-primary mb-3" href="/cursos/form">Cadastrar curso</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <CgFolderRemove />
              </th>
              <th>Nome</th>
              <th>Duracao</th>
              <th>Modalidade</th>
            </tr>
          </thead>
          <tbody>
            {
              cursos.map((item, index) => (
                <tr key={index}>
                  <td className="d-flex">
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remover curso</Tooltip>}>
                      <span className="d-inline-block" style={{ marginRight: "10px" }}>
                        <CgFolderRemove onClick={() => removeItem(index,item.Nome)} />
                      </span>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar curso</Tooltip>}>
                      <span className="d-inline-block">
                        <Link href={`/cursos/${index}`}>
                          <CgPen size={16} />
                        </Link>
                      </span>
                    </OverlayTrigger>
                  </td>
                  <td>{item.Nome}</td>
                  <td>{item.Duracao}</td>
                  <td>{item.Modalidade}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
