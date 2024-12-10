// Storybook configuration
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonComponent } from "../components/Buttons/Button";
import ButtonOneComponent from "../components/Buttons/ButtonOne";
import ButtonTwoComponent from "../components/Buttons/ButtonTwo";
import SubmitBtn from "../components/Buttons/SubmitBtn";

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
      options: ["primary", "one", "two"], // Fix here to match the "variant" in ButtonProps
      control: { type: "inline-radio" },
    },
    size: {
      options: ["small", "medium", "large"], // Fix here to match the "variant" in ButtonProps
      control: { type: "inline-radio" },
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
      if: { arg: "variant", eq: "one" },
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
    color: "#2d2d2d",
    size: "medium",
  },
  render: ({ variant, btnText, ...args }) => {
    switch (variant) {
      case "one":
        return (
          <ButtonOneComponent {...args} variant={variant}>
            {btnText}
          </ButtonOneComponent>
        );
      case "two":
        return (
          <ButtonTwoComponent {...args} variant={variant}>
            {btnText}
          </ButtonTwoComponent>
        );
      default:
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
    variant: "one", // Add the variant here to avoid missing prop error
    hoverColor: "#0f0",
  },
  render: ({ btnText, ...args }) => {
    // Conditionally render ButtonComponent or ButtonOne based on variant
    return <ButtonOneComponent {...args}>{btnText}</ButtonOneComponent>;
  },
};

export const ButtonTwo: Story = {
  args: {
    btnText: "Button",
    variant: "two",
    color: "#1abc9c",
  },
  render: ({ btnText, ...args }) => {
    return <ButtonTwoComponent {...args}>{btnText}</ButtonTwoComponent>;
  },
};

export const SubmitButton: Story = {
  args: {
    btnText: "Button",
    color:"#41c948"
  },

  render: ({ btnText, ...args }) => {
    return <SubmitBtn {...args}>{btnText}</SubmitBtn>;
  },
};
