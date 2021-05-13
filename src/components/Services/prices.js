import React from 'react';
import styled from 'styled-components';
import icons from '../../utils/icons';

const TableStyled = styled.div`
  width: 100%;
  overflow: hidden;
  /* margin: 0 auto; */

  .container-table100 {
    width: 100%;
    /* max-width: 200px; */
    /* min-height: 100vh; */

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 3rem;
  }

  .wrap-table100 {
    width: 100%;
  }

  /*//////////////////////////////////////////////////////////////////
[ Table ]*/
  table {
    width: 100%;
    background-color: #fff;
    background: #eee;
  }

  tr {
    border-bottom: 1px solid black;
  }
  th,
  td {
    font-weight: unset;
    padding-right: 10px;
  }

  .column100 {
    max-width: 5rem;
    /* padding-left: 25px; */
    word-break: break-word;
    text-align: center;
  }

  .column100.column1 {
    max-width: 8rem;
    padding-left: 2rem;
  }

  .row100 {
    border-bottom: 2px solid black;
  }
  .row100.head th {
    padding-top: 24px;
    padding-bottom: 20px;
  }

  .row100 td {
    padding-top: 18px;
    padding-bottom: 14px;
  }

  /*==================================================================
[ Ver1 ]*/
  .table100.ver1 td {
    /* font-family: Montserrat-Regular; */
    font-size: 1.6rem;
    color: #808080;
    line-height: 1.4;
  }

  .table100.ver1 th {
    /* font-family: Montserrat-Medium; */
    font-size: 1.6rem;
    color: #fff;
    line-height: 1.4;
    text-transform: uppercase;

    background-color: var(--primary);
  }

  .table100.ver1 .row100:hover {
    /* background-color: var(--primary); */
  }

  .table100.ver1 .hov-column-ver1 {
    background-color: var(--primary);
  }

  .table100.ver1 .hov-column-head-ver1 {
    background-color: var(--primary);
  }

  .table100.ver1 .row100 td:hover {
    background-color: var(--primary);
    color: #fff;
  }

  h2 {
    text-align: left;
    color: var(--primary);
    font-size: 4rem;
    font-weight: 300;
  }
  ul {
    padding: 3rem 0;
    font-size: 2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 5rem;
    li {
      display: flex;
      align-items: center;
      svg {
        width: 5rem;
        height: 5rem;
        margin-right: 3rem;
      }
    }
  }
`;

const Prices = () => (
  <TableStyled>
    <p className="warning-message">
      Opomnik: Do 31.05.2021 vseh navadne preproge so z promocijski ceni od 4€
      na m<sup>2</sup>, volnene in močno umazane pa so z promocijski ceni od 6€
      na m<sup>2</sup>, perzijske, orientalske so z promocijski ceni od 8€ na m
      <sup>2</sup>
    </p>
    <div className="container-table100">
      <div className="wrap-table100">
        <div className="table100 ver1 m-b-110">
          <table data-vertable="ver1">
            <thead>
              <tr className="row100 head">
                {/* <th className="column100 column1" data-column="column1"></th> */}
                <th className="column100 column1" data-column="column2">
                  Storitev
                </th>
                <th className="column100 column2" data-column="column3">
                  Meritev
                </th>
                <th className="column100 column3" data-column="column4">
                  Cena
                </th>
                {/* <th className="column100 column5" data-column="column5">
                    Wednesday
                  </th>
                  <th className="column100 column6" data-column="column6">
                    Thursday
                  </th>
                  <th className="column100 column7" data-column="column7">
                    Friday
                  </th>
                  <th className="column100 column8" data-column="column8">
                    Saturday
                  </th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="row100">
                <td className="column100 column1" data-column="column1">
                  Tanke preproge
                </td>
                <td className="column100 column2" data-column="column2">
                  &#13217;
                </td>
                <td className="column100 column3" data-column="column3">
                  6 €
                </td>
              </tr>

              <tr className="row100">
                <td className="column100 column1" data-column="column1">
                  Volnena, shaggy, močneje umazana
                </td>
                <td className="column100 column2" data-column="column2">
                  &#13217;
                </td>
                <td className="column100 column3" data-column="column3">
                  9 €
                </td>
              </tr>

              <tr className="row100">
                <td className="column100 column1" data-column="column1">
                  Orientalska - Perzijska
                </td>
                <td className="column100 column2" data-column="column2">
                  &#13217;
                </td>
                <td className="column100 column3" data-column="column3">
                  12 €
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <section>
      <h2>Kaj vklučuje vsaka ponudba?</h2>
      <ul>
        <li>{icons.DustMachine}Tresenje preproge</li>
        <li>{icons.ChemicalWashing}Kemično pranje</li>
        <li>{icons.Centrifuge}Centrifuga z čista voda</li>
        <li>{icons.Vacuming}Sesanje</li>
        <li>{icons.Brushing}Krtačenje</li>
        <li>{icons.Truck}Dostava in prevzem</li>
      </ul>
    </section>
  </TableStyled>
);

export default Prices;
