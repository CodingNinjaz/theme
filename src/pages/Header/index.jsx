import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const hiChetanOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const hiChetanOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HeaderPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil gap-1.5 items-center justify-end mx-auto py-8 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1720px] mt-7 mx-auto md:px-5 w-full">
          <List
            className="flex flex-col gap-[49px] items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
                <Img
                  className="h-6 mb-0.5 md:ml-[0] ml-[7px] w-6"
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
                <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center md:ml-[0] ml-[928px] w-[6%] md:w-full">
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
                <Line className="bg-gray-300 h-6 md:h-px ml-2.5 md:ml-[0] md:w-full w-px" />
                <Img
                  className="h-6 md:ml-[0] ml-[7px] w-6"
                  src="images/img_mail.svg"
                  alt="mail_Two"
                />
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                </div>
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
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
                <Img
                  className="h-12"
                  src="images/img_fulllogo_gray_600.svg"
                  alt="fulllogo"
                />
                <Text
                  className="md:ml-[0] ml-[745px] text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[55px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  About US
                </Text>
                <Text
                  className="md:ml-[0] ml-[68px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Shop
                </Text>
                <Text
                  className="md:ml-[0] ml-[67px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Blog
                </Text>
                <Button
                  className="flex h-12 items-center justify-center ml-9 md:ml-[0] w-12"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_search_gray_900_03.svg"
                    alt="search"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="fill"
                >
                  Smat Touch
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[136px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="outline"
                >
                  Login/Register
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
                <Img
                  className="h-6 mb-0.5 md:ml-[0] ml-[7px] w-6"
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
                <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center md:ml-[0] ml-[928px] w-[6%] md:w-full">
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
                <Line className="bg-gray-300 h-6 md:h-px ml-2.5 md:ml-[0] md:w-full w-px" />
                <Img
                  className="h-6 md:ml-[0] ml-[7px] w-6"
                  src="images/img_mail.svg"
                  alt="mail_Two"
                />
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                </div>
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
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
                <Text
                  className="text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[55px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  About US
                </Text>
                <Text
                  className="md:ml-[0] ml-[68px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Shop
                </Text>
                <Text
                  className="md:ml-[0] ml-[67px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Blog
                </Text>
                <Img
                  className="h-12 md:ml-[0] ml-[377px]"
                  src="images/img_fulllogo_gray_600.svg"
                  alt="fulllogo"
                />
                <Button
                  className="flex h-12 items-center justify-center md:ml-[0] ml-[404px] w-12"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_search_gray_900_03.svg"
                    alt="search"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="fill"
                >
                  Smat Touch
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[136px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="outline"
                >
                  Login/Register
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[7px] w-full">
                <Img
                  className="h-6 mb-0.5 md:ml-[0] ml-[7px] w-6"
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
                <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center md:ml-[0] ml-[928px] w-[6%] md:w-full">
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
                <Line className="bg-gray-300 h-6 md:h-px ml-2.5 md:ml-[0] md:w-full w-px" />
                <Img
                  className="h-6 md:ml-[0] ml-[7px] w-6"
                  src="images/img_mail.svg"
                  alt="mail_Two"
                />
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                </div>
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
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
                <Img
                  className="h-12"
                  src="images/img_fulllogo_gray_600.svg"
                  alt="fulllogo"
                />
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[477px] w-[23%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18"
                  >
                    Home
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[55px] sm:mt-0 mt-[3px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    About US
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[68px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Shop
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[67px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Blog
                  </Text>
                </div>
                <Button
                  className="flex h-12 items-center justify-center md:ml-[0] ml-[304px] w-12"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_search_gray_900_03.svg"
                    alt="search"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="fill"
                >
                  Smat Touch
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[136px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="outline"
                >
                  Login/Register
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[5px] w-full">
                <Img
                  className="h-6 ml-2 md:ml-[0] w-6"
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
                  className="h-6 md:ml-[0] ml-[15px] w-6"
                  src="images/img_mail.svg"
                  alt="mail"
                />
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-300 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray300"
                >
                  sales@sunriseoasislighting.com
                </Text>
                <div className="h-[26px] mb-0.5 md:ml-[0] ml-[925px] relative w-[6%] md:w-full">
                  <div className="absolute bottom-[0] md:h-6 h-[25px] inset-x-[0] mx-auto w-full">
                    <div className="absolute flex flex-row gap-[7px] h-max inset-[0] items-start justify-center m-auto w-full">
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
                    <div className="absolute bg-gray-300 border border-gray-600 border-solid h-[13px] left-[10%] rounded-md top-[0] w-[13px]"></div>
                  </div>
                  <Text
                    className="absolute left-[14%] text-[10px] text-center text-gray-600 top-[0] tracking-[0.30px]"
                    size="txtNotoSerifTamilMedium10"
                  >
                    2
                  </Text>
                </div>
                <Line className="bg-gray-300 h-6 md:h-px ml-2.5 md:ml-[0] md:mt-0 my-0.5 md:w-full w-px" />
                <Img
                  className="h-6 ml-2.5 md:ml-[0] w-6"
                  src="images/img_mail.svg"
                  alt="mail_Two"
                />
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start ml-2 md:ml-[0] p-0.5 w-6">
                  <Img
                    className="h-[19px]"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                </div>
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
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
                <Img
                  className="h-12"
                  src="images/img_fulllogo_gray_600_48x175.svg"
                  alt="fulllogo"
                />
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[477px] w-[23%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18"
                  >
                    Home
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[55px] sm:mt-0 mt-[3px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    About US
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[68px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Shop
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[67px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Blog
                  </Text>
                </div>
                <Button
                  className="flex h-12 items-center justify-center md:ml-[0] ml-[293px] w-12"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_search_gray_900_03.svg"
                    alt="search"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                  shape="round"
                  color="gray_800"
                  size="md"
                  variant="fill"
                >
                  Smat Touch
                </Button>
                <SelectBox
                  className="md:flex-1 font-medium leading-[normal] ml-5 md:ml-[0] text-left text-sm tracking-[0.42px] w-[9%] md:w-full"
                  placeholderClassName="text-gray-800"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown_gray_900_03.svg"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="Hi, Chetan"
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        className="h-6 mr-[7px] w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  name="groupThirtyOne"
                  isMulti={false}
                  options={hiChetanOptionsList}
                  shape="round"
                  color="gray_800"
                  size="xs"
                  variant="outline"
                />
              </div>
            </div>
          </List>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[47px] p-5 w-full">
            <Text
              className="text-gray-800 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilMedium18"
            >
              Home
            </Text>
            <Text
              className="md:ml-[0] ml-[55px] text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              About US
            </Text>
            <Text
              className="md:ml-[0] ml-[68px] text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              Shop
            </Text>
            <Text
              className="md:ml-[0] ml-[67px] text-gray-600 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14Gray600"
            >
              Blog
            </Text>
            <Img
              className="h-12 md:ml-[0] ml-[377px]"
              src="images/img_fulllogo_gray_600.svg"
              alt="fulllogo"
            />
            <Button
              className="flex h-12 items-center justify-center md:ml-[0] ml-[404px] w-12"
              shape="round"
              color="gray_800"
              size="md"
              variant="outline"
            >
              <Img
                className="h-6"
                src="images/img_search_gray_900_03.svg"
                alt="search"
              />
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_800"
              size="md"
              variant="fill"
            >
              Smat Touch
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[136px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_800"
              size="md"
              variant="outline"
            >
              Login/Register
            </Button>
          </div>
          <List
            className="flex flex-col gap-[47px] items-center mt-[47px] w-full"
            orientation="vertical"
          >
            <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
              <Img
                className="h-12"
                src="images/img_fulllogo_gray_600.svg"
                alt="fulllogo"
              />
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[733px] w-[23%] md:w-full">
                <Text
                  className="text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Home
                </Text>
                <Text
                  className="sm:ml-[0] ml-[55px] sm:mt-0 mt-[3px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  About US
                </Text>
                <Text
                  className="sm:ml-[0] ml-[68px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Shop
                </Text>
                <Text
                  className="sm:ml-[0] ml-[67px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Blog
                </Text>
              </div>
              <Button
                className="flex h-12 items-center justify-center ml-12 md:ml-[0] w-12"
                shape="round"
                color="gray_800"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-6"
                  src="images/img_search_gray_900_03.svg"
                  alt="search"
                />
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_800"
                size="md"
                variant="fill"
              >
                Smat Touch
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[136px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_800"
                size="md"
                variant="outline"
              >
                Login/Register
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
              <Img
                className="h-12"
                src="images/img_fulllogo_gray_600.svg"
                alt="fulllogo"
              />
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[477px] w-[23%] md:w-full">
                <Text
                  className="text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Home
                </Text>
                <Text
                  className="sm:ml-[0] ml-[55px] sm:mt-0 mt-[3px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  About US
                </Text>
                <Text
                  className="sm:ml-[0] ml-[68px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Shop
                </Text>
                <Text
                  className="sm:ml-[0] ml-[67px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Blog
                </Text>
              </div>
              <Button
                className="flex h-12 items-center justify-center md:ml-[0] ml-[304px] w-12"
                shape="round"
                color="gray_800"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-6"
                  src="images/img_search_gray_900_03.svg"
                  alt="search"
                />
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] md:mt-0 mt-0.5 text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_800"
                size="md"
                variant="fill"
              >
                Smat Touch
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[136px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_800"
                size="md"
                variant="outline"
              >
                Login/Register
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
              <Img
                className="h-12"
                src="images/img_fulllogo_gray_600.svg"
                alt="fulllogo"
              />
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[477px] w-[23%] md:w-full">
                <Text
                  className="text-gray-800 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18"
                >
                  Home
                </Text>
                <Text
                  className="sm:ml-[0] ml-[55px] sm:mt-0 mt-[3px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  About US
                </Text>
                <Text
                  className="sm:ml-[0] ml-[68px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Shop
                </Text>
                <Text
                  className="sm:ml-[0] ml-[67px] sm:mt-0 mt-[5px] text-gray-600 text-sm tracking-[0.42px]"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Blog
                </Text>
              </div>
              <Button
                className="flex h-12 items-center justify-center md:ml-[0] ml-[293px] w-12"
                shape="round"
                color="gray_800"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-6"
                  src="images/img_search_gray_900_03.svg"
                  alt="search"
                />
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-5 md:ml-[0] text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_800"
                size="md"
                variant="fill"
              >
                Smat Touch
              </Button>
              <SelectBox
                className="md:flex-1 font-medium leading-[normal] ml-5 md:ml-[0] text-left text-sm tracking-[0.42px] w-[9%] md:w-full"
                placeholderClassName="text-gray-800"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown_gray_900_03.svg"
                    alt="arrow_down"
                  />
                }
                isSearchable={false}
                placeholder="Hi, Chetan"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      className="h-6 mr-[7px] w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                name="groupForty"
                isMulti={false}
                options={hiChetanOptionsList1}
                shape="round"
                color="gray_800"
                size="xs"
                variant="outline"
              />
            </div>
          </List>
          <div className="flex flex-col gap-[18px] items-center justify-start mt-[78px] w-[56%] md:w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
              <Img
                className="h-12"
                src="images/img_fulllogo_gray_600.svg"
                alt="fulllogo_One"
              />
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[116px] md:ml-[0] ml-[566px] text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_800"
                size="md"
                variant="fill"
              >
                Smat Touch
              </Button>
              <Button
                className="flex h-12 items-center justify-center ml-3.5 md:ml-[0] w-12"
                shape="round"
                color="gray_800"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-6"
                  src="images/img_search_gray_900_03.svg"
                  alt="editionalign"
                />
              </Button>
            </div>
            <div className="bg-gray-300 border border-gray-600 border-solid flex flex-row sm:gap-10 items-center justify-between pl-2.5 rounded w-[96%] md:w-full">
              <Text
                className="text-base text-gray-600 tracking-[0.48px]"
                size="txtNotoSerifTamilRegular16Gray600"
              >
                Find your product
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[112px] rounded-br rounded-tr"
                leftIcon={
                  <div className="mt-1 mb-[3px] mr-[7px] bg-gray-300">
                    <Img src="images/img_search_gray_300.svg" alt="search" />
                  </div>
                }
                color="gray_600"
                size="md"
                variant="fill"
              >
                <div className="text-base text-left tracking-[0.48px]">
                  Search
                </div>
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row items-center justify-start ml-3 md:ml-[0] mt-[59px] p-1 w-[21%] md:w-full">
            <Img
              className="h-[26px] ml-1"
              src="images/img_fulllogo.svg"
              alt="fulllogo_Two"
            />
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-[70px] text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_300"
              size="md"
              variant="fill"
            >
              Smat Touch
            </Button>
            <Button
              className="flex h-12 items-center justify-center ml-2 w-12"
              shape="round"
              color="gray_800"
              size="md"
              variant="outline"
            >
              <Img
                className="h-6"
                src="images/img_search_gray_900_03.svg"
                alt="editionalign_One"
              />
            </Button>
          </div>
          <div className="bg-gray-300 border border-gray-600 border-solid flex flex-row gap-[90px] items-center justify-start ml-5 md:ml-[0] mt-[15px] pl-4 rounded w-1/5 md:w-full">
            <Text
              className="text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Find your product
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[91px] rounded-br rounded-tr"
              leftIcon={
                <div className="mt-[5px] mb-0.5 mr-1 bg-gray-300">
                  <Img src="images/img_search_gray_300.svg" alt="search" />
                </div>
              }
              color="gray_600"
              size="md"
              variant="fill"
            >
              <div className="font-medium leading-[normal] text-left text-sm tracking-[0.42px]">
                Search
              </div>
            </Button>
          </div>
          <Text
            className="ml-6 md:ml-[0] mt-[205px] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
            size="txtNotoSerifTamilBold36"
          >
            About us Mega Menu
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gray-300_87 flex flex-col items-center justify-start p-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1720px] mx-auto md:px-5 w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-gray-800_63 flex flex-1 flex-row gap-5 items-start justify-start p-3.5 rounded-[5px] w-full">
                  <div className="bg-gray-800 h-[108px] ml-[5px] mt-1.5 rounded-[5px] w-[28%]"></div>
                  <div className="flex flex-col items-start justify-start mt-1.5">
                    <Text
                      className="text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      Indoor Lights
                    </Text>
                    <Text
                      className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                      size="txtNotoSerifTamilRegular10"
                    >
                      Indoor lights can be used to create a cozy atmosphere in
                      your home.{" "}
                    </Text>
                    <Text
                      className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14"
                    >
                      Know More About Indoor Lights
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 sm:flex-col flex-row gap-5 items-start justify-center p-3.5 rounded-[5px] w-full">
                  <div className="bg-gray-800 h-[108px] sm:ml-[0] ml-[5px] sm:mt-0 mt-1.5 rounded-[5px] w-[28%]"></div>
                  <div className="flex flex-col items-start justify-start mr-6 sm:mt-0 mt-1.5">
                    <Text
                      className="text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      Indoor Lights
                    </Text>
                    <Text
                      className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                      size="txtNotoSerifTamilRegular10"
                    >
                      Indoor lights can be used to create a cozy atmosphere in
                      your home.{" "}
                    </Text>
                    <Text
                      className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14"
                    >
                      Know More About Indoor Lights
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 sm:flex-col flex-row gap-5 items-start justify-center p-3.5 rounded-[5px] w-full">
                  <div className="bg-gray-800 h-[108px] sm:ml-[0] ml-[5px] sm:mt-0 mt-1.5 rounded-[5px] w-[28%]"></div>
                  <div className="flex flex-col items-start justify-start mr-6 sm:mt-0 mt-1.5">
                    <Text
                      className="text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      Indoor Lights
                    </Text>
                    <Text
                      className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                      size="txtNotoSerifTamilRegular10"
                    >
                      Indoor lights can be used to create a cozy atmosphere in
                      your home.{" "}
                    </Text>
                    <Text
                      className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14"
                    >
                      Know More About Indoor Lights
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 sm:flex-col flex-row gap-5 items-start justify-center p-3.5 rounded-[5px] w-full">
                  <div className="bg-gray-800 h-[108px] sm:ml-[0] ml-[5px] sm:mt-0 mt-1.5 rounded-[5px] w-[28%]"></div>
                  <div className="flex flex-col items-start justify-start mr-6 sm:mt-0 mt-1.5">
                    <Text
                      className="text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      Indoor Lights
                    </Text>
                    <Text
                      className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                      size="txtNotoSerifTamilRegular10"
                    >
                      Indoor lights can be used to create a cozy atmosphere in
                      your home.{" "}
                    </Text>
                    <Text
                      className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14"
                    >
                      Know More About Indoor Lights
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800_63 flex flex-1 flex-col items-start justify-end p-[17px] rounded-[5px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                    <div className="bg-gray-800 h-[108px] rounded-[5px] w-[30%]"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-800 text-xl tracking-[0.60px]"
                        size="txtNotoSerifTamilBold20"
                      >
                        Indoor Lights
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[10px] text-gray-800 tracking-[0.30px] w-[89%] sm:w-full"
                        size="txtNotoSerifTamilRegular10"
                      >
                        Indoor lights can be used to create a cozy atmosphere in
                        your home.{" "}
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        Know More About Indoor Lights
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[124px] mt-[103px] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[1.08px]"
            size="txtNotoSerifTamilBold36"
          >
            Shop Mega Menu
          </Text>
          <footer className="bg-gray-300_87 flex items-center justify-center mt-7 md:px-5 w-full">
            <div className="flex flex-col items-center justify-center ml-[120px] mr-[157px] my-[23px] w-[86%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-gray-800 text-xl tracking-[0.60px] w-full"
                    size="txtNotoSerifTamilBold20"
                  >
                    Illuminate your space with style and efficiency
                  </Text>
                  <Text
                    className="mt-5 text-gray-600 text-sm tracking-[0.42px] w-[81%] sm:w-full"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Experience the brilliance of stylish and sustainable
                    lighting options with sunrise oasis lighting
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[261px] mt-5 rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="md"
                    variant="outline"
                  >
                    Browse all the categories..
                  </Button>
                  <div className="flex flex-col items-center justify-start mt-16 w-full">
                    <Img
                      className="h-[244px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
                      src="images/img_image1_244x363.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <Line className="bg-black-900 h-[543px] md:h-px md:w-full w-px" />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-gray-800 text-xl tracking-[0.60px]"
                    size="txtNotoSerifTamilBold20"
                  >
                    Illuminate your space with style and efficiency
                  </Text>
                  <Text
                    className="mt-[19px] text-gray-600 text-sm tracking-[0.42px] w-[35%] sm:w-full"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Experience the brilliance of stylish and sustainable
                    lighting options with sunrise oasis lighting
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[25px] mt-[55px] w-[98%] md:w-full">
                    <div className="flex flex-col gap-14 items-center justify-start w-[16%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[145px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
                          src="images/img_image2_145x183.png"
                          alt="imageTwo"
                        />
                      </div>
                      <div className="bg-gray-800 h-[145px] rounded-[5px] shadow-bs1 w-full"></div>
                    </div>
                    <ul className="flex flex-col items-start justify-start ml-6 md:ml-[0] md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-800 text-lg tracking-[0.54px]"
                        >
                          <Text size="txtNotoSerifTamilMedium18">
                            Indoor Lights
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[7px] text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-1.5 text-sm text-yellow-800 tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Yellow800">
                            See More
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[53px] text-gray-800 text-lg tracking-[0.54px]"
                        >
                          <Text size="txtNotoSerifTamilMedium18">
                            Indoor Lights
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[7px] text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-1.5 text-sm text-yellow-800 tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Yellow800">
                            See More
                          </Text>
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-col gap-14 items-center justify-start md:ml-[0] ml-[102px] w-[16%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[145px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
                          src="images/img_image3_145x183.png"
                          alt="imageThree"
                        />
                      </div>
                      <div className="bg-gray-800 h-[145px] rounded-[5px] shadow-bs1 w-full"></div>
                    </div>
                    <ul className="flex flex-col items-start justify-start ml-6 md:ml-[0] md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-800 text-lg tracking-[0.54px]"
                        >
                          <Text size="txtNotoSerifTamilMedium18">
                            Indoor Lights
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[7px] text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-1.5 text-sm text-yellow-800 tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Yellow800">
                            See More
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[53px] text-gray-800 text-lg tracking-[0.54px]"
                        >
                          <Text size="txtNotoSerifTamilMedium18">
                            Indoor Lights
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[7px] text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-1.5 text-sm text-yellow-800 tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Yellow800">
                            See More
                          </Text>
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-col gap-14 items-center justify-start md:ml-[0] ml-[102px] w-[16%] md:w-full">
                      <div className="bg-gray-800 h-[145px] rounded-[5px] shadow-bs1 w-full"></div>
                      <div className="bg-gray-800 h-[145px] rounded-[5px] shadow-bs1 w-full"></div>
                    </div>
                    <ul className="flex flex-col items-start justify-start ml-6 md:ml-[0] md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-800 text-lg tracking-[0.54px]"
                        >
                          <Text size="txtNotoSerifTamilMedium18">
                            Indoor Lights
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[7px] text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-1.5 text-sm text-yellow-800 tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Yellow800">
                            See More
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[53px] text-gray-800 text-lg tracking-[0.54px]"
                        >
                          <Text size="txtNotoSerifTamilMedium18">
                            Indoor Lights
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[7px] text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Gray600">
                            Downlight
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-1.5 text-sm text-yellow-800 tracking-[0.42px]"
                        >
                          <Text size="txtNotoSerifTamilMedium14Yellow800">
                            See More
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
