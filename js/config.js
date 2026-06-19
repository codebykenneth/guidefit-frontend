// GuideFit Pro - Configuration & Data
const APP_NAME = 'GuideFit Pro';
const APP_VERSION = '2.0.0';
const API_BASE_URL = ''; // Set to your backend URL when ready

const VALIDATION = {
  username: { min: 3, max: 20, pattern: /^[a-zA-Z0-9_]+$/ },
  password: { min: 6, max: 50 },
  email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { pattern: /^[\+]?[\d\s\-\(\)]{7,15}$/ },
  name: { min: 2, max: 50 }
};

// YouTube video IDs for each exercise (real tutorial videos - updated working links)
const EXERCISE_VIDEOS = {
  // Strength
  'Bench Press':              'QsYEPLe8_ts',  // Fixed - working
  'Barbell Row':              'rxD321l2svw',  // Fixed - working
  'Overhead Press':           'F3QY5vMz_6I',
  'Weighted Pull-Up':         'eGo4IYlbE5g',
  'Incline Dumbbell Press':   'BagVuyeHV3s',  // Fixed - working
  'Back Squat':               'ultWZbUMPL8',
  'Romanian Deadlift':        'JCXUYuzwNrM',
  'Leg Press':                'IZxyjW7MPJQ',
  'Walking Lunge':            'QrIPLMAw33I',  // Fixed - working
  'Calf Raise':               'gwLzBJYoWlA',
  'Dumbbell Flat Press':      'VmB1G1K7v94',
  'Cable Flye':               'Iwe6AmxVf7o',
  'Lateral Raise':            'FeJbqiLuQE4',
  'Tricep Pushdown':          'vB5OHsJ3EME',
  'Overhead Tricep Extension':'YbX7Wd8jQ-Q',
  'Lat Pulldown':             'CAwf7n6Luuc',
  'Seated Cable Row':         'GZbfZ033f74',
  'Face Pull':                'Xack8pHvwuA',  // Fixed - working
  'Dumbbell Curl':            'ykJmrZ5v0Oo',
  'Hammer Curl':              'zC3nLlEvin4',
  'Deadlift':                 'r4MzxtBKyNE',  // Fixed - working
  'Hip Thrust':               'SEdqd1n0cvg',
  'Bulgarian Split Squat':    '2C-uNgKwPLE',
  'Leg Extension':            'YyvSfVjQeL0',
  'Leg Curl':                 'ELOCsoDSmrg',
  'Chest Dip':                'yew6QDnS4SM',
  'Cable Crossover':          'nCLHmWP0PGE',  // Fixed - working
  'Arnold Press':             'vj2w851ZHRM',
  'Rear Delt Flye':           'EA7u4Q_8HQ0',
  'Barbell Curl':             'LY1V6UbRHyM',
  'Preacher Curl':            'fIWP-FRFNU0',
  'Skull Crusher':            'NIyDNcOwKsI',
  'Close Grip Bench':         'nEF0bv2FW04',
  // Cardio
  'Warm-Up Jog':              'EC2s1dANMbo',
  'Sprint Intervals':         'mFsgBRKNc_I',
  'Jump Rope':                'u3zgHI8QnqE',
  'Burpees':                  'dZgVxmf6jkA',
  'Cool-Down Walk':           'EC2s1dANMbo',
  'Warm-Up Walk':             'EC2s1dANMbo',
  'Steady-State Run':         'kVnyY17VS9Y',
  'Hill Repeats':             'B4e1HGLM3bk',
  'Cool-Down Stretch':        'v7AYKMP6rOE',
  'Box Jumps':                'NBY9-kTuHEk',
  'Mountain Climbers':        'nmwgirgXLYM',
  'High Knees':               'OAJ_J3EZkdY',
  'Jumping Jacks':            'c4DAnQ6DtF8',
  'Bear Crawl':               'F8E_UBkJtQk',
  'Kettlebell Swing':         'YSxHifyI6s8',
  'Battle Ropes':             'fp7ho6a2FWk',
  'Rowing Machine':           'H0r1KOmWZQM',
  'Assault Bike':             'B4e1HGLM3bk',
  'Stair Climber':            'B4e1HGLM3bk',
  'Jump Squat':               'A-cFYWvaHr0',
  'Skaters':                  'MbfNZ0F9V4M',
  'Tuck Jumps':               'JnRMNMqAOSk',
  // Yoga
  "Child's Pose":             'qZ_KFdmEMmg',
  'Cat-Cow':                  'kqnua4rHVVA',
  'Downward Dog':             '8XK1hEe73Ek',
  'Warrior I':                'k0CqJGFZs44',
  'Warrior II':               'Mn6RSIRCV3w',
  'Triangle Pose':            'mivIMSMWpBk',
  'Savasana':                 'K9bK0BwKFjs',
  'Reclined Butterfly':       'sTzSD5cBMnM',
  'Pigeon Pose':              'Gx8R46oBgnE',
  'Seated Forward Fold':      'mKJGs2umFQ8',
  'Spinal Twist':             'Bou9mOzBH-Y',
  'Legs Up the Wall':         'l4TQ3AkJZIs',
  'Sun Salutation A':         'pmBl5cnFTIs',
  'Tree Pose':                'wdln9qWYloU',
  'Bridge Pose':              'OtZi2YpEWiw',
  'Boat Pose':                'kKcXBNJlpwI',
  'Crescent Lunge':           'KDURJRG2HJ8',
  'Chair Pose':               'KkGqLJoRmf0',
  'Half Pigeon':              'Gx8R46oBgnE',
  'Cobra Pose':               'HUSvMxLgKZU',
  // Core
  'Dead Bug':                 '4XLEnwUr1d8',
  'Plank':                    'ASdvN_XEl_c',
  'Side Plank':               'K2mTSPBNzvs',
  'Bird Dog':                 'wiFNA3sqjCA',
  'Hollow Body Hold':         'c7IwOLhRqwQ',
  'Hanging Knee Raise':       'hdng3Nm1x70',
  'Ab Wheel Rollout':         'Z-nC8c99bRs',
  'Russian Twist':            '9iHmdy5QvaY',
  'V-Up':                     'iP2fjvG0g3w',
  'Bicycle Crunch':           '9FGilxCbdz8',
  'Med Ball Slam':            'KtPBCcV-9vc',
  'Pallof Press':             'AZSEIGqhk_s',
  'Cable Woodchop':           'o6MOtEGcMgA',
  'Dragon Flag':              'gLpBmOR4v3g',
  'Leg Raise':                'JB2oyawG9KI',
  'Toe Touch Crunch':         'Xyd_fa5zoEU',
  'Plank to Downdog':         'ASdvN_XEl_c',
  'Reverse Crunch':           '5mYT2c3TkBU',
  'Flutter Kicks':            '45-jGD8UQUM',
  'Scissor Kicks':            'XyLTe4YNMpg'
};

// Duration plan generator
function generatePlan(guide, totalDays) {
  const baseWorkouts = guide.workouts;
  const plan = [];
  let workoutDay = 0;
  let restPattern = guide.restDays || [0]; // index of rest days per week cycle

  for (let day = 1; day <= totalDays; day++) {
    const weekDay = (day - 1) % 7;
    const isRest = restPattern.includes(weekDay);
    if (isRest) {
      plan.push({ day, isRest: true, name: 'Rest & Recovery' });
    } else {
      const workout = baseWorkouts[workoutDay % baseWorkouts.length];
      plan.push({ day, isRest: false, ...workout });
      workoutDay++;
    }
  }
  return plan;
}

