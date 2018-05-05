import React from 'react';
import { connect } from 'react-redux';
import AlterSpinner from 'components/Spinner/alterSpinner';
import { cleanUpSuggestionData } from 'actions/data';
import CourseCard from '../../components/Dashboard/CourseCard';


class SuggestionPage extends React.Component {
  componentWillUnmount() {
    this.props.cleanUpSuggestionData();
  }

  render() {
    const { data } = this.props;
    if (!data) {
      return <AlterSpinner />;
    }

    return (
      <div className="container" style={{ marginTop: '15px' }}>
        <div className="row">
          <div className="col text-center" >
            <img src={this.props.captureImage} alt="Camera" />
          </div>
          <div className="col">
            {data.product}<br />
              CO2: {data.data['CO2 produced']}<br />
              Ecofriendly level: {data.data['Eco-friendly level']}<br />
              Take {data.data.Landfill} to decompose.
          </div>
        </div>
        <div className="row m-3">
          <div className="col text-center">
            This is what you can do to make a better impact
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
  const { data } = state.data;
  return {
    captureImage,
    data,
  };
};

const mapDispatchToProps = dispatch => ({
  cleanUpSuggestionData: () => dispatch(cleanUpSuggestionData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionPage);
