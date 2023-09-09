export const BASE_URL = "https://apidev.kanvas.dev/v2";

export async function login(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      throw new Error(data.errors.message);
    }
    const token = data.token;
    localStorage.setItem("token", token);
  } catch (err) {
    throw new Error(err);
  }
}

export async function register(
  username,
  email,
  password,
  verify_password,
  company
) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        verify_password,
        company,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.errors) {
      throw new Error(data.errors.message);
    }
  } catch (err) {
    console.error("Error during registration:", err);
    throw new Error(err);
  }
}

export async function getAllUsers() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
}
