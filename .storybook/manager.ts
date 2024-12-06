import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: "dark",
        brandTitle: "Bring ideas to life",
        brandUrl: "https://lumana-ui.vercel.app/",
        brandImage: "/storybook.png",
        brandTarget: '_self',
        colorSecondary: '#f3add1',
        appBg: '#f0f0f0',
        appBorderColor: '#ccc',
        textColor: '#333',
        barTextColor: '#ccc',
        appContentBg: '#f0f0f0',
        inputBg: '#f0f0f0',
        inputTextColor: '#333',
        inputBorder: '#333',
        booleanBg: '#f0f0f0',
        booleanSelectedBg: '#f3add1'

    })
})