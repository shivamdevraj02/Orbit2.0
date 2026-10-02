import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getStudentAccounts, saveStudentAccounts } from '../../utils/studentAuth';

export default function StudentRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const accounts = getStudentAccounts();

    if (accounts.some((student) => student.email === normalizedEmail)) {
      setError('An account with this email already exists in this browser tab.');
      return;
    }

    saveStudentAccounts([
      ...accounts,
      { name: name.trim(), email: normalizedEmail, password },
    ]);
    navigate('/student/login', { state: { registered: true } });
  };

  return (
    <div className="admin-login student-auth section-black">
      <form onSubmit={submit}>
        <span className="eyebrow">ORBIT / STUDENT</span>
        <h1>JOIN THE ORBIT.</h1>
        <p>Create a student account to get started.</p>

        <label>
          FULL NAME
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
          />
        </label>

        <label>
          EMAIL
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label>
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
          />
        </label>

        <label>
          CONFIRM PASSWORD
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
          />
        </label>

        {error && <div className="form-error" role="alert">{error}</div>}

        <button type="submit">CREATE ACCOUNT <span>↗</span></button>

        <div className="auth-links">
          <span>Already registered?</span>
          <Link to="/student/login">Student login</Link>
          <span>·</span>
          <Link to="/admin/login">Admin login</Link>
        </div>

        <small className="auth-notice">
          Demo only. Student accounts are stored in this browser tab and are not secure.
        </small>
      </form>
    </div>
  );
}