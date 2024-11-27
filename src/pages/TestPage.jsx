import { useEffect, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { getProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getProfile();
        setUser(fetchedUser);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    try {
      const mbtiDescription = mbtiDescriptions[mbtiResult];
      await createTestResult({
        userId: user?.id,
        nickname: user.nickname,
        result: mbtiResult,
        description: mbtiDescription,
        visibility: true,
        createdAt: new Date().toISOString(),
      });
      toast.success("결과가 저장되었습니다.");
      setResult(mbtiResult);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/result");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
