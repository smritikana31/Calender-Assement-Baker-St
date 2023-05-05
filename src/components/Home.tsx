import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Css/Home.css';

import Col from 'react-bootstrap/Col';
function Home() {
  return (
    <>

   
<div className='main'style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.600),rgba(0,0,0,0.700)),url('/Background.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}  >

    

      <Navbar bg="primary" variant="dark">
        <Container>
      
          <Nav className="me-auto" >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Calender">Calendar</Nav.Link>
            <Nav.Link href="/Client">Client Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br>
      </br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <center>
        <Container >
            <Row>
                <Col >
                <h3 style={{color:"	acqua"}} >
                Name:- Smritikana Banerjee<br></br>
                Class:-Mca 3rd Year<br></br>
                College Name:- Techno College Hooghly <br></br>
                Subject:-Assessment Calender- React with TypeScript
                </h3>
                </Col>
            </Row>
        </Container>
        </center>
   
      </div>

      </div>
    </>
  );
}

export default Home;