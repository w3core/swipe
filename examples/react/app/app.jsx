import React from 'react';
import ReactDom from 'react-dom';
import { Swipe, SwipeItem } from 'swipejs/react';

import 'swipejs/style.css';
import './style.css';

class ReactSwipeExampleApp extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  onTransactionEnd(index, elem) {
    // Your own logic
  }

  handleCallback(index, elem) {
    // Your own logic
  }

  handleClick(e) {
    // Your own logic
  }

  render() {
    return (
      <div className='react-swipe-example'>
        <h2>React Swipe Example</h2>
        <Swipe className='custom-swipe-container-class'
               ref='swipe'
               startSlide={0}
               speed={300}
               auto={3000}
               draggable={false}
               continuous={true}
               autoRestart={false}
               disableScroll={false}
               stopPropagation={false}
               callback={this.handleCallback.bind(this)}
               transitionEnd={this.onTransactionEnd.bind(this)}>
          <SwipeItem className='custom-swipe-item-class'
                     onClick={this.handleClick.bind(this)}>
            Slide One
          </SwipeItem>
          <SwipeItem className='custom-swipe-item-class'
                     onClick={this.handleClick.bind(this)}>
            Slide Two
          </SwipeItem>
          <SwipeItem className='custom-swipe-item-class'
                     onClick={this.handleClick.bind(this)}>
            Slide Three
          </SwipeItem>
        </Swipe>
      </div>
    );
  }
}

ReactDom.render(<ReactSwipeExampleApp />, document.getElementById('react-swipe-example-app'));
