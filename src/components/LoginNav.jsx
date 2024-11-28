import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const LoggedInNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   toast.success("로그아웃이 완료되었습니다.");
  //   navigate("/login");
  // };

  return (
    <div className="space-x-4">
      <Link
        to="/profile"
        className="text-white hover:text-red-600 font-semibold text-lg"
      >
        프로필
      </Link>
      <Link
        to="/test"
        className="text-white hover:text-red-600 font-semibold text-lg"
      >
        테스트
      </Link>
      <Link
        to="/result"
        className="text-white hover:text-red-600 font-semibold text-lg"
      >
        결과 보기
      </Link>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600"
      >
        로그아웃
      </button>
    </div>
  );
};

export default LoggedInNav;
