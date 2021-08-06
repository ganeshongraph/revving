import styled from 'styled-components';
import { Typography, Box, Button } from '@material-ui/core';

export const CustomContainer = styled(Box)`
  margin: 0 auto;
  width: 1140px;
  @media (max-width: 1140px) {
    width: 100%;
    padding: 0 16px;
    .MuiTypography-h4 {
      font-size: 1.85rem;
    }
  }

  &.TakeControl {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &.JoinBusinesses {
    margin-top: 100px;
    margin-bottom: 100px;
    @media (max-width: 1024px) {
      margin-bottom: 50px;
      margin-top: 50px;
    }
    .MuiTypography-h4 {
      margin-bottom: 50px !important;
    }
    .ulList {
      margin-top: 0px;
      li {
        margin-top: 25px;
         .cicJB {
          margin-right: 10px;
        }
      }
    }
    .MuiButton-containedPrimary {
      background-color: #ffbc3d;
    }
  }

  &.HowitWorkWrap {
    margin-top: 100px;
    @media (max-width: 1024px) {
      margin-top: 50px;
    }


    .custList {
      margin-top: 10px;
      li {
        display: flex;
        & + li {
          margin-top: 30px;
        }
        .MuiButton-containedPrimary {
          background-color: #ffbc3d;
          margin-left: 80px;
          margin-top: 20px;
        }
        .circleBox {
            margin-left: 0px;
            margin-right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #008ee2;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.1rem;
            
            @media (max-width: 1024px) {
              width: 40px;
              height: 40px;
              font-size: 1.2rem;
            }
          }
        div {
          width: calc(100% - 80px);
          .MuiTypography-h5 {
            font-size: 24px;
            color: #000000;
            margin-bottom: 5px;
            
            @media (max-width: 1024px) {
              font-size: 18px;
            }
          }
        }
      }
    }
    .MuchBox {
      .custList {
        margin-top: 20px;
        .MuiTypography-body1 {
          margin-left: 0px;
          margin-right: 60px;
          font-weight: 300;
        }
        .custSlider {
          margin-left: 50px;
          margin-right: 40px;
          @media (max-width: 1024px) {
            margin-left: 10px;
            margin-right: 10px;
          }
          .MuiSlider-root {
            color: #ffffff;
          }
          .MuiSlider-thumb.MuiSlider-thumbColorPrimary {
            color: rgb(60,60,60);
          }
          .MuiSlider-markLabel {
            @media (max-width: 768px) {
              left: 92%;
            }
          }
          .MuiSlider-markLabel,
          .MuiSlider-markLabelActive {
            color: #706b6b;
          }
          &.fullWidth {
            margin: 0 auto;
            width: 85%;
          }
          &.width100 {
            margin: 0 auto;
            width: 100%;
          }
        }
        li {
          padding: 30px 0;
          &.d-flex {
            display: flex;
            justify-content: space-between;
            .MuiTypography-body1 {
              margin: 0px;
            }
            .margin-right {
              margin-right: 20px;
            }
          }
          & + li {
            margin-top: 0px;
            border-top: 2px solid #ffffff;
          }
          &:last-child {
            padding: 0px;
          }
          .lstText {
            margin-top: 25px;
            margin-right: 0px;
            font-weight: 300;
          }
        }
      }
    }
  }

  &.TreasuryService {
    @media (max-width: 1024px) {
      .MuiTypography-h4 {
        font-size: 1.9rem;
      }
    }
  }
  &.FlexibleWrap {
    background: rgb(60,60,60);
    padding: 40px 60px;
    margin-top: 60px;
    color: #fff;

    @media (max-width: 1024px) {
      .custList {
        margin-top: 0;
      }
    }

    .MuiTypography-h2 {
      font-size: 3rem;
      max-width: 430px;
      color: #fff;
      @media (max-width: 1024px) {
      font-size: 2rem;
    }
  }

  &.aboutUs {
    .MuiTypography-body1 {
      margin-bottom: 20px;
    }
    .MuiTypography-h4 {
      margin-top: 20px;
      font-size: 30px;
      margin-bottom: 10px !important;
    }
    .cfWrap {
      font-size: 21px;
    }

    .MuiTypography-body2 {
      margin-top: 15px;
    }
  }
  
`;

