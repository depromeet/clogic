import { createElement, render } from "./packages";

const lastChildComponent = () => {
  return render("div", ["span", "b"]);
};

const childComponent = () => {
  return render("div", ["div", "span", "p", lastChildComponent]);
};

const rootApp = () => {
  return render("div", ["div", "span", childComponent]);
};

createElement(rootApp, "root");
