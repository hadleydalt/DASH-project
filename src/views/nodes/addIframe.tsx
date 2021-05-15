import * as React from 'react';
import Iframe from 'react-iframe';

export class WebsiteForm extends React.Component {

  public website;

    state = {value: ''};

    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return ( [
        <form>
          <label>
            Click HERE and Type Web URL
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>,

        <Iframe url = {this.state.value}
        width="90%"
        height="85%"/>
      ]);
    }
  }