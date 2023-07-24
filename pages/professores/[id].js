import Pagina from '@/components/Pagina'
import errosData from '@/functions/validator';
import axios from 'axios';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { mask } from 'remask'
import { Col, InputGroup, Row } from 'react-bootstrap';

const form = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (query.id) {
            axios.get(`/api/professores/${query.id}`).then(result => {
                const professores = result.data

                for (let atributo in professores) {
                    setValue(atributo, professores[atributo])
                }
            })
        }
    }, [query.id])


    function Enviar(dados) {
        axios.put(`/api/professores/${query.id}`, dados)

        push("/professores")
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute("mask")
        setValue(name, mask(valor, mascara))
    }


    return (
        <>
            <Pagina titulo="Professores" title="QaSchool" navBarLink="/professores">
                <Form noValidate onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control isInvalid={errors.Nome} placeholder="Nome do professor" {...register('Nome', errosData["Professores"]["Nome"])} />

                                {errors.Nome && <Form.Control.Feedback type="invalid">
                                    {errors.Nome?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="CPF">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control mask="999.999.999-99" maxLength={14} isInvalid={errors.CPF} placeholder="CPF do professor" {...register('CPF', errosData["Professores"]["CPF"])} onChange={(e) => handleChange(e)} />

                                {errors.CPF && <Form.Control.Feedback type="invalid">
                                    {errors.CPF?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Matricula">
                                <Form.Label>Matricula</Form.Label>
                                <Form.Control isInvalid={errors.Matricula} placeholder="Matricula do professor" {...register('Matricula', errosData["Professores"]["Matricula"])} />

                                {errors.Matricula && <Form.Control.Feedback type="invalid">
                                    {errors.Matricula?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Salario">
                                <Form.Label>Salario</Form.Label>
                                <Form.Control isInvalid={errors.Salario} placeholder="Salario do professor" {...register('Salario', errosData["Professores"]["Salario"])} />

                                {errors.Salario && <Form.Control.Feedback type="invalid">
                                    {errors.Salario?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>

                                    <Form.Control isInvalid={errors.Email} placeholder="Email do professor" aria-describedby="inputGroupPrepend" {...register('Email', errosData["Professores"]["Email"])} />
                                    {errors.Email && <Form.Control.Feedback type="invalid">
                                        {errors.Email?.message}
                                    </Form.Control.Feedback>}
                                </InputGroup>

                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control mask="(99) 9 9999-9999" maxLength={19} isInvalid={errors.Telefone} placeholder="Telefone do professor" {...register('Telefone', errosData["Professores"]["Telefone"])} onChange={(e) => handleChange(e)} />

                                {errors.Telefone && <Form.Control.Feedback type="invalid">
                                    {errors.Telefone?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Cep">
                                <Form.Label>Cep</Form.Label>
                                <Form.Control mask="99999-999" maxLength={9} isInvalid={errors.Cep} placeholder="Cep do professor" {...register('Cep', errosData["Professores"]["Cep"])} onChange={(e) => handleChange(e)} />

                                {errors.Cep && <Form.Control.Feedback type="invalid">
                                    {errors.Cep?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Logradouro">
                                <Form.Label>Logradouro</Form.Label>
                                <Form.Control isInvalid={errors.Logradouro} placeholder="Logradouro" {...register('Logradouro', errosData["Professores"]["Logradouro"])} />

                                {errors.Logradouro && <Form.Control.Feedback type="invalid">
                                    {errors.Logradouro?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Complemento">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control isInvalid={errors.Complemento} placeholder="Complemento" {...register('Complemento', errosData["Professores"]["Complemento"])} />

                                {errors.Complemento && <Form.Control.Feedback type="invalid">
                                    {errors.Complemento?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Numero">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control isInvalid={errors.Numero} placeholder="Numero" {...register('Numero', errosData["Professores"]["Numero"])} />

                                {errors.Numero && <Form.Control.Feedback type="invalid">
                                    {errors.Numero?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Bairro">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control isInvalid={errors.Bairro} placeholder="Bairro" {...register('Bairro', errosData["Professores"]["Bairro"])} />

                                {errors.Bairro && <Form.Control.Feedback type="invalid">
                                    {errors.Bairro?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/professores" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form