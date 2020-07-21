import { RenderFunction, HTMLElementTagNameList } from "./types";

export const createElement = (rootFunction: RenderFunction, id: string) => {
  const element = rootFunction();
  const rootElement = document.getElementById(id);

  if (!rootElement) {
    throw Error("root element의 id 지정이 잘못되었습니다.");
  }
  rootElement.appendChild(element);
};

export const render = (
  elKey: HTMLElementTagNameList,
  children: (HTMLElementTagNameList | RenderFunction)[]
) => {
  const el = document.createElement(elKey);
  children
    .map((child) => {
      if (typeof child === "function") {
        return child();
      } else {
        return document.createElement(child);
      }
    })
    .forEach((child) => el.appendChild(child));

  return el;
};
