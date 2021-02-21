import React, { Component } from 'react'
import './app.css';
import Head from './components/Head'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import SmallBox from './components/SmallBox'
import BigBox from './components/BigBox'
import Categories from './components/Categories'
import LastProd from './components/LastProd'
import Footer from './components/Footer'
import Table from './components/Table'


class App extends Component {
  constructor(){
    super();
    this.state = {
      admin:{
        data:{},
      },
      users: {
        meta:{},
        data:[{}]
      },
      products: {
        meta:{},
        data:[{colores: [{}],style: [{}]}]
      },
      categories:{}
    }
  }

  apiCall(url,consecuencia,key){
    fetch(url)
      .then(res => res.json())
      .then(data => consecuencia(data,key))
      .catch(error => console.log(error))
  }

  componentDidMount(){
    this.apiCall("http://localhost:3001/api/users/1", this.updateState,"admin")
    this.apiCall("http://localhost:3001/api/users", this.updateState,"users")
    this.apiCall("http://localhost:3001/api/products", this.updateState,"products")
    this.apiCall("http://localhost:3001/api/products/categories",this.updateState,"categories")
  }

  updateState = (data, key) => {
      this.setState(()=> {
        return {
          [key]: data
        }
      })
  }

  amountsProducts = (state) => {
    return state.products.data.reduce(
      function(acum,num){
        return (acum + num.price)
      },0)
  }

  render(){
    let categories = this.state.categories.data;
    let smallBoxes = [
      {
        title: "Productos en Base de Datos",
        icon: "fa-clipboard-list",
        value: this.state.products.meta.total,
        border: "border-left-primary"
      },
      {
        title: "Dinero en Productos",
        icon: "fa-dollar-sign",
        value: `$${this.amountsProducts(this.state)}`,
        border: "border-left-success"
      },
      {
        title: "Cantidad de Usuarios Registrados",
        icon: "fa-user-check",
        value: this.state.users.meta.total,
        border: "border-left-warning"
      }
    ]
    let products = this.state.products.data;
    let columns = Object.keys(products[0])
    columns.pop();
    columns.pop();
    
    return (
      <div className="App">

        <Head />

        <div id="wrapper">
          
          <SideBar />

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              <TopBar user={this.state.admin.data} />

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

                  {/* <!-- Amount of Products in DB --> */}
                  {smallBoxes.map((smallBox,i) =>
                    <SmallBox key={"smallBox" + i} 
                      title={smallBox.title}
                      icon={smallBox.icon}
                      value={smallBox.value}
                      border={smallBox.border}
                    />)}
  
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                  {/* <!-- Last Product in DB --> */}
                  <BigBox title="Ultimo producto agregado">
                    <LastProd products={products}/>
                  </BigBox>

                  {/* <!-- Categories in DB --> */}
                  <BigBox title="Categorías en la Base de Datos">
                    <Categories categories={categories}/>
                  </BigBox> 
                </div>

                {/* <!-- PRODUCTS LIST --> */}
                <h1 className="h3 mb-2 text-gray-800">Todos los productos en la Base de Datos</h1>
                
                {/* <!-- DataTales Example --> */}
                { <Table columns={columns} >
                  {products}
                </Table> }

              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <Footer />
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

      </div>
    );
  };
}

export default App;
