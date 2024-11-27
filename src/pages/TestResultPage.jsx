import TestResultList from "../components/TestResultList";
import { useEffect, useState } from "react";
import { deleteTestResult, getTestResults } from "../api/testResults";
import { toast } from "react-toastify";

const TestResultPage = () => {
  const [results, setResults] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const response = await getTestResults();
        setResults(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestResults();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTestResult(id);

      setResults((prevResults) => {
        return prevResults.filter((result) => result.id !== id);
      });
      toast.success("삭제되었습니다.");
    } catch (error) {
      toast.error("삭제에 실패했습니다.");
      console.error("삭제 중 오류 발생:", error);
    }
  };

  const handleUpdate = (id, updatedResult) => {
    console.log("업데이트 전 ", results);
    setResults((prevResults) =>
      prevResults.map((result) => (result.id === id ? updatedResult : result))
    );
    console.log("업데이트 후 ", results);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
        <TestResultList
          results={results}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          currentUserId={user?.userId}
        />
      </div>
    </>
  );
};

export default TestResultPage;
