import React from 'react';
import { connect } from 'react-redux';
import AlterSpinner from 'components/Spinner/alterSpinner';
import CustomCard from 'components/Layout/Card';
import { Link } from 'react-router-dom';


class RefuseSuggestion extends React.Component {
  componentWillMount() {}

  render() {
    const { data } = this.props;
    console.log(data);

    if (!data) {
      return <AlterSpinner />;
    }

    return (
      <div className="row">
        <div className="col-sm-12">
          <img
            style={{ width: '100%', height: '100%' }}
            src={data.data.Suggestions.Recycle.image}
            alt="Recycle"
          />
        </div>
        <div className="col-sm-12">
          <p style={{ marginLeft: '10px', fontSize: '14pt' }}>
          All plastic containers can be recycled including plastic fruit punnets and takeaway containers.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p style={{ marginLeft: '20px', fontSize: '20pt' }}>Action</p>
            <Link to="/home/success">
              <CustomCard style={{ marginLeft: '30px', width: '320px' }}>Clean and put it into recycle bin</CustomCard>
            </Link>
            <br />
            <Link to="/home/success">
              <CustomCard style={{ marginLeft: '30px', width: '320px' }}>Learn more on what you can recyle</CustomCard>
            </Link>
            <br />
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

export default connect(mapStateToProps)(RefuseSuggestion);
