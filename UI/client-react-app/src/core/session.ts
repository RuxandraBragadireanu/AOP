import Cookies from 'js-cookie'
import {Singleton} from "./singleton";

interface SessionObject {
  email: string;
  firstName: string;
  lastName: string;
}

@Singleton()
export class Session {

  setSession = (token: string) => {
    Cookies.set('__session', token, {expires: 1});
  };

  getSession = () => {
    const jwt = Cookies.get('__session');
    let session;
    try {
      if (jwt) {
        const base64Url = jwt.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        session = JSON.parse(window.atob(base64))
      }
    } catch (error) {
      console.log(error)
    }
    return session as SessionObject;
  };

  getToken = () => {
    return Cookies.get('__session');
  };

  logOut = () => {
    Cookies.remove('__session')
  };
}