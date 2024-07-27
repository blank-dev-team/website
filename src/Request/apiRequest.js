// 1) Api for fetching the options

const API_ENQUIRES_URL =
  "https://blankcard-dev.up.railway.app/blank/api/v1/utility/enquiries";

export async function getEnquires() {
  const res = await fetch(`${API_ENQUIRES_URL}`);

  if (!res.ok) throw Error("Failed to get Enquires");
  const { data } = await res.json();
  return data;
}

// 2) Api for pushing the request form

// const API_REQUEST_URL =
//   "http://blankcard-dev.up.railway.app/blank/api/v1/utility/submit-request";

// export async function createRequest(newRequest) {
//   try {
//     const res = await fetch(`${API_REQUEST_URL}`, {
//       method: "POST",
//       body: JSON.stringify(newRequest),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!res.ok) throw Error();
//     const { data } = await res.json();
//     return data;
//   } catch {
//     throw Error("Failed to create Request");
//   }
// }
