import styled from 'styled-components';
import { Box, TableCell } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const DashboardWrrapper = styled.div`
  margin-left: 393px;
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    margin-left: 340px;
  }
  @media (max-width: 992px) {
    margin-left: 220px;
  }
  @media (max-width: 767px) {
    margin-left: 0px;
    overflow-y: scroll;
  }

  &.coommon-dashboardbg {
    padding-top: 60px;
    min-height: 100vh;
    height: 100%;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      padding-top: 130px;
      padding-bottom: 130px;
    }
  }

  padding: 1.75rem 0rem 6rem 0rem;
  color: rgba(0, 0, 0, 0.87);

  position: relative;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 30%;
    background-image: url(../assets/images/Revving_Product-Colours_BluePurple-LARGE.png);
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: -1;
  }
  &.advanceLedger,
    &.transactionBg {
      .filterHeader {
        .MuiTable-root {
          margin-bottom: 20px;
        }
      }
    }
  }
  @media only screen and (min-width: 310px) and (max-width: 1250px) {
    &.advanceLedger,
    &.transactionBg {
      .filterHeader {
        background: #fff;
        padding: 50px 20px 0px;
        .downloadFile {
          overflow: initial;
        }
        .MuiTableCell-root {
          white-space: nowrap;
        }
        h1 {
          padding-bottom: 0px;
          margin-bottom: 0px;
          @media only screen and (min-width: 768px) and (max-width: 1250px) {
            margin-bottom: 30px !important;
          }
        }
        .headerFBG {
          padding: 0;
        }
        ul {
          flex-wrap: wrap;
          li {
            margin-left: 10px;
            .MuiInputBase-root {
              margin-bottom: 20px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  &.transactionBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }

  &.advanceLedger:before {
    background-image: url(../assets/images/Revving_Product_Colours_PinkBlue_LARGE.png);
  }

  &.integrationsBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }

  &.feesBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }

  &.integrationsBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }

  &.integrationsBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }

  &.integrationsBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }
`;

