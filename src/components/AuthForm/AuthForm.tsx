import React, { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppSelector } from 'hooks/useRedux';

import { getUser } from 'redux/selectors/userSelectors';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import {
    defaultUserFormValues,
    formTextFields,
    nameValidation,
} from 'utils/constants';

import { UserFormValues } from 'ts/interfaces';

import { Form } from 'styles/styles';

interface AuthFormProps {
    keyPrefix: string;
    onSubmit: SubmitHandler<UserFormValues>;
    isLoadingAuth: boolean;
}

function AuthForm({ keyPrefix, isLoadingAuth, onSubmit }: AuthFormProps) {
    const location = useLocation();
    const user = useAppSelector(getUser);
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
        trigger,
    } = useForm<UserFormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: user ?? defaultUserFormValues,
    });
    const isFormValid = Object.values(errors).every((error) => !error?.message);

    return (
        <Form
            aria-label="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            {location.pathname !== '/signin' && (
                <Input<UserFormValues>
                    type="text"
                    name="name"
                    register={register}
                    clearErrors={clearErrors}
                    errors={errors.name}
                    placeholderText="name"
                    disabled={isLoadingAuth}
                    pattern={{
                        value: nameValidation,
                        message: 'name should contain more than 3 characters',
                    }}
                    minLength={{
                        value: 3,
                        message: 'name should contain more than 3 characters',
                    }}
                    required="name cant be empty"
                />
            )}
            {formTextFields.slice(1).map((textfield) => (
                <Input<UserFormValues>
                    key={textfield.id}
                    type={textfield.type}
                    name={textfield.name}
                    placeholderText={textfield.name}
                    required={`${textfield.name} is required`}
                    pattern={{
                        value: textfield.pattern.value,
                        message: textfield.pattern.message,
                    }}
                    minLength={{
                        ...textfield.minLength,
                        message: `should contain more than ${textfield.minLength.value} characters`,
                    }}
                    disabled={isLoadingAuth}
                    errors={errors[textfield.name]}
                    register={register}
                    clearErrors={clearErrors}
                />
            ))}
            <Button type="submit" disabled={isLoadingAuth || !isFormValid}>
                {keyPrefix}
            </Button>
        </Form>
    );
}

export default memo(AuthForm);
