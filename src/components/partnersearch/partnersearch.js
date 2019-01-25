import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import './partnersearch.css';

class PartnerSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      experiencelevel: {},
      location: '',
      matchedUserTable: [{
        username: '',
        email: ''
      }]
    };
  }

// input field change
  onExperienceLevelChange = (event) => {
    return this.setState({experiencelevel: event.target.value});

  }

  onLocationChange = (event) => {
    return this.setState({location: event.target.value.toLowerCase().trim()});
  }


// update state of search data returned
  partnerSearchResultData = (results) => {
      const newMatchedUserData = results.map(result => {
          return {
              username: result.username,
              email: result.email
          }
      });

      this.setState({
          matchedUserTable: newMatchedUserData
      });
  }


// search get fetch
  onSearch = () => {
    fetch(`https://damp-forest-34333.herokuapp.com/search?experiencelevel=${this.state.experiencelevel}&location=${this.state.location}`)
    .then(response => response.json())
    .then( response => {
      this.partnerSearchResultData(response);
    })
    .catch(err => {
      return alert('Could not find climbers in your area at this time');
    })
  }



  render() {

  // Table Data Const
    const matchedUserTable = this.state.matchedUserTable;

    const searchColumns = [
      {
        Header: 'Username',
        accessor: 'username'
      }, {
        Header: 'Email',
        accessor: 'email'
   }]


  return (
    <div className="container">
        <div className="text-center">
        <div className="row">
          <div className= "col-sm-12 col-md-4">
            <img className="card-img-top" style={{width: '20%', marginBottom: '15px'}} src={require('../../img/search.png')} alt="Alpha Logo" />
          </div>
          <div className= "col-sm-12 col-md-8">
            <h4 className="h3 mb-3 font-weight-normal"> Find a Partner! </h4>
          </div>
        </div>
        </div>
        <div>
          <div className="row">
            <div className= "col-sm-12 col-md-4">
            <label htmlFor="location" className='sr-only'> Location: </label>
            <input type="text"
                    name="location"
                    onChange= {this.onLocationChange}
                    placeholder='location'
                    className='location-search form-control'
                    required />
            <div>
            <label htmlFor="experience-label"> Experience Level: </label>
            <div className= 'inputField'>
                  <select onChange = {this.onExperienceLevelChange}>
                    <option value="none">--</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="elite">Elite</option>
                  </select>
              </div>
              </div>
              <div>
                <button id="search-btn" className= 'btn btn-lg btn-secondary btn-block'
                  onClick ={this.onSearch}>
                   Find a Partner!
                 </button>
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
              <ReactTable data={matchedUserTable} columns={searchColumns} defaultPageSize = {5} />
              </div>
              </div>
              </div>

    </div>
  )}
}

export default PartnerSearch;
