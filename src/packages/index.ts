import {
  RenderFunction,
  HTMLElementTagNameList,
  ComponentProps,
} from "./types";

export const createElement = (rootFunction: RenderFunction, id: string) => {
  const element = rootFunction();
  const rootElement = document.getElementById(id);

  if (!rootElement) {
    throw Error("root element의 id 지정이 잘못되었습니다.");
  }
  rootElement.appendChild(element);
};

export const render = (
  elKey: ComponentProps,
  children: (ComponentProps | RenderFunction)[]
) => {
  const { tag, attrs, value } = elKey;
  const el = document.createElement(tag);
  el.innerText = value;
  children
    .map((child) => {
      if (typeof child === "function") {
        return child();
      } else {
        const { tag, attrs, value } = child;
        const childEl = document.createElement(tag);
        childEl.innerText = value;
        return childEl;
      }
    })
    .forEach((child) => el.appendChild(child));

  return el;
};
