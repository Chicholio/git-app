import React from 'react'
import styled from 'styled-components'

const DivPagination = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5px 0;
`

const ButtonPagination = styled.button`
    background: black;
    color: white;
    width: 50px;
`

const Pagination = ({ postsPerPage, totalPost, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <DivPagination>
            {
                pageNumbers.map(number => {
                    return (
                        <ButtonPagination key={number} onClick={() => paginate(number)}>{number}</ButtonPagination>
                    )
                })
            }
        </DivPagination>
    )
}

export default Pagination
