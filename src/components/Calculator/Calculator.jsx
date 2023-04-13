import { CalculatorStyled, InputsWrapper,FormWrapper, Input, Form, RadioGroup, RadioTitle, RadioLabel, RadioInput, ButtonCalc } from './Calculator.styled';

export const CalculatorEl = () => {
  return (
    <CalculatorStyled>
      <h2>Calculate your daily calorie intake right now</h2>
      <Form>
        <FormWrapper>
        <InputsWrapper >
          <Input
            placeholder="Height *"
            type="text"
            name="height"
            min="140"
            max="210"
            pattern="^1([4-9]\d|0\d{2}|1\d{2}|200|20[1-9])$"
            title="Height may contain only numbers. For example 165"
            required
          />
          <Input
            placeholder="Age *"
            type="text"
            name="height"
            min="16"
            max="120"
            pattern="^(1[6-9]|[2-9]\d|1[01]\d|120)$"
            title="Height may contain only numbers. For example 35"
            required
          />
          <Input
            placeholder="Current weight *"
            type="text"
            name="height"
            min="40"
            max="220"
            pattern="^(4\d|22\d|2[0-1]\d|220)$"
            title="Height may contain only numbers. For example 85"
            required
          />
        </InputsWrapper>
        <InputsWrapper>
          <Input
            placeholder="Desired weight *"
            type="text"
            name="height"
            min="40"
            max="150"
            pattern="^(4\d|[5-9]\d|1[0-1]\d|150)$"
            title="Height may contain only numbers. For example 65"
            required
          />
          <div>
            <RadioTitle>Blood type *</RadioTitle>

            <RadioGroup>
              <RadioLabel>
                <RadioInput type="radio" name="bloodType" value="1" required />1
              </RadioLabel>
              <RadioLabel>
                <RadioInput type="radio" name="bloodType" value="2" required />2
              </RadioLabel>
              <RadioLabel>
                <RadioInput type="radio" name="bloodType" value="3" required />3
              </RadioLabel>
              <RadioLabel>
                <RadioInput type="radio" name="bloodType" value="4" required />4
              </RadioLabel>
            </RadioGroup>
          </div>
        </InputsWrapper>

        </FormWrapper>
          <ButtonCalc type="submit">
          Start losing weight
              </ButtonCalc>
      </Form>
    </CalculatorStyled>
  );
};
