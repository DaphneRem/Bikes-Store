import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import ResultPanier from '../ResultPanier/ResultPanier';
import bikes from '../data/bikes';


class Panier extends Component {

    constructor(props) {
          super(props);
          this.state = {
              showList: false,
              data : bikes
      }
      this.miniModal = this.miniModal.bind(this);
      this.renderResult = this.renderResult.bind(this);
  }

        miniModal() {
            this.setState({ showList: !this.state.showList,});
            console.log('coucoucou');
        };

        renderResult() {
                return this.state.data.map((e, i) => {
                    if (e.panier === true) {
                    return (<ResultPanier
                                key={i}
                                image={e.image}
                                name={e.name}
                            />);}
                });
    }

  render() {

    const { className, ...props } = this.props;
    let resultPanier = this.renderResult();
    console.log(resultPanier);
    let coucou = 'coucou';

    return (
      <div className={classnames('Panier', className)} {...props}>
          <div className="monPanier" >
              <img src={require('./panier.png')} onClick={this.miniModal} className="imgPanier"/>
              {this.state.showList ? resultPanier	 : null }

         </div>

      </div>
    );
  }
}

export default Panier;
