import React, { Component } from 'react';
import bikes from '../data/bikes';
import './style.css';


export default class ResultNews extends Component {

    constructor(props) {
          super(props);
          this.state = {
              datas : bikes.panier
      }
      this.change = this.change.bind(this);
  }
  change() {
      this.setState({ datas : !this.state.datas,});
      console.log({ datas : this.state.datas,})
      console.log('coucoucou');
  };



  render() {

      const { className, ...props } = this.props;
      console.log({ datas : this.state.datas,})

    return (
      <div className="card result col-lg-4">
          <img src={this.props.image} className="card-img-top resultNews" alt="Card image cap"/>
          <div className="card-block description">
              <h4 className="card-title">{this.props.name}</h4>
              <p className="card-text">{this.props.description}</p>
              <img src={require('./ajoutPanier.png')} className="imgAjout" onClick={this.change}/>
          </div>
    </div>
    );
  }
}
