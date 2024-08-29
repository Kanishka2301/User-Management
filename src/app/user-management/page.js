import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
async function UserMgmt() {
  const getListOfUsers = await fetchUsersAction();

  console.log(getListOfUsers);

  return (
    <div className="p-20 max-w-6xl">
      <div classNmae="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cos-3 gap-5">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem) => (
            <SingleUserCard user={userItem} />
          ))
        ) : (
          <h3>No users found! Please create one</h3>
        )}
      </div>
    </div>
  );
}

export default UserMgmt;
