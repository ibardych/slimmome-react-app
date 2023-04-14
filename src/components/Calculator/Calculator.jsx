import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CalculatorStyled,
  InputsWrapper,
  FormWrapper,
  Input,
  Form,
  RadioGroup,
  RadioTitle,
  RadioLabel,
  RadioInput,
  ButtonCalc,
} from './Calculator.styled';
import { selectModalOpened } from 'redux/selectors';
import { setModalOpened } from 'redux/modalOpenedSlice';
import { ModalDailyCalories } from 'components/ModalDailyCalories';
import { calculatorAnonim } from 'redux/calculator/operations';
// import { selectIsLoading } from 'redux/calculator/selectors';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

// {
//   "weight": 100,
//   "height": 170,
//   "age": 30,
//   "desiredWeight": 60,
//   "bloodType": 1
// }

export const CalculatorEl = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoading = useSelector(selectIsLoading);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState('');

  const dispatch = useDispatch();

  const modalOpened = useSelector(selectModalOpened);

  const onEditCalculator = event => {
    switch (event.target.name) {
      case 'weight':
        setWeight(s => (s = event.target.value));
        console.log(weight);
        break;
      case 'height':
        setHeight(s => (s = event.target.value));
        console.log(height);
        break;
      case 'age':
        setAge(s => (s = event.target.value));
        console.log(age);
        break;
      case 'desiredWeight':
        setDesiredWeight(s => (s = event.target.value));
        console.log(desiredWeight);
        break;
      case 'bloodType':
        setBloodType(s => (s = event.target.value));
        console.log(desiredWeight);
        break;
      default:
        return;
    }
  };

  const openModal = () => {
    dispatch(setModalOpened(true));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      weight,
      height,
      age,
      desiredWeight,
      bloodType,
    };
    console.log(data);
    dispatch(
      calculatorAnonim(data)
    );
    setWeight('');
    setHeight('');
    setAge('');
    setDesiredWeight('');
    setDesiredWeight('');
    openModal();
    form.reset();
  };

  return (
    <>
      <CalculatorStyled>
        <h2>Calculate your daily calorie intake right now</h2>
        <Form onSubmit={handleSubmit}>
          <FormWrapper>
            <InputsWrapper>
              <Input
                placeholder="Height *"
                type="text"
                name="height"
                min="140"
                max="210"
                pattern="^1([4-9]\d|0\d{2}|1\d{2}|200|20[1-9])$"
                title="Height may contain only numbers. For example 165"
                required
                value={height}
                onChange={onEditCalculator}
              />
              <Input
                placeholder="Age *"
                type="text"
                name="age"
                min="16"
                max="120"
                pattern="^(1[6-9]|[2-9]\d|1[01]\d|120)$"
                title="Age may contain only numbers. For example 35"
                required
                value={age}
                onChange={onEditCalculator}
              />
              <Input
                placeholder="Current weight *"
                type="text"
                name="weight"
                min="40"
                max="220"
                pattern="^([4-9]\d|1\d{2}|20\d|21\d|220)$"
                title="Current weight may contain only numbers. For example 85"
                required
                value={weight}
                onChange={onEditCalculator}
              />
            </InputsWrapper>
            <InputsWrapper>
              <Input
                placeholder="Desired weight *"
                type="text"
                name="desiredWeight"
                min="40"
                max="150"
                pattern="^(4\d|[5-9]\d|1[0-1]\d|150)$"
                title="Desired weight may contain only numbers. For example 65"
                required
                value={desiredWeight}
                onChange={onEditCalculator}
              />
              <div>
                <RadioTitle>Blood type *</RadioTitle>

                <RadioGroup onChange={onEditCalculator}>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="1"
                      required
                    />
                    1
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="2"
                      required
                    />
                    2
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="3"
                      required
                    />
                    3
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="bloodType"
                      value="4"
                      required
                    />
                    4
                  </RadioLabel>
                </RadioGroup>
              </div>
            </InputsWrapper>
          </FormWrapper>
          <ButtonCalc className="orange" type="submit">
            Start losing weight
          </ButtonCalc>
        </Form>
      </CalculatorStyled>
      <ModalDailyCalories modalOpened={modalOpened} />
    </>
  );
};

// onClick={openModal}
