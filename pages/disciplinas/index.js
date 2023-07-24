import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CgFolderRemove, CgPen } from 'react-icons/cg'

export default function Home() {
  const [disciplinas, setDisciplinas] = useState([])
  const [show, setShow] = useState(false);
  const [dados, setDados] = useState('')
  const [id,setId] = useState('')
  const handleClose = () => setShow(false);
  
  useEffect(() => {
    getDisciplinas()
  }, [])

  function handleSave() {
    setShow(false)
    axios.delete(`/api/disciplinas/${id}`)
    getAll()
  }

  function getDisciplinas() {
    axios.get("/api/disciplinas/disciplinas").then(result => (
      setDisciplinas(result.data)
    ))
  }

  function removeItem(itemId, itemId2, itemId3) {
    setId(itemId)
    setDados(`Nome: ${itemId2} | Disciplina: ${itemId3}`)
    setShow(true)
  }

  return (
    <>
      <Pagina titulo="Disciplinas" title="QaSchool" navBarItem="Initial">
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
        <Link className="btn btn-primary mb-3" href="/disciplinas/form">Cadastrar Disciplina</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <CgFolderRemove />
              </th>
              <th>Curso</th>
              <th>Disciplina</th>
            </tr>
          </thead>
          <tbody>
            {
              disciplinas.map((item, index) => (
                <tr key={item.id}>
                  <td className="d-flex">
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remover disciplina</Tooltip>}>
                      <span className="d-inline-block" style={{ marginRight: "10px" }}>
                        <CgFolderRemove onClick={() => removeItem(item.id, item.Nome, item.Disciplina)} />
                      </span>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar disciplina</Tooltip>}>
                      <span className="d-inline-block">
                        <Link href={`/disciplinas/${item.id}`}>
                          <CgPen size={16} />
                        </Link>
                      </span>
                    </OverlayTrigger>
                  </td>
                  <td>{item.Nome}</td>
                  <td>{item.Disciplina}</td>
                </tr>
              ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
