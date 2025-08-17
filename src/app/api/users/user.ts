export async function getCurrentUser() {
  const res = await fetch(`${process.env.API_URL}/users/me`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
}
