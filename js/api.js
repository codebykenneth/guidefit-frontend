// GuideFit Pro — API Client
// Replaces localStorage with real HTTP calls to the backend

const API = {
  // ── Render backend URL ──────────────────────────────────────────────────
  BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'
    : 'https://guidefit-backend.onrender.com',  // Production Render backend

  // ── Token helpers ──────────────────────────────────────────────────
  getToken()        { return localStorage.getItem('gfp_token'); },
  setToken(t)       { localStorage.setItem('gfp_token', t); },
  clearToken()      { localStorage.removeItem('gfp_token'); localStorage.removeItem('gfp_user_cache'); },
  getCachedUser()   { try { return JSON.parse(localStorage.getItem('gfp_user_cache')); } catch { return null; } },
  cacheUser(user)   { localStorage.setItem('gfp_user_cache', JSON.stringify(user)); },

  // ── Base fetch ─────────────────────────────────────────────────────
  async request(method, path, body = null, auth = true) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth) {
      const token = this.getToken();
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }
    const opts = { method, headers };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(this.BASE_URL + path, opts);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
    return data;
  },

  get(path, auth=true)          { return this.request('GET', path, null, auth); },
  post(path, body, auth=true)   { return this.request('POST', path, body, auth); },
  put(path, body, auth=true)    { return this.request('PUT', path, body, auth); },

  // ── Auth ────────────────────────────────────────────────────────────
  async register(data) {
    const res = await this.post('/api/auth/register', data, false);
    this.setToken(res.token);
    this.cacheUser(res.user);
    return res.user;
  },

  async login(username, password) {
    const res = await this.post('/api/auth/login', { username, password }, false);
    this.setToken(res.token);
    this.cacheUser(res.user);
    return res.user;
  },

  logout() { this.clearToken(); },

  async getCurrentUser() {
    const token = this.getToken();
    if (!token) return null;
    try {
      const user = await this.get('/api/user/me');
      this.cacheUser(user);
      return user;
    } catch {
      // Token expired or invalid — clear it
      this.clearToken();
      return null;
    }
  },

  async updateProfile(data) {
    const user = await this.put('/api/user/me', data);
    this.cacheUser(user);
    return user;
  },

  // ── Workouts ─────────────────────────────────────────────────────────
  getWorkouts()                   { return this.get('/api/workouts'); },
  logWorkout(data)                { return this.post('/api/workouts', data); },
  getStats()                      { return this.get('/api/workouts/stats'); },

  // ── Plans ─────────────────────────────────────────────────────────────
  getPlans()                      { return this.get('/api/plans'); },
  savePlan(data)                  { return this.post('/api/plans', data); },
  markDayComplete(guideId)        { return this.post(`/api/plans/${guideId}/progress`, {}); },
};
