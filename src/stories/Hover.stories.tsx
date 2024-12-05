import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ImageHoverComponent from "../components/HoverEffects/HoverEffects";
import ClipPathComponent from "../components/HoverEffects/ClipPath";
import MovingTooltipComponent from "../components/HoverEffects/MovingTooltip";

type HoverProps = ComponentProps<typeof ClipPathComponent> & {
  backgroundColor?: string;
  color?: string;
};

const meta: Meta<HoverProps> = {
  component: ImageHoverComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<HoverProps>;

export const ImageHover: Story = {
  args: {},
  render: () => {
    return <ImageHoverComponent />;
  },
};

export const ClipPath: Story = {
  args: {
    image1:
      "https://i.pinimg.com/1200x/f8/74/7e/f8747edbf677f9109ea088b170315f49.jpg",
    image2:
      "https://i.pinimg.com/736x/4c/1d/71/4c1d71ae311ae36df15a391a8a621de0.jpg",
    image3:
      "https://i.pinimg.com/736x/c8/a7/63/c8a763300bb0f8bf2cb08df690d590f0.jpg",
    height: "600px",
  },
  render: (args) => {
    return <ClipPathComponent {...args} />;
  },
};

export const MovingTooltip: Story = {
  args: {
    backgroundColor: "white",
    color: "black",
    image1:
      "https://i.pinimg.com/736x/f7/52/2b/f7522b13f7dd4c3f4fb854235e01b57e.jpg",
    image2:
      "https://i.pinimg.com/736x/56/8e/2b/568e2b6d492115cc45c558d12e586f31.jpg",
    image3:
      "https://i.pinimg.com/736x/27/99/6a/27996a3ab1da1cf5a7341e32f3c88cdc.jpg",
  },
  render: (args) => {
    return <MovingTooltipComponent {...args} />;
  },
};
