import * as React from 'react';
import Iframe from 'react-iframe';

/* Placed into IFrame node views to allow the user to create the iFrame. */

export class WebsiteForm extends React.Component {

    state = {value: ''};

    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    /* Gathers the characters entered into the bar. */

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return ( [
        <form>
          <label>
            Enter web URL
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>,

        <Iframe url = {this.state.value}
        width="90%"
        height="85%"/>
      ]);
    }
  }

  /* Renders an iFrame with the URL of what has been entered into the bar. */