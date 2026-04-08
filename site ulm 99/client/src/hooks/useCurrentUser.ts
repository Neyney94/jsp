

import { useState } from 'react';
import { User, users } from '../mock/users';

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function login(username: string, password: string): boolean {
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return false;

    
    const adminId = localStorage.getItem('ulm_admin_id');
    if (!adminId) {
      
      localStorage.setItem('ulm_admin_id', String(found.id));
      setCurrentUser({ ...found, grade: 'admin' });
    } else if (String(found.id) === adminId) {
      
      setCurrentUser({ ...found, grade: 'admin' });
    } else {
    
      setCurrentUser(found);
    }
    return true;
  }

  function logout() {
    setCurrentUser(null);
  }

  function hasGrade(grade: User['grade']) {
    return currentUser?.grade === grade;
  }

  return { currentUser, login, logout, hasGrade };
}
