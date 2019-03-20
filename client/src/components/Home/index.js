import React from 'react';
import { HomeCircle } from './svg/svgLogo';
import { HomeContainer } from './Styles';
// import { colors } from '../../utils/Theme';

const Home = props => {
  return <HomeContainer>
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <HomeCircle  />
        </div>
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti nisi dolorem assumenda delectus eos in, minima, obcaecati excepturi veritatis vel deserunt a labore? Quam harum voluptatum suscipit ducimus porro!</p>
        </div>
      </div>
    </div>
  </HomeContainer>
}

export default Home;