import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, currentUserId, onUpdate, onDelete }) => {
  
  // tutoring 1) visibility가 true인 결과물만 필터링해주기
  // tutoring 2) 현재 사용자의 항목은 visibility가 false여도 표시되도록 하기 : 필터링 조건에 currentUserId 추가
  const visibleResults = results.filter((result) => result.visibility || result.userId === currentUserId);
  
  return (
    <div className="bg-white max-w-2xl w-full mt-10 mb-10 space-y-4">
      {visibleResults.map((result) => (
        <TestResultItem
          key={result.id}
          results={result}
          currentUserId={currentUserId}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TestResultList;