const GUIDES = [
  {
    id: 'strength',
    title: 'Power Strength',
    subtitle: 'Build Raw Muscle',
    icon: '🏋️',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35, #FF3366)',
    difficulty: 'Advanced',
    duration: '60 min',
    frequency: '4x / week',
    calories: '400–600',
    category: 'Strength',
    restDays: [3, 6], // Wed & Sun rest
    description: 'A progressive overload program built for maximum muscle hypertrophy and raw strength gains. Combines compound lifts with targeted isolation work across a full-body split.',
    weeks: 8,
    equipment: ['Barbell', 'Dumbbells', 'Bench', 'Rack', 'Cable Machine'],
    workouts: [
      {
        day: 'Day 1', name: 'Upper Power',
        exercises: [
          { name: 'Bench Press', sets: 4, reps: '5', rest: '3 min', muscle: 'Chest', tip: 'Keep shoulder blades retracted. Drive feet into floor. Control the descent.' },
          { name: 'Barbell Row', sets: 4, reps: '5', rest: '3 min', muscle: 'Back', tip: 'Pull to your lower chest, keeping elbows at 45°. Squeeze lats at top.' },
          { name: 'Overhead Press', sets: 3, reps: '6–8', rest: '2 min', muscle: 'Shoulders', tip: 'Brace your core, squeeze glutes. Bar travels in a slight arc around your chin.' },
          { name: 'Weighted Pull-Up', sets: 3, reps: '6–8', rest: '2 min', muscle: 'Back/Biceps', tip: 'Full dead hang to chin over bar. Controlled 3-second descent.' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '8–10', rest: '90 s', muscle: 'Upper Chest', tip: '30–45° incline. Touch dumbbells at bottom, squeeze at top.' },
          { name: 'Cable Flye', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Chest', tip: 'Slight elbow bend, feel the stretch, meet hands at chest height.' },
          { name: 'Face Pull', sets: 3, reps: '15–20', rest: '60 s', muscle: 'Rear Delts', tip: 'Pull to face level, externally rotate at end. Keeps shoulders healthy.' }
        ]
      },
      {
        day: 'Day 2', name: 'Lower Power',
        exercises: [
          { name: 'Back Squat', sets: 4, reps: '5', rest: '3 min', muscle: 'Quads/Glutes', tip: 'Break parallel. Knees track toes. Big breath before descent, brace hard.' },
          { name: 'Romanian Deadlift', sets: 3, reps: '6–8', rest: '2 min', muscle: 'Hamstrings', tip: 'Hinge at hips, soft knee, feel the hamstring stretch. Bar stays close.' },
          { name: 'Bulgarian Split Squat', sets: 3, reps: '8 each', rest: '2 min', muscle: 'Quads/Glutes', tip: 'Rear foot elevated. Front shin stays vertical. Sink straight down.' },
          { name: 'Leg Press', sets: 3, reps: '10–12', rest: '90 s', muscle: 'Quads', tip: 'Feet shoulder-width. Lower until 90°, push through heels. No knees caving.' },
          { name: 'Leg Curl', sets: 3, reps: '10–12', rest: '90 s', muscle: 'Hamstrings', tip: 'Curl all the way, squeeze at top. Control the return slowly.' },
          { name: 'Walking Lunge', sets: 3, reps: '10 each', rest: '90 s', muscle: 'Legs', tip: 'Long step so front shin stays vertical. Back knee lightly touches floor.' },
          { name: 'Calf Raise', sets: 4, reps: '15–20', rest: '60 s', muscle: 'Calves', tip: 'Full stretch at bottom (2 sec), explosive rise, 2-sec hold at top.' }
        ]
      },
      {
        day: 'Day 3', name: 'Push Hypertrophy',
        exercises: [
          { name: 'Chest Dip', sets: 4, reps: '10–12', rest: '90 s', muscle: 'Chest/Triceps', tip: 'Lean forward slightly for more chest activation. Full range.' },
          { name: 'Dumbbell Flat Press', sets: 4, reps: '10–12', rest: '90 s', muscle: 'Chest', tip: 'Elbows at 45°. Touch chest, squeeze pecs hard at top.' },
          { name: 'Cable Crossover', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Chest', tip: 'Cross arms slightly at bottom for full contraction. Feel the squeeze.' },
          { name: 'Arnold Press', sets: 3, reps: '10–12', rest: '90 s', muscle: 'Shoulders', tip: 'Rotate palms away as you press. Full rotation for all three delt heads.' },
          { name: 'Lateral Raise', sets: 4, reps: '12–15', rest: '60 s', muscle: 'Side Delts', tip: 'Lead with elbows not wrists. Stop at shoulder height. Slight forward tilt.' },
          { name: 'Tricep Pushdown', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Triceps', tip: 'Upper arms locked to sides. Full extension at bottom. Squeeze.' },
          { name: 'Overhead Tricep Extension', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Triceps (Long Head)', tip: 'Elbows pointing forward, not flaring. Full stretch overhead.' }
        ]
      },
      {
        day: 'Day 4', name: 'Pull Hypertrophy',
        exercises: [
          { name: 'Deadlift', sets: 4, reps: '4–6', rest: '3 min', muscle: 'Full Posterior Chain', tip: 'Bar over mid-foot. Hinge to bar, big breath, brace, drive floor away.' },
          { name: 'Lat Pulldown', sets: 4, reps: '10–12', rest: '90 s', muscle: 'Lats', tip: 'Wide overhand grip. Pull elbows to hips. Arch slightly, chest up.' },
          { name: 'Seated Cable Row', sets: 4, reps: '10–12', rest: '90 s', muscle: 'Mid Back', tip: 'Keep chest up. Row to sternum, squeeze shoulder blades for 1 sec.' },
          { name: 'Rear Delt Flye', sets: 3, reps: '15–20', rest: '60 s', muscle: 'Rear Delts', tip: 'Bent over 45°. Lead with elbows, arms nearly straight. Squeeze back.' },
          { name: 'Preacher Curl', sets: 3, reps: '10–12', rest: '75 s', muscle: 'Biceps (Peak)', tip: 'Pad just below armpit. Full extension at bottom, squeeze at top.' },
          { name: 'Barbell Curl', sets: 3, reps: '10–12', rest: '75 s', muscle: 'Biceps', tip: 'Elbows glued to sides. Supinate wrists at top for peak contraction.' },
          { name: 'Hammer Curl', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Brachialis', tip: 'Neutral grip throughout. Alternating or simultaneous — full range.' }
        ]
      },
      {
        day: 'Day 5', name: 'Legs & Glutes',
        exercises: [
          { name: 'Hip Thrust', sets: 4, reps: '10–12', rest: '90 s', muscle: 'Glutes', tip: 'Bench at mid-shoulder blade. Drive through heels. Full hip extension, hold 1s.' },
          { name: 'Back Squat', sets: 4, reps: '8–10', rest: '2 min', muscle: 'Quads/Glutes', tip: 'Slightly higher rep today. Focus on the squeeze at lockout.' },
          { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each', rest: '90 s', muscle: 'Quads/Glutes', tip: 'Add weight from last session. Controlled descent, explosive drive.' },
          { name: 'Romanian Deadlift', sets: 3, reps: '10–12', rest: '90 s', muscle: 'Hamstrings', tip: 'Slightly higher rep range. 2-sec stretch at bottom.' },
          { name: 'Leg Extension', sets: 3, reps: '15–20', rest: '60 s', muscle: 'Quads (Isolation)', tip: 'Full extension, hold 1 sec, slow 3-sec return. Feel the burn.' },
          { name: 'Leg Curl', sets: 3, reps: '15–20', rest: '60 s', muscle: 'Hamstrings', tip: 'Lying or seated. Full range, squeeze hard at top.' },
          { name: 'Calf Raise', sets: 5, reps: '15–25', rest: '60 s', muscle: 'Calves', tip: 'Mix foot positions: neutral, toes in, toes out for complete calf development.' }
        ]
      },
      {
        day: 'Day 6', name: 'Arms & Shoulders',
        exercises: [
          { name: 'Overhead Press', sets: 4, reps: '8–10', rest: '90 s', muscle: 'Shoulders', tip: 'Moderate weight, full range, feel the shoulder press from bottom to lockout.' },
          { name: 'Arnold Press', sets: 3, reps: '10–12', rest: '90 s', muscle: 'All Delt Heads', tip: 'Slow and controlled rotation. Do not rush the movement.' },
          { name: 'Lateral Raise', sets: 4, reps: '15–20', rest: '45 s', muscle: 'Side Delts', tip: 'Drop set on last set: full weight × 10, drop 30%, squeeze out 10 more.' },
          { name: 'Barbell Curl', sets: 4, reps: '8–10', rest: '90 s', muscle: 'Biceps', tip: 'Heavier today. Cheat slightly on last reps but control the negative.' },
          { name: 'Hammer Curl', sets: 3, reps: '10–12', rest: '75 s', muscle: 'Brachialis', tip: 'Builds arm thickness. Keep strict form, no swinging.' },
          { name: 'Skull Crusher', sets: 4, reps: '10–12', rest: '75 s', muscle: 'Triceps', tip: 'EZ bar to forehead. Keep elbows pointing straight up throughout.' },
          { name: 'Close Grip Bench', sets: 3, reps: '10–12', rest: '90 s', muscle: 'Triceps/Chest', tip: 'Shoulder-width grip. Elbows at sides. Full chest touch at bottom.' }
        ]
      }
    ]
  },
  {
    id: 'cardio',
    title: 'Cardio Burn',
    subtitle: 'Ignite Your Engine',
    icon: '🏃',
    color: '#00D4FF',
    gradient: 'linear-gradient(135deg, #00D4FF, #0099FF)',
    difficulty: 'Intermediate',
    duration: '45 min',
    frequency: '5x / week',
    calories: '300–500',
    category: 'Cardio',
    restDays: [3, 6],
    description: 'High-intensity interval training mixed with steady-state cardio to maximize fat burn, improve VO2 max, and build unstoppable cardiovascular endurance over any duration.',
    weeks: 6,
    equipment: ['Treadmill or Space', 'Jump Rope', 'Timer', 'Kettlebell (optional)'],
    workouts: [
      {
        day: 'Day 1', name: 'HIIT Blast',
        exercises: [
          { name: 'Warm-Up Jog', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Body', tip: 'Easy pace — you should be able to speak in full sentences. Gradually lift HR.' },
          { name: 'Sprint Intervals', sets: 8, reps: '30s on / 30s off', rest: '90 s between sets', muscle: 'Legs/Cardio', tip: '100% effort during 30s. Use 30s rest to walk, not stop. Max velocity.' },
          { name: 'Jump Rope', sets: 3, reps: '2 min', rest: '60 s', muscle: 'Calves/Coordination', tip: 'Stay on balls of feet. Wrists do the turning, not shoulders. Light landings.' },
          { name: 'Burpees', sets: 3, reps: '15', rest: '60 s', muscle: 'Full Body', tip: 'Chest to floor each rep. Explosive jump at top. Clap hands overhead.' },
          { name: 'High Knees', sets: 3, reps: '45 s', rest: '30 s', muscle: 'Hip Flexors', tip: 'Drive knees to hip height. Pump arms opposite to legs. Stay on toes.' },
          { name: 'Mountain Climbers', sets: 3, reps: '30 s', rest: '30 s', muscle: 'Core/Cardio', tip: 'Hips stay level. Drive knees to chest fast. Keep shoulders over wrists.' },
          { name: 'Cool-Down Walk', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery', tip: 'Slow your heart rate progressively. Deep belly breathing throughout.' }
        ]
      },
      {
        day: 'Day 2', name: 'Endurance Run',
        exercises: [
          { name: 'Warm-Up Walk', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Body', tip: 'Brisk walk, start activating the legs. Roll ankles, swing arms.' },
          { name: 'Steady-State Run', sets: 1, reps: '25–35 min', rest: '–', muscle: 'Cardiovascular', tip: '65–70% max heart rate. Conversational pace. Belly breathe, not chest.' },
          { name: 'Hill Repeats', sets: 5, reps: '1 min uphill', rest: '2 min', muscle: 'Glutes/Legs', tip: 'Drive arms hard, lean slightly forward into the hill. Fast foot turnover.' },
          { name: 'Jump Squat', sets: 3, reps: '15', rest: '60 s', muscle: 'Explosive Power', tip: 'Squat to parallel, explode up, soft landing, absorb with hips and knees.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '10 min', rest: '–', muscle: 'Recovery', tip: 'Hold each stretch 30–45 sec. Hip flexors, calves, hamstrings, quads.' }
        ]
      },
      {
        day: 'Day 3', name: 'Metabolic Circuit',
        exercises: [
          { name: 'Box Jumps', sets: 4, reps: '10', rest: '60 s', muscle: 'Explosive Power', tip: 'Swing arms, explode, land soft with knees bent. Step down, never jump down.' },
          { name: 'Kettlebell Swing', sets: 4, reps: '20', rest: '60 s', muscle: 'Posterior Chain', tip: 'Hip hinge — not a squat. Hike bell back, drive hips forward explosively.' },
          { name: 'Skaters', sets: 3, reps: '40 s', rest: '30 s', muscle: 'Lateral Cardio', tip: 'Lateral bound, land on one foot, reach opposite hand to foot. Stay low.' },
          { name: 'Battle Ropes', sets: 3, reps: '30 s', rest: '30 s', muscle: 'Upper Body/Cardio', tip: 'Alternate waves from the shoulder, not just wrists. Stay in athletic stance.' },
          { name: 'Tuck Jumps', sets: 3, reps: '12', rest: '45 s', muscle: 'Full Body Power', tip: 'Drive knees to chest at peak. Land soft, immediately rebound.' },
          { name: 'Jumping Jacks', sets: 3, reps: '1 min', rest: '30 s', muscle: 'Full Body', tip: 'Arms fully overhead each rep. Maintain rhythm. Breathe steadily.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery', tip: 'Focus on hip flexors and calves — most stressed in cardio sessions.' }
        ]
      },
      {
        day: 'Day 4', name: 'Low Intensity Cardio',
        exercises: [
          { name: 'Warm-Up Walk', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Body', tip: 'Active recovery day. Keep intensity low — this aids fat burning too.' },
          { name: 'Steady-State Run', sets: 1, reps: '40 min', rest: '–', muscle: 'Cardiovascular', tip: 'Longer, slower run at 60% max HR. This builds your aerobic base.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '10 min', rest: '–', muscle: 'Recovery', tip: 'Longer stretch today. Hold everything 45–60 seconds for deeper release.' }
        ]
      },
      {
        day: 'Day 5', name: 'Power Cardio',
        exercises: [
          { name: 'Warm-Up Jog', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Body', tip: 'Light jog, dynamic leg swings, high knees at slow speed to activate.' },
          { name: 'Sprint Intervals', sets: 10, reps: '20s on / 10s off', rest: '2 min between rounds', muscle: 'Speed/Power', tip: 'Tabata-style. Full sprint, then rest 10s. 4 rounds = 1 set.' },
          { name: 'Box Jumps', sets: 4, reps: '8', rest: '90 s', muscle: 'Explosive Lower', tip: 'Max height today. Full extension at top. Step down, reset, repeat.' },
          { name: 'Assault Bike', sets: 5, reps: '30 s max effort', rest: '90 s', muscle: 'Full Body Cardio', tip: 'ALL OUT on the bike. 30 seconds of everything you have, then recover fully.' },
          { name: 'Bear Crawl', sets: 3, reps: '20 m', rest: '60 s', muscle: 'Core/Shoulders', tip: 'Knees hover 2 inches. Opposite hand-foot move together. Never rush.' },
          { name: 'Cool-Down Walk', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery', tip: 'Gradual slow-down is as important as warm-up. Prevent blood pooling.' }
        ]
      }
    ]
  },
  {
    id: 'yoga',
    title: 'Mindful Yoga',
    subtitle: 'Flow & Restore',
    icon: '🧘',
    color: '#A78BFA',
    gradient: 'linear-gradient(135deg, #A78BFA, #EC4899)',
    difficulty: 'Beginner',
    duration: '40 min',
    frequency: '6x / week',
    calories: '150–250',
    category: 'Flexibility',
    restDays: [6],
    description: 'A holistic yoga practice combining strength, flexibility, breathwork, and mindfulness. Progresses through foundational flows to advanced poses over your chosen timeframe.',
    weeks: 8,
    equipment: ['Yoga Mat', 'Blocks (optional)', 'Strap (optional)'],
    workouts: [
      {
        day: 'Day 1', name: 'Morning Sun Flow',
        exercises: [
          { name: "Child's Pose", sets: 1, reps: '2 min', rest: '–', muscle: 'Back/Hips', tip: 'Arms extended, breathe into the back body. Let gravity do the work. Soften forehead.' },
          { name: 'Cat-Cow', sets: 1, reps: '10 rounds', rest: '–', muscle: 'Spine', tip: 'Inhale = cow (belly drops, head up). Exhale = cat (round spine, tuck chin). Slow.' },
          { name: 'Sun Salutation A', sets: 3, reps: '1 round each', rest: '30 s', muscle: 'Full Body', tip: 'Link every breath to every movement. Inhale to extend, exhale to fold. Meditative.' },
          { name: 'Warrior I', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Hips/Legs/Shoulders', tip: 'Square hips fully forward. Back heel grounded. Arms reach actively overhead.' },
          { name: 'Warrior II', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Inner Thighs/Hips', tip: 'Open hips to side. Front knee over ankle. Gaze over front fingertips. Sink.' },
          { name: 'Triangle Pose', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Side Body/Hamstrings', tip: 'Reach long before tilting. Stack hips. Bottom hand to shin, not floor (if tight).' },
          { name: 'Downward Dog', sets: 3, reps: '5 breaths', rest: '–', muscle: 'Hamstrings/Shoulders', tip: 'Press floor away. Pedal heels. Let head hang heavy between arms.' },
          { name: 'Savasana', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Body', tip: 'Total surrender. No fidgeting. This is the most important pose. Let everything go.' }
        ]
      },
      {
        day: 'Day 2', name: 'Deep Stretch & Restore',
        exercises: [
          { name: 'Reclined Butterfly', sets: 1, reps: '3 min', rest: '–', muscle: 'Inner Groin', tip: 'Support knees with blocks if hips are tight. Let gravity open the hips slowly.' },
          { name: 'Pigeon Pose', sets: 1, reps: '3 min each', rest: '–', muscle: 'Hip Flexors/Glutes', tip: 'Square hips, prop with a block if the hip is off the floor. Breathe into tightness.' },
          { name: 'Cobra Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Spine Extension', tip: 'Elbows slightly bent. Press top of feet down. Open chest forward and up.' },
          { name: 'Seated Forward Fold', sets: 1, reps: '3 min', rest: '–', muscle: 'Hamstrings/Spine', tip: 'Lead with heart, not forehead. Use a strap if needed. Exhale to deepen.' },
          { name: 'Spinal Twist', sets: 1, reps: '2 min each', rest: '–', muscle: 'Thoracic Spine', tip: 'Every exhale, gently deepen the twist. Never force. Start from the base of spine.' },
          { name: 'Bridge Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Glutes/Spine', tip: 'Press through all four corners of feet. Clasp hands under back for more lift.' },
          { name: 'Legs Up the Wall', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery/Nervous System', tip: 'Elevates legs, reverses blood flow, calms nervous system. True restoration.' }
        ]
      },
      {
        day: 'Day 3', name: 'Balance & Strength Flow',
        exercises: [
          { name: 'Sun Salutation A', sets: 4, reps: '1 round', rest: '–', muscle: 'Full Body Warm-Up', tip: 'Move faster today — more aerobic. Keep breath leading movement.' },
          { name: 'Warrior I', sets: 3, reps: '5 breaths each', rest: '–', muscle: 'Hips/Legs', tip: 'Go deeper today. Sink the front knee further. Reach arms actively up.' },
          { name: 'Crescent Lunge', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Hip Flexors/Balance', tip: 'Back heel lifted. Square hips. Reach arms overhead, lengthen side body.' },
          { name: 'Tree Pose', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Balance/Core', tip: 'Foot to calf or thigh (avoid knee). Gaze fixed point. Arms in prayer or overhead.' },
          { name: 'Chair Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Quads/Core', tip: 'Feet together. Knees over toes, not beyond. Sit low, spine long, arms reach up.' },
          { name: 'Boat Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Core/Hip Flexors', tip: 'Spine long, not rounded. Legs straight if possible. Arms parallel to floor.' },
          { name: 'Savasana', sets: 1, reps: '5 min', rest: '–', muscle: 'Integration', tip: 'Give yourself fully to rest. Notice how your body feels after the practice.' }
        ]
      },
      {
        day: 'Day 4', name: 'Hip Opening & Flexibility',
        exercises: [
          { name: "Child's Pose", sets: 1, reps: '2 min', rest: '–', muscle: 'Spine/Hips', tip: 'Wide-knee version today. Feet together, knees wide. Sink hips back.' },
          { name: 'Cat-Cow', sets: 1, reps: '10 rounds', rest: '–', muscle: 'Spine', tip: 'Add circles to the spine today — move in all directions. Explore the spine.' },
          { name: 'Half Pigeon', sets: 1, reps: '4 min each', rest: '–', muscle: 'Deep Hip Rotators', tip: 'This is intense. Breathe through discomfort. Use a block under the hip.' },
          { name: 'Crescent Lunge', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Hip Flexors', tip: 'Back knee can stay down if needed. Open chest, open heart. Feel the stretch.' },
          { name: 'Downward Dog', sets: 3, reps: '5 breaths', rest: '–', muscle: 'Full Body', tip: 'Three-legged dog: lift one leg high, flex foot, open hip to sky.' },
          { name: 'Bridge Pose', sets: 3, reps: '8 breaths', rest: '30 s', muscle: 'Glutes/Hip Extension', tip: 'Hold longer today. Engage glutes strongly. Try single-leg if comfortable.' },
          { name: 'Reclined Butterfly', sets: 1, reps: '4 min', rest: '–', muscle: 'Groin/Hips', tip: 'Blanket under hips for support. Arms by sides or hands on belly. Release.' }
        ]
      },
      {
        day: 'Day 5', name: 'Core & Inversions',
        exercises: [
          { name: 'Sun Salutation A', sets: 5, reps: '1 round', rest: '–', muscle: 'Full Body', tip: 'Build heat for inversions. Move with intention. Every breath counts.' },
          { name: 'Boat Pose', sets: 4, reps: '5 breaths', rest: '30 s', muscle: 'Core', tip: 'Bend knees if needed but keep spine long. Hover feet or reach legs straight.' },
          { name: 'Plank to Downdog', sets: 3, reps: '5 cycles', rest: '45 s', muscle: 'Core/Shoulders', tip: 'Hold plank 5 breaths, then press to down dog 5 breaths. Alternate mindfully.' },
          { name: 'Chair Pose', sets: 3, reps: '8 breaths', rest: '45 s', muscle: 'Legs/Core', tip: 'Hold longer each round. Torso parallel to floor if possible. Strong core.' },
          { name: 'Bridge Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Glutes/Spine', tip: 'Preparation for wheel. Press actively, open chest fully, breathe deep.' },
          { name: 'Legs Up the Wall', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery', tip: 'After a strong core session this is deeply restorative. Stay still.' },
          { name: 'Savasana', sets: 1, reps: '8 min', rest: '–', muscle: 'Full Integration', tip: 'Longer savasana today. You have earned it. Total stillness.' }
        ]
      }
    ]
  },
  {
    id: 'core',
    title: 'Core Forge',
    subtitle: 'Steel Your Center',
    icon: '⚡',
    color: '#34D399',
    gradient: 'linear-gradient(135deg, #34D399, #059669)',
    difficulty: 'Intermediate',
    duration: '30 min',
    frequency: '5x / week',
    calories: '200–350',
    category: 'Core',
    restDays: [4, 6],
    description: 'A targeted core program that builds deep abdominal strength, rotational power, spinal stability, and athletic performance from the inside out.',
    weeks: 6,
    equipment: ['Mat', 'Pull-Up Bar', 'Ab Wheel', 'Cable Machine (optional)'],
    workouts: [
      {
        day: 'Day 1', name: 'Stability Foundation',
        exercises: [
          { name: 'Dead Bug', sets: 3, reps: '10 each side', rest: '45 s', muscle: 'Deep Core', tip: 'Lower back MUST stay pressed to floor. Move opposite arm-leg. Exhale as you extend.' },
          { name: 'Plank', sets: 3, reps: '45–60 s', rest: '60 s', muscle: 'Anti-Extension Core', tip: 'Squeeze glutes, tuck pelvis, pull navel up. Breathe steadily. No sagging hips.' },
          { name: 'Side Plank', sets: 3, reps: '30–45 s each', rest: '45 s', muscle: 'Lateral Core/Obliques', tip: 'Stack feet or stagger. Hips high — no sagging. Stack shoulders, not forward.' },
          { name: 'Bird Dog', sets: 3, reps: '10 each side', rest: '45 s', muscle: 'Lumbar Stabilizers', tip: 'Extend opposite arm-leg. Hold 3 sec at full extension. Zero hip rotation allowed.' },
          { name: 'Hollow Body Hold', sets: 3, reps: '30 s', rest: '60 s', muscle: 'Anterior Core', tip: 'Lower back flat. Arms overhead, legs straight. If difficult, bend knees or raise legs.' },
          { name: 'Reverse Crunch', sets: 3, reps: '15', rest: '45 s', muscle: 'Lower Abs', tip: 'Curl hips off floor, not just lift legs. Exhale at the top. Control descent.' }
        ]
      },
      {
        day: 'Day 2', name: 'Dynamic Core',
        exercises: [
          { name: 'Hanging Knee Raise', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Hip Flexors/Lower Abs', tip: 'Dead hang. Drive knees to chest with control. No swinging. Slow descent.' },
          { name: 'Ab Wheel Rollout', sets: 3, reps: '8–12', rest: '75 s', muscle: 'Anti-Extension/Total Core', tip: 'Brace hard before rolling. ONLY go as far as back stays flat. Stop, squeeze, return.' },
          { name: 'Russian Twist', sets: 3, reps: '20 total', rest: '45 s', muscle: 'Obliques', tip: 'Lean back slightly. Lift feet for challenge. Rotate from waist, not just arms.' },
          { name: 'V-Up', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Hip Flexors/Rectus Abdominis', tip: 'Lift arms and legs simultaneously. Meet hands to feet. Lower with control.' },
          { name: 'Bicycle Crunch', sets: 3, reps: '20 total', rest: '45 s', muscle: 'Obliques/Rectus', tip: 'Rotate the SHOULDER to opposite knee, not elbow. Full extension of straight leg.' },
          { name: 'Flutter Kicks', sets: 3, reps: '30 s', rest: '45 s', muscle: 'Lower Abs', tip: 'Lower back pressed down. Small fast kicks. Arms at sides. Breathe steadily.' }
        ]
      },
      {
        day: 'Day 3', name: 'Power Core',
        exercises: [
          { name: 'Med Ball Slam', sets: 4, reps: '10', rest: '60 s', muscle: 'Full Core/Power', tip: 'Full overhead extension, then slam with your entire body. Catch on bounce.' },
          { name: 'Pallof Press', sets: 3, reps: '10 each side', rest: '60 s', muscle: 'Anti-Rotation Core', tip: 'Cable at chest height. Press straight out, hold 2 sec, return. RESIST the pull.' },
          { name: 'Cable Woodchop', sets: 3, reps: '10 each side', rest: '60 s', muscle: 'Rotational Power', tip: 'Pivot back foot. Let hips lead the rotation. Arms follow, do not initiate.' },
          { name: 'Dragon Flag', sets: 3, reps: '5–8', rest: '90 s', muscle: 'Total Core', tip: 'Grip bench behind head. Body straight as a plank. CONTROL the lowering. Never arch.' },
          { name: 'Hollow Body Hold', sets: 3, reps: '40 s', rest: '60 s', muscle: 'Anterior Core', tip: 'Longer hold than Day 1. Arms overhead add difficulty. Breathe through it.' },
          { name: 'Leg Raise', sets: 3, reps: '12–15', rest: '60 s', muscle: 'Lower Abs', tip: 'Hanging or flat. Control the descent. Tilt pelvis back at top for full contraction.' }
        ]
      },
      {
        day: 'Day 4', name: 'Isometric Strength',
        exercises: [
          { name: 'Plank', sets: 4, reps: '60–90 s', rest: '60 s', muscle: 'Full Core Endurance', tip: 'Longest plank sessions. Breathe slow and steady. Every second of tension counts.' },
          { name: 'Side Plank', sets: 3, reps: '45–60 s each', rest: '45 s', muscle: 'Lateral Core', tip: 'Add a hip dip: lower and raise hip 10× before holding at top.' },
          { name: 'Hollow Body Hold', sets: 4, reps: '45 s', rest: '60 s', muscle: 'Anterior Core', tip: 'Keep arms at sides if overhead is too hard. Progress: add weight over time.' },
          { name: 'Dead Bug', sets: 4, reps: '12 each side', rest: '45 s', muscle: 'Deep Stabilizers', tip: 'Slowest movement today. 3 seconds extend, 3 seconds return. Perfect form only.' },
          { name: 'Toe Touch Crunch', sets: 3, reps: '15', rest: '45 s', muscle: 'Upper Abs', tip: 'Legs vertical. Reach fingertips to toes. Short range but high tension contraction.' },
          { name: 'Scissor Kicks', sets: 3, reps: '30 s', rest: '45 s', muscle: 'Lower Abs', tip: 'Legs straight, controlled alternating kicks. Lower back stays pinned to mat.' }
        ]
      },
      {
        day: 'Day 5', name: 'Full Core Circuit',
        exercises: [
          { name: 'Plank', sets: 1, reps: '60 s', rest: '30 s', muscle: 'Full Core', tip: 'Circuit warm-up. Perfect form, breathe steadily.' },
          { name: 'Hanging Knee Raise', sets: 3, reps: '15', rest: '45 s', muscle: 'Lower Abs', tip: 'Full dead hang between reps. Explosive knee drive, slow descent.' },
          { name: 'Ab Wheel Rollout', sets: 3, reps: '10', rest: '60 s', muscle: 'Total Core', tip: 'Push the range today — go a little further if back stays flat.' },
          { name: 'Russian Twist', sets: 3, reps: '30 total', rest: '45 s', muscle: 'Obliques', tip: 'Hold weight today (dumbbell or plate). Rotate fully side to side.' },
          { name: 'Dragon Flag', sets: 3, reps: '6–10', rest: '90 s', muscle: 'Total Core', tip: 'This is your benchmark. Track your reps. Goal: 10 strict reps by week 6.' },
          { name: 'Bicycle Crunch', sets: 3, reps: '30 total', rest: '45 s', muscle: 'Obliques', tip: 'Slow and controlled today — 2 sec per rep. Quality beats quantity always.' },
          { name: 'Hollow Body Hold', sets: 3, reps: '30 s', rest: '45 s', muscle: 'Core Finisher', tip: 'Final burnout. Push through the last 10 seconds. You have got this.' }
        ]
      }
    ]
  }
];

// ── Female-specific guides ─────────────────────────────────────────────────
const FEMALE_GUIDES = [
  {
    id: 'female-tone',
    gender: 'female',
    title: 'Tone & Sculpt',
    subtitle: 'Lean Muscle for Women',
    icon: '🌸',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #F472B6)',
    difficulty: 'Beginner',
    duration: '45 min',
    frequency: '4x / week',
    calories: '250–400',
    category: 'Toning',
    restDays: [3, 6],
    description: 'A beginner-friendly toning program designed specifically for women. Focuses on sculpting the glutes, core, and arms using bodyweight and light weights for a lean, defined physique.',
    weeks: 6,
    equipment: ['Dumbbells', 'Resistance Bands', 'Mat'],
    workouts: [
      {
        day: 'Day 1', name: 'Lower Body Sculpt',
        exercises: [
          { name: 'Hip Thrust', sets: 4, reps: '15', rest: '45 s', muscle: 'Glutes', tip: 'Drive through heels, squeeze glutes hard at the top. Full hip extension.' },
          { name: 'Sumo Squat', sets: 3, reps: '15', rest: '45 s', muscle: 'Inner Thighs / Glutes', tip: 'Wide stance, toes out. Keep chest tall and push knees out over toes.' },
          { name: 'Romanian Deadlift', sets: 3, reps: '12', rest: '60 s', muscle: 'Hamstrings / Glutes', tip: 'Soft bend in knees, hinge at hips. Feel the hamstring stretch then drive hips forward.' },
          { name: 'Walking Lunge', sets: 3, reps: '20 total', rest: '45 s', muscle: 'Quads / Glutes', tip: 'Long stride, back knee touches floor gently. Keep torso upright throughout.' },
          { name: 'Calf Raise', sets: 3, reps: '20', rest: '30 s', muscle: 'Calves', tip: 'Full range — all the way up, pause, all the way down. Slow and controlled.' },
          { name: 'Side Plank', sets: 3, reps: '30 s each', rest: '30 s', muscle: 'Obliques', tip: 'Hip high, body straight line. Progress to hip dips for extra oblique work.' }
        ]
      },
      {
        day: 'Day 2', name: 'Arms & Shoulders',
        exercises: [
          { name: 'Lateral Raise', sets: 3, reps: '15', rest: '45 s', muscle: 'Shoulders', tip: 'Light weight, lead with elbows. Raise to shoulder height only — no shrugging.' },
          { name: 'Dumbbell Curl', sets: 3, reps: '12 each', rest: '45 s', muscle: 'Biceps', tip: 'Keep elbows pinned to sides. Full curl and slow descent for best results.' },
          { name: 'Overhead Tricep Extension', sets: 3, reps: '15', rest: '45 s', muscle: 'Triceps', tip: 'Upper arms stay still. Lower behind head slowly, extend fully overhead.' },
          { name: 'Arnold Press', sets: 3, reps: '12', rest: '60 s', muscle: 'Shoulders', tip: 'Rotate palms as you press. Start facing you, end facing away at the top.' },
          { name: 'Hammer Curl', sets: 3, reps: '12 each', rest: '45 s', muscle: 'Biceps / Forearms', tip: 'Neutral grip, controlled tempo. Alternate arms or both together.' },
          { name: 'Plank', sets: 3, reps: '40 s', rest: '30 s', muscle: 'Core', tip: 'Squeeze everything — glutes, abs, quads. Breathe steadily. No sagging hips.' }
        ]
      },
      {
        day: 'Day 3', name: 'Glute Focus',
        exercises: [
          { name: 'Hip Thrust', sets: 4, reps: '20', rest: '45 s', muscle: 'Glutes', tip: 'Higher reps today for maximum glute pump. Add a band above knees for more activation.' },
          { name: 'Bulgarian Split Squat', sets: 3, reps: '12 each', rest: '60 s', muscle: 'Glutes / Quads', tip: 'Front foot far enough that knee stays behind toes. Go slow on the way down.' },
          { name: 'Leg Curl', sets: 3, reps: '15', rest: '45 s', muscle: 'Hamstrings', tip: 'Full range of motion. Squeeze hamstrings at the top, lower slowly.' },
          { name: 'Sumo Squat', sets: 4, reps: '15', rest: '45 s', muscle: 'Glutes / Adductors', tip: 'Pause at bottom for 1–2 seconds each rep for deeper glute engagement.' },
          { name: 'Bird Dog', sets: 3, reps: '12 each side', rest: '30 s', muscle: 'Glutes / Core Stability', tip: 'Extend opposite arm and leg together. Hold 2 seconds. Keep hips square.' },
          { name: 'Bridge Pose', sets: 3, reps: '20', rest: '30 s', muscle: 'Glutes / Lower Back', tip: 'Bodyweight bridges as finisher — high reps, feel the burn in the glutes.' }
        ]
      },
      {
        day: 'Day 4', name: 'Full Body Tone',
        exercises: [
          { name: 'Jump Squat', sets: 3, reps: '15', rest: '60 s', muscle: 'Full Lower Body', tip: 'Land soft with knees bent. Immediate squat into next rep. Stay light on your feet.' },
          { name: 'Dumbbell Flat Press', sets: 3, reps: '12', rest: '60 s', muscle: 'Chest / Triceps', tip: 'Controlled descent, press up strong. Great for upper body toning.' },
          { name: 'Seated Cable Row', sets: 3, reps: '12', rest: '60 s', muscle: 'Back / Biceps', tip: 'Squeeze shoulder blades together. Row to lower chest, not waist.' },
          { name: 'Lateral Raise', sets: 3, reps: '15', rest: '45 s', muscle: 'Shoulders', tip: 'Slightly forward lean for better rear delt engagement.' },
          { name: 'Mountain Climbers', sets: 3, reps: '30 s', rest: '30 s', muscle: 'Core / Cardio', tip: 'Hips stay low and level. Drive knees fast for cardio effect.' },
          { name: 'Bicycle Crunch', sets: 3, reps: '20 total', rest: '30 s', muscle: 'Obliques / Core', tip: 'Rotate from the shoulder to opposite knee. Slow and deliberate works better than fast.' }
        ]
      }
    ]
  },
  {
    id: 'female-hiit',
    gender: 'female',
    title: 'Women\'s HIIT Burn',
    subtitle: 'Fat Burning & Cardio',
    icon: '🔥',
    color: '#F97316',
    gradient: 'linear-gradient(135deg, #F97316, #EF4444)',
    difficulty: 'Intermediate',
    duration: '35 min',
    frequency: '5x / week',
    calories: '350–550',
    category: 'HIIT',
    restDays: [5, 6],
    description: 'A high-intensity interval training program designed for women who want to maximize fat burn, boost metabolism, and build cardiovascular endurance — all in under 40 minutes.',
    weeks: 6,
    equipment: ['Mat', 'Jump Rope (optional)', 'Dumbbells (light)'],
    workouts: [
      {
        day: 'Day 1', name: 'Total Body Burn',
        exercises: [
          { name: 'Jumping Jacks', sets: 1, reps: '2 min', rest: '–', muscle: 'Warm-Up', tip: 'Arms fully overhead every rep. Get your heart rate up gradually.' },
          { name: 'Burpees', sets: 4, reps: '10', rest: '30 s', muscle: 'Full Body', tip: 'Chest to floor on the way down, explosive jump at the top. Modify by stepping if needed.' },
          { name: 'Jump Squat', sets: 4, reps: '15', rest: '30 s', muscle: 'Legs / Glutes', tip: 'Land soft, go straight into the squat. Arms swing for momentum.' },
          { name: 'Mountain Climbers', sets: 4, reps: '30 s', rest: '20 s', muscle: 'Core / Cardio', tip: 'Keep hips down — this is the most common mistake. Fast but controlled.' },
          { name: 'High Knees', sets: 3, reps: '30 s', rest: '20 s', muscle: 'Legs / Cardio', tip: 'Drive knees above hip height. Pump arms for coordination.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery', tip: 'Focus on quads, hip flexors, and calves — most stressed today.' }
        ]
      },
      {
        day: 'Day 2', name: 'Lower Body HIIT',
        exercises: [
          { name: 'Warm-Up Jog', sets: 1, reps: '3 min', rest: '–', muscle: 'Full Body', tip: 'Light jog in place or around the room. Get body temperature rising.' },
          { name: 'Sumo Squat', sets: 4, reps: '20', rest: '30 s', muscle: 'Glutes / Inner Thighs', tip: 'Explosive reps today. Fast down, powerful up. Feel the burn.' },
          { name: 'Skaters', sets: 4, reps: '40 s', rest: '20 s', muscle: 'Lateral / Glutes', tip: 'Big lateral bounds. Land on one foot, touch opposite hand to foot.' },
          { name: 'Walking Lunge', sets: 3, reps: '20 total', rest: '30 s', muscle: 'Quads / Glutes', tip: 'Fast continuous lunges. No pause at the top. Stay light on your feet.' },
          { name: 'Hip Thrust', sets: 3, reps: '20', rest: '30 s', muscle: 'Glutes', tip: 'Bodyweight or with plate. Fast reps, squeeze hard at top.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery', tip: 'Hip flexor stretch is essential after lower body HIIT.' }
        ]
      },
      {
        day: 'Day 3', name: 'Core & Upper HIIT',
        exercises: [
          { name: 'Jumping Jacks', sets: 1, reps: '2 min', rest: '–', muscle: 'Warm-Up', tip: 'Increase pace over the 2 minutes. Prepare shoulders for the session.' },
          { name: 'Burpees', sets: 3, reps: '12', rest: '30 s', muscle: 'Full Body', tip: 'Focus on the push-up portion today for upper body engagement.' },
          { name: 'Mountain Climbers', sets: 4, reps: '40 s', rest: '20 s', muscle: 'Core / Shoulders', tip: 'Longer intervals today. Maintain hip position — do not let them rise.' },
          { name: 'Bicycle Crunch', sets: 3, reps: '30 total', rest: '30 s', muscle: 'Obliques', tip: 'Slow down compared to cardio rounds — quality rotations for the obliques.' },
          { name: 'Plank', sets: 3, reps: '45 s', rest: '30 s', muscle: 'Core', tip: 'Squeeze every muscle. This is an active hold, not a rest.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery', tip: 'Cobra and child\'s pose for the back. Shoulder stretches too.' }
        ]
      },
      {
        day: 'Day 4', name: 'Cardio Endurance',
        exercises: [
          { name: 'Warm-Up Walk', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Body', tip: 'Brisk walk or light jog. Today is endurance focused — steady and sustainable.' },
          { name: 'Steady-State Run', sets: 1, reps: '25 min', rest: '–', muscle: 'Cardiovascular', tip: 'Conversational pace — you should be able to speak. Burn fat efficiently.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '8 min', rest: '–', muscle: 'Recovery', tip: 'Full body stretch. Hold every position 30–45 seconds for mobility gains.' }
        ]
      },
      {
        day: 'Day 5', name: 'Full Body Finisher',
        exercises: [
          { name: 'Jumping Jacks', sets: 1, reps: '2 min', rest: '–', muscle: 'Warm-Up', tip: 'Last session of the week! Give it everything you have.' },
          { name: 'Burpees', sets: 5, reps: '10', rest: '30 s', muscle: 'Full Body', tip: 'Personal best today. Push the pace.' },
          { name: 'Jump Squat', sets: 4, reps: '15', rest: '30 s', muscle: 'Legs', tip: 'Max height each jump. Power through the end of the week.' },
          { name: 'Mountain Climbers', sets: 4, reps: '30 s', rest: '20 s', muscle: 'Core', tip: 'Sprint pace. All out effort for 30 seconds.' },
          { name: 'High Knees', sets: 4, reps: '30 s', rest: '20 s', muscle: 'Cardio', tip: 'Arms pumping hard. Drive those knees up high.' },
          { name: 'Cool-Down Stretch', sets: 1, reps: '8 min', rest: '–', muscle: 'Recovery', tip: 'Well done this week. Extended cool-down is your reward. Hold deep.' }
        ]
      }
    ]
  },
  {
    id: 'female-yoga',
    gender: 'female',
    title: 'Women\'s Yoga Flow',
    subtitle: 'Flexibility & Balance',
    icon: '🌺',
    color: '#A78BFA',
    gradient: 'linear-gradient(135deg, #A78BFA, #EC4899)',
    difficulty: 'Beginner',
    duration: '40 min',
    frequency: '6x / week',
    calories: '150–200',
    category: 'Yoga',
    restDays: [6],
    description: 'A women-focused yoga program targeting flexibility, core stability, hip opening, and stress relief. Perfect for complementing strength training or as a standalone practice for body awareness and mental calm.',
    weeks: 6,
    equipment: ['Yoga Mat', 'Blocks (optional)', 'Strap (optional)'],
    workouts: [
      {
        day: 'Day 1', name: 'Morning Glow Flow',
        exercises: [
          { name: "Child's Pose", sets: 1, reps: '2 min', rest: '–', muscle: 'Back / Hips', tip: 'Wide-knee version. Breathe into the back body. Complete surrender.' },
          { name: 'Cat-Cow', sets: 1, reps: '10 rounds', rest: '–', muscle: 'Spine', tip: 'Inhale = cow. Exhale = cat. Link every breath to movement.' },
          { name: 'Sun Salutation A', sets: 3, reps: '1 round', rest: '30 s', muscle: 'Full Body', tip: 'Move slowly through each pose. Every exhale deepens the stretch.' },
          { name: 'Warrior I', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Hips / Shoulders', tip: 'Square the hips. Back heel firmly grounded. Reach strongly overhead.' },
          { name: 'Bridge Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Glutes / Spine', tip: 'Press through all four corners of feet. Clasp hands for more lift.' },
          { name: 'Reclined Butterfly', sets: 1, reps: '3 min', rest: '–', muscle: 'Hips / Groin', tip: 'Let gravity open the hips gently. Support knees with blocks if tight.' },
          { name: 'Savasana', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Body', tip: 'Total stillness. Every muscle releases. This is the most important pose.' }
        ]
      },
      {
        day: 'Day 2', name: 'Hip Opening & Core',
        exercises: [
          { name: 'Cat-Cow', sets: 1, reps: '10 rounds', rest: '–', muscle: 'Spine', tip: 'Add circles today — move in all directions to explore the spine fully.' },
          { name: 'Downward Dog', sets: 3, reps: '5 breaths', rest: '–', muscle: 'Hamstrings / Shoulders', tip: 'Press the floor away. Let your head hang heavy between your arms.' },
          { name: 'Pigeon Pose', sets: 1, reps: '3 min each', rest: '–', muscle: 'Hip Flexors / Glutes', tip: 'Square hips. Breathe into the tightness. Use a block under hip if needed.' },
          { name: 'Boat Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Core / Hip Flexors', tip: 'Spine long, not rounded. Bend knees if needed. Breathe steadily.' },
          { name: 'Crescent Lunge', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Hip Flexors', tip: 'Open chest, open heart. Feel the hip flexor stretch deeply.' },
          { name: 'Legs Up the Wall', sets: 1, reps: '5 min', rest: '–', muscle: 'Recovery / Nervous System', tip: 'Elevates legs, reverses blood flow, calms the nervous system. True restoration.' }
        ]
      },
      {
        day: 'Day 3', name: 'Strength & Balance',
        exercises: [
          { name: 'Sun Salutation A', sets: 4, reps: '1 round', rest: '–', muscle: 'Full Body Warm-Up', tip: 'Move faster today — more aerobic. Keep breath leading movement always.' },
          { name: 'Warrior II', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Inner Thighs / Hips', tip: 'Open hips to side. Front knee over ankle. Gaze over front fingertips.' },
          { name: 'Tree Pose', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Balance / Core', tip: 'Foot to calf or thigh. Fixed gaze point. Arms in prayer or overhead.' },
          { name: 'Chair Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Quads / Core', tip: 'Feet together, knees over toes. Sit low, spine tall.' },
          { name: 'Bridge Pose', sets: 3, reps: '8 breaths', rest: '30 s', muscle: 'Glutes / Hip Extension', tip: 'Hold longer. Engage glutes strongly. Try single-leg if comfortable.' },
          { name: 'Savasana', sets: 1, reps: '5 min', rest: '–', muscle: 'Integration', tip: 'Surrender completely. Notice how your body feels after the practice.' }
        ]
      },
      {
        day: 'Day 4', name: 'Deep Restore',
        exercises: [
          { name: 'Reclined Butterfly', sets: 1, reps: '4 min', rest: '–', muscle: 'Groin / Hips', tip: 'Blanket under hips. Arms by sides or hands on belly. Complete release.' },
          { name: 'Pigeon Pose', sets: 1, reps: '4 min each', rest: '–', muscle: 'Deep Hip Rotators', tip: 'This is your deepest pose today. Breathe through it. Fold forward for more.' },
          { name: 'Seated Forward Fold', sets: 1, reps: '3 min', rest: '–', muscle: 'Hamstrings / Spine', tip: 'Lead with chest. Use a strap if needed. Exhale to deepen gently.' },
          { name: 'Spinal Twist', sets: 1, reps: '2 min each', rest: '–', muscle: 'Thoracic Spine', tip: 'Every exhale deepens the twist. Start from base of spine. Never force.' },
          { name: 'Cobra Pose', sets: 3, reps: '5 breaths', rest: '30 s', muscle: 'Spine Extension / Chest', tip: 'Elbows soft. Press top of feet down. Open chest forward and up.' },
          { name: 'Legs Up the Wall', sets: 1, reps: '5 min', rest: '–', muscle: 'Full Recovery', tip: 'After the deep stretching, this is deeply restorative. Stay absolutely still.' },
          { name: 'Savasana', sets: 1, reps: '8 min', rest: '–', muscle: 'Full Integration', tip: 'Longer savasana. You have earned it. Total stillness.' }
        ]
      },
      {
        day: 'Day 5', name: 'Flow & Breathwork',
        exercises: [
          { name: 'Cat-Cow', sets: 1, reps: '10 rounds', rest: '–', muscle: 'Spine Warm-Up', tip: 'Begin with breath awareness. Let the breath lead, not the movement.' },
          { name: 'Sun Salutation A', sets: 5, reps: '1 round', rest: '–', muscle: 'Full Body', tip: 'Build heat. Meditative quality. Every transition is a pose.' },
          { name: 'Warrior I', sets: 3, reps: '5 breaths each', rest: '–', muscle: 'Hips / Strength', tip: 'Sink deeper. Both legs powerful. Arms actively reaching overhead.' },
          { name: 'Triangle Pose', sets: 2, reps: '5 breaths each', rest: '–', muscle: 'Side Body / Hamstrings', tip: 'Reach long before tilting. Stack hips. Bottom hand to shin or block.' },
          { name: 'Hollow Body Hold', sets: 3, reps: '30 s', rest: '45 s', muscle: 'Core', tip: 'Lower back flat on mat. Arms overhead or by sides. Breathe through it.' },
          { name: 'Reclined Butterfly', sets: 1, reps: '3 min', rest: '–', muscle: 'Hips', tip: 'Final hip opening for the week. Set an intention for the next week.' },
          { name: 'Savasana', sets: 1, reps: '8 min', rest: '–', muscle: 'Integration', tip: 'Full week complete. Rest deeply. Celebrate your consistency.' }
        ]
      }
    ]
  }
];

// Tag all original GUIDES as male (or 'all' for yoga/core which are universal)
GUIDES.forEach(g => {
  if (!g.gender) {
    if (g.id === 'yoga' || g.id === 'core') {
      g.gender = 'all';
    } else {
      g.gender = 'male';
    }
  }
});

// Merge all guides
GUIDES.push(...FEMALE_GUIDES);

// Add female video IDs to EXERCISE_VIDEOS
Object.assign(EXERCISE_VIDEOS, {
  'Sumo Squat': 'qDcniqddTeE',
  'Plank to Downdog': 'ASdvN_XEl_c'
});

const DEMO_USER = {
  username: 'demo',
  password: 'demo123',
  email: 'demo@guidefit.pro',
  firstName: 'Alex',
  lastName: 'Demo',
  age: 28,
  weight: 75,
  height: 178,
  goal: 'Build Muscle',
  gender: 'male',
  createdAt: new Date().toISOString()
};
