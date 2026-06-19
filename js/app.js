// GuideFit Pro — App Controller (Online / MySQL version)
const App = {
  currentUser: null,
  _statsCache: null,
  _workoutsCache: null,
  _plansCache: null,

  async init() {
    Toast.init();
    // Try to restore session from cached token
    const cached = API.getCachedUser();
    if (cached && API.getToken()) {
      this.currentUser = cached;
      this.syncSidebarUser();
      this.showDashboard();
      // Silently refresh from server in background
      API.getCurrentUser().then(u => { if (u) { this.currentUser = u; this.syncSidebarUser(); } });
    } else {
      this.showAuth('login');
    }
    this.bindEvents();
  },

  bindEvents() {
    document.querySelectorAll('.auth-tab').forEach(t =>
      t.addEventListener('click', () => this.showAuth(t.dataset.tab)));
    document.getElementById('login-form')?.addEventListener('submit', e => { e.preventDefault(); this.handleLogin(); });
    document.getElementById('register-form')?.addEventListener('submit', e => { e.preventDefault(); this.handleRegister(); });
    document.getElementById('profile-form')?.addEventListener('submit', e => { e.preventDefault(); this.handleProfileSave(); });
    document.querySelectorAll('.nav-item').forEach(item =>
      item.addEventListener('click', () => {
        const v = item.dataset.view;
        if (v==='dashboard') this.showDashboard();
        else if (v==='guides') this.showGuidesSection();
        else if (v==='history') this.showHistorySection();
        else if (v==='profile') this.showProfile();
      }));
    document.getElementById('plan-modal')?.addEventListener('click', e => { if(e.target===e.currentTarget) Components.closePlanModal(); });
    document.getElementById('video-modal')?.addEventListener('click', e => { if(e.target===e.currentTarget) Components.closeVideoModal(); });
  },

  // ── Auth ─────────────────────────────────────────────────────────────
  showAuth(tab='login') {
    Utils.hide('#app-view'); Utils.show('#auth-view');
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab===tab));
    document.querySelectorAll('.auth-form-panel').forEach(p => p.classList.toggle('active', p.id===tab+'-panel'));
  },

  async handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const btn = document.getElementById('login-btn');
    const form = document.getElementById('login-form');
    Utils.clearErrors(form);

    const uErr = Utils.validate.username(username);
    if (uErr) { Utils.setError('login-username', uErr); return; }
    if (!password) { Utils.setError('login-password', 'Password is required'); return; }

    btn.classList.add('btn-loading'); btn.disabled = true;
    try {
      const user = await API.login(username, password);
      this.currentUser = user;
      this._clearCache();
      Toast.success(`Welcome back, ${user.firstName||user.username}! 👋`);
      this.syncSidebarUser();
      this.showDashboard();
    } catch (err) {
      Utils.setError('login-password', err.message);
    } finally {
      btn.classList.remove('btn-loading'); btn.disabled = false;
    }
  },

  async handleRegister() {
    const form = document.getElementById('register-form');
    Utils.clearErrors(form);
    const f = {
      username:  document.getElementById('reg-username').value.trim(),
      firstName: document.getElementById('reg-firstname').value.trim(),
      lastName:  document.getElementById('reg-lastname').value.trim(),
      email:     document.getElementById('reg-email').value.trim(),
      phone:     document.getElementById('reg-phone').value.trim(),
      password:  document.getElementById('reg-password').value,
      confirm:   document.getElementById('reg-confirm').value,
      gender:    document.getElementById('reg-gender').value
    };
    const checks = [
      ['reg-username',  Utils.validate.username(f.username)],
      ['reg-firstname', Utils.validate.name(f.firstName)],
      ['reg-lastname',  Utils.validate.name(f.lastName)],
      ['reg-email',     Utils.validate.email(f.email)],
      ['reg-phone',     f.phone ? Utils.validate.phone(f.phone) : null],
      ['reg-password',  Utils.validate.password(f.password)],
      ['reg-confirm',   Utils.validate.confirmPassword(f.password, f.confirm)],
      ['reg-gender',    !f.gender ? 'Please select Male or Female' : null]
    ];
    let valid = true;
    checks.forEach(([id, err]) => { if(err) { Utils.setError(id, err); valid=false; } });
    if (!valid) return;

    const btn = document.getElementById('register-btn');
    btn.classList.add('btn-loading'); btn.disabled = true;
    try {
      const user = await API.register({ username: f.username, firstName: f.firstName, lastName: f.lastName, email: f.email, phone: f.phone, password: f.password, gender: f.gender });
      this.currentUser = user;
      this._clearCache();
      Toast.success(`Welcome to GuideFit Pro, ${user.firstName}! 🎉`);
      this.syncSidebarUser();
      this.showDashboard();
    } catch (err) {
      if (err.message.toLowerCase().includes('username')) Utils.setError('reg-username', err.message);
      else if (err.message.toLowerCase().includes('email')) Utils.setError('reg-email', err.message);
      else Toast.error(err.message);
    } finally {
      btn.classList.remove('btn-loading'); btn.disabled = false;
    }
  },

  logout() {
    API.logout();
    this.currentUser = null;
    this._clearCache();
    Toast.info('Logged out. See you next session!');
    setTimeout(() => this.showAuth('login'), 300);
  },

  // ── Cache helpers ─────────────────────────────────────────────────────
  _clearCache() {
    this._statsCache = null; this._workoutsCache = null; this._plansCache = null;
  },

  async _getStats() {
    if (this._statsCache) return this._statsCache;
    this._statsCache = await API.getStats();
    return this._statsCache;
  },

  async _getWorkouts() {
    if (this._workoutsCache) return this._workoutsCache;
    this._workoutsCache = await API.getWorkouts();
    return this._workoutsCache;
  },

  async _getPlans() {
    if (this._plansCache) return this._plansCache;
    this._plansCache = await API.getPlans();
    return this._plansCache;
  },

  // ── Guide filtering by gender ─────────────────────────────────────────
  getGuidesForUser() {
    const gender = this.currentUser?.gender || 'male';
    return GUIDES.filter(g => !g.gender || g.gender === gender || g.gender === 'all');
  },

  // ── Dashboard ─────────────────────────────────────────────────────────
  async showDashboard() {
    Utils.hide('#auth-view'); Utils.show('#app-view');
    this.setActiveNav('dashboard');
    const u = this.currentUser;
    const hour = new Date().getHours();
    const greet = hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';
    document.getElementById('dashboard-greeting').textContent = `${greet}, ${u.firstName||u.username}`;

    // Show guides immediately (no async needed)
    const guides = this.getGuidesForUser();
    document.getElementById('guides-grid').innerHTML = guides.map(g => Components.guideCard(g)).join('');
    this.showSection('dashboard-section');

    // Load stats + recent workouts async
    try {
      const [stats, workouts] = await Promise.all([this._getStats(), this._getWorkouts()]);
      document.getElementById('stat-workouts').textContent = stats.total;
      document.getElementById('stat-streak').textContent = stats.streak + ' 🔥';
      document.getElementById('stat-week').textContent = stats.thisWeek;
      document.getElementById('stat-calories').textContent = stats.totalCalories >= 1000
        ? (stats.totalCalories/1000).toFixed(1)+'k' : stats.totalCalories;

      const container = document.getElementById('recent-workouts');
      if (container) {
        container.innerHTML = workouts.length
          ? workouts.slice(0,6).map(w => Components.workoutHistoryRow(w)).join('')
          : '<div class="empty-state">No workouts yet. Start your first session! 💪</div>';
      }
    } catch (e) {
      console.error('Dashboard load error:', e);
    }
  },

  showSection(id) {
    document.querySelectorAll('.main-section').forEach(s => s.classList.remove('active'));
    const t = document.getElementById(id);
    if (t) { t.classList.add('active'); window.scrollTo(0,0); }
  },

  async showGuidesSection() {
    this.setActiveNav('guides');
    const guides = this.getGuidesForUser();
    document.getElementById('all-guides-grid').innerHTML = guides.map(g => Components.guideCard(g)).join('');
    this.showSection('guides-section');
  },

  async showHistorySection() {
    this.setActiveNav('history');
    document.getElementById('history-list').innerHTML = '<div class="empty-state">Loading...</div>';
    this.showSection('history-section');
    try {
      const workouts = await this._getWorkouts();
      document.getElementById('history-list').innerHTML = workouts.length
        ? workouts.map(w => Components.workoutHistoryRow(w)).join('')
        : '<div class="empty-state">No workout history yet. Log your first workout!</div>';
    } catch { document.getElementById('history-list').innerHTML = '<div class="empty-state">Failed to load history.</div>'; }
  },

  // ── Guide Detail ──────────────────────────────────────────────────────
  async openGuide(guideId) {
    const guide = GUIDES.find(g => g.id === guideId);
    if (!guide) return;

    // Show skeleton while loading plan
    document.getElementById('guide-detail-container').innerHTML =
      `<div style="padding:80px;text-align:center;color:var(--text-muted)">Loading...</div>`;
    this.setActiveNav('guides');
    this.showSection('guide-section');

    try {
      const plans = await this._getPlans();
      const plan = plans.find(p => p.guideId === guideId) || null;
      document.getElementById('guide-detail-container').innerHTML =
        Components.guideDetail(guide, this.currentUser?.id, plan);
      setTimeout(() => document.querySelectorAll('.exercise-row').forEach(r => r.classList.add('visible')), 50);
    } catch (e) {
      Toast.error('Failed to load guide. Please try again.');
    }
  },

  async logWorkout(guideId, workoutName, calories, dayIndex) {
    const cal = Math.round(parseInt(calories) * (0.85 + Math.random()*0.3));
    try {
      await API.logWorkout({ guideId, workoutName, calories: cal });
      await API.markDayComplete(guideId);
      this._clearCache(); // force fresh data next load
      Toast.success(`💪 Day logged! You burned ~${cal} calories. Keep it up!`);
      // Update stats in header
      const stats = await this._getStats();
      document.getElementById('stat-workouts').textContent = stats.total;
      document.getElementById('stat-streak').textContent = stats.streak + ' 🔥';
      document.getElementById('stat-week').textContent = stats.thisWeek;
      document.getElementById('stat-calories').textContent = stats.totalCalories >= 1000
        ? (stats.totalCalories/1000).toFixed(1)+'k' : stats.totalCalories;
      setTimeout(() => this.openGuide(guideId), 600);
    } catch (e) {
      Toast.error('Failed to log workout: ' + e.message);
    }
  },

  // ── Profile ───────────────────────────────────────────────────────────
  async showProfile() {
    this.setActiveNav('profile');
    const u = this.currentUser;
    const fields = { 'prof-firstname': u.firstName||'', 'prof-lastname': u.lastName||'',
      'prof-email': u.email||'', 'prof-phone': u.phone||'',
      'prof-age': u.age||'', 'prof-weight': u.weight||'',
      'prof-height': u.height||'', 'prof-goal': u.goal||'' };
    Object.entries(fields).forEach(([id, val]) => { const el = document.getElementById(id); if(el) el.value = val; });
    document.getElementById('prof-username-display').textContent = '@' + u.username;
    document.getElementById('prof-avatar-letter').textContent = (u.firstName||u.username)[0].toUpperCase();
    document.getElementById('prof-display-name').textContent = `${u.firstName||''} ${u.lastName||''}`.trim() || u.username;
    const genderBadge = document.getElementById('prof-gender-badge');
    if (genderBadge) { genderBadge.textContent = u.gender==='female'?'♀ Female':'♂ Male'; genderBadge.className = 'gender-profile-badge '+(u.gender==='female'?'female':'male'); }
    this.showSection('profile-section');
    try {
      const stats = await this._getStats();
      document.getElementById('prof-total-workouts').textContent = stats.total;
      document.getElementById('prof-streak').textContent = stats.streak;
      document.getElementById('prof-calories').textContent = stats.totalCalories;
    } catch {}
  },

  async handleProfileSave() {
    const form = document.getElementById('profile-form');
    Utils.clearErrors(form);
    const firstName = document.getElementById('prof-firstname').value.trim();
    const email     = document.getElementById('prof-email').value.trim();
    const nameErr = Utils.validate.name(firstName);
    if (nameErr) { Utils.setError('prof-firstname', nameErr); return; }
    const emailErr = Utils.validate.email(email);
    if (emailErr) { Utils.setError('prof-email', emailErr); return; }

    try {
      const updated = await API.updateProfile({ firstName, lastName: document.getElementById('prof-lastname').value.trim(), email, phone: document.getElementById('prof-phone').value.trim(), age: document.getElementById('prof-age').value, weight: document.getElementById('prof-weight').value, height: document.getElementById('prof-height').value, goal: document.getElementById('prof-goal').value });
      this.currentUser = { ...this.currentUser, ...updated };
      this.syncSidebarUser();
      Toast.success('Profile saved! ✓');
    } catch (e) { Toast.error('Save failed: ' + e.message); }
  },

  syncSidebarUser() {
    const u = this.currentUser;
    if (!u) return;
    const letter = (u.firstName||u.username)[0].toUpperCase();
    const el = id => document.getElementById(id);
    if(el('sidebar-avatar'))    el('sidebar-avatar').textContent = letter;
    if(el('sidebar-username'))  el('sidebar-username').textContent = u.firstName||u.username;
    if(el('prof-avatar-letter'))el('prof-avatar-letter').textContent = letter;
    if(el('prof-display-name')) el('prof-display-name').textContent = `${u.firstName||''} ${u.lastName||''}`.trim()||u.username;
  },

  setActiveNav(view) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.toggle('active', i.dataset.view===view));
    document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.toggle('active', i.dataset.view===view));
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
