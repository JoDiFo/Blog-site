import { Link } from "react-router-dom";

type HeaderElement = {
  id: string;
  linkName: string;
  linkTo: string;
  isActive: boolean;
};

interface Props {
  loggedIn: boolean;
  handleStartForFree: () => void;
  headerElements: HeaderElement[];
}

const HeaderElements = (headerElements: HeaderElement[]) => {
  return headerElements.map(
    (item) =>
      item.isActive && (
        <div key={item.id} className="text-2xl cursor-pointer m-auto">
          <Link to={item.linkTo}>{item.linkName}</Link>
        </div>
      )
  );
};

function Header({ loggedIn, handleStartForFree, headerElements }: Props) {
  return (
    <header className="w-full shadow-md sticky top-0 px-8 py-3 bg-white z-10">
      <div className="flex justify-between items-center">
        <div className="flex">
          <nav className="flex gap-[7rem]">
            {HeaderElements(headerElements)}
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
