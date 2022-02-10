import { OPTIONS_URI } from "../constants";
import { errorHandler, responseHandler } from "../utils/handlers";

export const getOptionsAsync = async (optionType) => {
  return fetch(`${OPTIONS_URI}${optionType ? `/?type=${optionType}` : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(responseHandler)
    .catch(errorHandler);
};

export const getOptionAsync = async (id) => {
  return fetch(`${OPTIONS_URI}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(responseHandler)
    .catch(errorHandler);
};

export const createOptionAsync = async (option) => {
  return fetch(OPTIONS_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  })
    .then(responseHandler)
    .catch(errorHandler);
};

export const updateOptionAsync = async (id, option) => {
  return fetch(`${OPTIONS_URI}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  })
    .then(responseHandler)
    .catch(errorHandler);
};

export const deleteOption = async (id) => {
  return fetch(`${OPTIONS_URI}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(responseHandler)
    .catch(errorHandler);
};
