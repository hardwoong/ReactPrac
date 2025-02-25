import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import { Component } from 'react';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
}

export default App;
