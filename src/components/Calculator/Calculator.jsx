import { CalculatorStyled } from './Calculator.styled';

export const CalculatorEl = () => {
  return (
    <CalculatorStyled>
      <h2>Calculate your daily calorie intake right now</h2>
      <form>
        <div>
          <input
            placeholder="Height *"
            type="text"
            name="height"
            min="140"
            max="210"
            pattern="^1([4-9]\d|0\d{2}|1\d{2}|200|20[1-9])$"
            title="Height may contain only numbers. For example 165"
            required
          />
          <input
            placeholder="Age *"
            type="text"
            name="height"
            min="16"
            max="120"
            pattern="^(1[6-9]|[2-9]\d|1[01]\d|120)$"
            title="Height may contain only numbers. For example 35"
            required
          />
          <input
            placeholder="Current weight *"
            type="text"
            name="height"
            min="40"
            max="220"
            pattern="^(4\d|22\d|2[0-1]\d|220)$"
            title="Height may contain only numbers. For example 85"
            required
          />
        </div>
        <div>
          <input
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
            <div>Blood type *</div>

            <div>
              <label>
                <input type="radio" name="bloodType" value="1" required />1
              </label>
              <label>
                <input type="radio" name="bloodType" value="2" required />2
              </label>
              <label>
                <input type="radio" name="bloodType" value="3" required />3
              </label>
              <label>
                <input type="radio" name="bloodType" value="4" required />4
              </label>
            </div>
          </div>
          <button type="submit">
          Start losing weight
              </button>
        </div>
      </form>
      {/* <form className={css.form}>
              <div className={css.inputsWrapper}>
                <div className={css.inputsLeft}>
                  <div>
                    <Field
                      type="text"
                      name="height"
                      min="120"
                      max="220"
                      required
                      placeholder="Зріст *"
                      className={
                        errors.height && touched.height
                          ? css.inputError
                          : css.input
                      }
                    />
                    {errors.height && touched.height && (
                      <p className="error">{errors.height}</p>
                    )}
                  </div>
                  <div>
                    <Field
                      className={
                        errors.age && touched.age ? css.inputError : css.input
                      }
                      type="text"
                      name="age"
                      min="18"
                      max="100"
                      placeholder="Вік *"
                      required
                    />
                    {errors.age && touched.age && (
                      <p className="error">{errors.age}</p>
                    )}
                  </div>
                  <div>
                    <Field
                      className={
                        errors.weight && touched.weight
                          ? css.inputError
                          : css.input
                      }
                      type="text"
                      name="weight"
                      min="40"
                      max="200"
                      placeholder="Вага *"
                      required
                    />
                    {errors.weight && touched.weight && (
                      <p className="error">{errors.weight}</p>
                    )}
                  </div>
                </div>
                <div className={css.inputsRight}>
                  <div>
                    <Field
                      className={
                        errors.desiredWeight && touched.desiredWeight
                          ? css.inputError
                          : css.input
                      }
                      type="text"
                      name="desiredWeight"
                      min="40"
                      max="200"
                      placeholder="Бажана вага *"
                      required
                    />
                    {errors.desiredWeight && touched.desiredWeight && (
                      <p className="error">{errors.desiredWeight}</p>
                    )}
                  </div>
                  <div>
                    <p className={css.radioTitle}>Група крові *</p>
                    <div className={css.radioWrapper}>
                      <label className={css.radioLabel}>
                        <Field
                          className={css.radioInput}
                          type="radio"
                          name="bloodType"
                          value="1"
                          required
                        />
                        1
                      </label>
                      <label className={css.radioLabel}>
                        <Field
                          className={css.radioInput}
                          type="radio"
                          name="bloodType"
                          value="2"
                          required
                        />
                        2
                      </label>
                      <label className={css.radioLabel}>
                        <Field
                          className={css.radioInput}
                          type="radio"
                          name="bloodType"
                          value="3"
                          required
                        />
                        3
                      </label>
                      <label className={css.radioLabel}>
                        <Field
                          className={css.radioInput}
                          type="radio"
                          name="bloodType"
                          value="4"
                          required
                        />
                        4
                      </label>
                    </div>
                    {errors.bloodType && touched.bloodType && (
                      <p className="error">{errors.bloodType}</p>
                    )}
                  </div>
                </div>
              </div> */}

      {/* <button className={css.startBtn} type="submit">
                Розпочати схуднення
              </button>
            </form> */}
    </CalculatorStyled>
  );
};