export const ContentBoxWrap = styled(Box)`
  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    &.contentBoxW.mob_paddt0 {
      padding-top: 0px;
    }
    &.contentBoxW.mob_content {
      padding-top: 0px;
    }
  }
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    &.contentBoxW.mob_paddt0 {
      padding-top: 0px;
    }
    &.contentBoxW.mob_content {
      background: #fff;
      position: relative;
      margin: 20px;
      padding-top: 75px;
      box-shadow: 12px 0px 20px 10px rgb(0 0 0 / 9%);
      .filterHeader {
        position: static;
        box-shadow: none;
      }
    }
  }
  &.contentBoxW.paddt0 {
    padding-top: 0px !important;
  }
  &.contentBoxW {
    padding: 107px 148px 0px;
    @media only screen and (min-width: 2500px) and (max-width: 3000px) {
      padding: 107px 300px 0px;
    }
    @media only screen and (min-width: 1601px) and (max-width: 1800px) {
      padding: 107px 120px 0px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1600px) {
      padding: 107px 70px 0px;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      padding: 107px 30px 0px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      padding: 107px 30px 0px 103px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1250px) {
      padding: 107px 60px 0px;
    }
    & + .contentBoxW {
      margin-top: 60px;
    }
  }
  .rowBg {
    background: #a8a8a8;

    .MuiTableCell-body {
      color: #fff;
    }
  }

  .dottedbBorder {
    border-bottom: 1px dashed #000;
    display: inline-block;
  }

  .MuiTypography-h1 {
    font-size: 38px;
    font-family: 'Averta-Semibold' !important;
    line-height: 40px;
    color: #3c3c3c;
    margin-bottom: 40px;
    text-transform: initial;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 35px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      font-size: 30px;
    }
    span {
      display: block;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    .content_wrap {
      flex-direction: column;
      .left_content {
        max-width: 100%;
      }
      .right_content {
        max-width: 100%;
      }
    }
  }

  .left_content {
    padding: 75px 0px 75px 0px;
    @media only screen and (min-width: 2500px) and (max-width: 3000px) {
      padding: 120px 0px 120px 0px;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      background: #fff;
      margin: 0 0px 30px;
      padding: 50px 30px 50px !important;
      .MuiGrid-spacing-xs-3 > .MuiGrid-item {
        padding: 0;
      }
    }
  }
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    .MuiGrid-spacing-xs-3 > .MuiGrid-item {
      padding: 0;
    }
  }
  .right_content.right_graph {
    @media only screen and (min-width: 1701px) and (max-width: 1950px) {
      background-position: initial;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      height: 400px;
      padding: 30px 0px 0px !important;
    }
  }
  .content_wrap {
    @media only screen and (min-width: 1800px) and (max-width: 1920px) {
      align-items: center;
    }
  }
  .right_content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    background-image: url(../assets/images/big_2.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media only screen and (min-width: 1800px) and (max-width: 1920px) {
      height: 611px;
      background-position: initial;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      background-image: none;
      background: #fff;
      padding: 30px 40px 0px !important;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1700px) {
      background-position: initial;
    }
    /* &:before, &:after{
      content: '';
    position: absolute;
    width: 48px;
    height: 279px;
    left: -4px;
    background: #fff;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      height: 269px;
    }
    }
    &:before{
      box-shadow: -25px 0 20px -6px #00000017;
      top:15px;
    -webkit-transform: skew(161deg,0deg);
    -ms-transform: skew(161deg,0deg);
    transform: skew(161deg,0deg);
    -webkit-transform: skew(161deg,0deg);
    }
    &:after{
      box-shadow: -25px 0 20px -6px #00000017;
      bottom: 15px;
      webkit-transform: skew(20deg,0deg);
    -ms-transform: skew(20deg,0deg);
    transform: skew(20deg,0deg);
    -webkit-transform: skew(19deg,0deg);
    } */
  }
  .funds_btn {
    margin: 100px 0px 60px;
    padding-left: 220px;
    @media only screen and (min-width: 2500px) and (max-width: 3000px) {
      padding-left: 316px;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      margin: 75px 0px 60px;
      padding-left: 15px;
      .MuiButton-root .MuiButton-label {
        font-size: 16px !important;
      }
    }
    @media only screen and (min-width: 768px) and (max-width: 1250px) {
      padding-left: 14px;
      .MuiButton-root .MuiButton-label {
        font-size: 18px !important;
      }
    }
    @media only screen and (min-width: 1251px) and (max-width: 1600px) {
      margin: 75px 0px 60px;
      padding-left: 210px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1350px) {
      margin: 50px 0px 50px !important;
      padding-left: 171px !important;
    }
    .MuiButtonBase-root {
      cursor: pointer;
      font-size: 21px;
      font-family: 'Averta-Semibold' !important;
      color: #3c3c3c !important;
    }
    .MuiAutocomplete-inputRoot::before,
    .MuiButton-root.MuiButton-outlined:before {
      border-right-color: #3c3c3c;
    }
    .MuiAutocomplete-inputRoot:after,
    .MuiButton-root.MuiButton-outlined:after {
      border-right-width: 10px;
    }
    .MuiButton-root:hover {
      background: rgb(60, 60, 60);
      border: 1px solid rgb(60, 60, 60);
      .MuiButton-label {
        color: #fff;
      }
    }
    .MuiButton-root:hover.MuiButton-outlined:after {
      border-right-color: rgb(60, 60, 60);
    }
  }
  .adv_list_wrap {
    @media only screen and (min-width: 1260px) and (max-width: 1500px) {
      li {
        margin-bottom: 10px !important;
        p {
          font-size: 14px !important;
          margin-bottom: 0 !important;
        }
        h6 {
          font-size: 22px !important;
          margin-bottom: 0 !important;
        }
      }
    }
    li {
      padding-right: 0px;
      /* @media only screen and (min-width: 310px) and (max-width: 1023px) {
        padding-right: 10px;
        flex-direction: column;
        align-items: flex-start;
      } */
      @media only screen and (min-width: 768px) and (max-width: 1023px) {
        padding-right: 10px;
        flex-direction: column;
        align-items: flex-start;
        p {
          font-size: 20px;
        }
      }
      @media only screen and (min-width: 1251px) and (max-width: 1700px) {
        padding-right: 0px;
      }
    }
  }
  .font_18 {
    font-size: 11px;
    margin-top: 40px;
    position: relative;
    .font_bold {
      font-weight: 800;
      margin: 0px 5px;
      display: inline-block;
    }
    .iconQ {
      top: 2px;
      left: -41px;
      position: absolute;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 14px !important;
      padding-left: 20px;
      .iconQ {
        left: -26px;
        top: -5px;
      }
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 14px !important;
      padding-left: 20px;
      .iconQ {
        left: -26px;
      }
    }
    @media only screen and (min-width: 1251px) and (max-width: 1700px) {
      font-size: 10px !important;
    }
    span {
      display: initial;
      margin: 0px 4px;
    }
  }
  p {
    font-size: 24px;
    color: #c3c3c3 !important;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 18px;
    }
    .iconQ {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1700px) {
      font-size: 20px;
      .iconQ {
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
    span {
      display: block;
    }
  }
  .purple_heading {
    color: #8181eb;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .MuiListItem-root.Mui-selected,
  .MuiListItem-root.Mui-selected:hover {
    background: rgb(60, 60, 60) !important;
    color: #fff;
  }

  .downloadFile {
    margin-top: 40px;
    @media (max-width: 767px) {
      overflow-x: scroll;
      flex-direction: column;
      align-items: flex-start;

      .dButton {
        background: #e8e8e8;
        border-radius: 5px;

        .MuiInput-underline:before {
          display: none;
        }
        .MuiSelect-icon {
          display: none;
        }
        .MuiSelect-select.MuiSelect-select {
          padding-left: 12px;
          em {
            color: #706b6b;
            display: flex;
            align-items: center;
            svg {
              padding-right: 4px;
            }
          }
        }
      }
    }

    .MuiInput-underline:after {
      display: none;
    }
    .bottomContentBox {
      padding: 24px;
      .MuiTypography-body1 {
        color: #a8a8a8;
        margin-bottom: 20px;
        font-size: 0.9rem;
      }
    }
    line.recharts-cartesian-axis-line {
      display: none;
    }

    line.recharts-cartesian-axis-tick-line {
      display: none;
    }

    .recharts-legend-wrapper {
      display: none;
    }
  }
`;
export const StyleTableCells = styled(TableCell)`
  color: #c5c5c5 !important;
`;
export const H1 = styled.h1`
  font-size: 38px;
  line-height: 40px;
  color: #3c3c3c;
  text-transform: capitalize;
  padding: 25px 15px 50px 15px;
  font-family: 'Averta-Semibold' !important;
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    font-size: 30px;
  }
`;
export const DownloadBtnGroup = styled(Box)`
  position: relative;
  .MuiAutocomplete-inputRoot::before,
  .MuiButton-root.MuiButton-outlined:before {
    border-right-color: #3c3c3c;
  }
  .MuiAutocomplete-inputRoot:after,
  .MuiButton-root.MuiButton-outlined:after {
    border-right-width: 10px;
  }
  .MuiButton-root:hover {
    background: rgb(60, 60, 60);
    border: 1px solid rgb(60, 60, 60);
    &:before {
      border-right-color: #3c3c3c;
    }
    &:after {
      border-right-color: #3c3c3c;
    }
    .MuiButton-label {
      color: #fff;
      svg {
        fill: #fff;
      }
    }
  }
  .downloadList {
    display: none;

    &.active {
      display: block;
    }

    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    bottom: -2px;
    background: #fff;
    border: 1px solid #d3d6dd;
    right: -92px;
    z-index: 9;

    @media (max-width: 767px) {
      z-index: 99;
      right: -42px;
      bottom: unset;
      top: -2px;
    }

    li {
      padding: 8px 15px;
      padding-right: 35px;
      transition: all ease 0.3s;
      cursor: pointer;

      .MuiTypography-body1 {
        margin: 0;
      }

      &:hover {
        background: rgb(60, 60, 60);

        .MuiTypography-body1 {
          color: #fff;
        }
      }
    }
  }
`;
export const StyleTableCellCurrency = styled(TableCell)`
  color: #5956e6 !important;
`;

