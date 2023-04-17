import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalOpened } from 'redux/selectors';
import * as yup from 'yup';
import Message from 'components/Message/Message';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { InputWraper } from 'components/Form/Input.styled';
import { selectError } from 'redux/calculator/selectors';

import {
  CalculatorStyled,
  InputsWrapper,
  FormWrapper,
  RadioGroup,
  RadioTitle,
  RadioLabel,
  RadioInput,
  ButtonCalc,
} from './Calculator.styled';
import { setModalOpened } from 'redux/modalOpenedSlice';
import { ModalDailyCalories } from 'components/ModalDailyCalories';
import { calculatorAnonim, calculatorLogIn } from 'redux/calculator/operations';
import {
  selectIsLoggedIn,
  selectUser,
  selectToken,
} from 'redux/auth/selectors';

export const CalculatorEl = () => {
  const schema = yup.object().shape({
    weight: yup.number().required().positive().integer(),
    height: yup.number().required().positive().integer(),
    age: yup.number().required().positive().integer(),
    desiredWeight: yup.number().required().positive().integer(),
    bloodType: yup.number().required().positive().integer(),
  });
  const user = useSelector(selectUser);
  const userWeight = user.userData?.weight ?? '';
  const userHeight = user.userData?.height ?? '';
  const userAge = user.userData?.age ?? '';
  const userdesiredWeight = user.userData?.desiredWeight ?? '';
  const userBloodType = user.userData?.bloodType ?? '';
  const initialValues = {
    weight: String(userWeight),
    height: String(userHeight),
    age: String(userAge),
    desiredWeight: String(userdesiredWeight),
    bloodType: String(userBloodType),
  };
  const message = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const modalOpened = useSelector(selectModalOpened);

  const openModal = () => {
    dispatch(setModalOpened(true));
  };
  const handleSubmit = (value, actions) => {
    const sendData = {
      weight: Number(value.weight),
      height: Number(value.height),
      age: Number(value.age),
      desiredWeight: Number(value.desiredWeight),
      bloodType: Number(value.bloodType),
    };
    const id = user.id;
    isLoggedIn
      ? dispatch(calculatorLogIn([id, sendData, token]))
      : dispatch(calculatorAnonim(sendData));
    openModal();
  };

  return (
    <>
      <CalculatorStyled>
        <h2>Calculate your daily calorie intake right now</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <FormWrapper>
              <InputsWrapper>
                <InputWraper>
                  <Field
                    type="text"
                    name="height"
                    min="140"
                    max="210"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="height">Height *</label>
                  <ErrorMessage
                    className="error"
                    component="div"
                    name="height"
                  />
                </InputWraper>
                <InputWraper>
                  <Field
                    type="text"
                    name="age"
                    min="16"
                    max="120"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="age">Age *</label>
                  <ErrorMessage className="error" component="div" name="age" />
                </InputWraper>
                <InputWraper>
                  <Field
                    type="text"
                    name="weight"
                    min="40"
                    max="220"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="weight">Current weight *</label>
                  <ErrorMessage
                    className="error"
                    component="div"
                    name="weight"
                  />
                </InputWraper>
              </InputsWrapper>
              <InputsWrapper>
                <InputWraper>
                  <Field
                    type="text"
                    name="desiredWeight"
                    min="40"
                    max="150"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="desiredWeight">Desired weight *</label>
                  <ErrorMessage
                    className="error"
                    component="div"
                    name="desiredWeight"
                  />
                </InputWraper>

                <RadioTitle>Blood type *</RadioTitle>
                <RadioGroup>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="1"
                    />
                    1
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="2"
                    />
                    2
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="3"
                    />
                    3
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="4"
                    />
                    4
                  </RadioLabel>
                </RadioGroup>
              </InputsWrapper>
            </FormWrapper>
            <ButtonCalc className="orange" type="submit">
              Start losing weight
            </ButtonCalc>
          </Form>
        </Formik>
        {message && <Message>{message}</Message>}
      </CalculatorStyled>
      <ModalDailyCalories modalOpened={modalOpened} />
    </>
  );
};
