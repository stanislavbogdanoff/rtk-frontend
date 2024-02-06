import "./App.css";
import {
  useDeleteUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
} from "./redux/api/userApi";

function App() {
  const {
    data: usersData,
    isLoading: usersIsLoading,
    isFetching: usersIsFetching,
    isError: usersError,
  } = useGetUsersQuery();

  const {
    data: oneUserData,
    isLoading: oneUserIsLoading,
    isFetching: oneUserIsFetching,
  } = useGetUserQuery("65c0fb4a19ffcc6c0b17525f");

  console.log(usersData, usersIsLoading, usersIsFetching, usersError);

  // const user = {
  //   name: "sdf",
  //   age: 123,
  //   jobTitle: "asdf"
  // }

  // const patchUserData = {
  //   id: "sdfsdf",
  //   userData: {
  //     name: "sdf",
  //     age: 123,
  //     jobTitle: "asdf"
  //   }
  // }

  const [
    deleteUser,
    {
      isLoading: deletingUser,
      isSuccess: userDeleted,
      isError: userDeleteError,
    },
  ] = useDeleteUserMutation();

  // if (usersIsFetching || usersIsLoading) {
  //   return <h1>Users data is still loading</h1>;
  // }

  return (
    <>
      <h1>RTK Query Backend Integration</h1>
      {/* <h2>One User Data: </h2>
      {oneUserIsLoading || oneUserIsFetching ? (
        <div>One user data is loading</div>
      ) : (
        <div className="user-card">
          <p>{oneUserData?.name}</p>
          <p>{oneUserData?.age}</p>
          <p>{oneUserData?.jobTitle}</p>
        </div>
      )} */}
      <h2>All Users Data:</h2>
      {usersData?.length > 0 ? (
        usersData?.map((user) => {
          return (
            <div key={user._id} className="user-card">
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.jobTitle}</p>
              <button
                onClick={() => deleteUser(user._id)}
                disabled={deletingUser}
              >
                X
              </button>
            </div>
          );
        })
      ) : (
        <div>0 users found</div>
      )}
    </>
  );
}

export default App;
