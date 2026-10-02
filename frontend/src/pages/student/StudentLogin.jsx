import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getStudentAccounts } from '../../utils/studentAuth';

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const [success, setSuccess] = useState(
    location.state?.registered ? 'Account created. Sign in with your new credentials.' : ''
  );

  const submit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const account = getStudentAccounts().find(
      (student) => student.email === email.trim().toLowerCase() && student.password === password
    );

    if (!account) {
      setError('No matching student account. Check your details or register first.');
      return;
    }

    sessionStorage.setItem('orbit-student-session', JSON.stringify({
      name: account.name,
      email: account.email,
    }));
    setSuccess(`Welcome back, ${account.name}.`);
  };

  return (
    <div className="admin-login student-auth section-black">
      <form onSubmit={submit}>
        <span className="eyebrow">ORBIT / STUDENT</span>
        <h1>WELCOME BACK.</h1>
        <p>Sign in to your student account.</p>

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
            autoComplete="current-password"
            required
          />
        </label>

        {error && <div className="form-error" role="alert">{error}</div>}
        {success && <div className="form-success" role="status">{success}</div>}

        <button type="submit">STUDENT LOGIN <span>↗</span></button>

        <div className="auth-links">
          <span>New to Orbit?</span>
          <Link to="/student/register">Create an account</Link>
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