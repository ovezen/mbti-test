import { updateTestResultVisibility } from "../api/testResults";

const TestResultItem = ({ results, onUpdate, onDelete, currentUserId }) => {
  const { id, visibility } = results;

  const toggleVisibilityHandler = async () => {
    try {
      console.log("Current visibility:", visibility);
      const updatedResult = await updateTestResultVisibility(id, !visibility);
      console.log("API 응답 : updatedResult, ", updatedResult)
      onUpdate(id, updatedResult);
    } catch (error) {
      console.error("toggling visibility Error:", error);
    }
  };

  console.log("Result userId:", results.userId);
  console.log("Current userId:", currentUserId);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
        <h4 className="text-xl font-semibold">{results.nickname}</h4>
        <p className="text-sm text-gray-400">{results.createdAt}</p>
      </div>
      <p className="text-2xl font-bold text-yellow-400 mb-4">
        {results.nickname}
      </p>
      <p className="text-base text-gray-300 mb-4">{results.description}</p>
      {results.userId === currentUserId && (
        <div className="flex justify-end space-x-4">
          <button
            onClick={toggleVisibilityHandler}
            className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
          >
            {visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
                  <button onClick={() => onDelete(results.id)} className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition">
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;

// TODO
// 1) createdAt