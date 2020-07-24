export type HTMLElementTagNameList = keyof HTMLElementTagNameMap;

export type RenderFunction = () => HTMLElementTagNameMap[HTMLElementTagNameList];

export interface ComponentProps {
  tag: HTMLElementTagNameList;
  attrs: { [key: string]: string };
  value: string;
}
