/* eslint-disable prefer-const */
import React, { Component, ReactNode } from 'react';
import UnderConstruction from './under_construction.svg';
import Cancel from './undraw_cancel.svg';
import styles from './CharacterList.module.scss';
import ReactPaginate from 'react-paginate';

interface Character {
  id: string;
  name: string;
  bmi: number;
}

interface CharacterListState {
  isLoading: boolean;
  data?: Array<Character>;
  error?: { statusCode?: number; message: string };
  perPage: number;
  page: number;
  pages: number;
}

export default class CharacterList extends Component<
  unknown,
  CharacterListState
> {
  state: CharacterListState = {
    isLoading: true,
    perPage: 20,
    page: 0,
    pages: 0,
  };

  public componentDidMount(): void {
    fetch('http://localhost:3000/top-fat-characters').then(
      async (data) => {
        if (data.ok) {
          const newdata = await data.json();
          console.log(newdata);
          const list = newdata.flat(1);

          let newList = [];

          list.forEach((element, index) => {
            const id = index;
            const name = element.name;
            let bmi: number;
            if (element.mass !== 'unknown' && element.height !== 'unknown') {
              if (element.mass.includes(',')) {
                element.mass = element.mass.replace(/,/g, '');
              }
              bmi = element.mass / Math.pow(element.height / 100, 2);
            } else {
              bmi = 0;
            }
            const object = { id, name, bmi };

            newList.push(object);
          });
          newList.sort((a, b) => (a.bmi > b.bmi ? -1 : 1));
          const { perPage } = this.state;

          this.setState({
            isLoading: false,
            data: newList,
            pages: Math.floor(list.length / perPage),
          });
        } else {
          this.setState({
            isLoading: false,
            error: {
              message: await data.json(),
              statusCode: data.status,
            },
          });
        }
      },
      (error) => {
        this.setState({
          isLoading: false,
          error: {
            message: error.message,
          },
        });
      }
    );
  }

  public handlePageClick: void = (event) => {
    let page = event.selected;
    this.setState({ page });
  };

  public render(): ReactNode {
    return (
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <span>List of top 20 of the fattest characters in the galaxy</span>
        </div>
        <div>{this.renderList()}</div>
      </div>
    );
  }

  renderList = (): ReactNode => {
    const { isLoading, data, error } = this.state;

    if (isLoading && data === undefined && error === undefined) {
      return this.renderListLoading();
    } else if (data) {
      return this.renderListData();
    } else if (error) {
      return this.renderListError();
    } else {
      // UNREACHABLE
      return this.renderListLoading();
    }
  };

  renderListLoading = (): ReactNode => {
    return (
      <div className={styles.infoWrapper}>
        <span className={styles.infoText}>Loading...</span>
      </div>
    );
  };

  renderListError = (): ReactNode => {
    const { error } = this.state;

    if (error && error.statusCode === 501) {
      return (
        <div className={styles.infoWrapper}>
          <span className={styles.infoText}>{error.message}</span>
          <UnderConstruction />
          <span className={styles.descriptionText}>
            Your Mission: Fix this list so that it contains the top 20 fattest
            star wars characters!
          </span>
        </div>
      );
    }

    if (error && error.message === 'Failed to fetch') {
      return (
        <div className={styles.infoWrapper}>
          <span className={styles.infoText}>
            Could not contact backend. Is your service up and running, or
            perhaps the code is broken?
          </span>
          <Cancel />
          <span className={styles.descriptionText}>
            Your Mission: Fix this list so that it contains the top 20 fattest
            star wars characters!
          </span>
        </div>
      );
    }

    if (error && error.statusCode) {
      return (
        <span className={styles.infoText}>
          {error.statusCode}: {error.message}
        </span>
      );
    } else {
      return <span className={styles.infoText}>{error?.message}</span>;
    }
  };

  renderListData = (): ReactNode => {
    // TODO: Implement the list here
    console.log(this.state);
    const { page, perPage, pages, data } = this.state;
    const tableFix = { position: 'relative', bottom: '3em', width: '99%', left:"0.6em" };
    const tableHeaderLayout={display: "grid", gridTemplateColumns: "104.5% 100%", textAlign:"left"}
    const nameWidth={width:"50%"}
    const paginationFix={ position: "relative",right: "5px", bottom: "2.5em"}
    let items = data.slice(page * perPage, (page + 1) * perPage);
    let fatpeople =
      items.map((item) => {
        const { id, name, bmi } = item;

        return (
          <tr key={id}>

            <td style={nameWidth}>{name}</td>
            <td>{bmi}</td>
          </tr>
        );
      }) || '';
    return (
      <>
        <table className="Table" style={tableFix}>
          <thead>
            <tr style={tableHeaderLayout}>
              <th>Character name</th>
              <th>BMI</th>
            </tr>
          </thead>
          <tbody>{fatpeople}</tbody>
        </table>
        <div style={paginationFix}>
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          pageCount={pages}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
        </div>
      </>
    );
  };
}
