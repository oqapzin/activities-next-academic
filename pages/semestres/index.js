import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { dateFormatter } from "../../functions/formatter"
import { useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CgFolderRemove, CgPen } from 'react-icons/cg'

export default function Home() {
  const [semestres, setSemestres] = useState([])
  const [show, setShow] = useState(false);
  const [dados, setDados] = useState('')
  const [id, setId] = useState('')
  const handleClose = () => setShow(false);

  useEffect(() => {
    getSemestres()
  }, [])

  function handleSave() {
    setShow(false)
    axios.delete(`/api/semestres/${id}`)
    getSemestres()
  }

  function getSemestres() {
    axios.get("/api/semestres/semestres").then(result => (
      setSemestres(result.data)
    ))
  }

  function removeItem(itemId, itemId2, itemId3, itemId4) {
    setId(itemId)
    setDados(`Nome: ${itemId2} | Início: ${itemId3} | Fim: ${itemId4} `)
    setShow(true)
  }

  return (
    <>
      <Pagina titulo="Semestres" title="QaSchool" navBarItem="Initial">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Deseja remover?</Modal.Title>
          </Modal.Header>
          <Modal.Body>{dados}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleSave}>
              Remover
            </Button>
          </Modal.Footer>
        </Modal>
        <Link className="btn btn-primary mb-3" href="/semestres/form">Cadastrar Semestre</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <CgFolderRemove />
              </th>
              <th>Semestre</th>
              <th>Disciplinas</th>
              <th>Data de início</th>
              <th>Data de fim</th>
            </tr>
          </thead>
          <tbody>
            {
              semestres.map((item, index) => (
                <tr key={item.id}>
                  <td className="d-flex">
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remover Semestre</Tooltip>}>
                      <span className="d-inline-block" style={{ marginRight: "10px" }}>
                        <CgFolderRemove onClick={() => removeItem(item.id, item.NomeSemestre, item.DataInicio, item.DataFim)} />
                      </span>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar Semestre</Tooltip>}>
                      <span className="d-inline-block">
                        <Link href={`/semestres/${item.id}`}>
                          <CgPen size={16} />
                        </Link>
                      </span>
                    </OverlayTrigger>
                  </td>
                  <td>{item.NomeSemestre}</td>
                  <td>{item.NomeDisciplina}</td>
                  <td>{dateFormatter(item.DataInicio)}</td>
                  <td>{dateFormatter(item.DataFim)}</td>
                </tr>
              ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
