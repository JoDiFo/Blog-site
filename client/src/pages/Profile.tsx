interface Props {
  onLogOut: () => void;
}

function Profile({ onLogOut }: Props) {
  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-1/3 h-3/4 border rounded-lg flex flex-col justify-evenly items-center shadow-md border-blue-500 px-20">
          <div className="w-fit">
            <h3 className="text-3xl font-bold">Profile</h3>
          </div>

          <div className="w-full flex">
            <input
              type="text"
              className="border rounded-md w-full h-12 text-lg pl-1 border-gray-300 outline-blue-500 bg-gray-100"
              value="Email"
              onChange={(e) => console.log(e)}
            />
            <button className="bg-gray-300 border ml-4 border-gray-600 py-1 px-3 rounded-md">
              Change
            </button>
          </div>

          <div className="w-full flex">
            <input
              type="text"
              className="border rounded-md w-full h-12 text-lg pl-1 border-gray-300 outline-blue-500 bg-gray-100"
              value="Password"
              onChange={(e) => console.log(e)}
            />
            <button className="bg-gray-300 border ml-4 border-gray-600 py-1 px-3 rounded-md">
              Change
            </button>
          </div>

          <div>
            <button
              className="bg-gray-300 border border-gray-600 py-1 px-3 rounded-md"
              onClick={onLogOut}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
