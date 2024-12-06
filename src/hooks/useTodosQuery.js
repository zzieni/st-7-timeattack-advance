import { todoApi } from '../api/todos';

function useTodosQuery() {
  const fetchData = async () => {
    const response = await todoApi.get('/todos');
    return response.data;
  };

  const fetchDetailData = async ({ queryKey }) => {
    const [, id] = queryKey;

    const response = await todoApi(`/todos/${id}`);
    return response.data;
  };

  return { fetchData, fetchDetailData };
}

export default useTodosQuery;
