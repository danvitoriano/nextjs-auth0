import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  // container *deve* ser anexado ao documento para que os eventos ocorram corretamente.
  document.body.appendChild(container);
});

afterEach(() => {
  // limpar na saída
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("object assignment", () => {
  const data = <button data-testid="toggle">teste</button>;
  expect(data).toEqual({ one: 1, two: 2 });
});
