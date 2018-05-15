import {lang} from './il8n/lang';

export const siteMapByLocale = {
  'en_us': 'us',
  'en_gb': 'gb',
  'es_mx': 'mx',
  'it_it': 'it',
  'nl_nl': 'nl',
  'pl_pl': 'pl',
  'de_de': 'de',
  'cz_cz': 'cz',
  'fr_fr': 'fr',
  'en_au': 'au',
  'hu_hu': 'hu',
  'sk_sk': 'sk',
  'ro_ro': 'ro'
};

export function mapATGLoc() {
    return siteMapByLocale[lang.getLanguage()] || 'us';
}

export function truncate(str, len) {
  return str.length > len ? `${str.substring(0,len)}...` : str;
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState == null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write error
  }
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
