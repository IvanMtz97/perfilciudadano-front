import { OPTIONS_URI } from "../constants";

export const createSection = async (section) => {
  return fetch(OPTIONS_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(section),
  });
};

export const updateSection = async (id, section) => {
  return fetch(`${OPTIONS_URI}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(section),
  });
};
