import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoggedInNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // 사용자 정보 삭제
    localStorage.removeItem("token"); // 사용자 정보 삭제
    toast.success("로그아웃이 완료되었습니다.");
    navigate("/login");
  };

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
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600"
      >
        로그아웃
      </button>
    </div>
  );
};

export default LoggedInNav;
