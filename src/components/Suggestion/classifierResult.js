import React from 'react';
import { connect } from 'react-redux';
import { cleanUpSuggestionData } from 'actions/data';

const ClassifierResult = ({ captureImage, data }) => (
  <div>
    <img src={captureImage} alt="Classifier Result" />
  </div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(ClassifierResult);
