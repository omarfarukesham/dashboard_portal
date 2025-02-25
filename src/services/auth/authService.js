import { TOKEN_KEY } from '@/configuration/config';
import httpService from '../http/httpService';

class AuthService {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
    httpService.setHeaderToken(token);
  }
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    httpService.removeHeaderToken();
  }
}

const authService = new AuthService();

export default authService;
