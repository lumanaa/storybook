import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CardsComponent from "../components/Cards/Cards";
import FlipCardComponent from "../components/Cards/FlipCard";
import CardTwoComponent from "../components/Cards/CardTwo";
import StackCardsComponent from "../components/Cards/StackCards";

type CardsProps = ComponentProps<typeof CardsComponent> & {
  backgroundColor?: string;
  color?: string;
};

const meta: Meta<CardsProps> = {
  component: CardsComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Default layout for centered stories
  },
};

export default meta;

type Story = StoryObj<CardsProps>;

export const FlipCard: Story = {
  args: {},
  render: () => {
    return <FlipCardComponent />;
  },
  // The layout for FlipCard is still 'centered', inherited from the default in `meta`
};

export const GlassCards: Story = {
  args: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  parameters: {
    layout: "fullscreen", // Override the layout to fullscreen for this story
  },
  render: (args) => {
    return <CardsComponent {...args} />;
  },
};

export const CardTwo: Story = {
  args: {},
  parameters: {
    layout: "centered", // Override the layout to fullscreen for this story
  },
  render: () => {
    return <CardTwoComponent />;
  },
  // The layout for FlipCard is still 'centered', inherited from the default in `meta`
};

export const StackCards: Story = {
  args: {},
  parameters: {
    layout: "centered", // Override the layout to fullscreen for this story
  },
  render: () => {
    return <StackCardsComponent />;
  },
  // The layout for FlipCard is still 'centered', inherited from the default in `meta`
};
