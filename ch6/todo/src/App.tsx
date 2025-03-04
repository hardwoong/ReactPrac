import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책 읽기',
    'dkdk'
  ]);
  const [toDo, setToDo] = useState('');

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
    </Container>
  );
}

export default App;
