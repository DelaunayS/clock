import React from"react";
import styled from "styled-components";

const Container =styled.div`
    width:50%;
    height:50%;
    padding:1%;    
    margin : auto;
    text-align:center;
`
function Footer(props){

return(

    <Container>          
          Conçu et codé par <a href="https://github.com/DelaunayS">Sébastien Delaunay</a>
    </Container>
)
}

export default Footer
