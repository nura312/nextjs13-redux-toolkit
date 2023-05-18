export const HEADER = {
  "ngrok-skip-browser-warning": "true",
  "Content-Type": "application/json",
};
export const URL =
  "https://e808-2402-800-63af-f6f4-dc0-e0a6-4bb2-5e6d.ngrok-free.app";

// -----------------------------------------------------------------------------

export const getListUser = async () => {
  const url = `${URL}/api/Cus/Get`;
  const header = {
    headers: HEADER,
    cache: "no-store",
  };
  ("use server");
  const response = await fetch(url, header);
  const data = await response.json();
  return data;
};

export const deleteUser = async (id: number) => {
  const url = `${URL}/api/Cus/Delete?id=${id}`;
  const header = {
    method: "DELETE",
    headers: HEADER,
    cache: "no-store",
  };
  ("use server");
  const response = await fetch(url, header);
  const data = await response.text();
};
export const addUser = async (name: string, desc: string, age: number) => {
  const body = {
    name: name,
    description: desc,
    age: age,
  };
  const url = `${URL}/api/Cus/AddCus`;
  const header = {
    method: "POST",
    headers: HEADER,
    cache: "no-store",
    body: JSON.stringify(body),
  };
  ("use server");
  const response = await fetch(url, header);
  const data = await response.text();

  return data;
};
