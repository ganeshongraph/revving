import styled from 'styled-components';
import {
  Box,
  Dialog,
  Button,
  TableCell,
  Typography,
  InputLabel,
  TextField
} from '@material-ui/core';

export const StyledDialog = styled(Dialog)`
  position: relative;
  .edit_buttonwrep {
    .btn_cncl {
      &:hover {
        background: transparent !important;
        border: none !important;

        .MuiButton-label {
          color: #3c3c3c !important;
        }
      }
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
  .MuiFormControl-root {
    width: 100%;
  }

  .mSuccess {
    color: #706b6b;
    padding: 24px;
    padding-top: 0;
  }
  .cloSebtn {
    position: absolute;
    top: 8px;
    right: 6px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      padding: 0px;
      svg {
        height: 15px;
      }
    }
  }

  .MuiDialogActions-root {
    justify-content: flex-start;
    padding-left: 24px;
    padding-bottom: 24px;
  }

  .MuiButton-containedPrimary {
    background-color: #ffbc3d;
    box-shadow: none;
    &:hover {
      background-color: #ffbc3d;
    }
  }

  .MuiButton-label {
    text-transform: none;
  }

  .MuiTypography-h6 {
    color: #000000;
    font-weight: bold;
  }
`;

export const FormGroup = styled.div`
  &.edit_buttonwrep {
    margin-top: 50px !important;
    a {
      margin-left: 20px;
      color: #3c3c3c;
      text-decoration: none;
    }
    .btn_cncl {
      &:hover {
        background: transparent !important;
        border: none !important;

        .MuiButton-label {
          color: #3c3c3c !important;
        }
      }
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
  &.mrgtop60 {
    margin-top: 60px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      margin-top: 0px;
    }
  }
  margin-bottom: 24px;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    margin-bottom: 10px;
  }
  &:last-child {
    margin: 0px;
  }

  &.halfWidthS {
    .MuiFormControl-root {
      width: 42%;
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
  &.FormBoxWrap {
    .MuiFormControl-root {
      width: 100%;
    }

    .MuiTypography-body1 {
      font-size: 0.85rem;
    }
  }
  &.disabled {
    pointer-events: none;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgb(60, 60, 60) !important;
  }

  .MuiOutlinedInput-input {
    padding: 13.5px 14px;
  }
  .font_csino {
    font-family: 'ACaslonPro-Regular';
  }
  .MuiInputLabel-root {
    color: #c3c3c3;
    font-size: 21px;
    font-family: 'Averta-Semibold' !important;
    margin-bottom: 20px;
    text-transform: initial;
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 16px;
    }
  }
  .MuiOutlinedInput-input {
    font-size: 20px;
    color: #3c3c3c;
  }
  .MuiTypography-body1 {
    margin-bottom: 8px;
    color: #706b6b;
  }

  &.DeleteDilogText {
    .MuiTypography-root {
      &.MuiTypography-body1 {
        font-weight: bold;
        color: #000000 !important;
      }

      &.MuiTypography-body2 {
        color: #000000;
        margin-top: 16px;
      }
    }
  }
`;
export const StyleInputLabel = styled(InputLabel)`
  color: #c5c5c5 !important;
`;
export const StyleTextField = styled(TextField)`
  color: #343434;
`;

export const DashboardWrrapper = styled.div`
  margin-left: 393px;
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    margin-left: 340px;
  }
  // overflow-y: scroll;
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
      padding: 150px 30px 30px 30px;
    }
    .doc_wrap {
      .filterHeader {
        position: relative;
        .date_update {
          position: absolute;
          right: 60px;
          font-family: 'ACaslonPro-Regular';
          font-size: 14px;
          color: #c3c3c3 !important;
          top: 8%;
          z-index: 9;
          @media only screen and (min-width: 310px) and (max-width: 1250px) {
            top: 2%;
            font-size: 21px;
            right: 27px;
          }
        }
      }
    }
  }

  padding: 0;
  /*  background: #e9eff5; */
  color: rgba(0, 0, 0, 0.87);
  // margin-top: 65px;

  // width: calc(100% - 260px);
  // vertical-align: top;
  // margin-left: 260px;
  // flex: 1 1 auto;
  // display: flex;
  // overflow: hidden;
  // position: relative;
  // flex-direction: column;
  // height: 100%;
  // background: #f4f5fc;
  // @media (max-width: 767px) {
  //   width: 100%;
  //   margin-left: 0px;
  // }

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

  &.admin_body:before {
    background-image: url(../assets/images/Revving_ProductColours_GreenYellowLARGE.png);
  }

  &.buss_body:before {
    background-image: url(../assets/images/Revving_Product_Colours_RedOrange_LARGE.png);
  }

  &.fees_body:before {
    background-image: url(../assets/images/Revving_Product_Colours_PinkBlue_LARGE.png);
  }

  &.transactionBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }

  &.advanceLedger:before {
    background-image: url(../assets/images/Revving_Product_Colours_PinkBlue_LARGE.png);
  }

  &.integrationsBg:before {
    background-image: url(../assets/images/Revving_Product_Colours_RedOrange_LARGE.png);
  }

  &.feesBg:before {
    background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  }

  // &.integrationsBg:before {
  //   background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  // }

  // &.integrationsBg:before {
  //   background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  // }

  // &.integrationsBg:before {
  //   background-image: url(../assets/images/Revving_Product-Colours_GreenYellow-LARGE.png);
  // }
`;
export const H1 = styled.h1`
  font-size: 38px;
  line-height: 40px;
  color: #3c3c3c;
  padding-bottom: 30px;
  font-family: 'Averta-Semibold';
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    line-height: 60px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    font-size: 30px;
  }
`;
export const H1Documentation = styled.h1`
  font-size: 38px;
  line-height: 40px;
  color: #3c3c3c;
  padding: 0px 0px 50px;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    padding: 0px 0px 30px;
    font-size: 30px;
  }
`;
export const StyleTypography = styled(Typography)`
  color: #c3c3c3 !important;
  padding-left: 5px;
  font-size: 24px !important;
  font-family: AvertaDemo-Regular !important;
  line-height: 30px;
  padding-bottom: 2px;
  margin-left: 0px !important;
  &.approvedbody {
    padding-bottom: 40px;
  }
  &.administration {
    padding-bottom: 30px;
  }
`;

