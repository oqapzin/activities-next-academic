import Pagina from '@/components/Pagina'
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import errosData from '@/functions/validator';



const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

    function Enviar(dados) {
        axios.post("/api/salas/salas", dados)
        push("/salas")
    }

    return (
        <>
            <Pagina titulo="Salas" title="QaSchool" navBarLink="/salas">
                <Form noValidate onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control isInvalid={errors.Nome} type="text" placeholder="Nome da sala"  {...register('Nome', errosData["Salas"]["Nome"])} />
                                {errors.Nome && <Form.Control.Feedback type="invalid">
                                    {errors.Nome?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="CapacidadeSala">
                                <Form.Label>Capacidade de alunos</Form.Label>
                                <Form.Control type="number" isInvalid={errors.CapacidadeSala} placeholder="Capacidade de alunos" {...register('CapacidadeSala', errosData["Salas"]["Capacidade"])} />
                                {errors.CapacidadeSala && <Form.Control.Feedback type="invalid">
                                    {errors.CapacidadeSala?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="TipoSala">
                                <Form.Label>Tipo de sala</Form.Label>
                                <Form.Select aria-label="Não definida" {...register('TipoSala')}>
                                    <option value="Sala teórica">Sala teórica</option>
                                    <option value="Sala de pintura">Sala de pintura</option>
                                    <option value="Sala de redes">Sala de redes</option>
                                    <option value="Sala do Júri">Sala do Júri</option>
                                    <option value="Laboratório de computadores">Laboratório de computadores</option>
                                    <option value="Laboratório científico">Laboratório científico</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/salas" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form
