// Women's D1 Tennis data — sourced from collegetennisranks.com
// Last updated: April 15, 2026

export const womenTeams = [
  { id: 1,  name: 'Georgia',       conference: 'SEC',     rank: 1,  record: '17-4',  logo: '🐶' },
  { id: 2,  name: 'Texas A&M',     conference: 'SEC',     rank: 2,  record: '20-4',  logo: '👍' },
  { id: 3,  name: 'Auburn',        conference: 'SEC',     rank: 3,  record: '29-3',  logo: '🐅' },
  { id: 4,  name: 'Oklahoma',      conference: 'Big 12',  rank: 4,  record: '23-4',  logo: '🔴' },
  { id: 5,  name: 'Ohio State',    conference: 'Big Ten', rank: 5,  record: '19-3',  logo: '🌰' },
  { id: 6,  name: 'North Carolina',conference: 'ACC',     rank: 6,  record: '23-2',  logo: '🐏' },
  { id: 7,  name: 'Virginia',      conference: 'ACC',     rank: 7,  record: '19-4',  logo: '⚔️' },
  { id: 8,  name: 'Texas',         conference: 'Big 12',  rank: 8,  record: '16-6',  logo: '🤘' },
  { id: 9,  name: 'Pepperdine',    conference: 'WCC',     rank: 9,  record: '15-4',  logo: '🌊' },
  { id: 10, name: 'USC',           conference: 'Big Ten', rank: 10, record: '17-5',  logo: '✌️' },
  { id: 11, name: 'Arizona State', conference: 'Big 12',  rank: 11, record: '19-4',  logo: '😈' },
  { id: 12, name: 'Florida',       conference: 'SEC',     rank: 12, record: '15-6',  logo: '🐊' },
  { id: 13, name: 'NC State',      conference: 'ACC',     rank: 13, record: '19-7',  logo: '🐺' },
  { id: 14, name: 'Vanderbilt',    conference: 'SEC',     rank: 14, record: '19-8',  logo: '⚓' },
  { id: 15, name: 'LSU',           conference: 'SEC',     rank: 15, record: '16-8',  logo: '🐯' },
  { id: 16, name: 'Tennessee',     conference: 'SEC',     rank: 16, record: '13-8',  logo: '🍊' },
  { id: 17, name: 'Michigan',      conference: 'Big Ten', rank: 17, record: '15-6',  logo: '〽️' },
  { id: 18, name: 'Duke',          conference: 'ACC',     rank: 18, record: '17-6',  logo: '😈' },
  { id: 19, name: 'UCLA',          conference: 'Big Ten', rank: 19, record: '13-6',  logo: '🐻' },
  { id: 20, name: 'UCF',           conference: 'Big 12',  rank: 20, record: '18-3',  logo: '⚔️' },
  { id: 21, name: 'California',    conference: 'ACC',     rank: 21, record: '11-6',  logo: '🐻' },
  { id: 22, name: 'Washington',    conference: 'Big Ten', rank: 22, record: '17-3',  logo: '🟣' },
  { id: 23, name: 'TCU',           conference: 'Big 12',  rank: 23, record: '17-4',  logo: '🐸' },
  { id: 24, name: 'Clemson',       conference: 'ACC',     rank: 24, record: '17-7',  logo: '🐯' },
  { id: 25, name: 'SMU',           conference: 'ACC',     rank: 25, record: '15-6',  logo: '🐴' },
]

const womenTeamsByName = Object.fromEntries(womenTeams.map((t) => [t.name, t]))

export function findWomenTeam(name) {
  return womenTeamsByName[name] || { name, rank: null, record: '', logo: '🎾', conference: '' }
}

