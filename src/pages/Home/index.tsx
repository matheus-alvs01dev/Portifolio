import Banner from "../../components/Banner";
import styled from "styled-components";

const DivTest = styled.div`
    display: flex;
    height: 100vh;
   
`



function Home () {
    return(
    <div>
    <Banner />
    <DivTest></DivTest>
    </div>
    
    
    )
}

export default Home;