import {lang} from './il8n/lang';
import _ from 'lodash';

export function truncate(str, len) {
  return str.length > len ? `${str.substring(0,len)}...` : str;
}

export const getShortcuts = () => {
  let shortcuts = [];
  let width = 64;
  let height = 128;
  let padding = 20;
  let desktopW = window.innerWidth;
  let iconsPerRow = (desktopW / 2) / (width + padding);
  let chunkyShortcuts = _.chunk(lang.home.projects, iconsPerRow);

  for (var i = 0; i < chunkyShortcuts.length; i++) {
    for (var j = 0; j < chunkyShortcuts[i].length; j++) {
      shortcuts.push({
        ...chunkyShortcuts[i][j],
        position: {
          x: (width + padding) * j + padding,
          y: (height + padding) * i + padding
        }
      });
    }
  }
  return shortcuts;
}

export const getViewerDimentions = () => {
  let w = (window.innerWidth / 4) * 3;
  let h = ((w / 16) * 9) + 85;
  return ({
    w,
    h
  });
}

export const getInitialPosition = () => {
  let x = parseInt((window.innerWidth - getViewerDimentions().w) / 2, 10);
  let y = parseInt((window.innerHeight - getViewerDimentions().h) / 2, 10);
  return ({
    x,
    y
  });
}

export const goFetch = (method, url, postData, jwt) => {
  let settings = {
    method,
    credentials: 'omit',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if(postData){
    settings.body = JSON.stringify(postData);
  }

  if(jwt){
    settings.headers['Authorization'] = `Bearer ${jwt}`;
  }

  return fetch(url, settings).then(response => {
    if(response.status === 401){
      return Object.assign({ error: { message: 'You must be signed in to perform this action.' }})
    }
    return response.json().then(json => {
      return response.ok ? json : Object.assign({ error: json });
    });
  });
}
