export const fontFamilyClasses = ['open-sans', 'ubuntu', 'cormorant-garamond', 'days-one', 'merriweather'] as const;

export type FontFamiliesClasses = (typeof fontFamilyClasses)[number];

export type OptionType = {
    title: string;
    value: string;
    className: string;
    optionClassName?: string;
};

export const fontFamilyOptions: OptionType[] & {
    optionClassName?: FontFamiliesClasses;
} = [
    { title: 'Open Sans', value: 'Open Sans', className: fontFamilyClasses[0] },
    { title: 'Ubuntu', value: 'Ubuntu', className: fontFamilyClasses[1] },
    {
        title: 'Cormorant Garamond',
        value: 'Cormorant Garamond',
        className: fontFamilyClasses[2],
    },
    { title: 'Days One', value: 'Days One', className: fontFamilyClasses[3] },
    {
        title: 'Merriweather',
        value: 'Merriweather',
        className: fontFamilyClasses[4],
    },
];

export const fontColors: OptionType[] = [
    {
        title: 'Черный',
        value: '#000000',
        className: 'font-black',
        optionClassName: 'option-black',
    },
    {
        title: 'Белый',
        value: '#ffffff',
        className: 'font-white',
        optionClassName: 'option-white',
    },
    {
        title: 'Серый',
        value: '#c4c4c4',
        className: 'font-gray',
        optionClassName: 'option-gray',
    },
    {
        title: 'Розовый',
        value: '#feafe8',
        className: 'font-pink',
        optionClassName: 'option-pink',
    },
    {
        title: 'Ярко-розовый',
        value: '#fd24af',
        className: 'font-fuchsia',
        optionClassName: 'option-fuchsia',
    },
    {
        title: 'Жёлтый',
        value: '#ffc802',
        className: 'font-yellow',
        optionClassName: 'option-yellow',
    },
    {
        title: 'Зелёный',
        value: '#80d994',
        className: 'font-green',
        optionClassName: 'option-green',
    },
    {
        title: 'Голубой',
        value: '#6fc1fd',
        className: 'font-blue',
        optionClassName: 'option-blue',
    },
    {
        title: 'Фиолетовый',
        value: '#5f0dee',
        className: 'font-purple',
        optionClassName: 'option-purple',
    },
];

export const backgroundColors: OptionType[] = [
    {
        title: 'Белый',
        value: '#ffffff',
        className: 'bg-white',
        optionClassName: 'option-white',
    },
    {
        title: 'Черный',
        value: '#000000',
        className: 'bg-black',
        optionClassName: 'option-black',
    },
    {
        title: 'Серый',
        value: '#c4c4c4',
        className: 'bg-gray',
        optionClassName: 'option-gray',
    },
    {
        title: 'Розовый',
        value: '#feafe8',
        className: 'bg-pink',
        optionClassName: 'option-pink',
    },
    {
        title: 'Ярко-розовый',
        value: '#fd24af',
        className: 'bg-fuchsia',
        optionClassName: 'option-fuchsia',
    },
    {
        title: 'Жёлтый',
        value: '#ffc802',
        className: 'bg-yellow',
        optionClassName: 'option-yellow',
    },
    {
        title: 'Зелёный',
        value: '#80d994',
        className: 'bg-green',
        optionClassName: 'option-green',
    },
    {
        title: 'Голубой',
        value: '#6fc1fd',
        className: 'bg-blue',
        optionClassName: 'option-blue',
    },
    {
        title: 'Фиолетовый',
        value: '#5f0dee',
        className: 'bg-purple',
        optionClassName: 'option-purple',
    },
];

export const contentWidthArr: OptionType[] = [
    {
        title: 'Широкий',
        value: '1394px',
        className: 'width-wide',
        optionClassName: 'option-wide',
    },
    {
        title: 'Узкий',
        value: '948px',
        className: 'width-narrow',
        optionClassName: 'option-narrow',
    },
];

export const fontSizeOptions: OptionType[] = [
    { title: '18px', value: '18px', className: 'font-size-18' },
    { title: '25px', value: '25px', className: 'font-size-25' },
    { title: '38px', value: '38px', className: 'font-size-38' },
];

export const defaultArticleState = {
    fontFamilyOption: fontFamilyOptions[0],
    fontColor: fontColors[0],
    fontSizeOption: fontSizeOptions[0],
    contentWidth: contentWidthArr[0],
    backgroundColor: backgroundColors[0],
};

export type ArticleStateType = typeof defaultArticleState;
