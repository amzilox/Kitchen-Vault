import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new TimeoutError(`Request took too long! Timeout after ${s} seconds`)
      );
    }, s * 1000);
  });
};

export const AJAX = async function (url) {
  try {
    // const fetchOp = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newRecipe),
    // };
    const fetchPro = fetch(url);
    let response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    let data = await response.json();
    if (!response.ok) throw new ApiError(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
}

export class ApiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ApiError";
  }
}
