import { Link } from "react-router-dom";

interface Props {
  loggedIn: boolean;
  handleStartForFree: () => void;
}

function Header({ loggedIn, handleStartForFree }: Props) {
  return (
    <header className="w-full shadow-md sticky top-0 px-8 py-3 bg-white z-10">
      <div className="flex justify-between items-center">
        <div className="flex">
          <nav className="flex gap-[7rem]">
            <div className="text-2xl cursor-pointer m-auto">
              <Link to="">Home</Link>
            </div>
            <div className="text-2xl cursor-pointer m-auto">
              <Link to="features">Features</Link>
            </div>
            <div className="text-2xl cursor-pointer m-auto">
              <Link to="tutorials">Tutorials</Link>
            </div>
            <div className="text-2xl cursor-pointer m-auto">
              <Link to="courses">Courses</Link>
            </div>
          </nav>
        </div>

        <div className="flex gap-7">
          {loggedIn ? (
            <button className="px-2 py-1 rounded-md border bg-gray-100 border-gray-300">
              <Link to="profile">Profile</Link>
            </button>
          ) : (
            <button className="px-2 py-1 rounded-md border bg-gray-100 border-gray-300">
              <Link to="login">Log in</Link>
            </button>
          )}
          <button
            className="px-2 py-1 rounded-md bg-blue-500 text-white"
            onClick={handleStartForFree}
          >
            Start for free
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
