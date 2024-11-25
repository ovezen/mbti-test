import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <>
      {/* header 들어갈 곳 */}
      <div className="w-full flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
          <AuthForm mode="login" />
          <div className="mt-4">
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
