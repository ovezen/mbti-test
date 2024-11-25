import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
    >
      <input
        type="text"
        name="userid"
        value={formData.userid}
        onChange={handleChange}
        placeholder="아이디"
        className="w-full p-4 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        className="w-full p-4 border border-gray-300 rounded-lg"
        required
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          className="w-full p-4 border border-gray-300 rounded-lg"
          required
        />
      )}
      <button type="submit" className="w-full bg-primary-color text-white py-3 rounded-lg hover:bg-secondary-color transition duration-300 hover:text-[#FF5A5F]">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
