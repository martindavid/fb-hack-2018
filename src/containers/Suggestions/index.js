import React from 'react';
import { connect } from 'react-redux';
import CourseCard from '../../components/Dashboard/CourseCard';


class SuggestionPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '15px' }}>
        <div className="row">
          <div className="col text-center" >
            <img src={this.props.captureImage} alt="Camera" />
          </div>
          <div className="col">
              Plastic cup<br />
              Brand: Unknown<br />
              CO2: 1.6kg/kg<br />
              Ecofriendly level: low
          </div>
        </div>
        <div className="row m-3">
          <div className="col text-center">
            Your suggestion
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <CourseCard
              value={40}
              courseName="How to make a craft from this"
              backgroundColor="#00BCD4"
              isTaken
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <CourseCard
              value={90}
              courseName="Buy this reusable coffee cup"
              backgroundColor="#E6EE9C"
              isTaken
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <CourseCard
              value={40}
              courseName="How to make a craft from this"
              backgroundColor="#00BCD4"
              isTaken
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <CourseCard
              value={40}
              courseName="How to make a craft from this"
              backgroundColor="#00BCD4"
              isTaken
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { captureImage } = state.home;
  return {
    captureImage,
  };
};

export default connect(mapStateToProps)(SuggestionPage);
