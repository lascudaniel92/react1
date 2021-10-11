export function Login() {
  async function sendLoginRequest(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = await fetch(`http://localhost:3001/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => res.json());

    if (data.accessToken) {
      // Login successful
      localStorage.setItem('accessToken', data.accessToken);
    }

    if (data.user.id) {
      localStorage.setItem('userId', data.user.id);
    }

    window.location = '/todos';
  }

  return (
    <form onSubmit={sendLoginRequest}>
      <h1>Register</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          autoComplete="off"
          type="email"
          name="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" name="password" className="form-control" id="password" aria-describedby="emailHelp" />

        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>

        <button type="submit">Login</button>
      </div>
    </form>
  );
}
