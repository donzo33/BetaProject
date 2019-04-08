import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import '../styles/Project.css'


class Project extends Component {
  constructor() {
    super();

    this.state = { activeTab: 0 }

  }
  render() {
    return (
      <div className="project">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png" />
          <Card.Body>
            <Card.Title>Donzify</Card.Title>
            <Card.Text>
              Simple Snippet for spotify (see our current playing track + picture + green screen integration)
           </Card.Text>
            <Button href="https://github.com/donzo33/Donzify">Go on Donzify</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/79/thumb_bigger_formation-ios-avec-swift.png" />
          <Card.Body>
            <Card.Title>Swift ios</Card.Title>
            <Card.Text>
              Wild code school website training
           </Card.Text>
            <Button href="https://donzo33.github.io/Swift-ios/">Go on Swift-ios</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Project;