export const WhiteBox = styled(Box)`
  &.padding_fund {
    padding: 0px 80px !important;
    padding-right: 0 !important;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      padding: 0px 60px !important;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      padding: 0 !important;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 0px 50px !important;
    }
  }
  .headingTextB {
    padding: 0px 0px 50px;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      padding: 0px 0px 30px;
    }
  }

  background: #ffffff;
  box-shadow: 12px 0px 20px 10px rgba(0, 0, 0, 0.09);
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    background: transparent;
    padding: 0px;
  }
  padding: 50px 90px;
  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    padding: 50px 50px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    padding: 40px 50px;
  }
  &.padding {
    padding: 30px;
    @media (max-width: 767px) {
      padding: 16px;
    }
  }

  .downloadBtn {
    transition: none !important;
    &.MuiButton-containedPrimary {
      color: #878787;
      background: white;
      box-shadow: none;
      border: 1.5px solid #878787;
    }
  }

  .d-flexInfo {
    display: flex;
    align-items: baseline;
    .MuiTypography-body1 {
      margin: 0;
      margin-right: 3px;
    }
    svg {
      margin-bottom: 3px;
    }
  }

  .MuiTypography-body1 {
    color: #706b6b;
    margin-bottom: 20px;
  }

  .headerFBGMobile {
    display: none;

    @media (max-width: 767px) {
      display: block;
    }

    .MuiList-padding {
      padding-top: 0px;
      padding-bottom: 0px;
    }

    .MuiListItemText-root {
      .MuiTypography-body1 {
        font-weight: bold;
      }
    }
    .MuiTypography-body1 {
      font-size: 14px;
      color: #262f3a;
    }
    .MuiListItem-button:hover {
      text-decoration: none;
      background-color: transparent;
    }
  }

  .mobFilter {
    background: #fff;
    color: #111;
    width: 300px;

    .MuiTypography-body1 {
      font-size: 14px;
      font-weight: normal;
      color: #262f3a !important;
    }

    .fixedHeight {
      height: 172px;
    }

    .MuiFormGroup-root {
      width: 100%;

      .MuiRadio-colorSecondary.Mui-checked {
        color: #262f3a;
      }

      .MuiFormControlLabel-root {
        justify-content: space-between;
        width: 100%;
        margin: 0;
        flex-direction: row-reverse;
      }
    }
  }
  &.padding_fund {
    .headerFBG {
      padding: 0 !important;
      .left_content {
        padding: 75px 0px 75px 0px;
        @media only screen and (min-width: 310px) and (max-width: 767px) {
          padding: 70px 0px 70px 70px;
          margin: 0px 0px 30px;
        }
        @media only screen and (min-width: 768px) and (max-width: 1250px) {
          padding-right: 20px;
        }
        @media only screen and (min-width: 1251px) and (max-width: 1800px) {
          padding: 75px 0px 50px 0px;
        }
        ul {
          li {
            h6 {
              margin-bottom: 0;
            }
          }
        }
      }
      .MuiTypography-h5 {
        font-size: 38px;
        line-height: 40px;
        color: #3c3c3c;
        font-family: 'Averta-Semibold' !important;
        margin-top: 40px;
        margin-bottom: 40px;
        @media only screen and (min-width: 310px) and (max-width: 767px) {
          font-size: 35px;
        }
        @media only screen and (min-width: 1251px) and (max-width: 1800px) {
          font-size: 30px;
        }
        span {
          display: block;
        }
      }
    }
  }
  &.wkly_adv_wrap {
    padding-top: 0px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      background: #fff;
      margin: -10px;
      .mobpadd20 {
        padding: 20px;
      }
      .date_update {
        top: 1% !important;
      }
    }
  }
  &.filterHeader.adv_cry_wrap {
    .date_update {
      position: static;
      text-align: right;
    }
  }
  &.filterHeader.cstm_height {
    @media only screen and (min-width: 1800px) and (max-width: 1920px) {
      height: 611px;
    }
  }
  &.filterHeader {
    position: relative;
    .MuiTableContainer-root {
      margin-bottom: 20px;
    }
    .adv_table {
      .icon_wrap {
        .iconQ {
          height: 19px;
          width: 20px;
          top: 19px;
        }
      }
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        .icon_wrap {
          .iconQ {
            height: 20px;
            right: -8px;
            width: 20px;
            top: 19px;
          }
        }
      }
      .rowBg {
        background: #f1f1f1 !important;
        .MuiTable-root {
          margin-bottom: 0 !important;
        }
        .MuiTableCell-body {
          color: #5956e6 !important;
          background: rgb(241, 241, 241) !important;
        }
      }
      .adv_icon {
        position: relative;
        .MuiIconButton-sizeSmall {
          position: absolute;
          right: 0;
        }
      }
      .MuiTableCell-head {
        font-size: 16px;
        font-family: 'Averta-Semibold' !important;
        color: #3c3c3c;
        width: 15%;
        text-align: left;
        white-space: nowrap;
        @media only screen and (min-width: 310px) and (max-width: 1250px) {
          white-space: nowrap;
        }
      }
      .MuiTableCell-body {
        font-size: 20px;
        font-family: 'Averta-Semibold' !important;
        color: #3c3c3c;
        width: 15%;
        min-width: 190px;
        max-width: 190px;
        text-align: left;
        white-space: nowrap;
        @media only screen and (min-width: 310px) and (max-width: 1250px) {
          white-space: nowrap;
        }
      }
    }
    .adv_curncy_wrap {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        flex-direction: column;
        margin-bottom: 0;
        h1 {
          margin-right: 0px !important;
          margin-bottom: 40px !important;
        }
        ul {
          flex-wrap: wrap;
          li {
            margin-left: 10px;
            .MuiInputBase-root {
              margin-bottom: 20px;
              margin-right: 0px;
            }
          }
        }
      }
      @media only screen and (min-width: 768px) and (max-width: 1250px) {
        display: block;
        margin-bottom: 0px;
        h1 {
          margin-right: 0px !important;
          margin-bottom: 40px !important;
        }
      }
      h1 {
        margin-bottom: 0;
        margin-right: 60px;
        @media only screen and (min-width: 1251px) and (max-width: 1350px) {
          margin-right: 20px;
        }
      }
    }
    .date_update {
      position: absolute;
      right: 60px;
      font-family: 'ACaslonPro-Regular';
      font-size: 14px;
      color: #c3c3c3 !important;
      top: 8%;
      z-index: 9;
      @media only screen and (min-width: 1251px) and (max-width: 1350px) {
        top: 3%;
      }
      @media only screen and (min-width: 310px) and (max-width: 1250px) {
        top: 1%;
        font-size: 18px;
        right: 27px;
      }
    }
    .icon_wrap {
      position: relative;
      .iconQ {
        width: 35px;
        height: 35px;
        object-fit: cover;
        position: absolute;
        right: -8px;
        width: 20px;
        @media only screen and (min-width: 1251px) and (max-width: 1800px) {
          height: 20px;
          right: -8px;
          top: 19px;
        }

        @media only screen and (min-width: 1251px) and (max-width: 1800px) {
          width: 25px;
          height: 25px;
        }
      }
    }

    .con_hndg {
      font-family: 'ACaslonPro-Regular';
      font-size: 14px;
      color: #c3c3c3 !important;
    }
    .currency_table {
      margin-bottom: 30px;
      .rowBg {
        background: #f1f1f1 !important;
      }
      .text_center {
        text-align: center !important;
      }
      .MuiTableCell-head {
        font-size: 16px;
        font-family: 'Averta-Semibold' !important;
        color: #3c3c3c;
        /* text-align: left; */
      }
      .table_body {
        &::first-child {
          color: #5956e6 !important;
        }
      }
      .MuiTableCell-body {
        font-size: 15px;
        font-family: 'Averta-Semibold' !important;
        color: #3c3c3c;
        width: 15%;
        /* text-align: left; */
      }
    }
    .headerFBG.weekly_adv {
      .left_content {
        @media only screen and (min-width: 1800px) and (max-width: 1920px) {
          padding: 60px 0px;
        }
      }
      @media only screen and (min-width: 310px) and (max-width: 1250px) {
        @media only screen and (min-width: 310px) and (max-width: 767px) {
          background: transparent;
        }
        .left_content {
          @media only screen and (min-width: 310px) and (max-width: 1250px) {
            background: transparent;
            padding-bottom: 0px !important;
          }
        }
        margin: 0px;
        ul {
          @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
            flex-wrap: wrap;
          }
          @media only screen and (min-width: 768px) and (max-width: 1250px) {
            flex-wrap: wrap;
          }
          li {
            margin-bottom: 0px;
            padding-bottom: 0;
            margin-left: 0px;
            @media only screen and (min-width: 320px) and (max-width: 568px) {
              margin-bottom: 10px;
            }
            @media only screen and (min-width: 768px) and (max-width: 1023px) {
              margin-bottom: 10px;
              flex-direction: column;
              align-items: flex-start;
              margin-left: 0px;

              .MuiInputBase-root {
                margin-right: 0px;
              }
            }
          }
        }
      }
      .left_content.wkly_rgt {
        margin-left: 105px;
        @media only screen and (min-width: 1260px) and (max-width: 1500px) {
          li {
            margin-bottom: 10px !important;
            p {
              font-size: 14px !important;
              margin-bottom: 0 !important;
            }
            h6 {
              font-size: 22px !important;
              margin-bottom: 0 !important;
            }
          }
        }
        @media only screen and (min-width: 310px) and (max-width: 1250px) {
          margin-left: 0px;
          padding-top: 0px !important;
        }
      }
    }
    .headerFBG {
      padding: 8px 16px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media only screen and (min-width: 768px) and (max-width: 1250px) {
        background: #fff;
      }
      @media (max-width: 992px) {
        align-items: flex-start;
        flex-direction: column;
      }
      .MuiTypography-body1 {
        color: #ffffff;
        margin-bottom: 10px;
        @media (max-width: 992px) {
          margin-top: 10px;
        }
      }
    }

    .headerFBGMobile {
    }
  }
`;
export const StyleTableCell = styled(TableCell)`
  &.blue {
    color: #5956e6 !important;
  }
  &.red {
    color: #ff8789 !important;
  }
  color: ${(props) => props.color}!important;
  font-size: 20px;
  font-family: 'Averta-Semibold' !important;
  white-space: nowrap;
  &.first-child {
    padding-top: 40px !important;
  }
  &.color_brown {
    color: #c5c5c5 !important;
  }
  &.transaction_type {
    text-transform: capitalize;
  }
  &.revenue_source_name {
    text-transform: capitalize;
  }
  &.transaction_id {
    text-transform: uppercase;
  }
  // &.transaction {
  //   color: red !important;
  // }
`;
export const GreyBox = styled(Box)`
  background: #f5f5f5;
  border-radius: 5px;
  height: 260px;
  &.circleBox {
    height: 400px;
    background: #fff;
    position: relative;
    border-radius: 50%;

    svg {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
      margin-bottom: 30px;
    }

    &.greyBoxContent {
      .MuiTypography-h5 {
        font-size: 2rem;
      }
      .MuiTypography-body2 {
        position: absolute;
        bottom: 100px;
        left: 160px;
        max-width: 34%;
        color: #fff;
      }
      &.mt {
        // padding-right: 200px;
        padding-left: 0;
        margin-top: 60px;
        @media (max-width: 1024px) {
          padding-right: 100px;
        }
        @media (max-width: 992px) {
          padding-right: 0px;
        }
      }
    }
  }

  &.greyBoxContent {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 70px;

    &.list {
      padding: 0px;
      text-align: unset;
      justify-content: unset;
    }

    @media (min-width: 1441px) {
      padding: 0 120px;
    }

    .MuiTypography-body2 {
      font-size: 20px;
      color: #3c3c3c !important;
      position: static;
      text-transform: uppercase;
    }

    &.mt {
      margin-top: 50px;
      background: transparent;
      padding-left: 200px;
      @media only screen and (min-width: 2500px) and (max-width: 2700px) {
        padding-left: 300px;
      }
      @media only screen and (min-width: 310px) and (max-width: 1250px) {
        padding-left: 0px;
        margin-top: 20px;
      }
      @media only screen and (min-width: 1251px) and (max-width: 1350px) {
        padding-left: 120px !important;
      }
      @media only screen and (min-width: 1600px) and (max-width: 1700px) {
        padding-left: 160px;
      }
      @media only screen and (min-width: 1700px) and (max-width: 1800px) {
        padding-left: 220px;
      }
      @media only screen and (min-width: 1251px) and (max-width: 1800px) {
        padding-left: 170px;
      }
    }
  }
`;

