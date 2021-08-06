import styled from 'styled-components';
import { Typography, Button, Box } from '@material-ui/core';

export const StyledButton = styled(Button)`
  &.MuiButton-outlined {
    border: 1px solid #a8a8a8;
    // border-radius: 60px !important;
  }

  .MuiButton-label {
    text-transform: capitalize;
  }

  &.MuiButton-outlined.active {
    background: rgb(60, 60, 60);
    border: 1px solid rgb(60, 60, 60);
    .MuiButton-label {
      color: #fff;
    }
  }
`;

export const NextBtn = styled(Button)`
  display: flex;
`;

export const HeadingTypography = styled(Typography)`
  font-weight: 600;
  font-size: 40px;
  color: #000000;
  margin-bottom: 40px;
  margin-bottom: 30px !important;
  font-weight: 500 !important;
`;

export const ParagraphText = styled(Typography)`
  font-weight: 500;
  font-size: 21px;
  color: rgb(195, 195, 195);
  &.MuiTypography-body2 {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1700px) {
    font-size: 16px !important;
  }
`;
export const MainContentBox = styled(Box)`
  margin-top: 40px;
  .flexCustom {
    align-items: flex-end;
  }
`;

export const FormGroup = styled(Box)`
  .MuiTypography-h3 {
    font-size: 0.8rem;
    color: #000000;
    margin-bottom: 15px;
  }
  .dek_wdth {
    width: calc(100% - 55px);
  }
  .dek_wdth100 {
    width: 100%;
  }
  &.errorFormGroup {
    padding: 40px 24px;
    border: 1px solid #eb5757;
    // border-radius: 8px;
    position: relative;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      padding: 40px 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    .deks_contant {
      display: none;
    }
    .mob_contant {
      display: block !important;
    }
    .mob_wdth {
      width: calc(100% - 55px);
    }
    .wdth100 {
      width: 100%;
    }
  }
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    .deks_contant {
      display: none;
    }
    .mob_contant {
      display: block !important;
    }
    .mob_wdth {
      width: calc(100% - 55px);
    }
    .wdth100 {
      width: 100%;
    }
  }
  .mob_contant {
    display: none;
  }
  .btnLink {
    text-decoration: none;
  }

  margin-bottom: 40px;

  &.nextBtn {
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 767px) {
      margin-right: 17px;
    }

    .MuiButton-root {
      text-transform: capitalize;
    }

    .MuiButton-contained {
      color: #ffff;
      background: #c0c0c0;
    }

    &.backBtn {
      .back {
        margin-right: 20px;
        &.MuiButton-root {
          color: #a8a8a8;
        }
      }
    }
  }

  .activeBtn {
    &.MuiButton-contained {
      color: #ffff;
      background: #ff478f;
    }
  }

  .MuiSlider-root {
    color: #ff478f;
  }

  .MuiSlider-rail {
    background-color: #e8e8e8;
  }

  &.inputFormWrap {
    .MuiFormControl-root {
      width: 100%;
    }

    .MuiOutlinedInput-notchedOutline:mui-focussed,
    .MuiOutlinedInput-notchedOutline {
      border-color: #ff478f;
    }

    .MuiTypography-body1 {
      font-size: 0.63rem;
      color: #706b6b;
      margin-bottom: 15px;
    }
  }

  .agreeChecked {
    display: flex;
    align-items: center;
    flex-direction: row;

    .MuiTypography-body2 {
      margin-bottom: 0px;

      .tcl {
        color: #706b6b;
        padding-left: 5px;
      }
    }
  }

  .formGroup {
    display: flex;
    align-items: center;
    flex-direction: row;

    .MuiSelect-select.MuiSelect-select {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      padding: 18px 26px 17px 12px;
      font-size: 21px;
      font-family: 'Averta-Semibold' !important;
      opacity: 0.6;
    }
    .MuiSelect-select.MuiSelect-select:focus {
      box-shadow: none !important;
    }

    .MuiOutlinedInput-root {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-left: none;
    }
  }

  .emptyInput {
    color: rgb(60, 60, 60) !important;
    &.MuiTypography-body2 {
      margin-bottom: 0px;
    }
  }
  .visibilityHidden {
    visibility: hidden;
  }

  .addRevenueBtn {
    font-size: 18px;
    color: rgb(195, 195, 195);
    text-decoration: none;
  }
`;

export const ContentWrap = styled(Box)`
  // margin: 0 auto;
`;

export const BtnGroup = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin: -14px;

  button {
    margin: 12px;
  }
`;

export const SidebarUl = styled.ul`
  margin: 0 30px;
  background: #e8e8e8;
  border-radius: 10px;
  padding: 24px;

  .MuiTypography-h6 {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 24px;
    color: #000000;
  }

  li {
    position: relative;

    .MuiTypography-root {
      display: flex;
      align-items: center;
    }

    & + li {
      margin-top: 30px;
    }

    a {
      color: #000000;
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
    }
  }

  &.eligibilityChecked {
    .MuiTypography-h5 {
      font-size: 1rem;
      font-weight: 400;
      color: #706b6b;
      margin-top: 35px;
      margin-bottom: 50px;
    }
    svg {
      position: relative;
      margin-right: 15px;
      &.active:before {
        position: absolute;
        content: '';
        left: 50%;
        top: 30px;
        height: 30px;
        width: 30px;
        background: url(../assets/images/dottedCircle.svg) no-repeat center;
        transform: translateX(-50%);
      }
    }
  }
`;

export const CircleBorder = styled.span`
  height: 32px;
  width: 32px;
  background: #ffffff;
  border: 1px solid #a8a8a8;
  border-radius: 100%;
  margin-right: 15px;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 20px;
    width: 20px;
    background: #fff;
    border-radius: 100%;
    z-index: 9;
  }

  &.active:after {
    background: rgb(60, 60, 60);
  }

  &.active {
    position: relative;
    border: 1px solid #262f3a;
  }

  &.active:before {
    position: absolute;
    content: '';
    left: 50%;
    top: 30px;
    height: 30px;
    width: 30px;
    background: url(../assets/images/dottedCircle.svg) no-repeat center;
    transform: translateX(-50%);
  }
`;

export const EligiblityBoxWrap = styled(Box)`
  background: #fff;
  padding: 40px 50px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.09);
  margin: 40px 0px;
  margin-top: 0px;

  @media only screen and (min-width: 310px) and (max-width: 767px) {
    padding: 40px 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 40px 20px;
    margin: 40px 16px;
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (min-width: 1430px) {
    margin-left: 50px;
  }
`;
