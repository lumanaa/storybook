import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import HoverEffectsComponent from "../components/HoverEffects/HoverEffects";

type HoverProps = ComponentProps<typeof HoverEffectsComponent>;

const meta: Meta<HoverProps> = {
  component: HoverEffectsComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<HoverProps>;

export const HoverEffects: Story = {
  args: {},
  render: () => {
    return <HoverEffectsComponent />;
  },
};
