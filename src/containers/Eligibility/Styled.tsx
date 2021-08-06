import styled from 'styled-components';
import { Typography, Button, Box, OutlinedInput } from '@material-ui/core';

export const Div = styled.div`
  @media only screen and (min-width: 310px) and (max-width: 1250px) {
    &.revert_modal {
      &.MuiDialog-paperFullScreen {
        height: auto !important;
        margin: 30px 10px;
      }
    }
  }
`;
export const StyledButton = styled(Button)`
  &.MuiButton-outlined {
    border: 1px solid rgb(196, 196, 196);
    // border-radius: 60px !important;
  }

  .MuiButton-label {
    // text-transform: capitalize;
  }

  &.MuiButton-outlined.active {
    background: rgb(60, 60, 60);
    border: 1px solid rgb(60, 60, 60);
    .MuiButton-label {
      color: #fff;
    }
  }
`;

export const NextBtn = styled(Button)<{ isactive?: boolean }>`
  display: flex;
  &.MuiButton-contained {
    box-shadow: none;
    color: #ffff;
    background: ${(props) => (props?.isactive ? '#ff478f' : '#c0c0c0')} !important;
  }
  &.MuiButton-contained:hover {
    box-shadow: none;
    background-color: ${(props) => (props?.isactive ? '#ff478f' : '#c0c0c0')} !important;
  }
`;

export const HeadingTypography = styled(Typography)`
  font-weight: 600;
  font-size: 38px;
  color: rgb(60, 60, 60);
  margin-bottom: 40px;
  margin-bottom: 30px !important;
  font-weight: 500 !important;
  @media (max-width: 767px) {
    font-size: 26px !important;
  }
`;

export const ParagraphText = styled(Typography)`
  font-weight: 500;
  font-size: 21px;
  color: rgb(195, 195, 195);
  margin-bottom: 36px;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    float: left;
    margin-bottom: 10px;
    &.mob_margb {
      margin-bottom: 20px !important;
    }
  }
  &.mb_bottom {
    margin-bottom: 20px;
  }
  .addRevenueBtn {
    font-weight: 500 !important;
    font-size: 21px !important;
    color: rgb(195, 195, 195) !important;
  }
  &.MuiTypography-body2 {
    margin-bottom: 30px;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px !important;
      &.smallRT {
        font-size: 16px !important;
      }
    }
  }
`;

export const MainContentBox = styled(Box)`
  display: flex;
  @media (max-width: 992px) {
    display: block;
    padding: 0 30px;
  }
`;

export const FormGroup = styled(Box)<{ isactive?: boolean }>`
  margin-bottom: 52px;
  @media (max-width: 767px) {
    margin-bottom: 42px;
  }
  @media only screen and (min-width: 310px) and (max-width: 1023px) {
    .ml-minus-11 {
      margin-left: 0px !important;
      margin-bottom: 20px !important;
      .MuiAutocomplete-root {
        @media screen and (max-width: 767px) {
          width: 100% !important;
          margin-left: 15px;
        }
      }
    }
  }
  .mrg_lft20 {
    margin-left: 12px !important;
    @media screen and (max-width: 767px) {
      margin-left: 0px !important;
    }
  }

  .ml-minus-11 {
    margin-left: -13px !important;
  }
  &.demo {
  }

  .arrow_slider .MuiSlider-valueLabel span span {
    left: -28px;
    margin-top: 30px !important;
  }
  .arrow_slider .MuiSlider-thumb {
    box-shadow: none !important;
  }
  .arrow_slider .MuiSlider-thumb:hover {
    box-shadow: none;
  }

  .arrow_slider .MuiSlider-thumb::after {
    background: url(../assets/images/drag_arrow.png) no-repeat center;
    border-radius: 0%;
    background-size: contain;
    width: 33px;
  }

  &.nextBtn {
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 767px) {
      margin-right: 12px;
    }

    // .MuiButton-contained {
    //   color: #ffff;
    //   background: #ff478f;
    // }
    &.backBtn {
      .back {
        margin-right: 20px;
        border-left: 0 !important;
        &.MuiButton-root {
          color: rgb(89, 86, 230);
        }
      }
    }
  }
  .MuiSlider-root {
    color: rgb(60, 60, 60);
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

  &.inputFormWrap {
    .MuiFormControl-root {
      width: 100%;
      margin-left: 6px;

      @media only screen and (min-width: 1500px) and (max-width: 1800px) {
        .MuiOutlinedInput-root:after {
          border-right-width: 9px;
        }
        .MuiButton-root.MuiButton-outlined:after {
          border-right-width: 9px;
        }
      }
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        margin-left: 0px;
      }
    }

    .MuiOutlinedInput-notchedOutline:mui-focussed,
    .MuiOutlinedInput-notchedOutline {
      border-color: rgb(60, 60, 60);
    }
  }

  .btnLink {
    text-decoration: none;
  }

  &.rangeSlider {
    margin-top: 50px;

    span.MuiSlider-valueLabel {
      & > span {
        width: unset;
        height: unset;
        display: flex;
        transform: unset;
        align-items: center;
        border-radius: unset;
        justify-content: unset;
        background-color: unset;
        & > span {
          color: rgb(89, 86, 230) !important;
          transform: unset;
          margin-top: 70px;
          font-size: 21px;
        }
      }
    }
  }
  .MuiFormControl-root {
    &.mob_agree {
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        align-items: flex-start !important;
        span {
          padding-top: 0px !important;
        }
      }
    }
    &.agreeChecked {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        margin-bottom: 0px;
        @media only screen and (min-width: 310px) and (max-width: 767px) {
          margin-bottom: 0px !important;
        }
      }
      &.MuiCheckbox-root {
        padding-left: 0px;
      }
    }
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgb(60, 60, 60);
  }
`;

