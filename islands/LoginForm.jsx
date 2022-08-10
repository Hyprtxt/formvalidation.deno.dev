/** @jsx h */
import { Fragment, h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

export default function LoginForm(props) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const form = useRef(null);
  useEffect(() => {
    const fv = FormValidation.formValidation(
      form.current,
      {
        fields: {
          identifier: {
            validators: {
              notEmpty: {
                message: "Please provide an email address",
              },
              emailAddress: {
                message: "The value is not a valid email address",
              },
            },
          },
          password: {
            validators: {
              notEmpty: {
                message: "Please provide a password",
              },
              stringLength: {
                min: 6,
                message: "Passwords are at least 6 characters long",
              },
            },
          },
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            rowSelector: ".form-row",
          }),
        },
      },
    );
    fv.on("core.form.valid", () => {
      setButtonDisabled(true);
    });
  });
  return (
    <form ref={form} id="loginForm" method="GET">
      <div class="form-group">
        <label class="col-form-label">Username</label>
        <div class="form-row">
          <input type="text" class="form-control" name="identifier" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-form-label">Password</label>
        <div class="form-row">
          <input type="password" class="form-control" name="password" />
        </div>
      </div>
      <div class="form-group my-3 d-grid gap-2">
        <button
          type="submit"
          class={`btn btn-dark ${buttonDisabled ? "disabled" : ""}`}
        >
          {buttonDisabled ? "Working..." : "Agent Login"}
        </button>
      </div>
    </form>
  );
}