export const RightBox = styled(Box)`
  .MuiButton-containedPrimary {
    background: #ffbc3d;
    box-shadow: none;
    &:hover {
      background: #ffbc3d;
    }
  }
`;

export const HeaderFillterUl = styled.ul`
  display: block;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    flex-wrap: wrap;
    li {
      margin-bottom: 10px;
    }
    li + li {
      margin-left: 0px !important;
    }
  }
  .MuiFormControl-root {
    border-radius: 5px;
  }

  .MuiInputBase-root {
    font-size: 0.85rem;
    color: #706b6b;
    margin-right: 30px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      margin-right: 20px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1500px) {
      margin-right: 0px;
    }
  }

  .MuiInput-underline:before {
    border-bottom: 0px;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 0.5px solid rgb(60, 60, 60);
  }
  .MuiInput-underline:after {
    border-bottom: 0.5px solid rgb(60, 60, 60);
  }
  .MuiSelect-select.MuiSelect-select {
    background-color: white;
    border-bottom: 0.5px solid rgb(60, 60, 60);
    font-family: 'ACaslonPro-Regular';
    font-size: 25px;
    color: #3c3c3c;
    background-image: url(../assets/images/downArrow.png);
    background-size: 18px;
    background-position: right 0px center;
    background-repeat: no-repeat;
    padding: 10px 35px 0px 0px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 18px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1400px) {
      font-size: 16px;
      padding: 10px 20px 0px 0px;
    }
    @media only screen and (min-width: 1401px) and (max-width: 1800px) {
      font-size: 18px;
      padding: 10px 25px 0px 0px;
    }
    text-align: left;
    .MuiButtonBase-root {
      font-family: 'ACaslonPro-Regular';
      font-size: 25px;
      color: #3c3c3c;
      padding: 0;
      @media only screen and (min-width: 1251px) and (max-width: 1500px) {
        font-size: 18px;
      }
    }
  }
  .MuiSelect-icon {
    display: none;
  }
  display: flex;
  align-items: center;

  li {
    position: relative;

    .MuiTypography-root {
      display: flex;
      align-items: center;
    }

    & + li {
      margin-left: 10px;
    }
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h6 {
      color: #3c3c3c;
      font-size: 28px;
      line-height: 40px;
      font-family: 'Averta-Semibold' !important;
      color: #3c3c3c !important;
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        font-size: 20px;
      }
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    .MuiTypography-root {
      display: flex;
      align-items: center;
      color: #706b6b;
    }
  }
`;
export const StylesTableCell = styled(TableCell)`
  font-size: 16px;
  font-family: 'Averta-Semibold' !important;
  color: #3c3c3c;
`;
export const StyledTableBox = styled(Box)`
  padding: 30px 0px;
  .MuiTableContainer-root {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 px #ececec;
      background: #ececec;
    }
    ::-webkit-scrollbar-thumb {
      background: #ececec;
      -webkit-box-shadow: inset 0 0 px #ececec;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ececec;
    }
  }
  &.MuiTableCell-head {
    font-family: 'Averta-Semibold' !important;
    font-size: 15px;
  }
`;

