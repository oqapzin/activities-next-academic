import Pagina from '@/components/Pagina'
import Link from 'next/link';
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Col, InputGroup, Row } from 'react-bootstrap';
import errosData from '@/functions/validator';

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

    function Enviar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem("Cursos")) ?? []
        cursos.push(dados)
        window.localStorage.setItem("Cursos", JSON.stringify(cursos))
        push("/cursos")
    }

    return (
        <>
            <Pagina titulo="Cursos" title="QaSchool" navBarLink="/cursos">
                <Form noValidate onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control isInvalid={errors.Nome} type="text" placeholder="Nome do curso"  {...register('Nome', errosData["Cursos"]["Nome"])} />

                                {errors.Nome && <Form.Control.Feedback type="invalid">
                                    {errors.Nome?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Duracao">
                                <Form.Label>Duração</Form.Label>
                                <Form.Control isInvalid={errors.Duracao} placeholder="Duração do curso" {...register('Duracao', errosData["Cursos"]["Duracao"])} />

                                {errors.Duracao && <Form.Control.Feedback type="invalid">
                                    {errors.Duracao?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Modalidade</Form.Label>
                                <Form.Select isInvalid={errors.Modalidade} aria-label="Default select example" {...register('Modalidade', { required: "Você precisa selecionar uma modalidade." })}>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Remoto">Remoto</option>
                                    <option value="EAD">EAD</option>
                                </Form.Select>

                                {errors.Modalidade && <Form.Control.Feedback type="invalid">
                                    {errors.Modalidade?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3 mt-2" >
                        <Form.Label>Endereço de e-mail</Form.Label>
                        <Form.Control isInvalid={errors.Email} type="text" placeholder="qaschool@qaschool.com" {...register('Email', errosData["Cursos"]["Email"])} />
                        {errors.Email && <Form.Control.Feedback type="invalid">
                            {errors.Email?.message}
                        </Form.Control.Feedback>}


                    </Form.Group>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/cursos" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form