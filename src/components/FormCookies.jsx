import React from 'react'
import {
    Button,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { FaUserCircle, FaAddressCard, FaBirthdayCake, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { useForm } from '../hook/useForm'
import styled from 'styled-components'

const FormSCookies = styled.form`
    display: grid;
    grid-template-columns: repeat(3);
    grid-template-rows: repeat(3);
    grid-gap: 10px;
`

const FormCookies = () => {

    const [values, handleInputChange] = useForm({
        names: '',
        lastName: '',
        cc: '',
        date: '',
        email: '',
        gitHub: ''
    })

    const { names, lastName, cc, date, email, gitHub } = values

    const handleAddData = () => {
        document.cookie = "nombres = " + names
        document.cookie = "apellidos = " + lastName
        document.cookie = "cedula = " + cc
        document.cookie = "fechaNacimiento = " + date
        document.cookie = "email = " + email
        document.cookie = "gitHub = " + gitHub
    }

    return (
        <div style={{ margin: '0 10px 0 10px' }}>
            <FormSCookies>
                <FormControl style={{ gridColumn: '1', gridRow: '1' }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FaUserCircle color="#0F0E17" />}
                        />
                        <Input type='text' placeholder='Nombres' name='names' value={names} onChange={handleInputChange} />
                    </InputGroup>
                </FormControl>
                <FormControl style={{ gridColumn: '2', gridRow: '1' }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FaUserCircle color="#0F0E17" />}
                        />
                        <Input type='text' placeholder='Apellidos' name='lastName' value={lastName} onChange={handleInputChange} />
                    </InputGroup>
                </FormControl>
                <FormControl style={{ gridColumn: '3', gridRow: '1' }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FaAddressCard color="#0F0E17" />}
                        />
                        <Input type='number' placeholder='Cedula' name='cc' value={cc} onChange={handleInputChange} />
                    </InputGroup>
                </FormControl>
                <FormControl style={{ gridColumn: '1', gridRow: '2' }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FaBirthdayCake color="#0F0E17" />}
                        />
                        <Input type='date' placeholder='Fecha de nacimiento' name='date' value={date} onChange={handleInputChange} />
                    </InputGroup>
                </FormControl>
                <FormControl style={{ gridColumn: '2', gridRow: '2' }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<MdEmail color="#0F0E17" />}
                        />
                        <Input type='email' placeholder='Email address' name='email' value={email} onChange={handleInputChange} />
                    </InputGroup>
                </FormControl>
                <FormControl style={{ gridColumn: '3', gridRow: '2' }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FaGithub color="#0F0E17" />}
                        />
                        <Input type='text' placeholder='Usuario GitHub' name='gitHub' value={gitHub} onChange={handleInputChange} />
                    </InputGroup>
                </FormControl>
                <Button type='submit' mb={10} background='#000' color='#fff' _hover={{ background: '#000' }} style={{ gridColumn: '1 / 4', gridRow: '3' }} onClick={handleAddData}>Guardar</Button>
            </FormSCookies>
        </div>
    )
}

export default FormCookies
