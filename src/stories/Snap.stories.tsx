import { ComponentProps } from "react";
import SnapScrollComponent from "../components/PageEffects/SnapScroll";
import { Meta, StoryObj } from "@storybook/react";

type PageProps = ComponentProps<typeof SnapScrollComponent>;

const meta: Meta<PageProps> = {
  component: SnapScrollComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<PageProps>;

export const SnapScroll: Story = {
  args: {},
  render: () => {
    return (
      <SnapScrollComponent>
        <div id='dd1' className='dd'>
          <span className='sp1'>View on full screen</span>
        </div>
        <div id='dd2' className='dd'>
          <span className='sp1'>2</span>
        </div>
        <div id='dd3' className='dd'>
          <span className='sp1'>3</span>
        </div>
        <div id='dd4' className='dd'>
          <span className='sp1'>4</span>
        </div>
        <div id='dd5' className='dd'>
          <span className='sp1'>5</span>
        </div>
        <div id='dd6' className='dd'>
          <span className='sp1'>6</span>
        </div>
      </SnapScrollComponent>
    );
  },
};
