// Data sourced from collegetennisranks.com — ITA D1 Men's Tennis
// Last updated: April 15, 2026

export const teams = [
  { id: 1, name: 'Texas', conference: 'Big 12', rank: 1, record: '21-6', logo: '🤘' },
  { id: 2, name: 'Ohio State', conference: 'Big Ten', rank: 2, record: '25-3', logo: '🌰' },
  { id: 3, name: 'TCU', conference: 'Big 12', rank: 3, record: '19-5', logo: '🐸' },
  { id: 4, name: 'Virginia', conference: 'ACC', rank: 4, record: '20-3', logo: '⚔️' },
  { id: 5, name: 'LSU', conference: 'SEC', rank: 5, record: '24-5', logo: '🐯' },
  { id: 6, name: 'Mississippi State', conference: 'SEC', rank: 6, record: '20-4', logo: '🐶' },
  { id: 7, name: 'Wake Forest', conference: 'ACC', rank: 7, record: '26-3', logo: '🎩' },
  { id: 8, name: 'Oklahoma', conference: 'Big 12', rank: 8, record: '18-5', logo: '🔴' },
  { id: 9, name: 'Arizona', conference: 'Pac-12', rank: 9, record: '20-3', logo: '🐻' },
  { id: 10, name: 'Texas A&M', conference: 'SEC', rank: 10, record: '17-8', logo: '👍' },
  { id: 11, name: 'Baylor', conference: 'Big 12', rank: 11, record: '20-8', logo: '🐻' },
  { id: 12, name: 'Georgia', conference: 'SEC', rank: 12, record: '17-7', logo: '🐶' },
  { id: 13, name: 'South Carolina', conference: 'SEC', rank: 13, record: '15-7', logo: '🐔' },
  { id: 14, name: 'UCF', conference: 'Big 12', rank: 14, record: '19-5', logo: '⚔️' },
  { id: 15, name: 'Illinois', conference: 'Big Ten', rank: 15, record: '20-6', logo: '🔶' },
  { id: 16, name: 'San Diego', conference: 'WCC', rank: 16, record: '18-4', logo: '🔵' },
  { id: 17, name: 'Stanford', conference: 'ACC', rank: 17, record: '16-7', logo: '🌲' },
  { id: 18, name: 'Auburn', conference: 'SEC', rank: 18, record: '16-9', logo: '🐅' },
  { id: 19, name: 'Florida', conference: 'SEC', rank: 19, record: '15-12', logo: '🐊' },
  { id: 20, name: 'USC', conference: 'Big Ten', rank: 20, record: '16-6', logo: '✌️' },
  { id: 21, name: 'UCLA', conference: 'Big Ten', rank: 21, record: '14-6', logo: '🐻' },
  { id: 22, name: 'Vanderbilt', conference: 'SEC', rank: 22, record: '16-11', logo: '⚓' },
  { id: 23, name: 'Michigan State', conference: 'Big Ten', rank: 23, record: '13-8', logo: '💚' },
  { id: 24, name: 'Notre Dame', conference: 'ACC', rank: 24, record: '20-6', logo: '☘️' },
  { id: 25, name: 'Ole Miss', conference: 'SEC', rank: 25, record: '18-8', logo: '🔴' },
]

const teamsByName = Object.fromEntries(teams.map((t) => [t.name, t]))

function findTeam(name) {
  return teamsByName[name] || { name, rank: null, record: '', logo: '🎾', conference: '' }
}

