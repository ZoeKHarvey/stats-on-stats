import React from 'react';
import { shallow } from 'enzyme';
import { TeamCard, mapStateToProps, mapDispatchToProps } from './TeamCard';
import { getRoster, getTeamSchedule, favoriteTeams} from '../../actions/index';