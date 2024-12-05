import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CardsComponent from "../components/Cards/Cards";

type CardsProps = ComponentProps<typeof CardsComponent> & {
  backgroundColor?: string;
  color?: string;
};

const meta: Meta<CardsProps> = {
  component: CardsComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<CardsProps>;

export const GlassCards: Story = {
  args: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  render: (args) => {
    return <CardsComponent {...args} />;
  },
};
