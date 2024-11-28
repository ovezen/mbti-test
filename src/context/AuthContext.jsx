import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { login as apiLogin } from "../api/auth"; // import

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading 상태 관리하기

  // login
  const login = async (userid, password) => {
    try {
      const { userId, nickname, token } = await apiLogin(userid, password);

      setIsLoggedIn(true);
      setUser({ userId, nickname }); // 상태 업데이트하기

      return { userId, nickname, token }; // token도 반환
    } catch (error) {
      console.error("Login failed in AuthContext:", error);
      throw error;
    }
  };

  // logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("로그아웃되었습니다.");
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
    setLoading(false); // 초기화 완료
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// TODO
// 로그인해도 <Header> 리렌더링되지 않는 문제
// 방법 1) 로그인 정보를 전역적으로 관리: contextAPI 미리 할걸.. 다시 공부하기
// 컴포넌트에서 로직 불러오기
// useAuth로 로그인 여부에 대한 정보 받아오기
// 어렵다..
// export 여러번하면 느려진다고?
