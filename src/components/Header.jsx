import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";
import LogoutNav from "./LogoutLav";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  // 로컬 스토리지에서 사용자 정보 확인
  // const user = JSON.parse(localStorage.getItem("user"));
  // const isLoggedIn = !!user; // user 데이터
  // ----- 이제 로컬스토리지에서 불러올 필요 없음 -----//

  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className="bg-primary-color p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div>
            <Link to="/" className="text-lg font-semibold hover:text-red-600">
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
