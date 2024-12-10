import { ComponentProps } from "react";
import MenuOverlayComponent from "../components/Menu/MenuOverlay";
import OverlayTwoComponent from "../components/Menu/OverlayTwo";
import { Meta, StoryObj } from "@storybook/react";

type MenuProps = ComponentProps<typeof MenuOverlayComponent> & {
  menuOverlayColor?: string;
};

const meta: Meta<MenuProps> = {
  component: MenuOverlayComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<MenuProps>;

export const MenuOverlay: Story = {
  args: {
    color: "#bbabd8", // Provide a default color
    backgroundColor: "gray",
  },
  render: (args) => {
    return <MenuOverlayComponent {...args} />;
  },
};

export const OverlayTwo: Story = {
  args: {
    backgroundColor: "gray",
    menuOverlayColor: "black",
    color: "white",
  },
  render: (args) => {
    return <OverlayTwoComponent {...args} />;
  },
};
