import React from 'react';
import { connect } from 'react-redux';
import AlterSpinner from 'components/Spinner/alterSpinner';
import { cleanUpSuggestionData } from 'actions/data';
import styled from 'styled-components';
import LeftParantheses from 'assets/left_parenthesis.png';
import RightParantheses from 'assets/right_parenthesis.png';
import { Link } from 'react-router-dom';
import ErrorCatImage from 'assets/error-cat.jpg';

const ResultText = styled.span`
  font-size: 18pt;
  color: #d60b52;
`;

const ErrorWrapper = styled.div`
  margin-top: 160px;
`;

const ImageResult = styled.img`
  transform: scale(0.8);
`;

const ErrorMessageDisplay = ({ message }) => (
  <ErrorWrapper className="row text-center">
    <div className="col-sm-12">
      <div style={{ fontSize: '14pt', color: 'red' }} >{message}</div>
      <br />
      <br />
      <Link to="/home" className="btn btn-primary" style={{ color: '#FFF' }}>Back to Home</Link>
    </div>
  </ErrorWrapper>
);

class ClassifierResult extends React.Component {
  componentWillMount() {}

  render() {
    const {
      captureImage, data, history, error, isFetching,
    } = this.props;


    if (isFetching) {
      return <AlterSpinner />;
    }

    if (!data && error) {
      return (
        [
          <img src={ErrorCatImage} alt="Error Cat" style={{ position: 'fixed', height: '100%' }} />,
          <ErrorMessageDisplay message="There is an error, please try again later." />,
        ]
      );
    }

    if (data) {
      return (
        <div className="row text-center" style={{ marginTop: '100px' }}>
          <div className="col-sm-12">
            <img src={LeftParantheses} alt="Left Parantheses" style={{ height: '150px' }} />
            <ImageResult
              src={captureImage}
              alt="Classifier Result"
              width="150px"
              height="150px"
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
            <img src={RightParantheses} alt="Right Parantheses" style={{ height: '150px' }} />
          </div>
          <div className="col-sm-12">
            <p>
              {data.product}<br />
              CO2: {data.data['CO2 produced']}<br />
              Ecofriendly level: {data.data['Eco-friendly level']}<br />
              Take {data.data.Landfill} to decompose.
            </p>
          </div>
          <div className="col-sm-12">
            <p>
              <ResultText>
                {
                data.data['CO2 produced'] === 'Unknown' ?
                "Item can't be classified" :
                (data.isEcoFriendly === 1 ?
                'Eco-friendly Item' :
                'CO2 Footprint Detected!!')
              }
              </ResultText>
            </p>
          </div>
          {
          data.isEcoFriendly !== 1 &&
          <div className="col-sm-12 text-center">
            <button
              onClick={() => {
                if (data.data['CO2 produced'] === 'Unknown') {
                  history.push('/home');
                } else {
                  history.push('/home/suggestion');
                }
            }}
              className="btn btn-primary"
            >Ok
            </button>
          </div>
        }
        </div>
      );
    }
    return (
      <ErrorMessageDisplay message="There is no data fetched from database, please try again later." />
    );
  }
}

const mapStateToProps = (state) => {
  const { captureImage } = state.home;
  const { data, error, isFetching } = state.data;
  return {
    captureImage,
    data,
    error,
    isFetching,
  };
};

const mapDispatchToProps = dispatch => ({
  cleanUpSuggestionData: () => dispatch(cleanUpSuggestionData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassifierResult);