// Today's scheduled matches (April 15, 2026) — shown as "live" for display
export const liveMatches = [
  {
    id: 'live-1',
    status: 'live',
    round: 'SEC Regular Season',
    court: 'Main Court',
    startTime: '7:00 PM ET',
    homeTeam: findTeam('Vanderbilt'),
    awayTeam: { name: 'Alabama', rank: 50, record: '12-16', logo: '🐘', conference: 'SEC' },
    teamScore: { home: 0, away: 0 },
    doublesResults: [],
    singlesMatches: [
      { court: 1, home: 'TBD', away: 'TBD', sets: [], serving: null, status: 'scheduled', currentGame: null },
    ],
  },
  {
    id: 'live-2',
    status: 'live',
    round: 'SEC Regular Season',
    court: 'Main Court',
    startTime: '11:00 AM ET',
    homeTeam: { name: 'Tennessee', rank: 56, record: '10-17', logo: '🍊', conference: 'SEC' },
    awayTeam: findTeam('Ole Miss'),
    teamScore: { home: 0, away: 0 },
    doublesResults: [],
    singlesMatches: [
      { court: 1, home: 'TBD', away: 'TBD', sets: [], serving: null, status: 'scheduled', currentGame: null },
    ],
  },
  {
    id: 'live-3',
    status: 'live',
    round: 'SEC Regular Season',
    court: 'Main Court',
    startTime: '3:00 PM ET',
    homeTeam: { name: 'Kentucky', rank: 26, record: '16-12', logo: '🐱', conference: 'SEC' },
    awayTeam: { name: 'Arkansas', rank: 36, record: '16-13', logo: '🐗', conference: 'SEC' },
    teamScore: { home: 0, away: 0 },
    doublesResults: [],
    singlesMatches: [
      { court: 1, home: 'TBD', away: 'TBD', sets: [], serving: null, status: 'scheduled', currentGame: null },
    ],
  },
  {
    id: 'live-4',
    status: 'live',
    round: 'ACC Regular Season',
    court: 'Main Court',
    startTime: '10:00 AM ET',
    homeTeam: { name: 'Boston College', rank: null, record: '', logo: '🦅', conference: 'ACC' },
    awayTeam: { name: 'Duke', rank: 45, record: '13-12', logo: '😈', conference: 'ACC' },
    teamScore: { home: 0, away: 0 },
    doublesResults: [],
    singlesMatches: [
      { court: 1, home: 'TBD', away: 'TBD', sets: [], serving: null, status: 'scheduled', currentGame: null },
    ],
  },
  {
    id: 'live-5',
    status: 'live',
    round: 'ACC Regular Season',
    court: 'Main Court',
    startTime: '12:30 PM ET',
    homeTeam: { name: 'Virginia Tech', rank: null, record: '', logo: '🦃', conference: 'ACC' },
    awayTeam: { name: 'North Carolina', rank: 46, record: '13-10', logo: '🐏', conference: 'ACC' },
    teamScore: { home: 0, away: 0 },
    doublesResults: [],
    singlesMatches: [
      { court: 1, home: 'TBD', away: 'TBD', sets: [], serving: null, status: 'scheduled', currentGame: null },
    ],
  },
  {
    id: 'live-6',
    status: 'live',
    round: 'ACC Regular Season',
    court: 'Main Court',
    startTime: '12:30 PM ET',
    homeTeam: { name: 'California', rank: 47, record: '14-12', logo: '🐻', conference: 'ACC' },
    awayTeam: { name: 'Georgia Tech', rank: 57, record: '12-12', logo: '🐝', conference: 'ACC' },
    teamScore: { home: 0, away: 0 },
    doublesResults: [],
    singlesMatches: [
      { court: 1, home: 'TBD', away: 'TBD', sets: [], serving: null, status: 'scheduled', currentGame: null },
    ],
  },
  {
    id: 'live-7',
    status: 'live',
    round: 'ACC Regular Season',
    court: 'Main Court',
    startTime: '10:00 AM ET',
    homeTeam: { name: 'Florida State', rank: 60, record: '12-14', logo: '🔶', conference: 'ACC' },
    awayTeam: { name: 'Louisville', rank: 62, record: '17-12', logo: '🔴', conference: 'ACC' },
    teamScore: { home: 0, away: 0 },
    doublesResults: [],
    singlesMatches: [
      { court: 1, home: 'TBD', away: 'TBD', sets: [], serving: null, status: 'scheduled', currentGame: null },
    ],
  },
]

