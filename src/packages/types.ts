export type HTMLElementTagNameList = keyof HTMLElementTagNameMap;

export type RenderFunction = () => HTMLElementTagNameMap[HTMLElementTagNameList];
