
import styled from 'styled-components'
import Layout from '../components/Layout'

import Scene from '../components/Scene'
import Plan from '../components/Plan'


export default function Home() {
  return (
    <Container >
      <Layout>
        <ContainerFlex>
          <Scene />
          <FlexMap>
            <Plan />
          </FlexMap>
        </ContainerFlex>
      </Layout>
    </Container>
  )
}

const Container = styled.div`
 
`;

const ContainerFlex = styled.div`
  position:absolute;
  top:0;
  left:0;
  background-color:red;
  width:100%;
  height:100%;
`;

const FlexMap = styled.div`
margin:30px;
border:solid 2px gray;
border-radius:20px;
position:absolute;
top:0;
left:0;
`;