interface Props {
  onLogOut: () => void;
}

function Profile({ onLogOut }: Props) {
  return (
    <>
      <div className="flex h-full">
        <aside className="sticky top-16 bg-gray-200 h-full w-56">
          <div>
            <nav>
              <div className="text-xl">Settings</div>
              <div className="text-xl">Settings</div>
              <div className="text-xl">Settings</div>
              <div className="text-xl">Settings</div>
              <div className="text-xl">Settings</div>
              <div className="text-xl">Settings</div>
            </nav>
          </div>
        </aside>

        <div>
          <div>Profile</div>
          <div>
            <button onClick={onLogOut}>Log out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
