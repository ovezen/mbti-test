import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, currentUserId, onUpdate, onDelete }) => {
  // tutoring 1) visibility가 true인 결과물만 필터링해주기
  // tutoring 2) 현재 사용자의 항목은 visibility가 false여도 표시되도록 하기 : 필터링 조건에 currentUserId 추가
  // 있는대로 냅다 렌더링해놓고 왜 비공개 작동 안하냐고 물어보면 바보지요? 바보가되지맙시다제발기쁨튜터님만세
  // 오늘 하루종일 커밋 한번도안한거 실화임? 반성좀

  const visibleResults = results.filter((result) => result.visibility || result.userId === currentUserId);
  
  return (
    <div>
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