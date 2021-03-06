import { Field } from 'react-final-form';

const FieldsInfo = ({
  names,
  subscription,
  fieldsState = {},
  children,
  originalRender,
}) => {
  if (!names.length) {
    return (originalRender || children)(fieldsState);
  }
  const [name, ...rest] = names;
  return (
    <Field name={name} subscription={subscription}>
      {fieldState => (
        <FieldsInfo
          names={rest}
          subscription={subscription}
          originalRender={originalRender || children}
          fieldsState={{ ...fieldsState, [name]: fieldState }}
        />
      )}
    </Field>
  );
};

export default FieldsInfo;
