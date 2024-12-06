import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";

import SvgAnimationsComponent from "../components/SvgAnimations/SvgAnimations";
import FrameAnimationComponent from "../components/SvgAnimations/FrameAnimation";

type CardsProps = ComponentProps<typeof SvgAnimationsComponent> & {
  backgroundColor?: string;
  color?: string;
};

const meta: Meta<CardsProps> = {
  component: SvgAnimationsComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Default layout for centered stories
  },
};

export default meta;

type Story = StoryObj<CardsProps>;

export const TextAnimation: Story = {
  args: {},
  render: () => {
    return <SvgAnimationsComponent />;
  },
};

export const FrameAnimation: Story = {
  args: {},
  render: () => {
    return <FrameAnimationComponent />;
  },
  // The layout for FlipCard is still 'centered', inherited from the default in `meta`
};
