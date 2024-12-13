import { ComponentProps } from "react";

import { Meta, StoryObj } from "@storybook/react";
import CarouselComponent from "../components/Carousel/Carousel";
import CircularRotateComponent from "../components/Carousel/CircularRotate";
import CarouselTwoComponent from "../components/Carousel/CarouselTwo";
import SlideShowComponent from "../components/Carousel/SlideShow";
import ThreeDSliderComponent from "../components/Carousel/ThreeDSlider";

type CarouselProps = ComponentProps<typeof CarouselComponent> & {
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
};
const meta: Meta<CarouselProps> = {
  component: CarouselComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  // argTypes: {
  //   image1: {
  //     control: {
  //       type: "text",
  //     },
  //   },
  // },
};

export default meta;

type Story = StoryObj<CarouselProps>;

export const CarouselOne: Story = {
  args: {
    image1:
      "https://i.pinimg.com/1200x/b7/8d/1f/b78d1f53b5d0ae2c51dede3452567578.jpg",
    image2:
      "https://i.pinimg.com/1200x/91/4b/e6/914be6165d58dcf47604b530b04a6982.jpg",
    image3:
      "https://i.pinimg.com/1200x/b1/40/ea/b140ea61473dd94f9ffe070bbf6b513c.jpg",
    image4:
      "https://i.pinimg.com/1200x/3c/68/9f/3c689f4856f990969e8d5c493083e64c.jpg",
  },
  render: (args) => {
    return <CarouselComponent {...args} />;
  },
};

export const CircularRotate: Story = {
  args: {
    image1:
      "https://i.pinimg.com/1200x/20/75/90/20759031644a988b2552867c86fbf788.jpg",
    image2:
      "https://i.pinimg.com/1200x/ec/cb/eb/eccbeb24f932028bcba9e92a8f54cd50.jpg",
    image3:
      "https://i.pinimg.com/1200x/d0/9f/c1/d09fc1253de6ff67410d3d7b6474a3b1.jpg",
    image4:
      "https://i.pinimg.com/1200x/55/05/1e/55051edfe46fdfc4e6fd8e89dcc54452.jpg",
    image5:
      "https://i.pinimg.com/1200x/73/59/bd/7359bd9a8e13399a2798d91508d8028c.jpg",
    image6:
      "https://i.pinimg.com/1200x/3b/32/0a/3b320ae9054f35a0fde4e7ed1c43b695.jpg",
    image7:
      "https://i.pinimg.com/736x/64/84/59/648459ac59ffb5b1695ef2e3e138782d.jpg",
    image8:
      "https://i.pinimg.com/1200x/cd/8e/7e/cd8e7e8114355f456a8186d97b9f650a.jpg",
  },
  render: (args) => {
    return <CircularRotateComponent {...args} />;
  },
};

export const CarouselTwo: Story = {
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return <CarouselTwoComponent />;
  },
};

export const SlideShow: Story = {
  args: {},
  parameters: {
    layout: "centered",
  },
  render: () => {
    return <SlideShowComponent />;
  },
};

export const ThreeDSlider: Story = {
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return <ThreeDSliderComponent />;
  },
};