export const StyledTableHeader = styled(Box)`
  background: #e8e8e8;
  @media only screen and (min-width: 310px) and (max-width: 1250px) {
    overflow: scroll;
  }
  // .toolTipH {
  //   background: red;
  // }
  .titleH {
    display: flex;
    align-items: center;
    padding: 16px;
    padding-bottom: 0;

    .MuiTypography-body1 {
      color: #706b6b;
      margin-bottom: 0px;
      padding-right: 6px;
    }
    .MuiSvgIcon-root {
      fill: #a8a8a8;
    }
  }
  .MuiTable-root {
    &.dollerHeader {
      .MuiTableCell-stickyHeader {
        background: #e8e8e8;
        &.MuiTableCell-head {
          font-size: 16px;
          font-family: 'Averta-Semibold' !important;
          color: #3c3c3c;
        }
      }
    }
  }
`;

export const ListStyled = styled(List)`
  background: transparent;
  padding: 0;
`;

export const ListItemStyled = styled(ListItem)`
  .MuiListItemIcon-root {
    min-width: 40px;
    color: rgb(238, 238, 238);
    font-weight: 300;
    font-size: 13px;
    svg {
      height: 20px;
    }
  }
  .MuiTypography-body1 {
    color: rgb(238, 238, 238);
    font-weight: 300;
    font-size: 13px;
  }
`;

