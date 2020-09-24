import React from "react";
import styled from "styled-components";

import Icons from "../../utils/icons";

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

  th,
  td {
    font-weight: unset;
    padding-right: 10px;
  }

  .column100 {
    width: 10rem;
    padding-left: 25px;
  }

  .column100.column1 {
    width: 265px;
    padding-left: 2rem;
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

    background-color: ${(props) => props.theme.colorPrimary};
  }

  .table100.ver1 .row100:hover {
    /* background-color: ${(props) => props.theme.colorPrimary}; */
  }

  .table100.ver1 .hov-column-ver1 {
    background-color: ${(props) => props.theme.colorPrimary};
  }

  .table100.ver1 .hov-column-head-ver1 {
    background-color: ${(props) => props.theme.colorPrimary};
  }

  .table100.ver1 .row100 td:hover {
    background-color: ${(props) => props.theme.colorPrimary};
    color: #fff;
  }

  h2 {
    text-align: left;
    color: ${(props) => props.theme.colorPrimary};
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

const Prices = () => {
  return (
    <TableStyled>
      <div class="container-table100">
        <div class="wrap-table100">
          <div class="table100 ver1 m-b-110">
            <table data-vertable="ver1">
              <thead>
                <tr class="row100 head">
                  {/* <th class="column100 column1" data-column="column1"></th> */}
                  <th class="column100 column2" data-column="column2">
                    Storitev
                  </th>
                  <th class="column100 column3" data-column="column3">
                    Meritev
                  </th>
                  <th class="column100 column4" data-column="column4">
                    Cena
                  </th>
                  {/* <th class="column100 column5" data-column="column5">
                    Wednesday
                  </th>
                  <th class="column100 column6" data-column="column6">
                    Thursday
                  </th>
                  <th class="column100 column7" data-column="column7">
                    Friday
                  </th>
                  <th class="column100 column8" data-column="column8">
                    Saturday
                  </th> */}
                </tr>
              </thead>
              <tbody>
                <tr class="row100">
                  <td class="column100 column1" data-column="column1">
                    Tanke preproge
                  </td>
                  <td class="column100 column2" data-column="column2">
                    &#13217;
                  </td>
                  <td class="column100 column3" data-column="column3">
                    4 €
                  </td>
                </tr>

                <tr class="row100">
                  <td class="column100 column1" data-column="column1">
                    Debelejše preproge
                  </td>
                  <td class="column100 column2" data-column="column2">
                    &#13217;
                  </td>
                  <td class="column100 column3" data-column="column3">
                    5 €
                  </td>
                </tr>

                <tr class="row100">
                  <td class="column100 column1" data-column="column1">
                    Ročno tkana
                  </td>
                  <td class="column100 column2" data-column="column2">
                    &#13217;
                  </td>
                  <td class="column100 column3" data-column="column3">
                    8 €
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
          <li>{Icons.DustMachine}Tresenje preproge</li>
          <li>{Icons.ChemicalWashing}Kemično pranje</li>
          <li>{Icons.Centrifuge}Centrifuga z čista voda</li>
          <li>{Icons.Vacuming}Sesanje</li>
          <li>{Icons.Brushing}Krtačenje</li>
          <li>{Icons.Truck}Dostava in prevzem</li>
        </ul>
      </section>
    </TableStyled>
  );
};

export default Prices;
