import React from 'react';
import Forms from './components/infoForm';
import InfoTable from './components/details';



class App extends React.Component {


  state = {

    data: [],
    editData:[]
  }


  create = data => {

    if(!data.isEdit) {

      fetch("http://localhost:3030/info", {
  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json' 
        },
  
        body: JSON.stringify(data),
      })
  
      .then((response) => response.json())
      .then((data) => {
        console.log('Success' , data);
      })

    } else {

      fetch("http://localhost:3030/info/update", {
  
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json' 
        },
  
        body: JSON.stringify(data),
      })
  
      .then((response) => response.json())
      .then((data) => {
        console.log('Success' , data);
      })



    }


  
  }


  delete = data => {

    let option = window.confirm(`Bist du sicher das du es löschen möchtest ${data.Name}`)

    if(option) {
      
      fetch(`http://localhost:3030/info/del/${data._id}`, {
        
        method: 'DELETE',
        
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json' 
        }

      
      })

      

     
  
  

    }
      

    

  }

  componentDidMount() {
    this.getAll();
  }


  getAll() {
    fetch("http://localhost:3030/info")
    .then((res) => res.json())
    .then((response) => this.setState({
      data: response
    }))
    .catch(error => console.log('Something is Wrong', error));

  }


  update = data => {
    console.log(data)
    this.setState({
      editData: data
    })
  }

  render() {
    return (
      <div className="App">
         <div className="container mt-4">
            <div className="row">
              <div className="col-sm-6">
                  <Forms myData={this.create} setForm={this.state.editData} />
              </div>
              <div className="col-sm-6">
                  <InfoTable getData={this.state.data} setData={this.update} delData={this.delete}/>
              </div>

            </div>

         </div>
      </div>
    );

  }

}

export default App;
