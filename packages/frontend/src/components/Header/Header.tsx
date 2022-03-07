import React, { Component, ReactNode } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  text: string;
}

export default class Header extends Component<HeaderProps> {
  public render(): ReactNode {
    const { text } = this.props;
    return (
      <div className={styles.wrapper}>
        <span className={styles.text}>{text}</span>
      </div>
    );
  }
}
