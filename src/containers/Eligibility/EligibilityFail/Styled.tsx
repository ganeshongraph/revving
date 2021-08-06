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
  font-size: 16px;
  color: #706b6b;

  &.MuiTypography-body2 {
    margin-bottom: 20px;
  }
`;

export const MainContentBox = styled(Box)`
  // margin-top: 40px;
  height: 100%;
  min-height: 100vh;
  @media only screen and (max-width: 767px) {
    padding: 0 30px;
    height: 100%;
  }
`;

export const FormGroup = styled(Box)`
  margin-bottom: 40px;

  &.nextBtn {
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;

    .MuiButton-root {
      text-transform: capitalize;
    }

    .MuiButton-contained {
      color: #ffff;
      background: #c0c0c0;
    }

    &.backBtn {
      justify-content: space-between;
      .back {
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

  .sorryFurther {
    &.MuiTypography-body2 {
      margin-bottom: 20px;
      font-size: 18px;
      color: #000000;

      a {
        color: #008ee2;
      }
    }
  }

  .backTohome {
    &.MuiButton-root {
      // color: #008ee2 !important;
      // border-color: #008ee2;
    }
  }

  .btnLink {
    text-decoration: none;
  }
`;

export const ContentWrap = styled(Box)`
  background: #fff;
  padding: 40px 50px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.09);
  margin: 40px 0;
  @media (min-width: 1430px) {
    margin-left: 50px;
  }
  @media (max-width: 768px) {
    margin: 40px 0;
    padding: 40px 30px;
    margin-top: 30px;
  }
`;

export const BtnGroup = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin: -14px;
  button {
    margin: 12px;
  }
`;

export const SidebarWhiteBox = styled.div`
  background: #fff !important;
  min-height: 100vh;
  height: 100%;
  padding: 24px 30px;
  box-shadow: 12px 0px 20px 10px rgba(0, 0, 0, 0.09);
  margin-right: 60px;
  .sedebarHeadT {
    font-size: 27px;
  }

  .sidebarLogoImg {
    height: 54px;
    margin-left: -10px;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      margin-left: -15px;
    }
  }
`;

export const SidebarUl = styled.ul`
  margin-right: 60px;
  background: #fff;
  margin: 20px 0;
  border-top: 1px solid rgba(129, 129, 235, 0.6);
  border-bottom: 1px solid rgba(129, 129, 235, 0.6);
  padding: 20px 0;
  @media (max-width: 992px) {
    margin: 0px;
  }

  .sedebarHeadT {
    font-size: 27px;
  }

  .sidebarLogoImg {
    height: 54px;
    margin-left: -10px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin: 0px 16px;
    margin-top: 30px;
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
      color: #000000;
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;

      @media (max-width: 1024px) {
        font-size: 14px;
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
    border: 1px solid rgb(60, 60, 60);
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

export const StyledSvg = styled.div`
  position: relative;
  margin-right: 15px;
  height: 32px;
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

export const StyledTypography = styled(Typography)`
  display: flex;
  aligin-items: center;
  img {
    margin-right: 15px;
  }
  a {
    color: #706b6b !important;
    text-decoration: none;
  }
`;

export const EligibilityMainWrapBox = styled(Box)`
  height: 100%;
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
`;

export const SideBarLogo = styled(Box)``;
