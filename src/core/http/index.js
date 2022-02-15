import axios from "axios";

const METHOD = {
  GET: "get",
  POST: "post",
};

export default {
  METHOD,
  request(props) {
    const {
      path = "",
      data = null,
      method = METHOD.GET,
      timeout = 30 * 1000, //in seconds
    } = props;
    let key = "";
    let value = "";
    if (data) {
      [key, value] = Object.entries(data)[0];
    }
    console.log(key);
    console.log(value);

    const options = {
      method,
      timeout,
      url: data ? path + "?" + key + "=" + value : path,
      // eslint-disable-next-line no-extra-boolean-cast
      ...(!!data ? { data } : {}), // eleminate field data when undefined
    };
    console.log(options.url);
    // const _successHandler = (data) => {
    //   console.log(Promise.resolve(data));
    //   Promise.resolve(data);
    // };

    // const _failHandler = (err) => {
    //   Promise.reject(err);
    // };
    return axios(options);
  },
};
