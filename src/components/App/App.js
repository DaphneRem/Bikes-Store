import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Parallax } from 'react-parallax';
import News from '../News/News';

import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {

    const { className, ...props } = this.props;
    

    return (
      <div className={classnames('App', className)} {...props}>
          <Parallax bgImage={require('./background1.jpg')} strength={400} className="parallax">
                    <br/>
                    <div className="App-content">
                        <div className="row header">
                            <div className="col-lg-6 logo">
                                <img src={require('./veloSpirit.png')}/>
                            </div>
                            <div className="menu col-lg-6">
                                <ul>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Nouveautés</a></li>
                                    <li><a href="#">Galerie</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </Parallax>
                  <News/>
      </div>
    );
  }
}

export default App;
