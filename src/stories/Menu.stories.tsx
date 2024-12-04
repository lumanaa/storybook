import { ComponentProps } from "react";
import MenuOverlayComponent from "../components/Menu/MenuOverlay";
import { Meta, StoryObj } from "@storybook/react";

type MenuProps = ComponentProps<typeof MenuOverlayComponent>;

const meta: Meta<MenuProps> = {
  component: MenuOverlayComponent,
  tags: ["autodocs"],
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
