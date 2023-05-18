import Account from "@/Components/Account";
import { getListUser } from "@/Components/Account/accountAPI";

export default async function Home() {
  const listUsers = await getListUser();

  return (
    <main>
      <Account listUsers={listUsers} />
    </main>
  );
}
