export const fetchUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.map((user) => ({
      ...user,
      password: "1234",
    }));
  } catch (err) {
    console.error("Error fetching users:", err.message);
    return [];
  }
};