// Recent results sourced from collegetennisranks.com week-behind (ranked matches)
export const recentResults = [
  // April 12
  { id: 'r-1', date: 'Apr 12, 2026', round: 'Big Ten', homeTeam: findTeam('Ohio State'), awayTeam: { name: 'Washington', rank: null, record: '', logo: '🟣', conference: 'Big Ten' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-2', date: 'Apr 12, 2026', round: 'Big 12', homeTeam: findTeam('TCU'), awayTeam: findTeam('Baylor'), teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-3', date: 'Apr 12, 2026', round: 'SEC', homeTeam: findTeam('Mississippi State'), awayTeam: { name: 'Alabama', rank: 50, record: '12-16', logo: '🐘', conference: 'SEC' }, teamScore: { home: 5, away: 2 }, winner: 'home' },
  { id: 'r-4', date: 'Apr 12, 2026', round: 'Big 12', homeTeam: findTeam('Oklahoma'), awayTeam: findTeam('Texas A&M'), teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-5', date: 'Apr 12, 2026', round: 'Pac-12 / Big 12', homeTeam: findTeam('Arizona'), awayTeam: { name: 'Oklahoma State', rank: 42, record: '14-11', logo: '🤠', conference: 'Big 12' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-6', date: 'Apr 12, 2026', round: 'SEC', homeTeam: findTeam('Georgia'), awayTeam: findTeam('Auburn'), teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-7', date: 'Apr 12, 2026', round: 'SEC', homeTeam: findTeam('South Carolina'), awayTeam: { name: 'Tennessee', rank: 56, record: '10-17', logo: '🍊', conference: 'SEC' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-8', date: 'Apr 12, 2026', round: 'Big 12', homeTeam: findTeam('UCF'), awayTeam: { name: 'Arizona State', rank: 30, record: '17-9', logo: '😈', conference: 'Pac-12' }, teamScore: { home: 4, away: 3 }, winner: 'home' },
  { id: 'r-9', date: 'Apr 12, 2026', round: 'Big Ten / ACC', homeTeam: findTeam('USC'), awayTeam: findTeam('Illinois'), teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-10', date: 'Apr 12, 2026', round: 'WCC', homeTeam: findTeam('San Diego'), awayTeam: { name: 'Pepperdine', rank: 28, record: '14-8', logo: '🌊', conference: 'WCC' }, teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-11', date: 'Apr 12, 2026', round: 'ACC', homeTeam: findTeam('Stanford'), awayTeam: { name: 'California', rank: 47, record: '14-12', logo: '🐻', conference: 'ACC' }, teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'r-12', date: 'Apr 12, 2026', round: 'SEC', homeTeam: findTeam('Florida'), awayTeam: { name: 'Arkansas', rank: 36, record: '16-13', logo: '🐗', conference: 'SEC' }, teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-13', date: 'Apr 12, 2026', round: 'Big Ten', homeTeam: findTeam('UCLA'), awayTeam: { name: 'Northwestern', rank: 66, record: '15-12', logo: '🟣', conference: 'Big Ten' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-14', date: 'Apr 12, 2026', round: 'SEC', homeTeam: findTeam('Ole Miss'), awayTeam: { name: 'Kentucky', rank: 26, record: '16-12', logo: '🐱', conference: 'SEC' }, teamScore: { home: 4, away: 3 }, winner: 'home' },
  { id: 'r-15', date: 'Apr 12, 2026', round: 'Ivy League', homeTeam: { name: 'Columbia', rank: 27, record: '14-6', logo: '🦁', conference: 'Ivy' }, awayTeam: { name: 'Princeton', rank: 38, record: '14-10', logo: '🐅', conference: 'Ivy' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-16', date: 'Apr 12, 2026', round: 'Ivy League', homeTeam: { name: 'Cornell', rank: 31, record: '15-3', logo: '🔴', conference: 'Ivy' }, awayTeam: { name: 'Penn', rank: 40, record: '16-9', logo: '🔵', conference: 'Ivy' }, teamScore: { home: 4, away: 3 }, winner: 'home' },
  { id: 'r-17', date: 'Apr 12, 2026', round: 'Ivy League', homeTeam: { name: 'Harvard', rank: 41, record: '13-10', logo: '🟥', conference: 'Ivy' }, awayTeam: { name: 'Yale', rank: 37, record: '16-7', logo: '🔵', conference: 'Ivy' }, teamScore: { home: 6, away: 1 }, winner: 'home' },
  // April 11
  { id: 'r-18', date: 'Apr 11, 2026', round: 'ACC', homeTeam: findTeam('Wake Forest'), awayTeam: { name: 'NC State', rank: 29, record: '16-6', logo: '🐺', conference: 'ACC' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-19', date: 'Apr 11, 2026', round: 'Big Ten', homeTeam: findTeam('Illinois'), awayTeam: findTeam('UCLA'), teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'r-20', date: 'Apr 11, 2026', round: 'Big Ten', homeTeam: { name: 'Michigan', rank: 39, record: '11-9', logo: '〽️', conference: 'Big Ten' }, awayTeam: findTeam('Michigan State'), teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'r-21', date: 'Apr 11, 2026', round: 'ACC', homeTeam: findTeam('Notre Dame'), awayTeam: { name: 'Louisville', rank: 62, record: '17-12', logo: '🔴', conference: 'ACC' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-22', date: 'Apr 11, 2026', round: 'ACC', homeTeam: { name: 'Duke', rank: 45, record: '13-12', logo: '😈', conference: 'ACC' }, awayTeam: { name: 'North Carolina', rank: 46, record: '13-10', logo: '🐏', conference: 'ACC' }, teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-23', date: 'Apr 11, 2026', round: 'ACC', homeTeam: { name: 'Miami (FL)', rank: 43, record: '14-10', logo: '🙌', conference: 'ACC' }, awayTeam: { name: 'Florida State', rank: 60, record: '12-14', logo: '🔶', conference: 'ACC' }, teamScore: { home: 4, away: 3 }, winner: 'home' },
  // April 10
  { id: 'r-24', date: 'Apr 10, 2026', round: 'Big 12 / SEC', homeTeam: findTeam('Texas'), awayTeam: findTeam('Florida'), teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-25', date: 'Apr 10, 2026', round: 'SEC', homeTeam: findTeam('LSU'), awayTeam: { name: 'Kentucky', rank: 26, record: '16-12', logo: '🐱', conference: 'SEC' }, teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-26', date: 'Apr 10, 2026', round: 'Big 12 / SEC', homeTeam: findTeam('Oklahoma'), awayTeam: { name: 'Arkansas', rank: 36, record: '16-13', logo: '🐗', conference: 'SEC' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-27', date: 'Apr 10, 2026', round: 'SEC', homeTeam: findTeam('Georgia'), awayTeam: findTeam('South Carolina'), teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'r-28', date: 'Apr 10, 2026', round: 'SEC', homeTeam: findTeam('Auburn'), awayTeam: findTeam('Ole Miss'), teamScore: { home: 4, away: 3 }, winner: 'home' },
  { id: 'r-29', date: 'Apr 10, 2026', round: 'SEC', homeTeam: findTeam('Vanderbilt'), awayTeam: { name: 'Alabama', rank: 50, record: '12-16', logo: '🐘', conference: 'SEC' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  // April 9
  { id: 'r-30', date: 'Apr 9, 2026', round: 'Big 12', homeTeam: findTeam('TCU'), awayTeam: { name: 'Oklahoma State', rank: 42, record: '14-11', logo: '🤠', conference: 'Big 12' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-31', date: 'Apr 9, 2026', round: 'ACC', homeTeam: findTeam('Virginia'), awayTeam: { name: 'Virginia Tech', rank: null, record: '', logo: '🦃', conference: 'ACC' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'r-32', date: 'Apr 9, 2026', round: 'Pac-12 / Big 12', homeTeam: findTeam('Arizona'), awayTeam: findTeam('UCF'), teamScore: { home: 4, away: 1 }, winner: 'home' },
]

// ITA D1 Men's Rankings — from collegetennisranks.com/rankings/current/d1m
export const standings = [
  { rank: 1, team: teams[0], points: 76.311, confRecord: '', streak: '' },
  { rank: 2, team: teams[1], points: 73.732, confRecord: '', streak: '' },
  { rank: 3, team: teams[2], points: 72.111, confRecord: '', streak: '' },
  { rank: 4, team: teams[3], points: 70.761, confRecord: '', streak: '' },
  { rank: 5, team: teams[4], points: 68.868, confRecord: '', streak: '' },
  { rank: 6, team: teams[5], points: 68.453, confRecord: '', streak: '' },
  { rank: 7, team: teams[6], points: 66.541, confRecord: '', streak: '' },
  { rank: 8, team: teams[7], points: 63.889, confRecord: '', streak: '' },
  { rank: 9, team: teams[8], points: 60.165, confRecord: '', streak: '' },
  { rank: 10, team: teams[9], points: 57.762, confRecord: '', streak: '' },
  { rank: 11, team: teams[10], points: 54.712, confRecord: '', streak: '' },
  { rank: 12, team: teams[11], points: 52.834, confRecord: '', streak: '' },
  { rank: 13, team: teams[12], points: 49.915, confRecord: '', streak: '' },
  { rank: 14, team: teams[13], points: 46.98, confRecord: '', streak: '' },
  { rank: 15, team: teams[14], points: 46.642, confRecord: '', streak: '' },
  { rank: 16, team: teams[15], points: 44.078, confRecord: '', streak: '' },
  { rank: 17, team: teams[16], points: 39.433, confRecord: '', streak: '' },
  { rank: 18, team: teams[17], points: 39.42, confRecord: '', streak: '' },
  { rank: 19, team: teams[18], points: 39.366, confRecord: '', streak: '' },
  { rank: 20, team: teams[19], points: 37.036, confRecord: '', streak: '' },
  { rank: 21, team: teams[20], points: 36.211, confRecord: '', streak: '' },
  { rank: 22, team: teams[21], points: 36.18, confRecord: '', streak: '' },
  { rank: 23, team: teams[22], points: 35.666, confRecord: '', streak: '' },
  { rank: 24, team: teams[23], points: 35.204, confRecord: '', streak: '' },
  { rank: 25, team: teams[24], points: 34.872, confRecord: '', streak: '' },
]
