import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state = exampleVideoData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type) {
    case 'UPDATE_VIDEO_LIST':
      return action.videos;

    default:
      return state;
  }
};

export default videoListReducer;