export const ContentBoxWrap = styled(Box)`
  &.paddbtm100 {
    padding-bottom: 107px;
  }
  &.paddtop0 {
    padding-top: 0 !important;
  }
  padding: 107px 148px 0px;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    padding: 107px 0px 0px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1250px) {
    padding: 107px 64px 0px 40px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 107px 30px 0px 65px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    padding: 107px 120px 0px;
  }
  .MuiTypography-h5 {
    color: #434343;
    font-weight: bold;
    padding-left: 30px;
  }

  .MuiTypography-body1 {
    &.paraH {
      color: #706b6b;
    }
  }
  &.contentBoxW {
    & + .contentBoxW {
      margin-top: 60px;
    }
  }

  .MuiTableCell-root {
    padding: 7px;
    padding-left: 20px;
    @media only screen and (min-width: 310px) and (max-width: 1250px) {
      white-space: nowrap;
    }
    .boxWrap {
      font-size: 25px;
      font-family: 'Averta-Semibold' !important;
      color: #3c3c3c !important;
      @media only screen and (min-width: 1251px) and (max-width: 1800px) {
        font-size: 20px;
      }
    }
    @media (max-width: 992px) {
      svg {
        width: 30px;
      }
    }
  }

  @media only screen and (min-width: 310px) and (max-width: 1366px) {
    .mob_tab_scrl {
      width: 100%;
      overflow: scroll;
      .MuiTableCell-body {
        white-space: nowrap;
      }
    }
  }
  .documnt_table {
    .MuiTypography-body1,
    .boxWrap {
      font-size: 20px;
      font-family: Averta-Semibold !important;
      color: rgb(197, 197, 197) !important;
      white-space: nowrap;
    }
    .boxWrap {
      color: #3c3c3c !important;
    }
  }
  .MuiTable-root {
    .icon_wrap {
      position: relative;
    }
    .MuiTableCell-head {
      color: #3c3c3c;
      font-family: 'Averta-Semibold' !important;
      font-size: 16px;
      white-space: nowrap;
      .iconQ {
        width: 25px;
        height: 25px;
        object-fit: cover;
        margin-left: 10px;
        position: absolute;
      }
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        white-space: nowrap;
      }
    }
    &.errorTable {
      position: relative;
      .errorRow {
        position: relative;

        .MuiTableCell-body {
          color: rgba(0, 0, 0, 0.87);
          padding-bottom: 10px;
        }
        .errorRowContent {
          position: absolute;
          left: 60px;
          top: 130px;
          width: 100%;
          display: flex;
          align-items: center;
          color: #a8a8a8;

          @media (max-width: 992px) {
            font-size: 0.8rem;
            left: 40px;
          }

          svg {
            margin-right: 6px;
          }
        }
      }
    }

    &.SimpleTable {
      .MuiIconButton-label {
        font-size: 1rem;
        color: #3c3c3c;
        font-weight: bold;
      }
    }
  }

  .MuiTypography-h5 {
    margin-bottom: 20px;
  }
  .adminstration_wrap {
    p {
      margin-left: 0px !important;
    }
    .boxWrap_new {
      p {
        color: rgb(197, 197, 197) !important;
      }
    }
  }
  .amountTransaction {
    .color_grey {
      color: #c3c3c3;
      margin-left: 0;
    }
    p {
      margin: 0;
      font-size: 25px;
      font-family: 'Averta-Semibold';
      color: #3c3c3c;
      margin-left: 10px;
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        font-size: 20px !important;
      }
      @media only screen and (min-width: 1251px) and (max-width: 1800px) {
        font-size: 20px !important;
      }
      @media only screen and (min-width: 1251px) and (max-width: 1350px) {
        padding-right: 70px;
      }
    }

    .iconsWrap {
      display: flex;
      justify-content: center;
      .btnIcon {
        & + .btnIcon {
          margin-left: 20px;
        }
      }
    }

    .toolTipH {
      &.MuiSvgIcon-root {
        fill: #a8a8a8;
      }
    }

    .MuiButton-outlined {
      &.addBTN {
        background: white;
        border-color: #3c3c3c;
        color: #3c3c3c;
        margin-top: 40px;
        font-weight: bold;
        @media only screen and (min-width: 310px) and (max-width: 767px) {
          margin-left: 30px;
          padding: 5px;
          .MuiButton-label {
            font-size: 12px !important;
          }
        }

        .MuiButton-label {
          font-family: 'Averta-Semibold' !important;
        }
        &:before {
          border-right-color: #3c3c3c;
        }
        &:after {
          border-right-width: 10px;
        }
        &:hover {
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
          }
        }
      }
    }
  }
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
`;
export const StyleTableCell = styled(TableCell)``;
export const WhiteBox = styled(Box)`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 12px 0px 20px 10px rgb(0 0 0 / 9%);
  padding: 50px 90px;
  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    .ipad_wrap {
      flex-direction: column;
      .ipadw100 {
        max-width: 100%;
      }
    }
  }
  @media only screen and (min-width: 310px) and (max-width: 1250px) {
    padding: 50px 30px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    padding: 40px 50px;
  }
  .paddrgt170 {
    padding-right: 170px;
    @media only screen and (min-width: 310px) and (max-width: 1250px) {
      padding-right: 0px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      padding-right: 0px;
    }
    .MuiOutlinedInput-input {
      font-size: 20px;
      color: #3c3c3c;
      line-height: 50px;
    }
  }
  .paddrgt140 {
    padding-right: 140px;
    @media only screen and (min-width: 310px) and (max-width: 1250px) {
      padding-right: 0px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      padding-right: 0px;
    }
    .MuiOutlinedInput-input {
      font-size: 20px;
      color: #3c3c3c;
      line-height: 50px;
    }
  }
  .edit_buttonwrep_new {
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
  &.padding {
    padding: 50px 90px;
    @media only screen and (min-width: 768px) and (max-width: 1250px) {
      padding: 50px 30px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      padding: 40px 50px;
    }
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      padding: 50px 20px;
    }
  }

  &.halfWidth {
    width: 100%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  &.LinkedAC {
    width: 75%;
    .MuiTableCell-root {
      border: none;
      padding: 0;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  &.filterHeader {
    .headerFBG {
      padding: 8px 16px;
      /* background: #c8d1d8; */
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media only screen and (min-width: 310px) and (max-width: 1250px) {
        ul {
          flex-wrap: wrap;
          li {
            margin-left: 0px !important;
            margin-bottom: 20px;
          }
        }
      }

      .MuiTypography-body1 {
        color: #ffffff;
        margin-bottom: 0px;
      }
    }
  }
`;
export const StyleTypographyCell = styled(Typography)`
  color: #c6c6c6;
  padding-bottom: 10px;
`;
export const StyleBox = styled(Box)`
  font-weight: bold;
`;
export const StyledTableCell = styled(TableCell)`
  padding-bottom: 15px;
`;