// ITA Women's D1 Rankings
export const womenStandings = [
  { rank: 1,  team: womenTeams[0],  points: 77.265 },
  { rank: 2,  team: womenTeams[1],  points: 75.074 },
  { rank: 3,  team: womenTeams[2],  points: 73.72  },
  { rank: 4,  team: womenTeams[3],  points: 71.804 },
  { rank: 5,  team: womenTeams[4],  points: 71.558 },
  { rank: 6,  team: womenTeams[5],  points: 70.307 },
  { rank: 7,  team: womenTeams[6],  points: 62.694 },
  { rank: 8,  team: womenTeams[7],  points: 62.303 },
  { rank: 9,  team: womenTeams[8],  points: 57.657 },
  { rank: 10, team: womenTeams[9],  points: 51.989 },
  { rank: 11, team: womenTeams[10], points: 50.078 },
  { rank: 12, team: womenTeams[11], points: 47.515 },
  { rank: 13, team: womenTeams[12], points: 47.291 },
  { rank: 14, team: womenTeams[13], points: 47.034 },
  { rank: 15, team: womenTeams[14], points: 46.528 },
  { rank: 16, team: womenTeams[15], points: 44.445 },
  { rank: 17, team: womenTeams[16], points: 43.497 },
  { rank: 18, team: womenTeams[17], points: 42.476 },
  { rank: 19, team: womenTeams[18], points: 41.937 },
  { rank: 20, team: womenTeams[19], points: 37.463 },
  { rank: 21, team: womenTeams[20], points: 34.724 },
  { rank: 22, team: womenTeams[21], points: 34.245 },
  { rank: 23, team: womenTeams[22], points: 33.047 },
  { rank: 24, team: womenTeams[23], points: 30.541 },
  { rank: 25, team: womenTeams[24], points: 28.958 },
]

// Today's women's matches (April 15, 2026)
export const womenLiveMatches = [
  {
    id: 'w-live-1',
    status: 'scheduled',
    round: 'SEC Regular Season',
    startTime: '7:00 PM ET',
    homeTeam: { name: 'Alabama', rank: 55, record: '12-14', logo: '🐘', conference: 'SEC' },
    awayTeam: { name: 'Mississippi State', rank: 47, record: '15-9', logo: '🐶', conference: 'SEC' },
    teamScore: { home: 0, away: 0 },
    singlesMatches: [],
  },
]

