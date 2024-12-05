import { ComponentProps } from "react";

import { Meta, StoryObj } from "@storybook/react";
import CarouselComponent from "../components/Carousel/Carousel";

type CarouselProps = ComponentProps<typeof CarouselComponent>;
const meta: Meta<CarouselProps> = {
  component: CarouselComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    image1: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<CarouselProps>;

export const MenuOverlay: Story = {
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
