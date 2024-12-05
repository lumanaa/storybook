import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ImageHoverComponent from "../components/HoverEffects/HoverEffects";
import ClipPathComponent from "../components/HoverEffects/ClipPath";

type HoverProps = ComponentProps<typeof ClipPathComponent>;

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
  },
  render: (args) => {
    return <ClipPathComponent {...args} />;
  },
};
