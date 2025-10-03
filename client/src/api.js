const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    throw new Error("Login failed");
  }
  return res.json();
}

export async function signupUser(name, email, password) {
  const res = await fetch(`${API_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) {
    throw new Error("Signup failed");
  }
  return res.json();
}


export async function getTasks(token) {
  const res = await fetch(`${API_URL}/api/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return res.json();
}
