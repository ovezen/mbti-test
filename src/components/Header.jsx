import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";
import LogoutNav from "./LogoutLav";

const Header = () => {
  // 로컬 스토리지에서 사용자 정보 확인
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user; // user 데이터

  return (
    <>
      <header className="bg-primary-color p-4 shadow-md">
        <div>
          <div>
            <Link to="/" className="text-lg font-semibold">
              Home
            </Link>
          </div>
          <div>{isLoggedIn ? <LoginNav /> : <LogoutNav />}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
