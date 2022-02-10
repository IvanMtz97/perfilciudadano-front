export const responseHandler = async (res) => {
  try {
    return await res.json();
  } catch (error) {
    return {
      error,
      message: "Invalid JSON response",
      status: res.status,
    };
  }
};

export const errorHandler = (error) => {
  if (error.name !== "AbortError") {
    console.error(error);
  }
  return {
    error,
    message: "Request Failed",
  };
};
