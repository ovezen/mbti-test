import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, currentuserId }) => {
  return (
    <div>
      {results.map((result) => (
        <TestResultItem
          key={result.id}
          results={result}
          currentuserId={currentuserId}
        />
      ))}
    </div>
  );
};

export default TestResultList;
