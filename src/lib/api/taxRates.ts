export const getTaxRate = async () => {
  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/salestax?zip_code=${92010}`, // TODO: replace with dynamic zip code
      { headers: { "X-Api-Key": "tg3KBYZ+M87FjlA12KzcLQ==lo48TER6z1c3aY9D" } }
    );
    if (res.ok) {
      const data = await res.json();
      return +data[0].state_rate;
    } else throw new Error("Failed to fetch tax rate from API");
  } catch (err) {
    console.error(err);
  }
  return null;
};
