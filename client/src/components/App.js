import React, { Component } from 'react'
import Header from './Header';
import Content from './Content';
import './App.scss';
import * as api from '../api/interview';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:[],
       classname: 'btn-show-ar',
       show: false,
       label:'Show Archived',
       search : ''
    }
  }

  async componentDidMount(){
      const list = await api.getList();
      this.setState({data: list.data})
  }

  fetchArchiveAPI = async() => {
    const list = await api.getArchiveList(!this.state.show);
    if(this.state.show === true) {
      this.setState({
        data: list.data,
        classname: 'btn-show-ar',
        show: false,
        label:'Show Archived'
      })
    } else{
      this.setState({
        data: list.data,
        classname: 'btn-hide-ar',
        show: true,
        label:'Hide Archived'
      })
    }
   
  }

  fetchSearchAPI = async(search) => {
    const list = await api.getSearchList(search);
    this.setState({data: list.data})
  }

  fetchArchiveStatusAPI = async(candidate) => {
    const list = await api.getArchiveStatus(candidate, this.state.show);
    this.setState({data: list.data})
  }
  
  render() {
    const {data, classname, label} = this.state;
    return (
      <div className="App">
       <Header fetchSearchAPI={this.fetchSearchAPI}/>
       <Content
       data={data}
       fetchArchiveAPI={this.fetchArchiveAPI} 
       classname={classname} 
       label={label}
       fetchArchiveStatusAPI={this.fetchArchiveStatusAPI}/>
      </div>
    )
  }
}

export default App
