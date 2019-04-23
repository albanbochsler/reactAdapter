require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  state = {
    toggle: false,
  }

  componentDidMount() {
    AdapterJS.webRTCReady(isUsingPlugin => {
      console.log('isUsingPlugin....', isUsingPlugin)
      navigator.getUserMedia({
        video: {
          mandatory: {
            maxWidth: 640,
          },
          optional: [
            { maxFrameRate: 120 },
            { minFrameRate: 120 },
          ],
        },
      }, (st) => {
        try {
          this.videoRef.srcObject = st
        }
        catch (eee) {
          console.error(eee)
        }
        this.setState({ toggle: !this.state.toggle })
      }, (error) => {
        console.log('error....', error)
      })
    })
  }
  setRef = ref => {
    this.videoRef = ref
  }

  render() {
    return (
      <div>
      <video ref={this.setRef}autoPlay={true} />
    </div>
  )
  }
}

ReactDOM.render(
<Hello name="World" />,
  document.getElementById('container')
);