// Completed women's matches today
export const womenTodayResults = [
  { id: 'wt-1', date: 'Apr 15, 2026', round: 'SEC Regular Season',    homeTeam: findWomenTeam('LSU'),         awayTeam: { name: 'Missouri',      rank: null, record: '', logo: '🐯', conference: 'SEC'     }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wt-2', date: 'Apr 15, 2026', round: 'SEC Regular Season',    homeTeam: { name: 'Arkansas', rank: 54, record: '16-9', logo: '🐗', conference: 'SEC' }, awayTeam: { name: 'South Carolina', rank: 27, record: '18-6', logo: '🐔', conference: 'SEC' }, teamScore: { home: 4, away: 3 }, winner: 'home' },
  { id: 'wt-3', date: 'Apr 15, 2026', round: 'Big 12',                homeTeam: { name: 'Texas Tech', rank: 31, record: '17-6', logo: '🔴', conference: 'Big 12' }, awayTeam: { name: 'Houston', rank: 41, record: '16-7', logo: '🔴', conference: 'Big 12' }, teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wt-4', date: 'Apr 15, 2026', round: 'ACC Championship — R1', homeTeam: { name: 'Stanford', rank: 33, record: '14-8', logo: '🌲', conference: 'ACC' }, awayTeam: { name: 'Virginia Tech', rank: null, record: '', logo: '🦃', conference: 'ACC' }, teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'wt-5', date: 'Apr 15, 2026', round: 'Big 12',                homeTeam: { name: 'BYU', rank: 37, record: '15-6', logo: '🔵', conference: 'Big 12' }, awayTeam: { name: 'Utah', rank: 35, record: '16-5', logo: '🔴', conference: 'Big 12' }, teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'wt-6', date: 'Apr 15, 2026', round: 'SEC Regular Season',    homeTeam: { name: 'Ole Miss', rank: 38, record: '16-5', logo: '🔴', conference: 'SEC' }, awayTeam: { name: 'Kentucky', rank: null, record: '', logo: '🐱', conference: 'SEC' }, teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wt-7', date: 'Apr 15, 2026', round: 'ACC Championship — R1', homeTeam: { name: 'Notre Dame', rank: 44, record: '17-7', logo: '☘️', conference: 'ACC' }, awayTeam: { name: 'Boston College', rank: 61, record: '13-10', logo: '🦅', conference: 'ACC' }, teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'wt-8', date: 'Apr 15, 2026', round: 'ACC Championship — R1', homeTeam: { name: 'Wake Forest', rank: 63, record: '12-12', logo: '🎩', conference: 'ACC' }, awayTeam: { name: 'Syracuse', rank: null, record: '', logo: '🟠', conference: 'ACC' }, teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wt-9', date: 'Apr 15, 2026', round: 'ACC Championship — R1', homeTeam: { name: 'Florida State', rank: null, record: '', logo: '🔶', conference: 'ACC' }, awayTeam: { name: 'Georgia Tech', rank: 64, record: '11-12', logo: '🐝', conference: 'ACC' }, teamScore: { home: 4, away: 2 }, winner: 'home' },
]

// Recent women's results — sourced from collegetennisranks.com/schedules/weekbehind/d1w
export const womenRecentResults = [
  // April 12
  { id: 'wr-1',  date: 'Apr 12, 2026', round: 'SEC',     homeTeam: findWomenTeam('Auburn'),        awayTeam: findWomenTeam('Vanderbilt'),                                                                                   teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-2',  date: 'Apr 12, 2026', round: 'Big Ten', homeTeam: findWomenTeam('Ohio State'),    awayTeam: { name: 'Indiana',      rank: 72,  record: '12-8',  logo: '🔴', conference: 'Big Ten' },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-3',  date: 'Apr 12, 2026', round: 'ACC',     homeTeam: findWomenTeam('North Carolina'),awayTeam: { name: 'Florida State',rank: null,record: '',      logo: '🔶', conference: 'ACC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-4',  date: 'Apr 12, 2026', round: 'ACC',     homeTeam: findWomenTeam('Virginia'),      awayTeam: findWomenTeam('NC State'),                                                                                     teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'wr-5',  date: 'Apr 12, 2026', round: 'Big Ten', homeTeam: findWomenTeam('USC'),           awayTeam: { name: 'Illinois',     rank: 58,  record: '14-9',  logo: '🔶', conference: 'Big Ten' },                     teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wr-6',  date: 'Apr 12, 2026', round: 'SEC',     homeTeam: findWomenTeam('Florida'),       awayTeam: { name: 'Missouri',     rank: null,record: '',      logo: '🐯', conference: 'SEC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-7',  date: 'Apr 12, 2026', round: 'Big Ten', homeTeam: findWomenTeam('Michigan'),      awayTeam: { name: 'Rutgers',      rank: null,record: '',      logo: '🔴', conference: 'Big Ten' },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-8',  date: 'Apr 12, 2026', round: 'ACC',     homeTeam: findWomenTeam('Duke'),          awayTeam: { name: 'Miami (FL)',   rank: 32,  record: '16-7',  logo: '🙌', conference: 'ACC'    },                     teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'wr-9',  date: 'Apr 12, 2026', round: 'Big Ten', homeTeam: findWomenTeam('UCLA'),          awayTeam: { name: 'Northwestern', rank: 57,  record: '14-8',  logo: '🟣', conference: 'Big Ten' },                     teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wr-10', date: 'Apr 12, 2026', round: 'Big 12',  homeTeam: findWomenTeam('UCF'),           awayTeam: { name: 'West Virginia',rank: null,record: '',      logo: '🔵', conference: 'Big 12' },                     teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'wr-11', date: 'Apr 12, 2026', round: 'Big Ten', homeTeam: findWomenTeam('Washington'),    awayTeam: { name: 'Wisconsin',    rank: 29,  record: '16-6',  logo: '🦡', conference: 'Big Ten' },                     teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wr-12', date: 'Apr 12, 2026', round: 'ACC',     homeTeam: findWomenTeam('Clemson'),       awayTeam: { name: 'Syracuse',     rank: null,record: '',      logo: '🟠', conference: 'ACC'    },                     teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wr-13', date: 'Apr 12, 2026', round: 'ACC',     homeTeam: findWomenTeam('SMU'),           awayTeam: findWomenTeam('Stanford'),                                                                                     teamScore: { home: 4, away: 1 }, winner: 'home' },
  // April 11
  { id: 'wr-14', date: 'Apr 11, 2026', round: 'SEC',     homeTeam: findWomenTeam('Georgia'),       awayTeam: { name: 'Mississippi State', rank: 47, record: '15-9', logo: '🐶', conference: 'SEC' },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-15', date: 'Apr 11, 2026', round: 'SEC',     homeTeam: findWomenTeam('Texas A&M'),     awayTeam: { name: 'Arkansas',     rank: 54,  record: '16-9',  logo: '🐗', conference: 'SEC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-16', date: 'Apr 11, 2026', round: 'Big 12',  homeTeam: findWomenTeam('Oklahoma'),      awayTeam: findWomenTeam('Texas'),                                                                                        teamScore: { home: 4, away: 2 }, winner: 'home' },
  { id: 'wr-17', date: 'Apr 11, 2026', round: 'SEC',     homeTeam: findWomenTeam('Tennessee'),     awayTeam: findWomenTeam('LSU'),                                                                                          teamScore: { home: 4, away: 3 }, winner: 'home' },
  { id: 'wr-18', date: 'Apr 11, 2026', round: 'Big 12',  homeTeam: findWomenTeam('Arizona State'), awayTeam: { name: 'Utah',         rank: 35,  record: '16-5',  logo: '🔴', conference: 'Big 12' },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-19', date: 'Apr 11, 2026', round: 'Big Ten', homeTeam: findWomenTeam('Michigan'),      awayTeam: { name: 'Maryland',     rank: 45,  record: '15-7',  logo: '🐢', conference: 'Big Ten' },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-20', date: 'Apr 11, 2026', round: 'ACC',     homeTeam: findWomenTeam('Virginia'),      awayTeam: findWomenTeam('NC State'),                                                                                     teamScore: { home: 4, away: 2 }, winner: 'home' },
  // April 10
  { id: 'wr-21', date: 'Apr 10, 2026', round: 'SEC',     homeTeam: findWomenTeam('Auburn'),        awayTeam: { name: 'Missouri',     rank: null,record: '',      logo: '🐯', conference: 'SEC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-22', date: 'Apr 10, 2026', round: 'ACC',     homeTeam: findWomenTeam('North Carolina'),awayTeam: { name: 'Miami (FL)',   rank: 32,  record: '16-7',  logo: '🙌', conference: 'ACC'    },                     teamScore: { home: 4, away: 3 }, winner: 'home' },
  { id: 'wr-23', date: 'Apr 10, 2026', round: 'ACC',     homeTeam: findWomenTeam('Duke'),          awayTeam: { name: 'Florida State',rank: null,record: '',      logo: '🔶', conference: 'ACC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-24', date: 'Apr 10, 2026', round: 'SEC',     homeTeam: findWomenTeam('Florida'),       awayTeam: findWomenTeam('Vanderbilt'),                                                                                   teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-25', date: 'Apr 10, 2026', round: 'Big Ten', homeTeam: findWomenTeam('USC'),           awayTeam: { name: 'Northwestern', rank: 57,  record: '14-8',  logo: '🟣', conference: 'Big Ten' },                     teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wr-26', date: 'Apr 10, 2026', round: 'ACC',     homeTeam: findWomenTeam('Virginia'),      awayTeam: { name: 'Wake Forest',  rank: 63,  record: '12-12', logo: '🎩', conference: 'ACC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  // April 9
  { id: 'wr-27', date: 'Apr 9, 2026',  round: 'SEC',     homeTeam: findWomenTeam('Georgia'),       awayTeam: { name: 'Alabama',      rank: 55,  record: '12-14', logo: '🐘', conference: 'SEC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-28', date: 'Apr 9, 2026',  round: 'Big 12',  homeTeam: findWomenTeam('Oklahoma'),      awayTeam: findWomenTeam('Texas A&M'),                                                                                    teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wr-29', date: 'Apr 9, 2026',  round: 'Big 12',  homeTeam: findWomenTeam('Texas'),         awayTeam: { name: 'Arkansas',     rank: 54,  record: '16-9',  logo: '🐗', conference: 'SEC'    },                     teamScore: { home: 4, away: 0 }, winner: 'home' },
  { id: 'wr-30', date: 'Apr 9, 2026',  round: 'SEC',     homeTeam: findWomenTeam('LSU'),           awayTeam: { name: 'Kentucky',     rank: null,record: '',      logo: '🐱', conference: 'SEC'    },                     teamScore: { home: 4, away: 1 }, winner: 'home' },
  { id: 'wr-31', date: 'Apr 9, 2026',  round: 'SEC',     homeTeam: findWomenTeam('Tennessee'),     awayTeam: { name: 'Ole Miss',     rank: 38,  record: '16-5',  logo: '🔴', conference: 'SEC'    },                     teamScore: { home: 4, away: 1 }, winner: 'home' },
]
