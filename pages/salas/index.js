import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CgFolderRemove, CgPen } from 'react-icons/cg'

export default function Home() {
  const [salas, setSalas] = useState([])
  const [show, setShow] = useState(false);
  const [dados, setDados] = useState('')
  const [id,setId] = useState('')
  const handleClose = () => setShow(false);
  let idItem 

  useEffect(() => {
    getSalas()
  }, [])

  function handleSave() {
    setShow(false)
    axios.delete(`/api/salas/${id}`)
    getSalas()
  }

  function getSalas() {
    axios.get("/api/salas/salas").then(result => (
      setSalas(result.data)
    ))
  }

  function removeItem(itemId, itemId2, itemId3,itemId4) {
    setId(itemId)
    setDados(`Nome: ${itemId2} | Capacidade: ${itemId3} | Tipo: ${itemId4} `)
    setShow(true)
  }

  return (
    <>
      <Pagina titulo="Salas" title="QaSchool" navBarItem="Initial">
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
        <Link className="btn btn-primary mb-3" href="/salas/form">Cadastrar Sala</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <CgFolderRemove />
              </th>
              <th>Sala</th>
              <th>Capacidade</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {
              salas.map((item, index) => (
                <tr key={item.id}>
                  <td className="d-flex">
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remover Sala</Tooltip>}>
                      <span className="d-inline-block" style={{ marginRight: "10px" }}>
                        <CgFolderRemove onClick={() => removeItem(item.id, item.Nome, item.CapacidadeSala, item.TipoSala)} />
                      </span>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar sala</Tooltip>}>
                      <span className="d-inline-block">
                        <Link href={`/salas/${item.id}`}>
                          <CgPen size={16} />
                        </Link>
                      </span>
                    </OverlayTrigger>
                  </td>
                  <td>{item.Nome}</td>
                  <td>{item.CapacidadeSala}</td>
                  <td>{item.TipoSala}</td>
                </tr>
              ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
