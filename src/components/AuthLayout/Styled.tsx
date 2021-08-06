import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Dialog, ListItem, List, Typography, Button } from '@material-ui/core';

export const StyledButtonHeader = styled(Button)`
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
`;
export const MobileHeader = styled(Box)`
  display: none;
  background: #fff;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  overflow-y: scroll;
  h6 {
    font-size: 38px;
    color: rgb(60, 60, 60);
    font-family: Averta-Semibold;
    box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 9%);
    padding: 30px 35px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 35px;
    }
  }
  .scrollbar-container {
    padding: 60px 35px;
    height: auto;
  }
  .mob_hdr_btm {
    background: #dfd4fa;
    padding: 50px 30px 330px;
    justify-content: flex-start;
    position: relative;
    li {
      position: static;
      .active {
        width: auto;
        right: 0px;
        left: auto;
        margin: 20px;
        top: 100px;
        &::before,
        &::after {
          left: 22px;
        }
      }
    }
  }
  .MuiCollapse-wrapperInner {
    background: #fff !important;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 2px solid #c3c3c3;
    padding-left: 35px;
  }
  .logo_wrap {
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 9%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 60px 44px 0px 20px;
      .mob_logo {
        display: inline-block;
        img {
          height: 70px;
        }
      }
      .menu_icon {
        display: inline-block;
      }
    }
  }

  @media (max-width: 767px) {
    &.active {
      display: block;
    }
  }

  .centerLogo {
    margin: 40px 0px;
    img {
      height: 44px;
    }
  }

  .MuiCollapse-wrapperInner {
    background: #3a4859;
  }

  .mobHelp {
    .MuiTypography-body1 {
      font-size: 14px;
      color: #ff478f;
      padding-left: 10px;
    }
  }
`;

export const H3 = styled.h3`
  font-family: 'ACaslonPro-Italic';
  font-size: 30px;
  color: #3c3c3c;
  font-weight: normal;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 22px;
  }
`;
export const ImgHeader = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
`;
export const StyledTypographyHelp = styled(Typography)`
  background: #fff;
  padding: 9px 16px;
  color: black;
  font-size: 18px;
  font-family: 'Averta-Semibold' !important;
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 23px;
    left: -6px;
    background: #fff;
  }
  &:before {
    top: 0px;
    transform: skew(161deg, 0deg);
    -webkit-transform: skew(161deg, 0deg);
  }
  &:after {
    bottom: 0px;
    transform: skew(20deg, 0deg);
    -webkit-transform: skew(20deg, 0deg);
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      bottom: 0px;
    }
  }
`;
export const CloseButton = styled.div`
  position: static;
