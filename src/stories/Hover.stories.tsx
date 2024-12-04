import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ImageHoverComponent from "../components/HoverEffects/HoverEffects";

type HoverProps = ComponentProps<typeof ImageHoverComponent>;

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
