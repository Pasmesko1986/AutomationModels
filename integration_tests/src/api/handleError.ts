import { AxiosError } from "axios";
import { expect } from "chai";

export function handleError(error: unknown) {
  if (error instanceof AxiosError) {
    console.error(error.response?.data);
  } else {
    console.error(error);
  }
  expect(true).to.be.false;
}
