// GuideFit Pro - Components v3 (day progression + gender-aware)
const Components = {

  guideCard(guide) {
    const diffColors = { 'Beginner': '#34D399', 'Intermediate': '#FBBF24', 'Advanced': '#FF6B35' };
    return `
      <div class="guide-card" onclick="App.openGuide('${guide.id}')">
        <div class="guide-card-glow" style="background:${guide.gradient}"></div>
        <div class="guide-card-inner">
          <div class="guide-card-header">
            <div class="guide-icon-wrap" style="background:${guide.gradient}">
              <span class="guide-icon">${guide.icon}</span>
            </div>
            <span class="guide-difficulty" style="color:${diffColors[guide.difficulty]||'#fff'}">${guide.difficulty}</span>
          </div>
          <h3 class="guide-card-title">${guide.title}</h3>
          <p class="guide-card-sub">${guide.subtitle}</p>
          <div class="guide-card-meta">
            <div class="meta-item"><span>⏱</span>${guide.duration}</div>
            <div class="meta-item"><span>📅</span>${guide.frequency}</div>
            <div class="meta-item"><span>🔥</span>${guide.calories} cal</div>
          </div>
          <button class="guide-start-btn" style="background:${guide.gradient}">
            View Guide <span class="btn-arrow">→</span>
          </button>
        </div>
      </div>`;
  },

  guideDetail(guide, userId, plan = null) {
    // Backend returns completed_days as INTEGER, not array
    const completedCount = (plan && (plan.completed_days || plan.completedDays)) ? (plan.completed_days || plan.completedDays) : 0;
    const totalDays = plan ? (plan.total_days || plan.totalDays) : 0;
    const cycleLen = guide.workouts.length; // e.g. 6

    // Which cycle are we in (0-based), and which day within the cycle is next
    const currentCyclePos = completedCount % cycleLen; // 0..5 = position within current cycle
    const currentCycle = Math.floor(completedCount / cycleLen); // which round

    // A tab slot i (0..cycleLen-1) is "done in this cycle" if i < currentCyclePos
    // It is "current" if i === currentCyclePos AND plan not fully complete
    const planComplete = plan && completedCount >= totalDays;

    const workoutTabs = guide.workouts.map((w, i) => {
      const isDoneThisCycle = i < currentCyclePos;
      const isCurrent = !planComplete && i === currentCyclePos;
      return `
      <button class="workout-tab ${i===0?'active':''} ${isDoneThisCycle?'tab-done':''} ${isCurrent?'tab-current':''}" 
        onclick="Components.switchTab(${i})">
        ${isDoneThisCycle ? '✓ ' : ''}${w.day}
      </button>`;
    }).join('');

    const workoutPanels = guide.workouts.map((w, i) => {
      const isDoneThisCycle = i < currentCyclePos;
      const isCurrent = !planComplete && i === currentCyclePos;
      // The absolute log index = currentCycle * cycleLen + i (used so each day log is unique)
      const logIndex = currentCycle * cycleLen + i;

      let btnLabel, btnDisabled, btnStyle, btnOnclick;
      if (planComplete) {
        btnLabel = '🏆 Plan Complete!';
        btnDisabled = 'disabled';
        btnStyle = 'background:#1a2a1a;color:#34D399;cursor:default;';
        btnOnclick = '';
      } else if (isDoneThisCycle) {
        btnLabel = '✓ Completed This Round';
        btnDisabled = 'disabled';
        btnStyle = 'background:#1e3a1e;color:#34D399;cursor:default;';
        btnOnclick = '';
      } else if (isCurrent) {
        btnLabel = '✓ Log This Workout';
        btnDisabled = '';
        btnStyle = `background:${guide.gradient}`;
        btnOnclick = `onclick="App.logWorkout('${guide.id}','${w.name.replace(/'/g,"\\'")}','${guide.calories.split('–')[1]||300}',${logIndex})"`;
      } else {
        btnLabel = '⏳ Complete Previous Days First';
        btnDisabled = 'disabled';
        btnStyle = 'background:var(--surface-3);color:var(--text-muted);cursor:not-allowed;';
        btnOnclick = '';
      }

      const cycleLabel = currentCycle > 0 ? `<span class="cycle-round-badge">Round ${currentCycle + 1}</span>` : '';

      return `
      <div class="workout-panel ${i===0?'active':''}" id="wpanel-${i}">
        <div class="workout-panel-header">
          <h3>${w.day}: ${w.name}</h3>
          <div style="display:flex;align-items:center;gap:10px">
            <span class="exercise-count">${w.exercises.length} exercises</span>
            ${isDoneThisCycle ? '<span class="day-done-badge">✓ Done</span>' : (isCurrent ? `<span class="day-current-badge">Today</span>${cycleLabel}` : '')}
          </div>
        </div>
        <div class="exercise-list">
          ${w.exercises.map((ex, ei) => this.exerciseRow(ex, ei)).join('')}
        </div>
        <button class="log-workout-btn" style="${btnStyle}" ${btnDisabled} ${btnOnclick}>
          ${btnLabel}
        </button>
      </div>`;
    }).join('');

    const planSection = this.planScheduler(guide, plan);

    return `
      <div class="guide-detail">
        <div class="guide-detail-hero" style="background:${guide.gradient}">
          <button class="back-btn" onclick="App.showDashboard()">← Back</button>
          <div class="hero-content">
            <div class="hero-icon">${guide.icon}</div>
            <h1>${guide.title}</h1>
            <p>${guide.subtitle}</p>
            <div class="hero-badges">
              <span class="badge">${guide.difficulty}</span>
              <span class="badge">${guide.category}</span>
              <span class="badge">${guide.workouts.length * (guide.weeks||8)} Sessions</span>
            </div>
          </div>
        </div>
        <div class="guide-detail-body">
          <div class="guide-overview">
            <div class="overview-stat"><div class="stat-val" style="color:${guide.color}">${guide.duration}</div><div class="stat-label">Per Session</div></div>
            <div class="overview-stat"><div class="stat-val" style="color:${guide.color}">${guide.frequency}</div><div class="stat-label">Frequency</div></div>
            <div class="overview-stat"><div class="stat-val" style="color:${guide.color}">${guide.calories}</div><div class="stat-label">Cal / Session</div></div>
            <div class="overview-stat"><div class="stat-val" style="color:${guide.color}">${guide.workouts.length}</div><div class="stat-label">Workout Days</div></div>
          </div>

          <div class="guide-desc-section">
            <h2>About This Program</h2>
            <p>${guide.description}</p>
          </div>

          <div class="equipment-section">
            <h2>Equipment Needed</h2>
            <div class="equipment-tags">${guide.equipment.map(e=>`<span class="equip-tag">${e}</span>`).join('')}</div>
          </div>

          ${planSection}

          <div class="workouts-section">
            <h2>Workout Schedule</h2>
            <div class="workout-tabs">${workoutTabs}</div>
            <div class="workout-panels">${workoutPanels}</div>
          </div>
        </div>
      </div>`;
  },

  planScheduler(guide, existingPlan) {
    const hasActivePlan = existingPlan != null;
    // Backend returns completed_days as an INTEGER, not an array
    const completedCount = hasActivePlan ? (existingPlan.completed_days || existingPlan.completedDays || 0) : 0;
    const totalDays = hasActivePlan ? existingPlan.total_days || existingPlan.totalDays : 0;
    const progressPct = hasActivePlan && totalDays > 0 ? Math.min(100, Math.round((completedCount/totalDays)*100)) : 0;
    const cycleLen = guide.workouts.length;
    const currentCycle = Math.floor(completedCount / cycleLen);
    const currentCyclePos = completedCount % cycleLen; // 0..cycleLen-1
    const planComplete = hasActivePlan && completedCount >= totalDays;

    // Next workout name
    const nextWorkout = guide.workouts[currentCyclePos]?.name || '';
    const currentAbsDay = completedCount + 1;
    const roundLabel = currentCycle > 0 ? ` (Round ${currentCycle + 1})` : '';

    const planInfo = hasActivePlan ? `
      <div class="active-plan-info">
        <div class="plan-badge" style="color:${guide.color}">✓ Active Plan</div>
        <div class="plan-details">
          <span>📅 Started: ${new Date(existingPlan.created_at || existingPlan.createdAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</span>
          <span>⏳ Duration: ${totalDays} days (${existingPlan.unit_label || existingPlan.unit})</span>
          <span>💪 Progress: ${completedCount}/${totalDays} days</span>
        </div>
        <div class="plan-current-day">
          <span class="current-day-label">Current Day</span>
          <span class="current-day-num" style="color:${guide.color}">
            ${planComplete ? '🏆 Complete!' : `Day ${currentAbsDay}${roundLabel}`}
          </span>
          ${!planComplete ? `<span class="current-day-cycle">→ ${nextWorkout}</span>` : ''}
        </div>
        <div class="plan-progress-bar">
          <div class="plan-progress-fill plan-progress-animate" style="width:${progressPct}%;background:${guide.gradient}"></div>
        </div>
        <div class="plan-progress-pct">${progressPct}% complete</div>
        <button class="btn-ghost btn-sm" onclick="Components.showPlanModal('${guide.id}')">Change Plan →</button>
      </div>` : `
      <div class="no-plan-info">
        <div class="no-plan-text">📋 No active plan. Set your training duration to generate a full schedule.</div>
        <button class="plan-create-btn" style="background:${guide.gradient}" onclick="Components.showPlanModal('${guide.id}')">
          🗓 Create My Plan
        </button>
      </div>`;

    return `
      <div class="plan-section">
        <h2>My Training Plan</h2>
        ${planInfo}
      </div>`;
  },

  showPlanModal(guideId) {
    const guide = GUIDES.find(g => g.id === guideId);
    if (!guide) return;
    const modal = document.getElementById('plan-modal');
    const content = document.getElementById('plan-modal-content');
    content.innerHTML = `
      <div class="modal-header">
        <h2>${guide.icon} Set Training Duration</h2>
        <button class="modal-close" onclick="Components.closePlanModal()">✕</button>
      </div>
      <p class="modal-sub">Choose how long you want to follow the <strong>${guide.title}</strong> program.</p>
      <div class="duration-toggle">
        <button class="dur-unit active" onclick="Components.setDurUnit(this,'days')">Days</button>
        <button class="dur-unit" onclick="Components.setDurUnit(this,'weeks')">Weeks</button>
        <button class="dur-unit" onclick="Components.setDurUnit(this,'months')">Months</button>
        <button class="dur-unit" onclick="Components.setDurUnit(this,'years')">Years</button>
      </div>
      <div class="duration-input-row">
        <input type="number" id="dur-value" min="1" max="365" value="8" class="dur-input" placeholder="Enter amount" />
        <span id="dur-unit-label" class="dur-unit-label">weeks</span>
      </div>
      <div id="dur-summary" class="dur-summary">= 56 training days</div>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="Components.closePlanModal()">Cancel</button>
        <button class="btn btn-primary" style="background:${guide.gradient};color:#000;width:auto;padding:12px 28px" 
          onclick="Components.createPlan('${guide.id}')">Generate My Plan ✓</button>
      </div>`;
    modal.classList.add('open');
    document.getElementById('dur-value').addEventListener('input', Components.updateDurSummary);
    Components.updateDurSummary();
  },

  closePlanModal() {
    document.getElementById('plan-modal').classList.remove('open');
  },

  setDurUnit(btn, unit) {
    document.querySelectorAll('.dur-unit').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('dur-unit-label').textContent = unit;
    const defaults = { days: 30, weeks: 8, months: 3, years: 1 };
    document.getElementById('dur-value').value = defaults[unit] || 8;
    Components.updateDurSummary();
  },

  updateDurSummary() {
    const val = parseInt(document.getElementById('dur-value')?.value) || 0;
    const unit = document.getElementById('dur-unit-label')?.textContent || 'weeks';
    const multipliers = { days: 1, weeks: 7, months: 30, years: 365 };
    const totalDays = Math.max(1, val * (multipliers[unit] || 7));
    const el = document.getElementById('dur-summary');
    if (el) el.textContent = `= ${totalDays} training days (approx. ${Math.round(totalDays/7)} weeks)`;
  },

  createPlan(guideId) {
    const val = parseInt(document.getElementById('dur-value').value) || 8;
    const unit = document.getElementById('dur-unit-label').textContent || 'weeks';
    const multipliers = { days: 1, weeks: 7, months: 30, years: 365 };
    const totalDays = Math.max(1, val * (multipliers[unit] || 7));
    API.savePlan({ guideId, totalDays, unit: `${val} ${unit}` })
      .then(() => {
        App._clearCache();
        Components.closePlanModal();
        Toast.success(`✓ ${val} ${unit} plan created! ${totalDays} days of training ahead. Let's go!`);
        setTimeout(() => App.openGuide(guideId), 500);
      })
      .catch(e => Toast.error('Failed to save plan: ' + e.message));
  },

  exerciseRow(ex, idx) {
    const videoId = EXERCISE_VIDEOS[ex.name];
    const videoHtml = videoId ? `
      <div class="ex-video-wrap">
        <div class="ex-video-thumb" onclick="Components.openVideo('${videoId}','${ex.name.replace(/'/g,"\\'")}')">
          <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="${ex.name} tutorial" loading="lazy" onerror="this.parentElement.style.display='none'" />
          <div class="play-overlay"><div class="play-btn">▶</div><span>Watch Tutorial</span></div>
        </div>
      </div>` : '';

    return `
      <div class="exercise-row fade-in" style="animation-delay:${idx*55}ms">
        ${videoHtml}
        <div class="ex-body">
          <div class="ex-header">
            <div class="ex-num">${idx+1}</div>
            <div class="ex-info">
              <div class="ex-name">${ex.name}</div>
              <div class="ex-muscle">${ex.muscle}</div>
            </div>
            <div class="ex-stats">
              <div class="ex-stat"><span class="ex-stat-val">${ex.sets}</span><span class="ex-stat-label">Sets</span></div>
              <div class="ex-stat"><span class="ex-stat-val">${ex.reps}</span><span class="ex-stat-label">Reps</span></div>
              ${ex.rest!=='–'?`<div class="ex-stat"><span class="ex-stat-val">${ex.rest}</span><span class="ex-stat-label">Rest</span></div>`:''}
            </div>
          </div>
          <div class="ex-tip">💡 ${ex.tip}</div>
        </div>
      </div>`;
  },

  openVideo(videoId, title) {
    const modal = document.getElementById('video-modal');
    document.getElementById('video-modal-title').textContent = title;
    document.getElementById('video-frame').src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.classList.add('open');
  },

  closeVideoModal() {
    document.getElementById('video-modal').classList.remove('open');
    document.getElementById('video-frame').src = '';
  },

  switchTab(idx) {
    document.querySelectorAll('.workout-tab').forEach((t,i) => t.classList.toggle('active', i===idx));
    document.querySelectorAll('.workout-panel').forEach((p,i) => p.classList.toggle('active', i===idx));
  },

  workoutHistoryRow(workout) {
    const guide = GUIDES.find(g => g.id === workout.guideId);
    return `
      <div class="history-row">
        <div class="history-icon" style="background:${guide?guide.gradient:'#333'}">${guide?guide.icon:'💪'}</div>
        <div class="history-info">
          <div class="history-name">${workout.workoutName||'Workout'}</div>
          <div class="history-guide">${guide?guide.title:'Custom'}</div>
        </div>
        <div class="history-meta">
          <div class="history-cal">🔥 ${workout.calories||0} cal</div>
          <div class="history-date">${Utils.formatDate(workout.timestamp)}</div>
        </div>
      </div>`;
  }
};
