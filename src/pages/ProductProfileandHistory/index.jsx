import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const ProductProfileandHistoryPage = () => {
  const [group449value, setGroup449value] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header1 className="bg-gray-800 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-gray-300 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-[13px] w-full">
            <div className="h-11 md:h-[43px] sm:ml-[0] ml-[378px] md:px-5 relative w-[8%] sm:w-full">
              <Text
                className="ml-auto mr-[43px] mt-2 text-base text-gray-800 tracking-[0.48px]"
                size="txtNotoSerifTamilRegular16"
              >
                Back
              </Text>
              <div className="absolute border border-gray-800 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[21px] sm:px-5 rounded w-full">
                <Img
                  className="h-px md:ml-[0] ml-[19px]"
                  src="images/img_arrow1.svg"
                  alt="arrowOne"
                />
              </div>
            </div>
            <Text
              className="mr-[377px] text-gray-800 text-sm tracking-[0.42px]"
              size="txtNotoSerifTamilMedium14"
            >
              <span className="text-gray-600 font-notoseriftamil text-left font-medium">
                Profile/History{" "}
              </span>
              <span className="text-gray-800 font-notoseriftamil text-left font-medium">
                {" "}
              </span>
              <span className="text-gray-800 tracking-[0.54px] font-notoseriftamil text-left text-lg font-medium">
                Product Listing Cart
              </span>
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[390px] mt-[17px] text-gray-600 text-lg tracking-[0.54px]"
            size="txtNotoSerifTamilBold18"
          >
            <span className="text-gray-600 font-notoseriftamil text-left font-bold">
              <>Home &gt; </>
            </span>
            <span className="text-gray-800 font-notoseriftamil text-left font-bold">
              Profile
            </span>
          </Text>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[22px] mx-auto p-[23px] md:px-5 w-3/5 md:w-full">
            <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between mb-3.5 mt-2.5 w-full">
              <div className="h-[270px] relative w-[270px]">
                <Img
                  className="h-[270px] m-auto object-cover rounded w-[270px]"
                  src="images/img_rectangle255.png"
                  alt="rectangle255"
                />
                <Button
                  className="!text-white-A700 absolute bottom-[6%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[149px] mx-auto rounded-[14px] text-[10px] text-center tracking-[0.30px]"
                  color="gray_600"
                  size="xs"
                  variant="fill"
                >
                  Upload Your Picture
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[74%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="md:mt-0 mt-[3px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Full Name
                  </Text>
                  <Img
                    className="h-5 md:ml-[0] ml-[283px] w-5"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                  <Text
                    className="md:ml-[0] ml-[57px] md:mt-0 mt-[3px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Address
                  </Text>
                  <Img
                    className="h-5 md:ml-[0] ml-[283px] w-5"
                    src="images/img_edit.svg"
                    alt="edit_One"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between mt-3 w-full">
                  <Input
                    name="group440"
                    placeholder="First Name"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    type="text"
                    shape="round"
                    color="gray_600"
                    size="xs"
                    variant="outline"
                  ></Input>
                  <Input
                    name="group439"
                    placeholder="Street Address"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="gray_600"
                    size="xs"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between mt-[17px] w-full">
                  <Input
                    name="group436"
                    placeholder="Last Name"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    type="text"
                    shape="round"
                    color="gray_600"
                    size="xs"
                    variant="outline"
                  ></Input>
                  <Input
                    name="group435"
                    placeholder="City"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="gray_600"
                    size="xs"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-12 w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Email Address (Work)
                  </Text>
                  <Img
                    className="h-5 md:ml-[0] ml-[200px] w-5"
                    src="images/img_edit.svg"
                    alt="edit_Two"
                  />
                  <Text
                    className="md:ml-[0] ml-[57px] text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Company Name
                  </Text>
                  <Img
                    className="h-5 md:ml-[0] ml-[228px] w-5"
                    src="images/img_edit.svg"
                    alt="edit_Three"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between mt-2.5 w-full">
                  <Input
                    name="email"
                    placeholder="abc@abc.com"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    type="email"
                    shape="round"
                    color="gray_600"
                    size="xs"
                    variant="outline"
                  ></Input>
                  <Input
                    name="email_One"
                    placeholder="abc@abc.com"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm tracking-[0.42px] w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    type="email"
                    shape="round"
                    color="gray_600"
                    size="xs"
                    variant="outline"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[390px] mt-[19px] text-gray-600 text-lg tracking-[0.54px]"
            size="txtNotoSerifTamilBold18"
          >
            History
          </Text>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[7px] mx-auto p-3.5 md:px-5 rounded w-3/5 md:w-full">
            <Text
              className="md:mt-0 my-1.5 text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18"
            >
              SN
            </Text>
            <Text
              className="md:ml-[0] ml-[104px] md:mt-0 my-1.5 text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18"
            >
              Date
            </Text>
            <Text
              className="md:ml-[0] ml-[100px] md:mt-0 my-1.5 text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18"
            >
              Quotation Number
            </Text>
            <Text
              className="mb-2 md:ml-[0] ml-[85px] md:mt-0 mt-1 text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18"
            >
              Total Product No
            </Text>
            <Text
              className="mb-2 md:ml-[0] ml-[78px] md:mt-0 mt-1 text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18"
            >
              Total Amount
            </Text>
            <Text
              className="mb-2 md:ml-[0] ml-[116px] md:mt-0 mt-1 text-gray-600 text-lg tracking-[0.54px]"
              size="txtNotoSerifTamilBold18"
            >
              Action
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[404px] mt-6 md:px-5 w-[57%] md:w-full">
            <Text
              className="text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              1
            </Text>
            <Text
              className="md:ml-[0] ml-[121px] md:mt-0 mt-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              08 Jane 2023
            </Text>
            <Text
              className="md:ml-[0] ml-[43px] md:mt-0 mt-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              TL008PQ062023
            </Text>
            <Text
              className="md:ml-[0] ml-[138px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              50
            </Text>
            <Text
              className="md:ml-[0] ml-[221px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              AED 50,000/-
            </Text>
            <Text
              className="mb-0.5 md:ml-[0] ml-[130px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Download
            </Text>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[17px] mx-auto p-[5px] md:px-5 rounded w-3/5 md:w-full">
            <Text
              className="ml-2 md:ml-[0] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              1
            </Text>
            <Text
              className="md:ml-[0] ml-[121px] md:mt-0 mt-1 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              08 Jane 2023
            </Text>
            <Text
              className="md:ml-[0] ml-[43px] md:mt-0 mt-1 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              TL008PQ062023
            </Text>
            <Text
              className="md:ml-[0] ml-[138px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              50
            </Text>
            <Text
              className="md:ml-[0] ml-[221px] md:mt-0 my-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              AED 50,000/-
            </Text>
            <Text
              className="md:ml-[0] ml-[130px] md:mt-0 my-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Download
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[404px] mt-[19px] md:px-5 w-[57%] md:w-full">
            <Text
              className="text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              1
            </Text>
            <Text
              className="md:ml-[0] ml-[121px] md:mt-0 mt-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              08 Jane 2023
            </Text>
            <Text
              className="md:ml-[0] ml-[43px] md:mt-0 mt-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              TL008PQ062023
            </Text>
            <Text
              className="md:ml-[0] ml-[138px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              50
            </Text>
            <Text
              className="md:ml-[0] ml-[221px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              AED 50,000/-
            </Text>
            <Text
              className="mb-0.5 md:ml-[0] ml-[130px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Download
            </Text>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[17px] mx-auto p-[5px] md:px-5 rounded w-3/5 md:w-full">
            <Text
              className="ml-2 md:ml-[0] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              1
            </Text>
            <Text
              className="md:ml-[0] ml-[121px] md:mt-0 mt-1 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              08 Jane 2023
            </Text>
            <Text
              className="md:ml-[0] ml-[43px] md:mt-0 mt-1 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              TL008PQ062023
            </Text>
            <Text
              className="md:ml-[0] ml-[138px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              50
            </Text>
            <Text
              className="md:ml-[0] ml-[221px] md:mt-0 my-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              AED 50,000/-
            </Text>
            <Text
              className="md:ml-[0] ml-[130px] md:mt-0 my-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Download
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[404px] mt-[19px] md:px-5 w-[57%] md:w-full">
            <Text
              className="text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              1
            </Text>
            <Text
              className="md:ml-[0] ml-[121px] md:mt-0 mt-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              08 Jane 2023
            </Text>
            <Text
              className="md:ml-[0] ml-[43px] md:mt-0 mt-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              TL008PQ062023
            </Text>
            <Text
              className="md:ml-[0] ml-[138px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              50
            </Text>
            <Text
              className="md:ml-[0] ml-[221px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              AED 50,000/-
            </Text>
            <Text
              className="mb-0.5 md:ml-[0] ml-[130px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Download
            </Text>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[17px] mx-auto p-[5px] md:px-5 rounded w-3/5 md:w-full">
            <Text
              className="ml-2 md:ml-[0] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              1
            </Text>
            <Text
              className="md:ml-[0] ml-[121px] md:mt-0 mt-1 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              08 Jane 2023
            </Text>
            <Text
              className="md:ml-[0] ml-[43px] md:mt-0 mt-1 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              TL008PQ062023
            </Text>
            <Text
              className="md:ml-[0] ml-[138px] text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              50
            </Text>
            <Text
              className="md:ml-[0] ml-[221px] md:mt-0 my-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              AED 50,000/-
            </Text>
            <Text
              className="md:ml-[0] ml-[130px] md:mt-0 my-0.5 text-base text-gray-600 tracking-[0.48px]"
              size="txtNotoSerifTamilRegular16Gray600"
            >
              Download
            </Text>
          </div>
          <Footer className="flex items-center justify-center mt-[50px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductProfileandHistoryPage;
