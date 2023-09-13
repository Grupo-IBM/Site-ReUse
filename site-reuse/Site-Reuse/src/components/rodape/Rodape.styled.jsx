import styled from "styled-components"
import '../../index.css'


export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap:50px;
justify-content: space-around;
border-top: 3px solid var(--green-dark);
`