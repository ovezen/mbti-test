import TestResultList from "../components/TestResultList";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";

const TestResultPage = () => {
  const [results, setResults] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const response = await getTestResults();
        setResults(response)
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestResults();
  }, []);

  return (
    <>
      <Header />
      <div>
        TestResultPage
        <TestResultList
          results={results}
          currentUserId={user?.userId} />
      </div>
    </>
  );
};

export default TestResultPage;
