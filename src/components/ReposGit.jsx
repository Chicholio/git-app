import React, { useState } from 'react'
import useFetch from '../hook/useFetch';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Link
} from "@chakra-ui/react"
import Pagination from './Pagination'
import styled from 'styled-components'
// import { BiCaretUp, BiCaretDown } from 'react-icons/bi'

const ThSTable = styled(Th)`
    color: white;
`

const DivSTh = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ReposGit = ({ read }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(5)

    const gitHub = read('gitHub');

    const { loading, data } = useFetch(`https://api.github.com/users/${gitHub}/repos`)

    console.log(data);

    if (data == null) {
        return (
            <div>Loading...</div>
        )
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }

    // const handleAZ = () => {
    //     data.sort()
    // }

    // const handleZA = () => {
    //     data.reverse()
    // }

    return (
        <div>
            <Table variant="simple">
                <Thead>
                    <Tr style={{ borderBottom: 'solid', borderTop: 'solid', background: 'black' }}>
                        <ThSTable>
                            <DivSTh>
                                Nombre
                                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <button onClick={handleAZ}><BiCaretUp /></button>
                                    <button onClick={handleZA}><BiCaretDown /></button>
                                </div> */}
                            </DivSTh>
                        </ThSTable>
                        <ThSTable>
                            <DivSTh>
                                Descripcion
                                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <button onClick={handleAZ}><BiCaretUp /></button>
                                    <button onClick={handleZA}><BiCaretDown /></button>
                                </div> */}
                            </DivSTh>
                        </ThSTable>
                        <ThSTable>
                            <DivSTh>
                                Lenguaje
                                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <button onClick={handleAZ}><BiCaretUp /></button>
                                    <button onClick={handleZA}><BiCaretDown /></button>
                                </div> */}
                            </DivSTh>
                        </ThSTable>
                        <ThSTable>
                            <DivSTh>
                                Rama
                                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <button onClick={handleAZ}><BiCaretUp /></button>
                                    <button onClick={handleZA}><BiCaretDown /></button>
                                </div> */}
                            </DivSTh>
                        </ThSTable>
                        <ThSTable>Git Url</ThSTable>
                    </Tr >
                </Thead >
                <Tbody>
                    {
                        loading
                            ?
                            (
                                <div className="alert alert-info text-center">
                                    Loading ...
                                </div>
                            )
                            :
                            (
                                currentPost.map(dt => {
                                    return (
                                        <Tr key={dt.id} style={{ borderBottom: 'solid' }}>
                                            <Td>{dt.name}</Td>
                                            <Td>{dt.description}</Td>
                                            <Td>{dt.language}</Td>
                                            <Td>{dt.default_branch}</Td>
                                            <Td><Link href={dt.html_url} isExternal>Ir a Git</Link></Td>
                                        </Tr>
                                    )
                                })
                            )
                    }
                </Tbody>
            </Table >
            <Pagination postsPerPage={postPerPage} totalPost={data.length} paginate={paginate} />
        </div >
    )
}

export default ReposGit