export const NumberList = styled.ul`
  padding-top: 75px;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 400px;
  @media only screen and (min-width: 1800px) and (max-width: 1920px) {
    height: 340px;
  }
  .scroll {
    overflow-y: scroll;
    height: 100%;
    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      background: #ececec;
      border-left: 9px solid white;
      border-right: 9px solid white;
    }

    ::-webkit-scrollbar-thumb {
      background: #ececec;
      border-left: 7px solid white;
      border-right: 7px solid white;
    }
  }

  .scrollbar-container {
    .ps__rail-y {
      opacity: 1;
    }
  }
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    height: 247px;
    padding-top: 0px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    height: 270px;
    padding-top: 30px;
  }
  .MuiTypography-h6 {
    color: #3c3c3c;
    font-size: 38px;
    line-height: 40px;
    font-family: 'Averta-Semibold' !important;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 35px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      font-size: 30px;
      line-height: 30px;
      font-size: 30px;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 35px;
    }
  }
  .psr {
    display: flex;
    margin-right: 90px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      margin-right: 25px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1350px) {
      margin-right: 65px;
    }
  }
  .MuiTypography-h5 {
    margin-bottom: 0px;
    font-size: 20px;
    text-transform: uppercase;
    margin-right: 0;

    @media (max-width: 992px) {
      font-size: 1.5rem;
    }
    color: #3c3c3c;
  }

  .MuiTypography-body2 {
    top: -10px;
    right: -20px;
    color: #000000 !important;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      margin-bottom: 20px;
    }
    &::last-child {
      margin-bottom: 0;
    }
    + li {
      margin-top: 12px;
      padding-right: 140px;
      @media only screen and (min-width: 1801px) and (max-width: 1900px) {
        padding-right: 142px;
      }
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        padding-right: 10px;
      }
      @media only screen and (min-width: 1501px) and (max-width: 1600px) {
        padding-right: 80px !important;
      }
      @media only screen and (min-width: 1601px) and (max-width: 1800px) {
        padding-right: 80px !important;
      }
      @media only screen and (min-width: 768px) and (max-width: 1023px) {
        padding-right: 20px !important;
      }
      @media only screen and (min-width: 1024px) and (max-width: 1250px) {
        padding-right: 90px;
      }
      @media only screen and (min-width: 1251px) and (max-width: 1400px) {
        padding-right: 63px !important;
      }

      @media only screen and (min-width: 1401px) and (max-width: 1500px) {
        padding-right: 60px;
      }
    }
  }
`;
