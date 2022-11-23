import React from 'react';
import { ReactDOM } from 'react';

class ClassComponentLifeCycle extends React.Component {
  constructor() {
    super();

    this.state = { myName: 'Sri' };
  }

  render() {
    return (
      <div>
        <h1>
          Render called<br></br>
          {this.state.myName}
          <br></br>
          {this.props.name}
          <br></br>
          {this.props.model}
          <br></br>
          <select onChange={() => alert('Select some value')}>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="meat">Meat</option>
          </select>
          <button onClick={() => this.ChangeNameFunction()}>Change Name</button>
        </h1>
      </div>
    );
  }

  componentWillMount() {
    alert('Component Will Mount Called');
  }

  componentDidMount() {
    alert('Component Did Mount Called');
  }

  componentWillUpdate() {
    alert('Component Will Update Called');
  }

  componentDidUpdate() {
    alert('Component Did Update Called');
  }

  componentWillUnmount() {
    alert('Component Unmount Called');
  }

  shouldComponentUpdate() {
    //if(admin == false)
    return true;
  }

  changeName = () => {
    this.setState({
      myName: 'Muthu',
    });
  };

  ChangeNameFunction() {
    this.setState({
      myName: 'Raj',
    });
  }
}

export default ClassComponentLifeCycle;
