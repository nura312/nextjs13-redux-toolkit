"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { addUser, deleteUser, getListUser } from "./accountAPI";
import { Button } from "antd";
import Input from "antd/es/input/Input";
import Grid from "antd/es/card/Grid";
interface Props {
  listUsers: Array<any>;
}
const Account = ({ listUsers }: Props) => {
  const router = useRouter();

  const [dataAddUser, setDataAddUser] = useState({
    name: "string",
    description: "string",
    age: 0,
  });
  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    router.refresh();
  };
  const handleAddUser = async () => {
    await addUser(dataAddUser.name, dataAddUser.description, dataAddUser.age);
    router.refresh();
  };
  return (
    <div className="h-full w-full ">
      <Button
        className="mx-auto my-4 flex justify-center"
        onClick={async () => await getListUser()}
      >
        Get User
      </Button>
      <Grid className="mx-auto w-24 my-4">
        <Input
          placeholder="Name"
          onChange={(e) =>
            setDataAddUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Input
          placeholder="Description"
          onChange={(e) =>
            setDataAddUser((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <Input
          placeholder="Age"
          type="number"
          onChange={(e) =>
            setDataAddUser((prev) => ({ ...prev, age: Number(e.target.value) }))
          }
        />
        <Button className="flex justify-center mt-2" onClick={handleAddUser}>
          Add User
        </Button>
      </Grid>
      <h1 className="text-center">List User</h1>
      <table className="mx-auto w-3/4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers?.map((user: any) => (
            <tr className="text-center" key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>
                <p
                  className="cursor-pointer"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Account;
