import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutusCompanyInformationPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[700px] sm:h-[721px] md:px-5 relative w-full">
            <div className="h-[700px] sm:h-[721px] m-auto w-full">
              <Img
                className="h-[700px] m-auto object-cover w-full"
                src="images/img_aboutusbanner1.png"
                alt="aboutusbannerOne"
              />
              <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-[588px] h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
                  <Img
                    className="h-6 mb-0.5 md:ml-[0] ml-[88px] w-6"
                    src="images/img_search.svg"
                    alt="communication"
                  />
                  <Text
                    className="ml-0.5 md:ml-[0] text-gray-300 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray300"
                  >
                    042232332 043236088
                  </Text>
                  <Img
                    className="h-6 mb-0.5 md:ml-[0] ml-[15px] w-6"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Text
                    className="md:ml-[0] ml-[3px] text-gray-300 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray300"
                  >
                    sales@sunriseoasislighting.com
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center md:ml-[0] ml-[980px] w-[6%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_mail.svg"
                      alt="mail_One"
                    />
                    <Text
                      className="text-gray-300 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray300"
                    >
                      Your Cart
                    </Text>
                  </div>
                  <Img
                    className="h-6 md:ml-[0] ml-[18px] w-6"
                    src="images/img_mail.svg"
                    alt="mail_Two"
                  />
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-1 grid grid-cols-[repeat(2,_1fr_1px)_1fr] ml-2 md:ml-[0] w-[5%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col h-6 items-center justify-start p-0.5 w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </div>
                    <Line className="self-center h-6 bg-gray-300 w-px" />
                    <div className="flex flex-col h-6 items-center justify-start p-0.5 w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                    </div>
                    <Line className="self-center h-6 bg-gray-300 w-px" />
                    <div className="flex flex-col h-6 items-center justify-start p-0.5 w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_youtube.svg"
                        alt="youtube"
                      />
                    </div>
                  </List>
                  <Img
                    className="h-6 ml-2 md:ml-[0] w-6"
                    src="images/img_mail.svg"
                    alt="mail_Three"
                  />
                  <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                    <Img
                      className="h-[19px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div className="bg-gradient  flex flex-col items-center justify-end p-[11px] w-full">
                  <div className="flex flex-col gap-[13px] justify-start mt-3 w-[90%] md:w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-gray-300 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray300"
                      >
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          Messages{" "}
                        </span>
                        <span className="text-yellow-800 tracking-[0.54px] font-notoseriftamil text-left text-lg font-medium">
                          Company Information
                        </span>
                        <span className="text-gray-300 font-notoseriftamil text-left font-medium">
                          {" "}
                          Projects & Services Gallery CSR Download Contact US
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-gray-300 h-0.5 md:ml-[0] ml-[1016px] mr-[483px] w-[13%]" />
                  </div>
                </div>
              </div>
            </div>
            <Header className="absolute bg-gray-800_71 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[6%] w-full" />
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1674px] mt-[118px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="border border-solid flex flex-col gray_600_gray_800_border3 h-[170px] items-center justify-start p-[27px] sm:px-5 rounded w-[170px]">
                  <Img
                    className="h-[99px] md:h-auto my-[7px] object-cover"
                    src="images/img_mission.png"
                    alt="mission"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[31px]">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    Mission
                  </Text>
                  <Text
                    className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px] w-full"
                    size="txtNotoSerifTamilRegular16Gray600"
                  >
                    <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                      At{" "}
                    </span>
                    <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                      Sunrise Oasis Lighting,
                    </span>
                    <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                      <>
                        {" "}
                        we assess our success by the degree of customer
                        satisfaction we obtain, not by the quality of our
                        methods. Sunrise Oasis Lighting is proud to manage some
                        of the region&#39;s most cutting-edge lighting equipment
                        and services.{" "}
                      </>
                    </span>
                  </Text>
                </div>
                <div className="border border-solid flex flex-col gray_600_gray_800_border4 h-[170px] items-center justify-end md:ml-[0] ml-[78px] p-[25px] sm:px-5 rounded w-[170px]">
                  <Img
                    className="h-[118px] md:h-auto object-cover"
                    src="images/img_group91.png"
                    alt="groupNinetyOne"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[29px]">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                    size="txtNotoSerifTamilBold36Gray800"
                  >
                    Vision
                  </Text>
                  <Text
                    className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px] w-full"
                    size="txtNotoSerifTamilRegular16Gray600"
                  >
                    <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                      At{" "}
                    </span>
                    <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                      Sunrise Oasis Lighting,
                    </span>
                    <span className="text-gray-600 font-notoseriftamil text-left font-normal">
                      <>
                        {" "}
                        we assess our success by the degree of customer
                        satisfaction we obtain, not by the quality of our
                        methods. Sunrise Oasis Lighting is proud to manage some
                        of the region&#39;s most cutting-edge lighting equipment
                        and services.{" "}
                      </>
                    </span>
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[142px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                size="txtNotoSerifTamilBold36Gray800"
              >
                Values | Objectives
              </Text>
              <Text
                className="leading-[200.00%] mt-[31px] text-base text-center text-gray-600 tracking-[0.48px] w-[93%] sm:w-full"
                size="txtNotoSerifTamilRegular16Gray600"
              >
                <span className="text-gray-600 font-notoseriftamil font-normal">
                  At{" "}
                </span>
                <span className="text-gray-600 font-notoseriftamil font-normal">
                  Sunrise Oasis Lighting,
                </span>
                <span className="text-gray-600 font-notoseriftamil font-normal">
                  <>
                    {" "}
                    we assess our success by the degree of customer satisfaction
                    we obtain, not by the quality of our methods. Sunrise Oasis
                    Lighting is proud to manage some of the region&#39;s most
                    cutting-edge lighting equipment and services. At{" "}
                  </>
                </span>
                <span className="text-gray-600 font-notoseriftamil font-normal">
                  Sunrise Oasis Lighting,
                </span>
                <span className="text-gray-600 font-notoseriftamil font-normal">
                  <>
                    {" "}
                    we assess our success by the degree of customer satisfaction
                    we obtain, not by the quality of our methods. Sunrise Oasis
                    Lighting is proud to manage some of the region&#39;s most
                    cutting-edge lighting equipment and services.{" "}
                  </>
                </span>
              </Text>
            </div>
          </div>
          <div className="bg-gray-300 flex flex-col items-center justify-start mt-[100px] p-[99px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1641px] mx-auto w-full">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                  size="txtNotoSerifTamilBold36Gray800"
                >
                  Group of Companies
                </Text>
                <Text
                  className="leading-[200.00%] text-base text-center text-gray-600 tracking-[0.48px]"
                  size="txtNotoSerifTamilRegular16Gray600"
                >
                  <>
                    Discover our wide range of lighting fixture categories and
                    find the perfect addition to your space. From modern to
                    classic, we have a style to suit every taste.
                    <br />
                    Shop now and brighten up your home with our stunning
                    lighting fixtures!
                  </>
                </Text>
                <div className="md:gap-5 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-300 border border-gray-600 border-solid flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded w-full">
                    <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                        <div className="bg-gray-800 h-[143px] rounded w-[31%]"></div>
                        <div className="flex flex-col gap-3 items-start justify-start">
                          <Text
                            className="text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilBold18Gray800"
                          >
                            Group of Companies
                          </Text>
                          <Text
                            className="text-gray-600 text-sm tracking-[0.42px] w-full"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Discover our wide range of lighting fixture
                            categories and find the perfect addition to your
                            space. From modern to classic, we have a style to
                            suit every taste.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1719px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                size="txtNotoSerifTamilBold36Gray800"
              >
                Why to Choose Us ?
              </Text>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                  <div className="md:h-[131px] h-[196px] relative w-1/2 md:w-full">
                    <div className="absolute border border-gray-600 border-solid bottom-[0] flex flex-col items-center justify-start p-[18px] right-[0] rounded">
                      <Text
                        className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px] w-[88%] sm:w-full"
                        size="txtNotoSerifTamilRegular16Gray600"
                      >
                        Discover our wide range of lighting fixture categories
                        and find the perfect addition to your space. From modern
                        to classic, we have a style to suit every taste. Shop
                        now and brighten up your home with our stunning lighting
                        fixtures!
                      </Text>
                    </div>
                    <Input
                      name="language"
                      placeholder="Discover our wide range of lighting fixture "
                      className="!placeholder:text-gray-800 !text-gray-800 p-0 text-base text-left tracking-[0.48px] w-full"
                      wrapClassName="border border-gray-600 border-solid flex inset-x-[0] mx-auto rounded-bl rounded-tl rounded-tr top-[0] w-full"
                      suffix={
                        <div className="ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-gray-800 left-[4%] absolute">
                          <Img
                            className="absolute my-auto"
                            src="images/img_caretsquareup.svg"
                            alt="caret-square-up"
                          />
                        </div>
                      }
                      color="gray_300"
                      size="xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="md:h-[131px] h-[196px] relative w-1/2 md:w-full">
                    <div className="absolute border border-gray-600 border-solid bottom-[0] flex flex-col items-center justify-start p-[18px] right-[0] rounded">
                      <Text
                        className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px] w-[88%] sm:w-full"
                        size="txtNotoSerifTamilRegular16Gray600"
                      >
                        Discover our wide range of lighting fixture categories
                        and find the perfect addition to your space. From modern
                        to classic, we have a style to suit every taste. Shop
                        now and brighten up your home with our stunning lighting
                        fixtures!
                      </Text>
                    </div>
                    <Input
                      name="language_One"
                      placeholder="Discover our wide range of lighting fixture "
                      className="!placeholder:text-gray-800 !text-gray-800 p-0 text-base text-left tracking-[0.48px] w-full"
                      wrapClassName="border border-gray-600 border-solid flex inset-x-[0] mx-auto rounded-bl rounded-tl rounded-tr top-[0] w-full"
                      suffix={
                        <div className="ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-gray-800 left-[4%] absolute">
                          <Img
                            className="absolute my-auto"
                            src="images/img_caretsquareup.svg"
                            alt="caret-square-up"
                          />
                        </div>
                      }
                      color="gray_300"
                      size="xl"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-full">
                  <Input
                    name="language_Two"
                    placeholder="Discover our wide range of lighting fixture "
                    className="p-0 placeholder:text-gray-800 text-base text-left tracking-[0.48px] w-full"
                    wrapClassName="border border-gray-600 border-solid flex sm:flex-1 rounded-bl rounded-tl rounded-tr sm:w-full"
                    suffix={
                      <div className="ml-[35px] bg-gray-800">
                        <Img
                          className="my-auto"
                          src="images/img_caretsquareup.svg"
                          alt="caret-square-up"
                        />
                      </div>
                    }
                    color="blue_gray_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                  <Input
                    name="language_Three"
                    placeholder="Discover our wide range of lighting fixture "
                    className="p-0 placeholder:text-gray-800 text-base text-left tracking-[0.48px] w-full"
                    wrapClassName="border border-gray-600 border-solid flex sm:flex-1 rounded-bl rounded-tl rounded-tr sm:w-full"
                    suffix={
                      <div className="ml-[35px] bg-gray-800">
                        <Img
                          className="my-auto"
                          src="images/img_caretsquareup.svg"
                          alt="caret-square-up"
                        />
                      </div>
                    }
                    color="blue_gray_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-full">
                  <Input
                    name="language_Four"
                    placeholder="Discover our wide range of lighting fixture "
                    className="p-0 placeholder:text-gray-800 text-base text-left tracking-[0.48px] w-full"
                    wrapClassName="border border-gray-600 border-solid flex sm:flex-1 rounded-bl rounded-tl rounded-tr sm:w-full"
                    suffix={
                      <div className="ml-[35px] bg-gray-800">
                        <Img
                          className="my-auto"
                          src="images/img_caretsquareup.svg"
                          alt="caret-square-up"
                        />
                      </div>
                    }
                    color="blue_gray_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                  <Input
                    name="language_Five"
                    placeholder="Discover our wide range of lighting fixture "
                    className="p-0 placeholder:text-gray-800 text-base text-left tracking-[0.48px] w-full"
                    wrapClassName="border border-gray-600 border-solid flex sm:flex-1 rounded-bl rounded-tl rounded-tr sm:w-full"
                    suffix={
                      <div className="ml-[35px] bg-gray-800">
                        <Img
                          className="my-auto"
                          src="images/img_caretsquareup.svg"
                          alt="caret-square-up"
                        />
                      </div>
                    }
                    color="blue_gray_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 flex flex-col items-center justify-start mt-[100px] p-[95px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1641px] mb-1 mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                  size="txtNotoSerifTamilBold36Gray800"
                >
                  Associate Brands
                </Text>
                <Text
                  className="leading-[200.00%] mt-[23px] text-base text-center text-gray-600 tracking-[0.48px]"
                  size="txtNotoSerifTamilRegular16Gray600"
                >
                  <>
                    Discover our wide range of lighting fixture categories and
                    find the perfect addition to your space. From modern to
                    classic, we have a style to suit every taste.
                    <br />
                    Shop now and brighten up your home with our stunning
                    lighting fixtures!
                  </>
                </Text>
                <div className="md:gap-5 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-5 w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-100 border border-gray-600 border-solid flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded w-full">
                    <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                        <div className="bg-gray-600 h-[143px] rounded w-[31%]"></div>
                        <div className="flex flex-col gap-3 items-start justify-start">
                          <Text
                            className="text-gray-800 text-lg tracking-[0.54px]"
                            size="txtNotoSerifTamilBold18Gray800"
                          >
                            Group of Companies
                          </Text>
                          <Text
                            className="text-gray-600 text-sm tracking-[0.42px] w-full"
                            size="txtNotoSerifTamilMedium14Gray600"
                          >
                            Discover our wide range of lighting fixture
                            categories and find the perfect addition to your
                            space. From modern to classic, we have a style to
                            suit every taste.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="bg-blue_gray-100 h-[143px] rounded w-[31%]"></div>
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg tracking-[0.54px]"
                          size="txtNotoSerifTamilBold18Gray800"
                        >
                          Group of Companies
                        </Text>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.42px] w-full"
                          size="txtNotoSerifTamilMedium14Gray600"
                        >
                          Discover our wide range of lighting fixture categories
                          and find the perfect addition to your space. From
                          modern to classic, we have a style to suit every
                          taste.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1719px] mt-[95px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
              size="txtNotoSerifTamilBold36Gray800"
            >
              Clients
            </Text>
            <Text
              className="leading-[200.00%] mt-[23px] text-base text-center text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              <>
                Discover our wide range of lighting fixture categories and find
                the perfect addition to your space. From modern to classic, we
                have a style to suit every taste.
                <br />
                Shop now and brighten up your home with our stunning lighting
                fixtures!
              </>
            </Text>
            <div className="border border-gray-600 border-solid flex flex-col items-center justify-start mt-[30px] p-[7px] rounded w-full">
              <div className="flex flex-col gap-3 items-center justify-start mt-1 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                  <Text
                    className="text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Downlights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[67px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[75px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Spot Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[61px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[59px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Modular Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[47px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[23px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Recessed Linear Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[29px] md:w-full w-px" />
                  <Text
                    className="ml-9 md:ml-[0] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Magnetic Track Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[21px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[25px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Linear Pendant Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px ml-8 md:ml-[0] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[67px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Cabinet Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[46px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[54px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Track Lights
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                  <Line className="bg-black-900 h-px rotate-[-180deg] w-[11%]" />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                  <Text
                    className="text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Mirror Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[59px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[61px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Outdoor Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[47px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[54px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Industrial Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[42px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[42px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Decorative Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px ml-12 md:ml-[0] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[71px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Facad Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[55px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[37px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Strip & Neon Lights
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[39px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[73px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Accessories
                  </Text>
                  <Line className="bg-black-900 h-[92px] md:h-px md:ml-[0] ml-[60px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[53px] text-gray-800 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14"
                  >
                    Street Lights
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start mt-[95px] md:px-5">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
              size="txtNotoSerifTamilBold36Gray800"
            >
              Certification that validates
            </Text>
            <Text
              className="leading-[200.00%] text-base text-center text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              <>
                Light up any space with our versatile lighting fixtures. From
                the living room to the bedroom and beyond, our fixtures are
                perfect for any area of your home.
                <br />
                Shop now and discover the perfect lighting solution for every
                room!
              </>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[54px] md:px-5 w-3/5 md:w-full">
            <div className="bg-blue_gray-100 h-[344px] rounded w-[24%]"></div>
            <div className="bg-blue_gray-100 h-[344px] ml-5 md:ml-[0] rounded w-[24%]"></div>
            <div className="bg-blue_gray-100 h-[344px] md:ml-[0] ml-[21px] rounded w-[24%]"></div>
            <div className="bg-blue_gray-100 h-[344px] ml-5 md:ml-[0] rounded w-[24%]"></div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-5 md:px-5 w-3/5 md:w-full">
            <div className="bg-blue_gray-100 h-[344px] rounded w-[24%]"></div>
            <div className="bg-blue_gray-100 h-[344px] ml-5 md:ml-[0] rounded w-[24%]"></div>
            <div className="bg-blue_gray-100 h-[344px] md:ml-[0] ml-[21px] rounded w-[24%]"></div>
            <div className="bg-blue_gray-100 h-[344px] ml-5 md:ml-[0] rounded w-[24%]"></div>
          </div>
          <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutusCompanyInformationPage;