export const ContentWrap = styled(Box)`
  @media (max-width: 992px) {
    margin: 0 16px;
    .MuiTypography-h4 {
      font-size: 1.7rem;
    }
  }
  &.cstm_mrg .giIhZo {
    margin-top: 0px !important;
  }
  &.cstm_mrg .fUfXHp {
    margin-top: 0px !important;
  }

  top: calc(50% - 20px);
  .custInputSize {
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      width: 96% !important;
    }
    .MuiFormControl-root {
      .MuiAutocomplete-input {
        padding: 3.5px 4px;
      }
      .MuiAutocomplete-endAdornment {
        top: calc(50% - 20px);
      }
    }
  }
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  input {
    border: none;
  }
`;

export const SideBarLogo = styled(Box)``;

export const EligibilityMainWrapBox = styled(Box)`
  min-height: 100vh;
  height: 100%;
  .MuiOutlinedInput-root {
    line-height: 52px;
  }
  position: relative;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/bg_img/Revving_Product_Colours_BluePurple_LARGE_30p.png);
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: -1;
  }
`;

// export const BtnGroup = styled(Box)`
//   display: flex;
//   flex-wrap: wrap;
//   margin: -14px;

//   button {
//     margin: 11px;
//     margin-left: 18px;
//   }
// `;

export const SidebarWhiteBox = styled.div`
  @media (min-width: 992px) {
    background: #fff linear-gradient(75deg, rgba(89, 86, 230, 0.08) 0%, rgba(255, 255, 255, 1) 40%);
  }
  background: #fff;
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
  @media only screen and (min-width: 1251px) and (max-width: 1800px) {
    width: 340px;
  }

  @media (max-width: 992px) {
    width: 100%;
    position: static;
    margin-right: 0;
    margin-top: 30px;
    height: auto;
    min-height: auto;
  }
  min-height: 100vh;
  padding: 24px 30px;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    min-height: auto;
    margin: 0;
    padding: 0px;
    padding-bottom: 16px;
    .padd10 {
      padding: 10px;
    }
    /* .MuiBox-root {
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 9%);
    } */
    .MuiBox-root img {
      margin: 25px 0px 0px;
      height: 60px;
    }
    .sedebarHeadT {
      /* box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 9%); */
      padding: 20px 15px;
    }
    .MuiTypography-root span:before {
      top: -61px;
      height: 61px;
    }
  }

  @media (min-width: 1367px) {
    padding-right: 60px;
  }
  box-shadow: 12px 0px 20px 10px rgba(0, 0, 0, 0.09);
  margin-right: 60px;
  .sedebarHeadT {
    font-size: 27px;
    @media (max-width: 1360px) {
      font-size: 24px;
    }
  }

  @media only screen and (min-width: 1251px) and (max-width: 1600px) {
    .eligibilityChecked a {
      font-size: 16px !important;
    }
    .jaqJUs:before {
      top: -67px;
    }
  }
  @media only screen and (min-width: 1251px) and (max-width: 1600px) {
    .sidebarLogoImg {
      height: 60px !important;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1250px) {
    .sidebarLogoImg {
      height: 60px !important;
    }
  }
  .sidebarLogoImg {
    height: 75px;
    margin-left: -10px;
    margin-bottom: 20px;
  }
`;

