import React from 'react';
import { connect } from 'react-redux';
import AlterSpinner from 'components/Spinner/alterSpinner';
import { cleanUpSuggestionData } from 'actions/data';
import CourseCard from '../../components/Dashboard/CourseCard';
import { Link } from 'react-router-dom';


class SuggestionPage extends React.Component {
  componentWillMount() {}
  // componentWillUnmount() {
  //   this.props.cleanUpSuggestionData();
  // }

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
            <strong>This is what you can do to make a better impact</strong>
          </div>
        </div>
        {
          data.data.Suggestions.Refuse &&
          <Link to="/home/reuse">
            <div className="row">
              <div className="col-sm-12">
                <CourseCard
                  imgSrc={data.data.Suggestions.Refuse.image}
                  type="Refuse"
                  courseName="What alternative to replace this product?"
                  backgroundColor="#D4838F"
                  isPaid={data.data.Suggestions.Refuse.price !== 'Free'}
                  cats={data.data.Suggestions.Refuse.cats}
                />
              </div>
            </div>
            <br />
          </Link>

        }
        {
          data.data.Suggestions.Reduce &&
          <Link to="/home/reuse">
            <div className="row" key={0}>
              <div className="col-sm-12">
                <CourseCard
                  imgSrc={data.data.Suggestions.Reduce.image}
                  type="Reduce"
                  courseName="How can you reduce the usage of this product?"
                  backgroundColor="#D6CEAA"
                  price={data.data.Suggestions.Reduce.price !== 'Free'}
                  cats={data.data.Suggestions.Reduce.cats}
                />
              </div>
            </div>
            <br key={1} />
          </Link>
        }
        {
          (data.data.Suggestions.Repurpose && data.data.Suggestions.Repurpose['option 1']) &&
          <Link to="/home/reuse">
            <div className="row" key={0}>
              <div className="col-sm-12">
                <CourseCard
                  imgSrc={data.data.Suggestions.Repurpose['option 1'].image}
                  type="Repurpose"
                  courseName="How can you make this product into something?"
                  backgroundColor="#B5B479"
                  price={data.data.Suggestions.Repurpose['option 1'].price !== 'Free'}
                  cats={data.data.Suggestions.Repurpose['option 1'].cats}
                />
              </div>
            </div>
            <br key={1} />
          </Link>
        }
        {
          data.data.Suggestions.Recycle &&
          <Link to="/home/reuse">
            <div className="row" key={0}>
              <div className="col-sm-12">
                <CourseCard
                  imgSrc={data.data.Suggestions.Recycle.image}
                  type="Recycle"
                  courseName="How can you recyle this product?"
                  backgroundColor="#79A687"
                  price={data.data.Suggestions.Recycle.price !== 'Free'}
                  cats={data.data.Suggestions.Recycle.cats}
                />
              </div>
            </div>
            <br key={1} />
          </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionPage);
