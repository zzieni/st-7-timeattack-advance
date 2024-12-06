import { todoApi } from '../api/todos';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useTodoMutation() {
  const queryClient = useQueryClient();

  const addMutaion = useMutation({
    mutationFn: (newTodo) => todoApi.post('/todos', newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
  return { addMutaion };
}

export default useTodoMutation;
