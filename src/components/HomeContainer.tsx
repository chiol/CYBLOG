import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd';


interface IProps {
    title: string;
    children: React.ReactNode
}
function HomeContainer(props:IProps) {
    const { title, children } = props
    const { Title } = Typography;

    return (
        <Container>
            <Title style={{marginBottom:"40px"}}>{title}</Title>
            <Body>{children}</Body>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 100px;
`;
const Body = styled.div `
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`
export default HomeContainer