export const SidebarUl = styled.ul`
  @media (max-width: 992px) {
    margin: 0px;
  }
  margin: 20px 0;
  border-top: 1px solid rgba(129, 129, 235, 0.6);
  border-bottom: 1px solid rgba(129, 129, 235, 0.6);
  padding: 20px 0;

  @media (max-width: 768px) {
    margin: 0px 16px;
    margin-top: 30px;
    min-height: auto;
  }

  .MuiTypography-h6 {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 24px;
    color: #000000;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  li {
    position: relative;

    .MuiTypography-root {
      display: flex;
      align-items: center;
    }

    & + li {
      margin-top: 60px;
    }

    a {
      color: rgb(195, 195, 195);
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
      cursor: auto !important;

      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
    &.listActive {
      .MuiTypography-root {
        color: #000;
        a {
          color: #000;
          cursor: auto !important;
        }
      }
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
  height: 20px;
  width: 20px;
  background: #ffffff;
  // border: 1px solid #a8a8a8;
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
    // border: 1px solid #262f3a;
  }

  // &:before {
  //   position: absolute;
  //   content: '';
  //   left: 50%;
  //   top: 30px;
  //   height: 30px;
  //   width: 30px;
  //   background: url(../assets/images/dottedCircle.svg) no-repeat center;
  //   transform: translateX(-50%);
  // }
`;

export const CircleUpperNonActiveBorder = styled.span`
  height: 20px;
  width: 20px;
  background: transparent;
  border: 1px solid rgb(129, 129, 235);
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
    // background: #fff;
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
    background: rgb(60, 60, 60);
  }

  &:before {
    position: absolute;
    content: '';
    left: 50%;
    top: -70px;
    height: 68px;
    width: 1px;
    // background: url(../assets/images/dottedCircle.svg) no-repeat center;
    background: rgb(129, 129, 235);
    transform: translateX(-50%);
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      top: -62px;
      height: 61px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1600px) {
      top: -65px;
      height: 65px;
    }
    &.active:before {
      background: #262f3a !important;
    }
  }
`;

export const StyledSvg = styled.div`
  position: relative;
  margin-right: 15px;
  height: 32px;
  width: 32px;
  &:before {
    position: absolute;
    content: '';
    left: 50%;
    top: -30px;
    height: 30px;
    width: 30px;
    background: url(../assets/images/activeDotted.svg) no-repeat center;
    transform: translateX(-50%);
  }
`;

export const CircularUpperActive = styled.span`
  height: 32px;
  width: 32px;
  background: #ffffff;
  border: 1px solid #a8a8a8;
  border-radius: 100%;
  margin-right: 15px;
  position: relative;
  display: inline-block;

  &:before {
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

  &.active:before {
    background: rgb(60, 60, 60);
  }

  &.active {
    position: relative;
    border: 1px solid #262f3a;
  }

  &.active:after {
    position: absolute;
    content: '';
    left: 50%;
    top: -30px;
    height: 30px;
    width: 30px;
    background: url(${process.env.PUBLIC_URL}/assets/images/activeDotted.svg) no-repeat center;
    transform: translateX(-50%);
  }
`;

export const ErrorText = styled(Box)`
  display: flex;
  align-items: center;
  color: #eb5757;
  @media only screen and (min-width: 310px) and (max-width: 767px) {
    left: 5px;
  }
  .MuiTypography-body2 {
    color: #eb5757;
    margin-bottom: 0px;
    margin-left: 6px;
    @media only screen and (min-width: 310px) and (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 0 !important;
    }
  }

  position: absolute;
  right: 24px;
  top: 8px;
`;

export const StyledErrorText = styled.p`
  color: #f44336;
  margin: 0;
  font-size: 0.75rem;
  margin-top: 3px;
  text-align: left;
  font-family: AvertaDemo-Regular;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  margin-left: 20px;
`;

