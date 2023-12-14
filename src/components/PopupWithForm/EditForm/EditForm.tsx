import React, { memo, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import ReactSelect from 'react-select';

import useGetAllUsers from 'hooks/useGetAllUsers';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import RadioInput from 'components/RadioInput/RadioInput';

import { defaultFormItemValues, radioInputList } from 'utils/constants';

import { EditFormValues, SelectOptions } from 'ts/interfaces';

import { Form } from 'styles/styles';

interface EditFormProps<T> {
    keyPrefix: string;
    onSubmit: SubmitHandler<EditFormValues>;
    selectedItem?: T | null;
    maxDescriptionLength: number;
}

function EditForm<T>({
    keyPrefix,
    onSubmit,
    selectedItem,
    maxDescriptionLength,
}: EditFormProps<T>) {
    const { id } = useParams();
    const { pathname } = useLocation();
    const { usersList, isUsersListLoading } = useGetAllUsers();
    const {
        register,
        handleSubmit,
        clearErrors,
        trigger,
        setFocus,
        getValues,
        formState: { errors, isSubmitted },
        control,
    } = useForm<EditFormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: selectedItem ?? defaultFormItemValues,
    });
    const isFormValid = Object.values(errors).every((error) => !error?.message);

    const getValueFromOption = (value: string) =>
        value ? usersList.find((user) => user.value === value) : '';

    useEffect(() => {
        setFocus('title');
    }, []);

    return (
        <Form
            aria-label="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                type="text"
                name="title"
                register={register}
                clearErrors={clearErrors}
                errors={errors.title}
                placeholderText="Task title"
                minLength={{
                    value: 3,
                    message: 'title should contain more than 3 characters',
                }}
                maxLength={{
                    value: 25,
                    message: 'title cant be longer than 25 characters',
                }}
                required="this field cant be empty"
            />
            <Textarea
                name="description"
                register={register}
                clearErrors={clearErrors}
                errors={errors.description}
                placeholderText="Task description"
                maxLength={{
                    value: maxDescriptionLength,
                    message:
                        'task description cant be longer than 200 characters',
                }}
            />
            {pathname === `/projects` && (
                <RadioInput
                    name="color"
                    text="Task color"
                    radioInputs={radioInputList}
                    register={register}
                    defaultValue={getValues().color}
                />
            )}
            <Button type="submit" disabled={!isFormValid}>
                Ok
            </Button>
        </Form>
    );
}

EditForm.defaultProps = {
    selectedItem: null,
};

export default memo(EditForm);
