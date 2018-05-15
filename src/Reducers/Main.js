import { lang } from '../il8n/lang';
import _ from 'lodash';

const getShortcuts = () => {
  let shortcuts = [];
  let width = 64;
  let height = 128;
  let padding = 20;
  let desktopW = window.innerWidth;
  let iconsPerRow = (desktopW / 2) / (width + padding);
  let chunkyShortcuts = _.chunk(lang.home.projects, iconsPerRow);
  let currentRow = 0;

  for (var i = 0; i < chunkyShortcuts.length; i++) {
    for (var j = 0; j < chunkyShortcuts[i].length; j++) {
      shortcuts.push({
        ...chunkyShortcuts[i][j],
        position: {
          x: (width + padding) * j,
          y: (height + padding) * i
        }
      });
    }
  }
  return shortcuts;
}

const getViewerDimentions = () => {
  let w = (window.innerWidth / 4) * 3;
  let h = ((w / 16) * 9) + 85;
  return ({
    w,
    h
  });
}

const initialState = {
  lang: lang.getLanguage(),
  shortcuts: getShortcuts(lang.home.projects),
  projectViewer: {
    position: {
      x: 100,
      y: 100
    },
    dim: getViewerDimentions()
  },
  project: {
    videos: 'http://s3-us-west-1.amazonaws.com/ejs-portfolio/videos/test.mp4'
  }
};

const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      lang.setLanguage(action.lang);
      return Object.assign({}, state, {
        lang: action.lang
      });
    case 'SET_PROJECT_VIEWER_POSITION':
      return Object.assign({}, state, {
        projectViewer: {
          ...state.projectViewer,
          position: action.pos
        }
      });
    case 'SET_PROJECT':
      return Object.assign({}, state, {
        project: action.project
      });
    case 'SET_SHORTCUT_POSITION':
      console.log(action.index, action.pos);
      return {
          ...state,
          shortcuts: state.shortcuts.map((shortcuts, i) => i === action.index ? {...shortcuts, position: action.pos} : shortcuts)
       }
    default:
      return initialState;
  }
};

export default mainReducer;
