
export type User = {
  id: number;
  username: string;
  password: string;
  grade: 'admin' | 'modo' | 'user';
};

export const users: User[] = [
  { id: 1, username: 'DayDay', password: 'motdepasse123', grade: 'admin' },
  { id: 2, username: 'Artiste42', password: 'ulmartiste', grade: 'user' },
  { id: 3, username: 'ModoTest', password: 'modopass', grade: 'modo' },
];
