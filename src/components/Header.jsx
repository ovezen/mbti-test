import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
      <header>
        <a href="/">홈</a>
        <a href="/profile">프로필</a>
        <a href="/test">테스트</a>
        <a href="/results">결과 보기</a>
        <button>로그아웃</button>
      </header>
      <main>
        {/* 자식 컴포넌트를 렌더링할 outlet */}
        <Outlet />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default LayOut;
