import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CgFolderRemove, CgPen } from 'react-icons/cg'

export default function Home() {
  const [alunos, setAlunos] = useState([])
  const [show, setShow] = useState(false);
  const [dados, setDados] = useState('')
  const [id,setId] = useState('')
  const handleClose = () => setShow(false);
  
  useEffect(() => {
    getAlunos()
  }, [])

  function handleSave() {
    setShow(false)
    axios.delete(`/api/alunos/${id}`)
    getAlunos()
  }

  function getAlunos() {
    axios.get("/api/alunos/alunos").then(result => (
      setAlunos(result.data)
    ))
  }

  function removeItem(itemId, itemId2, itemId3,itemId4) {
    setId(itemId)
    setDados(`Nome: ${itemId2} | CPF: ${itemId3} | Matricula: ${itemId4}`)
    setShow(true)
  }

  return (
    <>
      <Pagina titulo="Alunos" title="QaSchool" navBarItem="Initial">
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
        <Link className="btn btn-primary mb-3" href="/alunos/form">Cadastrar Aluno</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <CgFolderRemove />
              </th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Matricula</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>CEP</th>
              <th>Logradouro</th>
              <th>Complemento</th>
              <th>Numero</th>
              <th>Bairro</th>
            </tr>
          </thead>
          <tbody>
            {
              alunos.map((item, index) => (
                <tr key={item.id}>
                  <td className="d-flex">
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remover aluno</Tooltip>}>
                      <span className="d-inline-block" style={{ marginRight: "10px" }}>
                        <CgFolderRemove onClick={() => removeItem(item.id, item.Nome, item.CPF, item.Matricula)} />
                      </span>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar aluno</Tooltip>}>
                      <span className="d-inline-block">
                        <Link href={`/alunos/${item.id}`}>
                          <CgPen size={16} />
                        </Link>
                      </span>
                    </OverlayTrigger>
                  </td>
                  <td>{item.Nome}</td>
                  <td>{item.CPF}</td>
                  <td>{item.Matricula}</td>
                  <td>{item.Email}</td>
                  <td>{item.Telefone}</td>
                  <td>{item.Cep}</td>
                  <td>{item.Logradouro}</td>
                  <td>{item.Complemento}</td>
                  <td>{item.Numero}</td>
                  <td>{item.Bairro}</td>
                </tr>
              ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
