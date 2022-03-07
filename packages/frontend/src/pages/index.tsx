import React, { Component, ReactNode } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import CharacterList from '../components/CharacterList/CharacterList';

export default class Index extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <Header text={'In a galaxy far far away...'} />
        <CharacterList />
      </Layout>
    );
  }
}
