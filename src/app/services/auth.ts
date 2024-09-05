
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password123";

let isLoggedIn = false;

export async function signIn(username: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        isLoggedIn = true;
        resolve();
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
}

export async function signOut(): Promise<void> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      isLoggedIn = false;
      resolve();
    }, 500);
  });
}

export async function isAuthenticated(): Promise<boolean> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(isLoggedIn);
    }, 500);
  });
}