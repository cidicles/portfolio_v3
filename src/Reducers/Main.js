import { lang } from '../il8n/lang';
import { getShortcuts, getInitialPosition, getViewerDimentions } from '../utils';

const initialState = {
  lang: lang.getLanguage(),
  shortcuts: getShortcuts(lang.home.projects),
  projectViewer: {
    position: getInitialPosition(),
    dim: getViewerDimentions()
  }
};

const mainReducer = (state = {}, action) => {
  switch (action.type) {
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
      return {
          ...state,
          shortcuts: state.shortcuts.map((shortcuts, i) => i === action.index ? {...shortcuts, position: action.pos} : shortcuts)
       }
    default:
      return initialState;
  }
};

export default mainReducer;
