import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import tempLogo from '../rando-icon-transpo.png';

const LogoGoesBrrr = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export class Welcome extends PureComponent {
  render() {
    return (
      <div id='welcomeContainer'>
        {/* <h2>KAFKA SPECKS</h2> */}
        <div>
          <LogoGoesBrrr>
            <img className='rotate' src={tempLogo} alt='Kafka Specks Logo' />
          </LogoGoesBrrr>
        </div>
        <div>
          <p id='welcomeText'>
            To get started, please enter your Port Address on the left.
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
