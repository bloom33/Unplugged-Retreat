'use strict';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <div >
        <h3>Find out more.</h3>
        <input type="text" name="name" value="name@email.com"/>
        <input type="button" value="Download Itinery"/>
      </div>
    );
  }
}

let domContainer = document.querySelector('#sign-up-form');
ReactDOM.render(<SignUpForm />, domContainer);