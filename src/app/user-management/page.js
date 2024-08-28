import AddNewUser from "@/components/add-new-user";
function UserMgmt() {
  return (
    <div className="p-20 max-w-6xl">
      <div classNmae="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
    </div>
  );
}

export default UserMgmt;
