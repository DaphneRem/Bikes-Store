import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import bikes from '../data/bikes';
import ResultNews from '../ResultNews/ResultNews';


import './style.css';

export default class News extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}


  constructor(props) {
        super(props);
        this.state = {
            data : bikes
    }
    this.renderResult = this.renderResult.bind(this);
}
  renderResult() {
          return this.state.data.map((e, i) => {
              if (e.new === 'true') {
              return (<ResultNews
                          key={i}
                          image={e.image}
                          name={e.name}
                          description={e.description}
                      />);
              }
          });
      }

  render() {

    const { className, ...props } = this.props;
    let result = this.renderResult();

    return (
      <div className={classnames('News', className)} {...props}>
        <div className="row news">
            <div className="titre col-lg-12">
                <h1 id="news">Nouveautés</h1>
            </div>
        </div>
        <div className="row">
                <div className="col-lg-12 newsArticles ">{result}</div>
        </div>

      </div>
    );
  }
}
