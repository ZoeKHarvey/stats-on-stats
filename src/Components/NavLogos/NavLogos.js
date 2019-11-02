import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavLogos.scss'
// import { connect } from 'react-redux';
import flyers from '../../images/flyers.png';
import blues from '../../images/blues.png';
import bruins from '../../images/bruins.png';
import rangers from '../../images/rangers.png';
import canadiens from '../../images/canadiens.png';
import redwings from '../../images/redwings.png';
import leafs from '../../images/leafs.png';
import blackhawks from '../../images/blackhawks.png';
import pens from '../../images/pens.png';
import kings from '../../images/kings.png';
import sabres from '../../images/sabres.png';
import canucks from '../../images/canucks.png';
import islanders from '../../images/islanders.png';
import capitals from '../../images/capitals.png';
import oilers from '../../images/oilers.png';
import sharks from '../../images/sharks.png';
import senators from '../../images/senators.png';
import lightning from '../../images/lightning.png';
import panthers from '../../images/panthers.png';
import ducks from '../../images/ducks.png';
import devils from '../../images/devils.png';
import flames from '../../images/flames.png';
import avalanche from '../../images/avalanche.png';
import stars from '../../images/stars.png';
import coyotes from '../../images/coyotes.png';
import wild from '../../images/wild.png';
import predators from '../../images/predators.png';
import bluejackets from '../../images/bluejackets.png';
import jets from '../../images/jets.png';
import hurricanes from '../../images/hurricanes.png';
import knights from '../../images/golden-knights.png';

export const NavLogo = ({getSingleRoster}) => {

return(
  <nav>
    {/* <Link to='/roster'> */}
    <div className="nav__div">
    {/* </div> */}
    <div className="nav__original-six nav">
    <img onClick={(e) => getSingleRoster(e, 6)} className="nav__img--logo" src={bruins} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 3)} className="nav__img--logo" src={rangers} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 8)} className="nav__img--logo" src={canadiens} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 17)} className="nav__img--logo" src={redwings} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 10)} className="nav__img--logo" src={leafs} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 16)} className="nav__img--logo" src={blackhawks} alt="flyers logo link to team page"/>
    </div>

    <div className="nav__second nav">
    <img onClick={(e) => getSingleRoster(e, 4)} className="nav__img--logo" src={flyers} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 19)} className="nav__img--logo" src={blues} alt="blues logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 5)} className="nav__img--logo" src={pens} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 26)} className="nav__img--logo" src={kings} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 7)} className="nav__img--logo" src={sabres} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 23)} className="nav__img--logo" src={canucks} alt="flyers logo link to team page"/>
    </div>

    <div className="nav__third nav">
    <img onClick={(e) => getSingleRoster(e, 2)} className="nav__img--logo" src={islanders} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 15)} className="nav__img--logo" src={capitals} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 22)} className="nav__img--logo" src={oilers} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 28)} className="nav__img--logo" src={sharks} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 9)} className="nav__img--logo" src={senators} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 14)} className="nav__img--logo" src={lightning} alt="flyers logo link to team page"/>
    </div>

    <div className="nav__fourth nav">
    <img onClick={(e) => getSingleRoster(e, 13)} className="nav__img--logo" src={panthers} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 24)} className="nav__img--logo" src={ducks} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 1)} className="nav__img--logo" src={devils} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 20)} className="nav__img--logo" src={flames} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 21)} className="nav__img--logo" src={avalanche} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 25)} className="nav__img--logo" src={stars} alt="flyers logo link to team page"/>
    </div>

    <div className="nav__fifth nav">
    <img onClick={(e) => getSingleRoster(e, 53)}  className="nav__img--logo" src={coyotes} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 30)} className="nav__img--logo" src={wild} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 18)} className="nav__img--logo" src={predators} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 29)} className="nav__img--logo" src={bluejackets} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 52)} className="nav__img--logo" src={jets} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 12)} className="nav__img--logo" src={hurricanes} alt="flyers logo link to team page"/>
    <img onClick={(e) => getSingleRoster(e, 54)} className="nav__img--logo" src={knights} alt="flyers logo link to team page"/>
    </div>
    </div>
    {/* </Link> */}
  </nav>
)

}

export default NavLogo
