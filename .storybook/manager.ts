import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: "dark",
        brandTitle: "Bring ideas to life",
        brandUrl: "https://lumana.dev",
        brandImage: "/storybook.png",
        brandTarget: '_self'
    })
})