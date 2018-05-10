import React from 'react';
import { connect } from 'react-redux';
import AlterSpinner from 'components/Spinner/alterSpinner';
import { cleanUpSuggestionData } from 'actions/data';
import styled from 'styled-components';
import LeftParantheses from 'assets/left_parenthesis.png';
import RightParantheses from 'assets/right_parenthesis.png';
import { Link } from 'react-router-dom';

const ResultText = styled.span`
    font-size: 18pt;
    color: #d60b52;
`;

class ClassifierResult extends React.Component {
  componentWillMount() {}

  render() {
    const { captureImage, data } = this.props;

    if (!data) {
      return <AlterSpinner />;
    }


    return (
      <div className="row text-center" style={{ marginTop: '100px' }}>
        <div className="col-sm-12">
          <img src={LeftParantheses} alt="Left Parantheses" style={{ height: '150px' }} />
          <img
            src={captureImage}
            alt="Classifier Result"
            width="200px"
            height="200px"
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
                data.isEcoFriendly === 1 ?
                'Eco-friendly Item' :
                'CO2 Footprint Detected!!'
              }
            </ResultText>
          </p>
        </div>
        {
          data.isEcoFriendly !== 1 &&
          <div className="col-sm-12 text-center">
            <button
              onClick={() => {
              this.props.history.push('/home/suggestion');
            }}
              className="btn btn-primary"
            >Ok
            </button>
          </div>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ClassifierResult);
