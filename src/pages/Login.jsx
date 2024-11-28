import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // 전부 AuthContext에서 가져오면 됨

  const handleLogin = async (formData) => {
    try {
      const { nickname } = await login(formData.userid, formData.password);
      toast.success(`${nickname}님, 환영합니다!`);
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      toast.error("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  }
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-10">
          <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
            로그인
          </h1>
          <AuthForm mode="login" onSubmit={handleLogin} />
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              계정이 없으신가요?{" "}
              <Link to="/signup" className="text-primary-color hover:underline">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
