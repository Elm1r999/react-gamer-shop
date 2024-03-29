import styled from 'styled-components'
// import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'

export const Button = styled(LinkRouter)`
    border-radius: 50px;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    background: ${({primary}) => (primary ? 'red' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 02.s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#000')};
    }
`