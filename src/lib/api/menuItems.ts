export const getMenuItems = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/menuitems");
    if (res.ok) {
      const data = await res.json();
      return data;
    } else throw new Error("Failed to fetch menuItems from API");
  } catch (err) {
    console.error(err);
  }
  return null;
};
export const menuItems = await getMenuItems();
