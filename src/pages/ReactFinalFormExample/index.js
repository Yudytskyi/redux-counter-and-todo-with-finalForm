import React from 'react';
import styles from './styles.module.scss';
import { Form, Field } from 'react-final-form';
import FieldsInfo from './FieldsInfo';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2));
};

const ReactFinalFormExample = () => (
  <main className={styles.reactFinalForm}>
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href={'/'}>Home</a>
        </li>
        <li>
          <a href="https://github.com/erikras/react-final-form#-react-final-form">
            Read Docs
          </a>
        </li>
      </ul>
    </nav>
    <h1>🏁 React Final Form</h1>
    <h2>Fields Component</h2>
    <Form
      onSubmit={onSubmit}
      initialValues={{ employed: true }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className={styles.btn}>
            <button
              className={styles.btnPrimary}
              type="submit"
              disabled={submitting || pristine}
            >
              Submit
            </button>
            <button
              className={styles.btnDefault}
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <div>
            <label>Values</label>
            <Field name="values" component="input" type="checkbox" />
          </div>
          {values.values && <pre>{JSON.stringify(values, 0, 2)}</pre>}
          <div>
            <label>Full Values</label>
            <Field name="fullValues" component="input" type="checkbox" />
          </div>
          {values.fullValues && (
            <FieldsInfo names={['firstName', 'lastName', 'employed', 'notes']}>
              {fieldsState => (
                <pre>{JSON.stringify(fieldsState, undefined, 3)}</pre>
              )}
            </FieldsInfo>
          )}
        </form>
      )}
    />
  </main>
);

export default ReactFinalFormExample;
