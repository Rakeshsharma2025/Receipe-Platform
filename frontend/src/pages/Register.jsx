import React from 'react';

const Register = () => {
  return (
    <div className="container">

      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