export const OurSolution = styled(Box)`
  background: #c8d1d8;
  padding: 50px 0px;
  padding-bottom: 100px;
  margin-top: 100px;
  @media (max-width: 1024px) {
    padding-bottom: 100px;
    margin-top: 50px;
  }

  .MuiTypography-h5,
  .MuiTypography-body1 {
    margin-bottom: 20px;
  }

  .fullWidth {
    width: 100%;
  }

  .slick-dots {
    bottom: -55px;
  }

  .slick-dots li button:before {
    width: 15px;
    height: 15px;
    background: #fff;
    content: ' ';
    opacity: 1;
    border: 1px solid #262f3a;
    border-radius: 50%;
  }

  .slick-dots li.slick-active button:before {
    background: rgb(60, 60, 60);
  }
`;

export const ImgBox = styled(Box)`
  background-color: #e8e8e8;
  width: 100%;
  height: 320px;
  @media (max-width: 1024px) {
    width: 450px;
  }
  @media (max-width: 767px) {
    width: 300px;
    height: 250px;
  }
`;

export const TakeControl = styled(Box)`
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .MuiButton-containedPrimary {
    background-color: #ffbc3d;
  }
`;

export const Footer = styled(Box)`
  background: rgb(60,60,60);
  padding: 50px 0px;

  .MuiTypography-h4 {
    color: #fff;
  }

  .socialLink {
    display flex;
    align-items: center;
    justify-content: flex-end;
    
    li {
      margin: 0px;
      height: 42px;
      width: 42px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      & + li {
        margin-left: 15px;
      }
    }
  }

  .revvingFlogo {
    margin-bottom: 20px;
  }
  ul {
    margin: 0px;
    color: #fff;

    &.fleft {
      display flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 992px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .dfbox {
      display flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 992px) {
       margin-top: 15px;
      }

      li {
        padding: 0 10px;
        &:first-child {
          padding-left: 0px;
        }
        a {
          color: #fff;
              text-decoration: none;
              font-size: 14px;
        }
        & + li {
          margin-top: 0px;
          border-left: 1px solid #fff;
        }
      }
    }
  }
`;

export const AboutUs = styled(Box)`
  background: #c8d1d8;
  padding: 50px 0px;
  @media (max-width: 1024px) {
    .MuiTypography-h4 {
      font-size: 1.5rem;
      margin-bottom: 0px !important;

      &.h4h {
        font-size: 1.3rem;
        margin-top: 10px !important;
        margin-bottom: 10px !important;
      }
    }
  }
`;

export const RevContentBox = styled(Box)`
  background: #c8d1d8;
  padding: 30px 24px;
  margin-top: 80px;
  margin-bottom: 40px;
  .MuiTypography-h4 {
    max-width: 64%;
    @media (max-width: 1024px) {
      max-width: 100%;
      font-size: 1.3rem;
    }
  }
`;

export const MuchBox = styled(Box)`
  background: #c8d1d8;
  border-radius: 10px;
  padding: 30px 24px;
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

export const CustomUnorderlist = styled.ul`
  list-style: none;
  margin: 0 auto;
  margin-top: 40px;

  li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 10px;
    }

    .MuiTypography-body1 {
      margin-left: 10px;
    }
  }
`;

export const MainContentBox = styled(Box)`
  // margin-top: 40px;
  .resCenter {
    margin: 0 auto;

    @media (max-width: 1024px) {
      .MuiBox-root-12 {
        margin-top: 0px !important;
      }
    }
  }
`;

export const TreasuryContent = styled(Box)`
  text-align: center;
  margin-top: 60px !important;
  img {
    height: 100px;
  }

  .MuiTypography-h4 {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #000000;
    margin: 15px 0px 20px 0px !important;

    @media (max-width: 1024px) {
      .MuiTypography-h4 {
        font-size: 1.6rem;
      }
    }
  }

  .MuiTypography-body1 {
    font-size: 16px;
    color: #000000;
  }

  .MuiButton-containedPrimary {
        background-color: #FFBC3D;
  }

  .MuiButton-root {
    visibility: hidden;
    margin-top: 15px;
  }
}
&:hover {
  .MuiButton-root {
      visibility: visible;
    }
  }
`;

export const TreasuryButton = styled(Button)`
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

export const HeroWrap = styled(Box)`
  background: #f2f2f2 url(../assets/images/heroBg.png) no-repeat center top;
  background-size: cover;
  padding: 50px 0;
  height: 580px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
    height: 440px;
  }

  .MuiTypography-h3 {
    margin-bottom: 20px !important;
    padding-top: 100px;
    @media (max-width: 1024px) {
      padding-top: 50px;
      font-size: 2.5rem;
    }
  }

  .MuiTypography-body1 {
    font-size: 1.45rem;
    color: #000;
    max-width: 430px;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
      font-size: 1.35rem;
    }
  }

  .MuiButton-containedPrimary {
    background-color: #ffbc3d;
  }
`;
