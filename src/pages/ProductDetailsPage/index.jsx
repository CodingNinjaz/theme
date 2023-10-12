import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const ProductDetailsPagePage = () => {
  const [group347value, setGroup347value] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-notoseriftamil items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-gray-800 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="h-12 md:ml-[0] ml-[100px] md:mt-0 my-[15px]"
              src="images/img_fulllogo_gray_300.svg"
              alt="fulllogo"
            />
            <div className="h-12 md:h-16 md:ml-[0] ml-[116px] md:mt-0 my-4 relative w-[59%] md:w-full">
              <Input
                name="group347"
                placeholder="Search a Product...|"
                value={group347value}
                onChange={(e) => setGroup347value(e)}
                className="!placeholder:text-gray-300 !text-gray-300 font-medium leading-[normal] p-0 text-center text-lg tracking-[0.54px] w-full"
                wrapClassName="flex inset-y-[0] my-auto right-[0] rounded-md w-[78%]"
                suffix={
                  group347value?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer h-6 ml-[35px] left-[3%] absolute my-0.5 inset-y-[4%]"
                      onClick={() => setGroup347value("")}
                      fillColor="#e2e2e2"
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  ) : (
                    <Img
                      className="cursor-pointer h-6 ml-[35px] left-[3%] absolute my-0.5 inset-y-[4%]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                color="gray_300"
                size="sm"
                variant="outline"
              ></Input>
              <div className="absolute bg-gray-300 flex flex-row h-full inset-y-[0] items-start justify-between left-[0] my-auto p-2 rounded-bl rounded-tl w-[24%]">
                <Text
                  className="ml-[18px] mt-0.5 text-gray-600 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilMedium18Gray600"
                >
                  All Categories
                </Text>
                <Img
                  className="h-7 mr-3.5 mt-0.5"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[136px] md:ml-[0] ml-[164px] mr-[100px] md:mt-0 my-4 text-center text-sm tracking-[0.42px]"
              shape="round"
              color="gray_300"
              size="md"
              variant="outline"
            >
              Login/Register
            </Button>
          </header>
          <div className="bg-gray-300 flex flex-row items-center justify-start p-[13px] rounded w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1716px] mx-auto md:px-5 w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[147px] rounded"
                leftIcon={
                  <div className="mt-[13px] mb-2.5 mr-2 bg-black-900">
                    <Img src="images/img_arrow1.svg" alt="Arrow 1" />
                  </div>
                }
                shape="round"
                color="gray_800"
                size="sm"
                variant="outline"
              >
                <div className="text-base text-left tracking-[0.48px]">
                  Back
                </div>
              </Button>
              <Text
                className="text-gray-800 text-sm tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14"
              >
                Indoor Lights Outdoor Lights Decorative Lights Facad Lights
                Strip & Neon Industrial Lights Accessories Brand
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1719px] mt-[17px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-[5px] w-[33%] md:w-full">
              <Text
                className="text-gray-800 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilBold18Gray800"
              >
                <>Accessories &gt; LED Bulb &gt; Essential</>
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[21px] p-[62px] md:px-10 sm:px-5 rounded w-full">
                <Img
                  className="h-[428px] md:h-auto mb-[33px] mt-3.5 object-cover w-[428px] sm:w-full"
                  src="images/img_essentialgu101.png"
                  alt="essentialgu101"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 grid-cols-5 justify-center mt-4 w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[18px] rounded w-full">
                  <Img
                    className="h-[58px] md:h-auto mb-[7px] mt-1 object-cover w-[58px]"
                    src="images/img_essentialgu101.png"
                    alt="essentialgu102"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[18px] rounded w-full">
                  <Img
                    className="h-[58px] md:h-auto mb-[7px] mt-1 object-cover w-[58px]"
                    src="images/img_essentialgu101.png"
                    alt="essentialgu103"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-4 rounded w-full">
                  <Img
                    className="h-[58px] md:h-auto mb-[9px] mt-1.5 object-cover w-[58px]"
                    src="images/img_essentialgu101.png"
                    alt="essentialgu104"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[15px] rounded w-full">
                  <Img
                    className="h-[58px] md:h-auto mb-2.5 mt-[7px] object-cover w-[58px]"
                    src="images/img_essentialgu101.png"
                    alt="essentialgu105"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[13px] rounded w-full">
                  <Img
                    className="h-[58px] md:h-auto mb-3 mt-[9px] object-cover w-[58px]"
                    src="images/img_essentialgu101.png"
                    alt="essentialgu106"
                  />
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-[49px] w-[38%] md:w-full">
              <Text
                className="text-gray-600 text-sm tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14Gray600"
              >
                GU 10 LED Bulb
              </Text>
              <Text
                className="mt-[17px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                size="txtNotoSerifTamilBold36Gray800"
              >
                Essential
              </Text>
              <div className="flex flex-col items-start justify-start mt-7 w-[88%] md:w-full">
                <div className="flex flex-row items-start justify-between w-[51%] md:w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Brand
                  </Text>
                  <Text
                    className="text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    : Tecnolight
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                <div className="flex flex-row items-center justify-between mt-2.5 w-1/2 md:w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Part No.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    : 90530.000
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                <div className="flex flex-row items-center justify-between mt-[11px] w-[51%] md:w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Wattage
                  </Text>
                  <Text
                    className="text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    : 6W | 6.5W
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                <div className="flex flex-row gap-[51px] items-start justify-start mt-2.5 w-[47%] md:w-full">
                  <Text
                    className="mt-1 text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Lumen Efficiency
                  </Text>
                  <Text
                    className="text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    : 80lm/W
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px mt-[7px] w-full" />
                <div className="flex flex-row items-end justify-start mt-[7px] w-2/5 md:w-full">
                  <Text
                    className="mt-2 text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Beam Angle
                  </Text>
                  <Text
                    className="ml-[92px] mt-[3px] text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    : 36
                  </Text>
                  <Text
                    className="mb-[3px] ml-0.5 text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    o
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px mt-1.5 w-full" />
                <div className="flex flex-row items-start justify-between mt-3 w-[57%] md:w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    Finish
                  </Text>
                  <Text
                    className="text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    : Black | White
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px mt-[5px] w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-3 w-[99%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 text-gray-600 text-sm tracking-[0.42px]"
                    size="txtNotoSerifTamilMedium14Gray600"
                  >
                    CCT
                  </Text>
                  <Text
                    className="text-gray-600 text-lg tracking-[0.54px]"
                    size="txtNotoSerifTamilMedium18Gray600"
                  >
                    : 2700K | 3000K | 4000K | 5000K | 6000K
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px mt-[5px] w-full" />
              </div>
              <Text
                className="mt-6 text-gray-800 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18"
              >
                Product Description
              </Text>
              <Text
                className="leading-[200.00%] mt-[19px] text-base text-gray-600 tracking-[0.48px] w-full"
                size="txtNotoSerifTamilRegular16Gray600"
              >
                Essential bulbs are energy-efficient and long-lasting bulbs.
                They have a warm and cosy glow that creates a nostalgic ambiance
                in any room. Essential bulbs come in various shapes, sizes, and
                colours to suit different lighting fixtures and preferences.
                They are dimmable, compatible with GU10 sockets, and UL-listed
                for safety.
              </Text>
              <Text
                className="mt-[17px] text-gray-800 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18"
              >
                Note: For More technical details Please Download the data sheet
              </Text>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start mb-0.5 md:ml-[0] ml-[82px] md:mt-0 mt-[50px] p-5 rounded w-1/4 md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-gray-800 text-sm tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14"
              >
                Order Now
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-[5px] w-[47%] md:w-full">
                <Text
                  className="mt-5 text-gray-600 text-lg tracking-[0.54px]"
                  size="txtNotoSerifTamilBold18"
                >
                  AED
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                  size="txtNotoSerifTamilBold36Gray800"
                >
                  129.00
                </Text>
              </div>
              <div className="flex flex-row gap-3.5 items-center justify-start ml-0.5 md:ml-[0] mt-[67px] w-[87%] md:w-full">
                <Img
                  className="h-[21px]"
                  src="images/img_location.svg"
                  alt="location"
                />
                <Text
                  className="text-gray-600 text-sm tracking-[0.42px] w-[91%] sm:w-full"
                  size="txtNotoSerifTamilMedium14Gray600"
                >
                  Delivering Location : Dubai, Al Quoz Industrial Area 4{" "}
                </Text>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[95%] sm:w-full"
                size="txtNotoSerifTamilMedium14Gray600"
              >
                Delivery- Subjected to availability of stock at time of
                confirmation, else 6-8 weeks from the date of advance Payment
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-0.5 text-gray-600 text-sm tracking-[0.42px]"
                size="txtNotoSerifTamilMedium14Gray600"
              >
                Return Policy
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-[78px] text-gray-600 text-lg tracking-[0.54px] w-[72%] sm:w-full"
                size="txtNotoSerifTamilMedium18Gray600"
              >
                Please login/Register to see the stock details
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-[31px] text-gray-800 text-lg tracking-[0.54px]"
                size="txtNotoSerifTamilMedium18"
              >
                <>
                  For special Discount,
                  <br />
                  Bulk Orders, & customization
                </>
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[352px] ml-0.5 md:ml-[0] mt-2 rounded text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_600"
                size="md"
                variant="outline"
              >
                Send a WhatsApp Message
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[352px] ml-0.5 md:ml-[0] mt-2 rounded text-center text-sm tracking-[0.42px]"
                shape="round"
                color="gray_600"
                size="md"
                variant="fill"
              >
                Add to List
              </Button>
              <Text
                className="capitalize mb-0.5 md:ml-[0] ml-[78px] mt-2 text-center text-gray-600 text-lg tracking-[1.71px] underline"
                size="txtNotoSerifTamilLight18"
              >
                Download Datasheet
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[97px] p-[82px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start max-w-[1719px] mb-[18px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start w-[41%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start w-[90%] md:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800 tracking-[1.08px]"
                      size="txtNotoSerifTamilBold36Gray800"
                    >
                      Featured Products
                    </Text>
                    <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                      <Text
                        className="text-gray-600 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14Gray600"
                      >
                        View More Featured Product
                      </Text>
                      <Line className="bg-yellow-800 h-px mt-0.5 w-full" />
                    </div>
                  </div>
                  <Text
                    className="leading-[200.00%] text-base text-gray-600 tracking-[0.48px] w-full"
                    size="txtNotoSerifTamilRegular16Gray600"
                  >
                    Brighten up your space with our featured lighting fixtures!
                    From sleek and modern to classic and elegant, we have the
                    perfect fixture to match your style. Shop now and see the
                    difference good lighting can make!
                  </Text>
                </div>
                <Button
                  className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] mb-[47px] min-w-[197px] md:ml-[0] ml-[167px] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="fill"
                >
                  Indoor
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Outdoor
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Decorative
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[197px] ml-5 md:ml-[0] md:mt-0 mt-8 rounded text-center text-lg tracking-[0.54px]"
                  shape="round"
                  color="gray_800"
                  size="xl"
                  variant="outline"
                >
                  Strip & Neon
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
                orientation="horizontal"
              >
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
                <div className="md:h-[424px] h-[433px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded w-full">
                    <Img
                      className="h-[210px] md:h-auto md:ml-[0] ml-[3px] mt-0.5 object-cover w-[210px]"
                      src="images/img_essentialgu101.png"
                      alt="essentialgu101"
                    />
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-gray-600 text-sm tracking-[0.42px]"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Essential
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[7px] text-gray-800 text-xl tracking-[0.60px]"
                      size="txtNotoSerifTamilBold20"
                    >
                      AED 85.75 / Piece
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-2 text-gray-600 text-sm tracking-[0.42px] w-[99%] sm:w-full"
                      size="txtNotoSerifTamilMedium14Gray600"
                    >
                      Please Login/Register to See the Stock Details
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center left-[10%] top-[0] w-1/4">
                    <div className="bg-yellow-800 flex flex-col items-center justify-start rounded-tl">
                      <Text
                        className="text-gray-800 text-sm tracking-[0.42px]"
                        size="txtNotoSerifTamilMedium14"
                      >
                        New
                      </Text>
                    </div>
                    <Img
                      className="h-[7px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1719px] mt-[99px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800 tracking-[1.08px]"
                size="txtNotoSerifTamilBold36Gray800"
              >
                Application Areas
              </Text>
              <Text
                className="leading-[200.00%] mt-[19px] text-base text-center text-gray-600 tracking-[0.48px]"
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
              <List
                className="flex flex-col gap-5 items-center mt-10 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Kitchen
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Bedroom
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Hall
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    size="xl"
                    variant="gradient"
                    color="gray_600_gray_800"
                  >
                    Office
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Street
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Cabinets
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Racks
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Garden
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Pathway
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Parking Areas
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Supermarket
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Classroom
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Washroom
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Showroom
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[198px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Dinning
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded text-center text-sm tracking-[0.42px]"
                    shape="round"
                    color="gray_800"
                    size="xl"
                    variant="outline"
                  >
                    Living Room
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPagePage;
