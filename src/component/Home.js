import React, { Component } from 'react';
import "../styles/Home.css"
import { Row, Col, Container } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (

      <div className="home">
        <Container>
          <Row>
            <Col className="photoCol" sm={12}>
              <img className="avatarHome" src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" />
            </Col>
          </Row>
          <Row>
            <Col className="bannerHome" sm={12}>
              <p>just another project to do !
              Morbi vel diam ac enim posuere feugiat et sit amet nisi. Pellentesque a massa id elit condimentum blandit a sed tortor. Suspendisse magna eros, vestibulum auctor arcu in, dignissim scelerisque lectus. Pellentesque consequat libero lorem, eu ornare dui lacinia ac. Donec vel elit in metus facilisis fringilla non non ligula. Donec a tellus sed lectus iaculis consectetur. Suspendisse potenti. Quisque non dictum sem. Proin consequat sem mi, in interdum lectus commodo eget. Donec id turpis ipsum. Phasellus a metus nulla. Fusce quis risus consectetur ante mollis gravida. Sed lacus diam, faucibus non turpis a, blandit lacinia turpis.

Vestibulum nisi tortor, scelerisque id commodo sit amet, sodales ac nulla. Sed vitae fermentum purus. Donec in tristique dui. Suspendisse iaculis quam in ante hendrerit blandit. Nullam id posuere dolor. Etiam vel mi sit amet nisl ullamcorper pellentesque a vel erat. Cras imperdiet malesuada vulputate. Nunc ultricies tempor orci vel sollicitudin. Nullam congue ut felis nec facilisis.

Aenean aliquet auctor feugiat. Phasellus a viverra erat, vel faucibus libero. Vestibulum ac lorem eleifend, interdum quam a, aliquam ligula. Vestibulum sit amet accumsan erat. Aenean rutrum, nibh eleifend hendrerit condimentum, odio nisi lobortis orci, vitae dictum erat lacus sit amet ex. Nulla finibus ullamcorper nisi, in pulvinar quam rhoncus quis. Donec laoreet nulla augue, eget venenatis nisi viverra non. Integer molestie ac enim at volutpat. Vivamus sit amet magna sed enim pellentesque lacinia vel sed turpis.
              </p>
            </Col>
          </Row>
        </Container>

      </div>

    );
  }
}

export default Home;