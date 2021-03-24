export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.email2) {
    errors.email2 = "Email confirmation required";
  } else if (values.email2 !== values.email) {
    errors.email2 = "Emails does not match";
  }

  if (!values.phone) {
    errors.phone = "Phone number required";
  } else if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      values.phone
    )
  ) {
    errors.phone = "Phone number is invalid";
  }

  return errors;
}
