import * as React from "react";
import { useNavigate } from "react-router";
import Layout from "./Layout";
export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");

  function handleSubmit() {
    if (username) {
      navigate(`/chat/${username}`);
    }
  }

  return (
    <Layout>
      <form>
        <div>
          <label htmlFor="username">
            Type the username you'll use in the chat
          </label>
          <input
            id="username"
            type="text"
            placeholder="Your name or nickname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <div></div>
          <div>
            <button
             type="button"
              onClick={handleSubmit}
            >
              Log in the chat
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
