import Pagina from '@/components/Pagina'
import axios from 'axios';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const form = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        getDisciplinas()
    }, [])

    useEffect(() => {
        if (query.id) {
            axios.get(`/api/semestres/${query.id}`).then(result => {
                const semestres = result.data

                for (let atributo in semestres) {
                    setValue(atributo, semestres[atributo])
                }
            })
        }
    }, [query.id])

    function getDisciplinas() {
        axios.get("/api/disciplinas/disciplinas").then(result => (
            setDisciplinas(result.data)
        ))
    }

    function Enviar(dados) {
        axios.put(`/api/semestres/${query.id}`, dados)

        push("/semestres")
    }
    return (
        <>
            <Pagina titulo="Semestres" title="QaSchool" navBarLink="/semestres">
                <Form noValidate onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="NomeSemestre">
                                <Form.Label>Semestre</Form.Label>
                                <Form.Select aria-label="Não definido" {...register('NomeSemestre')}>
                                    <option value="1º Semestre">1º Semestre</option>
                                    <option value="2° Semestre">2° Semestre</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="NomeDisciplina">
                                <Form.Label>Disciplina</Form.Label>
                                <Form.Select aria-label="Default select example" {...register('NomeDisciplina')}>
                                    {Object.keys(disciplinas).length === 0 ?
                                        <option>Disciplinas não cadastradas.</option>
                                        :
                                        disciplinas.map(item => (
                                            <option value={item.Nome}>{item.Nome}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="DataInicio">
                                <Form.Label>Data de início</Form.Label>
                                <Form.Control isInvalid={errors.DataInicio} placeholder="Início do semestre" type="date" {...register('DataInicio', { required: true })} />
                                {errors.DataInicio && <Form.Control.Feedback type="invalid">
                                    Escolha uma data válida
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="DataFim">
                                <Form.Label>Fim de início</Form.Label>
                                <Form.Control isInvalid={errors.DataFim} placeholder="Fim do semestre" type="date" {...register('DataFim', { required: true })} />
                                {errors.DataInicio && <Form.Control.Feedback type="invalid">
                                    Escolha uma data válida
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/semestres" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form