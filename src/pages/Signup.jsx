import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { toast } from "react-toastify";
import Header from "../components/Header";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData.userid, formData.password, formData.nickname);
      toast.success("회원가입 성공! 로그인 해주세요.");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      {/* header 들어갈 곳 */}
      <Header />
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-4xl font-bold text-primary-color mb-6 text-center">
            회원가입
          </h1>
          <AuthForm mode="signup" onSubmit={handleSignup} />
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              이미 계정이 있으신가요?{" "}
              <Link to="/login" className="text-primary-color hover:underline">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
