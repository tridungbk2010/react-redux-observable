import React, {PropTypes, Component} from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <h2>Home page</h2>
      </div>
    );
  }
}

HomePage.propTypes = {
  menu: PropTypes.string
};

export default HomePage;
