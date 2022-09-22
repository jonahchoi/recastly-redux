import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }
  componentDidMount() {
    this.props.handleVideoSearch('react tutorials');
  }
  handleInputChange(e) {
    this.props.handleVideoSearch(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
