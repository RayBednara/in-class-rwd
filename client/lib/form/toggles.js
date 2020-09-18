const form = document.querySelector("form");

const fields = form.querySelectorAll("div:not(:last-of-type)");

//TODO: Write a filter that will return out anything that does not have a data-status attribute (hasAttribute("data-status"))

const regularFields = [...fields].filter(
  (field) => !field.hasAttributes("data-status")
);

export default () => {
  console.log(fields);
  console.log(regularFields);
};
