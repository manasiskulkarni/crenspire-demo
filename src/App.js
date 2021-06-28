import React from "react";
import axios from "axios";
import Select from "./Component/Toolbar/select"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFilter: [],
      list: [],
      type: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  }

  componentDidMount() {
    axios
      .get("http://www.mocky.io/v2/5d889c8a3300002c0ed7da42")
      .then((response) => {
        this.setState({ list: response.data.items });
        console.log(response);
      });
      
  }

  onFilterChange(filter) {
    const { type, activeFilter } = this.state;
    if (filter === "ALL") {
      if (activeFilter.length === type.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({
          activeFilter: type.map((filter) => filter.id),
        });
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
      } else {
        this.setState({ activeFilter: [...activeFilter, filter] });
      }
    }
  }

  render() {
    const { list, activeFilter } = this.state;
    let filteredList;
    if (activeFilter.length === 0 || activeFilter.length === list.length) {
      filteredList = this.state.list;
    } else {
      filteredList = this.state.list.filter((item) =>
        this.state.activeFilter.includes(item.type)
      );
    }
    
    return (
      <div className="searchContainer">
        <form style={{ marginLeft: "2cm", padding: "1cm" }}>
          <input
            id="myInput"
            type="checkbox"
            onClick={() => this.onFilterChange("ALL")}
            checked={this.state.type.length === activeFilter.length}
          />
          <label htmlFor="myInput">All</label>
          {this.state.type.map((filter) => (
            <React.Fragment>
              <input
                id={filter.id}
                type="checkbox"
                checked={activeFilter.includes(filter.id)}
                onClick={() => this.onFilterChange(filter.id)}
                style={{ marginLeft: "3cm" }}
              />
              <label htmlFor={filter.id}>Type{filter.id}</label>
            </React.Fragment>
          ))}
        </form>
        <div>
          <label style={{ marginLeft: "3cm" }}>Index</label>
          <label style={{ marginLeft: "3cm" }}>Email</label>
          <label style={{ marginLeft: "3cm" }}>Name</label>
          <label style={{ marginLeft: "3cm" }}>Wallet-1</label>
          <label style={{ marginLeft: "3cm" }}>Wallet-2</label>
          <label style={{ marginLeft: "3cm" }}>Wallet-3</label>
        </div>
        <Select list= {filteredList}/>
      </div>
    );
  }
}

export default App;
