import { useEffect, useState } from 'react';

const ACCOUNTS_KEY = 'orbit-student-demo-accounts';
const SESSION_KEY = 'orbit-student-session';
export const STUDENT_SESSION_EVENT = 'orbit-student-session-change';

function notifyStudentSession() {
  window.dispatchEvent(new Event(STUDENT_SESSION_EVENT));
}

export function getStudentAccounts() {
  try {
    const accounts = JSON.parse(sessionStorage.getItem(ACCOUNTS_KEY) || '[]');
    return Array.isArray(accounts) ? accounts : [];
  } catch {
    return [];
  }
}

export function saveStudentAccounts(accounts) {
  sessionStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function getStudentSession() {
  try {
    const session = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
    return session?.email ? session : null;
  } catch {
    return null;
  }
}

export function setStudentSession(session) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  notifyStudentSession();
}

export function clearStudentSession() {
  sessionStorage.removeItem(SESSION_KEY);
  notifyStudentSession();
}

export function useStudentSession() {
  const [student, setStudent] = useState(getStudentSession);

  useEffect(() => {
    const sync = () => setStudent(getStudentSession());
    window.addEventListener(STUDENT_SESSION_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(STUDENT_SESSION_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return student;
}