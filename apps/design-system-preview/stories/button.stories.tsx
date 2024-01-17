import { Button } from "design-system/components/ui/button";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Meta<typeof Button> = {
  args: {
    children: "Hello World",
  },
};