export const CheckedSymbool = styled(Box)`
  margin-bottom: 20px;
  margin-left: 260px;
  @media (max-width: 767px) {
    margin-left: 0px;
    svg {
      height: 36px;
      width: 36px;
    }
  }
`;

export const BoxWrap = styled(Box)`
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.09);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48%;
  padding: 50px;
  text-align: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .backTohome {
    border: 1px solid#3c3c3c;
    border-left: 0;
    position: relative;
    border-radius: 0;
    padding: 10px 20px;
    margin-top: 40px;
    .MuiButton-root .MuiButton-label {
      font-family: 'Averta-Semibold' !important;
    }
    &:hover {
      transition: none !important;
      background-color: rgba(0, 0, 0, 0.04);
      &:before,
      &:after {
        background: #f9f4f4;
        width: 20px;
        left: -7px;
        @media only screen and (min-width: 310px) and (max-width: 767px) {
          left: -5px;
        }
        border-left: 1px solid#3c3c3c;
      }
    }
    &:focus {
      transition: none !important;
      background-color: #3c3c3c;
      .MuiButton-label {
        color: #fff;
      }
      &:before,
      &:after {
        background: #3c3c3c;
        width: 20px;
        @media only screen and (min-width: 1251px) and (max-width: 1700px) {
          height: 24.5px;
        }
        border-left: 1px solid#3c3c3c;
      }
    }
    &:before {
      top: 0px;
      -webkit-transform: skew(157deg, 0deg);
      -ms-transform: skew(157deg, 0deg);
      transform: skew(157deg, 0deg);
      -webkit-transform: skew(157deg, 0deg);
    }
    &:after {
      bottom: 0px;
      -webkit-transform: skew(24deg, 0deg);
      -ms-transform: skew(24deg, 0deg);
      transform: skew(24deg, 0deg);
      -webkit-transform: skew(24deg, 0deg);
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 28px;
      left: -7px;
      background: #3c3c3c;
      @media only screen and (min-width: 1251px) and (max-width: 1700px) {
        height: 24px;
        left: -6px !important;
      }
      @media only screen and (min-width: 310px) and (max-width: 767px) {
        height: 22px;
        left: -5px;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 96%;
    padding: 20px 7px;
  }
`;

export const MainSuccessContainer = styled(Box)`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  background: aliceblue;
  z-index: 999;
  .MuiTypography-body1 {
    font-size: 1.4rem;
    margin-top: 30px;
    max-width: 75%;
  }
  .backTohome {
    // border-color: #008ee2;
    span {
      // color: #008ee2;
    }
  }
`;

// export const EligiblityBoxWrap = styled(Box)`
//   background: #fff;
//   padding: 40px 50px;
//   box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.09);
//   margin: 40px 0;
//   margin-top: 60px;

//   input:-internal-autofill-selected {
//     background-color: #fff !important;
//   }
// `;

export const BtnGroup = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin: -14px;
  &.marginLeft {
    margin-left: 10px;
  }

  button {
    margin: 14px;
    margin-left: 25px;
  }
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const ContentBoxWrap = styled(Box)`
  &.contentBoxW {
    padding: 107px 148px 0px;
    @media only screen and (min-width: 1024px) and (max-width: 1250px) {
      padding: 0px 40px 0px;
    }
    @media only screen and (min-width: 1251px) and (max-width: 1800px) {
      padding: 107px 60px 0px;
    }
    & + .contentBoxW {
      margin-top: 60px;
    }
    @media only screen and (max-width: 1023px) {
      padding: 0px;
    }
  }
`;

export const EligiblityBoxWrap = styled(Box)`
  background: #fff;
  padding: 40px 50px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.09);
  padding-bottom: 36px;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 40px 25px;
  }
  @media only screen and (max-width: 768px) {
    padding: 40px 10px;
    display: block;
  }
  @media (min-width: 1430px) {
    padding: 60px 90px;
    padding-bottom: 36px;
  }
`;

export const DashboardWrrapper = styled.div`
  margin-left: 393px;
  width: 100%;
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
    min-height: 100vh;
    height: 100%;
    @media (max-width: 992px) {
      width: 100%;
      margin-left: 0;
    }
  }

  padding: 1.75rem 0rem 6rem 0rem;
  color: rgba(0, 0, 0, 0.87);

  position: relative;
`;
