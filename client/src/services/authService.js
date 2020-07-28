import ApiService from './apiService';

class AuthService extends ApiService {
  constructor() {
    super();
  }

  login(username, password) {
    return this.post('/auth/login', { username, password });
  }

  signup(username, password) {
    return this.post('/auth/signup', { username, password });
  }
}

export default AuthService;