`;

export const ContentBox = styled.div`
  .MuiTypography-h6 {
    margin: 25px 16px;
  }

  .MuiMenuItem-root {
    color: #706b6b;
  }
  &.editMode {
    padding: 0 16px;

    .MuiTypography-h6 {
      margin: 25px 0px;
    }
  }

  .switch--horizontal {
    width: auto;
    height: 25px;
    margin: 0 auto;
    font-size: 0;
    margin-bottom: 1rem;
    input {
      height: 25px;
      width: 46px;
      left: 0px;
      margin: 0;
      &:checked {
        & ~ .toggle-outside {
          .toggle-inside {
            left: 2px;
            top: 2px;
          }
        }
      }
      & ~ input {
        &:checked {
          & ~ .toggle-outside {
            background: rgb(60, 60, 60);
            .toggle-inside {
              left: 22px;
            }
          }
        }
      }
    }
    label {
      font-size: 1.5rem;
      line-height: 3rem;
      display: inline-block;
      width: 46px;
      height: 100%;
      margin: 0;
      text-align: center;
      &:last-of-type {
        margin-left: 46px;
      }
    }
    .toggle-outside {
      background: #c0c0c0;
      position: absolute;
      width: 46px;
      left: 0;
    }
    .toggle-inside {
      height: 21px;
      width: 21px;
    }
  }

  &.Preferences {
    .MuiTypography-body1 {
      color: #706b6b;
    }

    .MuiTypography-body2 {
      color: #000000;
    }

    .pList {
      margin-top: 0px;
      display: block;
      margin-left: -10px;
      li {
        display: flex;
        align-items: center;

        svg {
          fill: #000;
        }

        & + li {
          margin-left: 0px;
        }
      }
    }

    .mt {
      margin-top: 25px;
      margin-bottom: 0px;

      .lableText {
        margin-bottom: 8px;
      }
    }

    .MuiIconButton-root {
      padding: 0px;
    }
  }
  .pList {
    margin-top: 0px;
    display: block;
    margin-left: -10px;
    li {
      display: flex;
      align-items: center;

      svg {
        fill: #000;
      }

      & + li {
        margin-left: 0px;
      }
    }
  }

  .smF {
    .MuiTypography-body1 {
      font-size: 0.8rem;
      color: #706b6b;
    }
  }
  .switch {
    margin: 0rem auto;
    width: 24rem;
    position: relative;
    input {
      position: absolute;
      top: 0;
      z-index: 2;
      opacity: 0;
      cursor: pointer;
      &:checked {
        z-index: 1;
        & + label {
          opacity: 1;
          cursor: default;
        }
      }
      &:not(:checked) {
        & + label {
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
    label {
      color: #fff;
      opacity: 0.33;
      transition: opacity 0.25s ease;
      cursor: pointer;
    }
    .toggle-outside {
      height: 100%;
      border-radius: 2rem;
      padding: 0.25rem;
      overflow: hidden;
      transition: 0.25s ease all;
    }
    .toggle-inside {
      border-radius: 5rem;
      background: #fff;
      position: absolute;
      transition: 0.25s ease all;
    }
  }
`;

export const ProfileMobile = styled(Box)`
  display: none;
  background: #ffffff;
  // padding: 16px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  overflow-y: scroll;

  @media (max-width: 767px) {
    &.active {
      display: block;
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
    }
  }

  .formGC {
    padding: 0 16px;
    .MuiOutlinedInput-input {
      padding: 7.5px 14px !important;
      font-size: 14px;
      @media (max-width: 767px) {
        padding: 0 !important;
      }
    }
    .MuiInputLabel-root {
      margin-bottom: 8px;
      color: #000000;
      font-size: 14px;
    }
  }
`;

export const MHeader = styled.div`
  display: none;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    background: #fff;
    display: block;
    width: 100%;
    float: left;
    padding: 0;
  }
  h6 {
    font-size: 38px;
    color: rgb(60, 60, 60);
    font-family: Averta-Semibold;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 9%);
    padding: 30px 35px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 35px;
    }
  }
  .logo_wrap {
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 9%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 60px 44px 0px 20px;
      .mob_logo {
        display: inline-block;
        img {
          height: 70px;
        }
      }
      .menu_icon {
        display: inline-block;
      }
    }
  }
  background: rgb(60, 60, 60);
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  align-items: center;
  padding: 24px;
  justify-content: space-between;
  .MuiTypography-body1 {
    margin-bottom: 4px;
    color: #ffffff;
    padding-left: 50%;
    margin-left: -30px;
  }

  &.Preferences {
    .MuiTypography-body1 {
      color: #706b6b;
    }

    .MuiTypography-body2 {
      color: #000000;
    }

    .mt {
      margin-top: 25px;
      margin-bottom: 0px;

      .lableText {
        margin-bottom: 8px;
      }
    }

    .MuiIconButton-root {
      padding: 7px;
    }
  }

  .switch {
    margin: 4rem auto;
    width: 24rem;
    position: relative;
    input {
      position: absolute;
      top: 0;
      z-index: 2;
      opacity: 0;
      cursor: pointer;
      &:checked {
        z-index: 1;
        & + label {
          opacity: 1;
          cursor: default;
        }
      }
      &:not(:checked) {
        & + label {
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
    label {
      color: #fff;
      opacity: 0.33;
      transition: opacity 0.25s ease;
      cursor: pointer;
    }
    .toggle-outside {
      height: 100%;
      border-radius: 2rem;
      padding: 0.25rem;
      overflow: hidden;
      transition: 0.25s ease all;
    }
    .toggle-inside {
      border-radius: 5rem;
      background: #fff;
      position: absolute;
      transition: 0.25s ease all;
    }
  }

  .mp {
    &.pList {
      margin-top: 0px;
      display: block;
      margin-left: -10px;
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        align-items: center;

        svg {
          fill: #000;
        }

        & + li {
          margin-left: 0px !important;
        }
      }
    }
  }
`;
export const MenuIcon = styled.div``;

export const SettingButtonRow = styled(Box)`
  padding: 0px 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;

  .MuiTypography-body1 {
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
  }
`;

export const HeaderWrapper = styled(Box)`
  background: transparent;
  padding: 50px 148px 0px;
  color: #fff;
  margin-left: 260px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 99;
  @media only screen and (min-width: 2500px) and (max-width: 2700px) {
    padding: 50px 300px 0px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1250px) {
    padding-right: 60px !important;
  }

  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    padding-right: 20px;
    margin-left: 158px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    padding: 50px 80px 0px;
  }
  @media (max-width: 767px) {
    display: none;
    &.authHeader {
      display: none;
    }
  }

  @media (max-width: 767px) {
    margin-left: 0px;
  }

  .headerLogo {
    @media (max-width: 767px) {
      height: 38px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background: #ffbc3d;
  border-radius: 5px;
  padding: 12px 16px;
  color: #fff;
  text-decoration: none;
  @media (max-width: 767px) {
    padding: 6px 9px;
  }
`;

export const StyledLogin = styled(Link)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #fff;
  text-decoration: none;
  margin-right: 25px;
`;

export const SidebarWrapper = styled.div`
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-color: #fff;
  z-index: 99;
  width: 393px;
  box-shadow: 12px 0px 20px 10px rgba(0, 0, 0, 0.09);
  background: linear-gradient(75deg, rgba(89, 86, 230, 0.08) 0%, rgba(255, 255, 255, 1) 40%);
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    width: 340px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 275px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1250px) {
    width: 393px;
  }
  @media (max-width: 767px) {
    display: none;
  }

  .active {
    color: #ffffff;
  }
  .scrollbar-container {
    padding: 0px 50px;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      padding: 0px 30px;
    }
  }
  .sidebarLogo {
    margin: 20px 34px;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      margin: 20px 15px 0px;
    }
    img {
      height: 75px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1250px) {
      img {
        height: 60px;
      }
    }
  }

  .ltdText {
    color: rgb(60, 60, 60);
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
    font-size: 44px;
    font-family: 'Averta-Semibold' !important;
    margin-bottom: 35px;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      font-size: 35px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1250px) {
      font-size: 35px;
    }
  }

  .MuiCollapse-container {
    &.activeBG {
      padding-top: 30px;
      border-top: 1px solid#c3c3c3;
      padding-left: 40px;
      margin-top: 40px;
      padding-bottom: 30px;
      border-bottom: 1px solid#c3c3c3;
      .MuiTypography-body1 {
        font-size: 20px;
        @media only screen and (min-width: 1251px) and (max-width: 1800px) {
          font-size: 18px;
        }
      }
    }
  }
`;

export const ListStyled = styled(List)`
  background: transparent;
  padding: 0;
  font-weight: 400;
  color: rgb(238, 238, 238);

  .MuiButtonBase-root {
    padding: 0 !important;
    margin-bottom: 20px;
    &.MuiListItem-button:hover {
      background-color: transparent !important;
    }
  }
  .MuiListSubheader-root {
    color: rgba(238, 238, 238, 0.9);
    font-weight: 300;
    font-size: 13px;
  }
  .MuiListItemIcon-root {
    min-width: 40px;
    color: rgb(238, 238, 238);
    svg {
      height: 20px;
    }
  }
  .MuiTypography-body1 {
    font-size: 28px;
    font-family: 'Averta-Semibold' !important;
    background: transparent;
    color: #c3c3c3;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      font-size: 24px;
    }
  }
  @media (max-width: 992px) {
    font-size: 18px;
  }
  .MuiListItem-root {
    &.active {
      .MuiListItemText-root {
        .MuiTypography-body1 {
          color: rgb(60, 60, 60);
        }
      }
    }
  }
`;

export const ListItemStyled = styled(ListItem)`
  .MuiListItemIcon-root {
    min-width: 40px;
    color: rgb(238, 238, 238);
    font-weight: 300;
    font-size: 20px;
    svg {
      height: 20px;
    }
  }
  .MuiTypography-body1 {
    // color: rgb(238, 238, 238);
    font-size: 28px;
    font-family: 'Averta-Semibold' !important;
    background: transparent;
    color: #c3c3c3;
    position: relative;
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      font-size: 24px;
    }
  }
  .MuiSvgIcon-root {
    width: 55px;
    height: 55px;
    position: absolute;
    right: 115px;
    fill: #c3c3c3;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      right: 90px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1250px) {
      right: 0px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      width: 40px;
      height: 40px;
      right: 80px;
    }
  }
`;

export const Menulist = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  li {
    display: flex;
    align-items: center;
    position: relative;

    a {
      display: flex;
      align-items: center;
      color: #ff478f;
      text-decoration: none;
      svg {
        margin-right: 8px;
      }
    }

    & + li {
      margin-left: 36px;
    }
    & + li + li {
      margin-left: 15px;
    }
  }
`;

export const SubMenuD = styled.div`
  background: #fff;
  width: 494px;
  position: absolute;
  right: -20px;
  top: 62px;
  color: rgb(60, 60, 60);
  border: 1px solid #b8b8b8;
  border-radius: 5px;
  padding: 30px;
  z-index: 99;
  transition: all ease 0.3s;
  display: none;
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
  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    width: 320px;
  }
  &.active {
    display: block;
  }

  &:after,
  &:before {
    bottom: 100%;
    left: 88.5%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: #ffffff;
    border-width: 18px;
    margin-left: -18px;
  }

  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-bottom-color: #b8b8b8;
    border-width: 20px;
    margin-left: -20px;
  }

  .MuiTypography-body1 {
    color: #706b6b;
  }

  &.profileWrap {
    top: 59px;
    padding: 0;
    width: 440px;
    right: 0px;
    &:after,
    &:before {
      left: 94% !important;
    }

    &:after {
      border-width: 14px;
      margin-left: -14px;
    }

    &:before {
      border-width: 16px;
      margin-left: -16px;
    }

    .MuiTypography-h6 {
      font-size: 20px;
      color: #000000;
      padding: 10px 30px;
      margin-bottom: 15px;
    }

    .MuiMenuItem-root {
      padding: 12px 30px;
      color: #706b6b;
    }

    li {
      & + li {
        margin-left: 0px;
      }
    }
    .MuiListItem-button:hover {
      text-decoration: none;
      background-color: #008ee2;
      color: #fff;
    }
  }

  .lastM {
    margin-bottom: 15px;
  }
`;

export const BorderTop = styled.div`
  margin: 0px 30px;
  border-top: 1px solid #e8e8e8;

  @media (max-width: 767px) {
    margin: 0 16px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  .MuiInputBase-root {
    margin-top: 20px;
    padding: 0;
    line-height: 50px;
  }
  .MuiFormControl-root {
    width: 100%;
    color: #a8a8a8;
  }
`;

export const StyledUL = styled.ul`
  .MuiButton-containedPrimary {
    &.pinkBtn {
      background: #ff478f;
      box-shadow: none;
    }
  }

  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  margin-top: 50px;

  li {
    & + li {
      margin-left: 26px;
    }
  }
`;

export const StyledDialog = styled(Dialog)`
  /* .edit_buttonwrep {
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
  } */

  .switch {
    margin: 4rem auto;
    width: 24rem;
    position: relative;
    input {
      position: absolute;
      top: 0;
      z-index: 2;
      opacity: 0;
      cursor: pointer;
      &:checked {
        z-index: 1;
        & + label {
          opacity: 1;
          cursor: default;
        }
      }
      &:not(:checked) {
        & + label {
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
    label {
      color: #fff;
      opacity: 0.33;
      transition: opacity 0.25s ease;
      cursor: pointer;
    }
    .toggle-outside {
      height: 100%;
      border-radius: 2rem;
      padding: 0.25rem;
      overflow: hidden;
      transition: 0.25s ease all;
    }
    .toggle-inside {
      border-radius: 5rem;
      background: #fff;
      position: absolute;
      transition: 0.25s ease all;
    }
  }
  .switch--horizontal {
    width: auto;
    height: 25px;
    margin: 0 auto;
    font-size: 0;
    margin-bottom: 1rem;
    input {
      height: 25px;
      width: 46px;
      left: 0px;
      margin: 0;
      &:checked {
        & ~ .toggle-outside {
          .toggle-inside {
            left: 2px;
            top: 2px;
          }
        }
      }
      & ~ input {
        &:checked {
          & ~ .toggle-outside {
            background: rgb(60, 60, 60);
            .toggle-inside {
              left: 22px;
            }
          }
        }
      }
    }
    label {
      font-size: 1.5rem;
      line-height: 3rem;
      display: inline-block;
      width: 46px;
      height: 100%;
      margin: 0;
      text-align: center;
      &:last-of-type {
        margin-left: 46px;
      }
    }
    .toggle-outside {
      background: #c0c0c0;
      position: absolute;
      width: 46px;
      left: 0;
    }
    .toggle-inside {
      height: 21px;
      width: 21px;
      top: 2px;
    }
  }

  position: relative;

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
  .MuiTypography-h6 {
    color: #000000;
    font-weight: bold;
  }

  .MuiOutlinedInput-input {
    padding: 12.5px 14px;
  }

  .MuiInputLabel-root {
    color: #000;
    margin-bottom: 8px;
  }

  .lableText {
    font-weight: bold;
  }

  &.Preferences {
    .MuiTypography-body1 {
      color: #706b6b;
    }

    .MuiTypography-body2 {
      color: #000000;
    }

    .pList {
      margin-top: 0px;
      display: block;
      margin-left: -10px;
      li {
        display: flex;
        align-items: center;

        svg {
          fill: #000;
        }

        & + li {
          margin-left: 0px;
        }
      }
    }

    .mt {
      margin-top: 25px;
      margin-bottom: 0px;

      .lableText {
        margin-bottom: 8px;
      }
    }

    .MuiIconButton-root {
      padding: 2px;
    }
  }
`;