export const GreyBox = styled(Box)`
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
      .MuiTypography-body2 {
        position: absolute;
        bottom: 100px;
        max-width: 34%;
        color: #fff;
      }
      &.mt {
        padding-right: 200px;
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
    justify-content: center;
    text-align: center;
    padding: 0 70px;

    @media (min-width: 1441px) {
      padding: 0 120px;
    }

    .MuiTypography-body2 {
      font-size: 14px;
      color: #706b6b;
    }

    &.mt {
      margin-top: 20px;
    }
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  li {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
      width: 100%;
    }
    .MuiTypography-root {
      display: flex;
      align-items: center;
      color: #706b6b;
    }

    & + li {
      border-top: 1px dashed #706b6b;
      padding-top: 20px;
    }
  }
`;

export const HeaderFillterUl = styled.ul`
  .MuiFormControl-root {
    border-radius: 5px;
  }

  .MuiInputBase-root {
    font-size: 0.85rem;
    color: #706b6b;
    margin-right: 30px;
  }

  .MuiInput-underline:before {
    border-bottom: 0px;
  }

  .MuiSelect-select.MuiSelect-select {
    background-color: white;
    border-bottom: 0.5px solid rgb(60, 60, 60);
    font-family: 'ACaslonPro-Regular';
    font-size: 25px;
    color: #3c3c3c;
    background-image: url(../assets/images/downArrow.png);
    background-size: 25px;
    background-position: right 0px center;
    background-repeat: no-repeat;
    padding: 10px 42px 0px 0px;
    text-align: left;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1500px) {
      font-size: 18px;
    }
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

export const StyledTableBox = styled(Box)`
  padding: 24px;
  @media only screen and (min-width: 310px) and (max-width: 1250px) {
    padding: 0px;
  }
`;

export const StyledTableHeader = styled(Box)`
  background: #e8e8e8;

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
          color: #706b6b;
        }
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  a {
    text-decoration: none;
    font-family: sans-serif;
    margin-left: 10px;
    color: #000;
    font-size: 16px;
  }
`;
