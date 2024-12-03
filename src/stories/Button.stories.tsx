// Storybook configuration
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonComponent } from "../components/Buttons/Button";
import ButtonOneComponent from "../components/Buttons/ButtonOne";

type BtnProps = ComponentProps<typeof ButtonComponent> & {
  btnText: string;
  hoverColor: string;
};

const meta: Meta<BtnProps> = {
  component: ButtonComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["primary", "example"], // Fix here to match the "variant" in ButtonProps
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"], // Fix here to match the "variant" in ButtonProps
      control: { type: "select" },
    },

    color: {
      control: {
        type: "color",
      },
    },
    hoverColor: {
      control: {
        type: "color",
      },
      if: { arg: "variant", eq: "example" },
    },
    backgroundColor: {
      control: {
        type: "color",
      },
      if: { arg: "variant", eq: "primary" },
    },
    disabled: {
      control: { type: "boolean" }, // Adds a toggle for the disabled state
      defaultValue: false, // Default value is false
    },
  },
};

export default meta;

type Story = StoryObj<BtnProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    btnText: "Button",
    backgroundColor: "white",
    disabled: false,
    color: "black",
    size: "medium",
  },
  render: ({ variant, btnText, ...args }) => {
    // Conditionally render ButtonComponent or ButtonOne based on variant
    if (variant === "example") {
      return (
        <ButtonOneComponent {...args} variant={variant}>
          {btnText}
        </ButtonOneComponent>
      );
    } else {
      return (
        <ButtonComponent {...args} variant={variant}>
          {btnText}
        </ButtonComponent>
      );
    }
  },
};

export const ButtonOne: Story = {
  args: {
    btnText: "Button",
    size: "medium",
    color: "#999",
    disabled: false,
    variant: "example", // Add the variant here to avoid missing prop error
    hoverColor: "#0f0",
  },
  render: ({ btnText, ...args }) => {
    // Conditionally render ButtonComponent or ButtonOne based on variant
    return <ButtonOneComponent {...args}>{btnText}</ButtonOneComponent>;
  },
};
