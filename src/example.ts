import axios, { AxiosError } from "./index";
import { AxiosPromise } from "./types";

// axios({
//     method: "get",
//     url: "/api/user",
//     params: {
//         name: "Rupert",
//     },
// });

// axios({
//     method: "get",
//     url: "/api/user",
//     params: {
//         foo: ["bar", "baz"],
//     },
// });

// axios({
//     method: "get",
//     url: "/api/user",
//     params: {
//         foo: {
//             bar: "baz",
//         },
//     },
// });

// const date = new Date();

// axios({
//     method: "get",
//     url: "/api/user",
//     params: {
//         date,
//     },
// });

// axios({
//     method: "get",
//     url: "/api/user",
//     params: {
//         foo: "@:$, ",
//     },
// });

// axios({
//     method: "get",
//     url: "/api/user",
//     params: {
//         foo: "bar",
//         baz: null,
//     },
// });

// axios({
//     method: "get",
//     url: "api/user#hash",
//     params: {
//         foo: "bar",
//     },
// });

// axios({
//     method: "get",
//     url: "api/user?foo=bar",
//     params: {
//         bar: "baz",
//     },
// });

// axios({
//   method: 'post',
//   url: '/api/buffer',
//   data: new Int32Array([21, 31])
// })

// axios({
//   method: "get",
//   url: "/api/error",
//   timeout: 3500
// })
//   .then(data => console.log(data))
//   .catch(e => console.log(e));
axios({
  method: "get",
  url: "/api/statusError"
})
  .then(data => console.log(data))
  .catch((e: AxiosError) => console.log(e.response));
