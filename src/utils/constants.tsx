import React from 'react';
import theme from 'styles/theme';

import {
    FormTextField,
    UserFormValues,
    HeaderLinksProps,
    MainPageElement,
    EditFormValues,
    RadioInputItem,
    ColumnFormValues,
    SearchBarValues,
    SelectOptions,
} from 'ts/interfaces';

import { GrProjects, GrTask } from 'react-icons/gr';
import { GoProject } from 'react-icons/go';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';

const nameValidation = /^(?=[a-zA-Z._ ]*$)(?!.*[_.]).*/gm;

const loginValidation =
    /^(?:[A-Z\d][A-Z\d_-]{4,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;

const passwordValidation = /^[a-zA-Z0-9](?!.*[_.()\\ /|=+№;:?*,"'`^%-]).*/gm;

const defaultUserFormValues: UserFormValues = {
    name: '',
    login: '',
    password: '',
};

const radioInputList: RadioInputItem[] = [
    {
        id: 'primary',
        value: theme.colors.darkBlue,
        checked: true,
    },
    {
        id: 'yellow',
        value: theme.colors.yellow,
        checked: false,
    },
    {
        id: 'pink',
        value: theme.colors.pink,
        checked: false,
    },
    {
        id: 'blue',
        value: theme.colors.blue,
        checked: false,
    },
];

const formTextFields: FormTextField[] = [
    {
        id: 1,
        name: 'name',
        type: 'text',
        placeholderText: 'authorization.name',
        pattern: {
            value: nameValidation,
            message: 'authorization.namePattern',
        },
        minLength: {
            value: 3,
            message: 'authorization.nameMinLength',
        },
        required: 'authorization.required',
    },
    {
        id: 2,
        name: 'login',
        type: 'text',
        placeholderText: 'Login',
        pattern: {
            value: loginValidation,
            message: 'login should contain minimum 2 letters(eng) and 2 digits',
        },
        minLength: {
            value: 4,
            message: ` should contain more than  characters`,
        },
        required: 'field cant be empty',
    },
    {
        id: 3,
        name: 'password',
        type: 'password',
        placeholderText: 'Password',
        pattern: {
            value: passwordValidation,
            message:
                'password should contain only letters(eng), digits and ! @ # ~ &',
        },
        minLength: {
            value: 8,
            message: 'should contain more than  characters',
        },
        required: 'field cant be empty',
    },
];

const projectDescriptionValidation = {
    count: 80,
    message: 'projects.maxLength',
    value: 'projects.description',
};

const headerSignItems: HeaderLinksProps[] = [
    {
        id: 'signIn',
        text: 'signIn',
        link: '/signin',
        color: theme.colors.primaryColor,
        backgroundColor: theme.colors.transparent,
    },
    {
        id: 'signUp',
        text: 'signUp',
        link: '/signup',
        color: theme.colors.textButton,
        backgroundColor: theme.colors.backgroundDarkBlue,
    },
];

const headerItemsIfLoggedIn: HeaderLinksProps[] = [
    {
        id: 'signOut',
        text: 'signOut',
        link: '#',
        color: theme.colors.primaryColor,
        backgroundColor: theme.colors.transparent,
    },
    // {
    //     id: 'profile',
    //     text: 'profile.title',
    //     link: '/profile',
    //     color: theme.colors.textButton,
    //     backgroundColor: theme.colors.backgroundDarkBlue,
    // },
];

const headerLinkItems: HeaderLinksProps[] = [
    {
        id: 'home',
        text: 'home',
        link: '/',
    },
    {
        id: 'tasks',
        text: 'tasks',
        link: '/project',
    },
];

const mainPageElements: MainPageElement[] = [
    {
        id: 1,
        title: 'blockTitle1',
        text: 'blockText1',
        backgroundColor: theme.colors.yellow,
        icon: <GrProjects />,
    },
    {
        id: 2,
        title: 'blockTitle2',
        text: 'blockText2',
        backgroundColor: theme.colors.blue,
        icon: <GoProject />,
    },
    {
        id: 3,
        title: 'blockTitle3',
        text: 'blockText3',
        backgroundColor: theme.colors.pink,
        icon: <GrTask />,
    },
];

const mainPageList = [
    {
        id: 1,
        text: 'listItem1',
    },
    {
        id: 2,
        text: 'listItem2',
    },
    {
        id: 3,
        text: 'listItem3',
    },
];

const defaultFormItemValues: EditFormValues = {
    title: '',
    description: '',
    color: '',
    responsibleUser: '',
};

const defaultColumnFormValues: ColumnFormValues = {
    title: '',
};

const defaultSearchBarValues: SearchBarValues = {
    title: '',
};

const defaultSelectOptions: SelectOptions[] = [
    {
        value: '',
        label: '',
    },
];

export {
    baseUrl,
    defaultUserFormValues,
    nameValidation,
    loginValidation,
    passwordValidation,
    radioInputList,
    formTextFields,
    headerSignItems,
    headerLinkItems,
    headerItemsIfLoggedIn,
    mainPageElements,
    mainPageList,
    projectDescriptionValidation,
    defaultFormItemValues,
    defaultColumnFormValues,
    defaultSearchBarValues,
    defaultSelectOptions,
};
