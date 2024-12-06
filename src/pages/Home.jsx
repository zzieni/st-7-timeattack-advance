// import { useState, useEffect } from "react";
// import { todoApi } from "../api/todos";
import { useQuery } from '@tanstack/react-query';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import useTodosQuery from '../hooks/useTodosQuery';

export default function Home() {
  // TODO: 필수: useQuery 로 리팩터링 하세요.
  // TODO: 선택: useQuery 로 리팩터링 후, 커스텀훅 useTodosQuery 로 정리해 보세요.
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await todoApi.get("/todos");
  //     setData(response.data);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { fetchData } = useTodosQuery();
  const { data, error, isPending, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchData,
  });

  if (isPending) {
    return <div style={{ fontSize: 36 }}>로딩중...</div>;
  }

  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <>
      <h2>서버통신 투두리스트 by useState</h2>
      <TodoForm fetchData={refetch} />
      <TodoList todos={data} />
    </>
  );
}
