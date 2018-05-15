export const CHANGE_LANG = 'CHANGE_LANG';
export function changeLanguage(lang) {
  return {
    type: CHANGE_LANG,
    lang
  }
}

export const SET_SHORTCUT_POSITION = 'SET_SHORTCUT_POSITION';
export function setShortcutPosition(pos, index) {
  return {
    type: SET_SHORTCUT_POSITION,
    pos,
    index
  }
}

export const SET_PROJECT_VIEWER_POSITION = 'SET_PROJECT_VIEWER_POSITION';
export function setProjectViewerPosition(pos, index) {
  return {
    type: SET_PROJECT_VIEWER_POSITION,
    pos
  }
}

export const SET_PROJECT = 'SET_PROJECT';
export function setProject(project) {
  return {
    type: SET_PROJECT,
    project
  }
}
