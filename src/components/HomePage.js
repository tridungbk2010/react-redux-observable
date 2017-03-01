import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as helloActions from "../actions/helloActions";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.actions.sayHello();
  };

  render() {
    return (
      <div className="homePage">
        <h2>{this.props.helloMsg.world}</h2>
        <button className="btn btn-default" onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}

HomePage.propTypes = {
  helloMsg: PropTypes.object,
  actions: PropTypes.object
};

const mapStateToProps = (state) => ({
  helloMsg: state.helloWorld
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(helloActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
