var printText;

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyName: props.keyName,
      audioName: props.audioName,
      audioSrc: props.audioSrc,
      active: false
    }
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
  
  handleKeyDown = (event) => {
    console.log(event.key === this.state.keyName);
    if (event.key === this.state.keyName) {
      this.drumPadDown();
    }
  }
  
  handleKeyUp = (event) => {
    if (event.key === this.state.keyName) {
      this.drumPadUp();
    }
  }
  
  drumPadDown = () => {
    this.setState((state) => {
      return { active: true };
    })
    document.getElementById(this.state.keyName).play()
      .then(() => {
        printText(this.state.audioName);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(printText, 500, "");
      });
  }
  
  drumPadUp = () => {
    this.setState((state) => {
      return { active: false };
    })
  }
  
  render() {
    return (
      <button
        id={"drumpad" + this.state.keyName}
        className={"drum-pad" + (this.state.active? " green-bg": "")}
        onMouseDown={this.drumPadDown}
        onMouseUp={this.drumPadUp}
        >{this.state.keyName}<audio id={this.state.keyName} class="clip" src={this.state.audioSrc}/></button>
    );
  }
}

class DrumPadController extends React.Component {
  render() {
    return (
      <div id="drum-pad-controller">
      <DrumPad keyName="Q" audioName="Heater 1" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
      <DrumPad keyName="W" audioName="Heater 2" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
      <DrumPad keyName="E" audioName="Heater 3" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
      <DrumPad keyName="A" audioName="Heater 4" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
       <DrumPad keyName="S" audioName="Clap" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
       <DrumPad keyName="D" audioName="Open-HH" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
        <DrumPad keyName="Z" audioName="Kick-n'-HH" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
        <DrumPad keyName="X" audioName="Kick" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
        <DrumPad keyName="C" audioName="Closed-HH" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
       </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  
  componentDidMount() {
    printText = this.updateDisplay;
  }
  
  updateDisplay = (text) => {
    this.setState((state) => {
      return { text: text };
    })
  }
  
  render() {
    return (
      <div id="display">
        {this.state.text}
      </div>
    )
  }
}

class DrumMachineControls extends React.Component{
  render() {
    return (
      <div id="drum-controls">
        <i class="fa-solid fa-paw text-end"></i>
        <Display/>
      </div>
    )
  }
}

class DrumMachine extends React.Component {
  render() {
    return (
      <div id="drum-machine" class="mx-auto">
        <DrumPadController/>
        <DrumMachineControls/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DrumMachine/>
);
