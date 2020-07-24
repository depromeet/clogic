import { createElement, render } from "./packages";

const lastChildComponent = () => {
  return render({ tag: "div", attrs: {}, value: "" }, [
    { tag: "span", attrs: {}, value: "" },
    { tag: "b", attrs: {}, value: "" },
  ]);
};

const childComponent = () => {
  return render({ tag: "div", attrs: {}, value: "" }, [lastChildComponent]);
};

const rootApp = () => {
  return render({ tag: "div", attrs: {}, value: "" }, [
    { tag: "div", attrs: {}, value: "hi" },
    { tag: "span", attrs: {}, value: "what" },
    childComponent,
  ]);
};

createElement(rootApp, "root");
