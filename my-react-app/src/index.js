const API = import.meta.env.VITE_API_URL;

export const computers = async () => {
  const res = await fetch(`${API}/api/computers`);
  return await res.json();
};

export const Order = async (id) => {
  const res = await fetch(`${API}/api/computers/${id}`);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return data;
};

export const postorders = async (form) => {
  const res = await fetch(`${API}/api/computers/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

export const userOrders = async () => {
  const res = await fetch(`${API}/api/computers/orders/userOrders`);
  return await res.json();
};
