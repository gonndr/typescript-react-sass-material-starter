// import { Middleware } from "@reduxjs/toolkit";
// import { AnyAction } from "redux";
// import { AxiosError } from "axios";
// import {
//   getRequestFail,
//   getRequestPending,
//   getSuccess,
//   postSuccess,
//   fireNotification,
//   getRequest,
//   postRequest,
// } from "@state/actions";
// import { getHttpRequest, postHttpRequest } from "./api";

// const baseURL = "http://localhost:8080";
// const dataUrl = `${baseURL}/data`;

// const apiMiddleware: Middleware =
//   ({ dispatch }) =>
//   (next) =>
//   async (action: AnyAction) => {
//     next(action);
//     const { type, payload } = action;
//     if (type.endsWith("REQUEST")) {
//       try {
//         dispatch(getRequestPending());

//         const { data } = type.startsWith("GET")
//           ? await getHttpRequest({ url: dataUrl })
//           : await postHttpRequest({ ...payload, url: dataUrl });

//         switch (type) {
//           case getRequest.type:
//           default:
//             dispatch(getSuccess(data));
//             break;
//           case postRequest.type:
//             dispatch(postSuccess());
//             dispatch(
//               fireNotification({
//                 type: "success",
//                 message: `Revision posted successfully!`,
//               })
//             );
//             break;
//         }
//       } catch (error) {
//         const { status, code } = error as AxiosError;
//         dispatch(getRequestFail());
//         dispatch(
//           fireNotification({
//             type: "error",
//             message: `${status} ${code}: Something went wrong!`,
//           })
//         );
//       }
//     }
//   };

// export default apiMiddleware;
