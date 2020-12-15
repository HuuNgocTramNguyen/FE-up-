import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import { DataProvider } from './components/Context'
import About from "./components/About/About"
import Aboutmid from "./components/Aboutmid/Aboutmid"
import Categories from "./components/Categories/Categories"
import Follower from "./components/Follower/Follower"
import Info from "./components/Info/Info"
import ProductList from './components/ProductList/ProductList';
// import SearchBox from './components/SearchBox/SearchBox';

import SlideShow from './components/sildes/show';
import pic1 from './images/bk01.jpg';
import pic2 from './images/bk02.jpeg';
import pic3 from './images/bk03.jpg';
import pic4 from './images/bk04.png';

const collection = [
  { src: pic1, caption: "Caption one" },
  { src: pic2, caption: "Caption two" },
  { src: pic3, caption: "Caption three" },
  { src: pic4, caption: "Caption four" },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      stats: [],
      searchField: ''
    }
  }
  async componentDidMount() {
    const resp = await fetch('https://5fad338a2ec98b0016047fc3.mockapi.io/list')
    const products = await resp.json()
    this.setState({ products })
    this.state.products.forEach(async pro => {
      const resp = await fetch(`https://5fad338a2ec98b0016047fc3.mockapi.io/list/${pro.Slug}`)
      const data = await resp.json()
      if (data.length)
        this.setState(prevState => (
          { stats: prevState.stats.concat({ ...data[data.length - 1], proCode: pro.ISO2 }) }
        ))
    })
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
    console.log(e.target.value)
  }
  render() {
    const { stats, searchField } = this.state
    const product = stats.filter(pro => (
      pro.Product.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <DataProvider>
        <div className="App">
          <Router>
            <Header />
            <h1></h1>
            <ProductList stats={product} />
            <SlideShow
              input={collection}
              ratio={`3:2`}
              mode={`auto`}
              timeout={`6000`}
            />
            <About />
            <Categories />
            <Aboutmid />
            <Follower />
            <Section />
            <Info />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;