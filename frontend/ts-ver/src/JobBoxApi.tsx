import axios from 'axios';
import jwt from 'jsonwebtoken'

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static async request(endpoint: string, paramsOrData = {}, verb = "get") {

    paramsOrData._token = localStorage.token;

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle: string) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async searchCompanies(query: string) {
    let res;
    if (query) {
      res = await this.request(`companies`, { search: query });
    } else {
      res = await this.request(`companies`);
    }
    return res.companies;
  }

  static async searchJobs(query: string) {
    let res;
    if (query) {
      res = await this.request(`jobs`, { search: query });
    } else {
      res = await this.request(`jobs`);
    }
    return res.jobs;
  }

  static async login(username: string, password: string) {
    let res = await this.request(`login`, { username, password }, "post");
    return res;
  }

  static async register(username: string, password: string,
    firstName: string, lastName: string, email: string) {
    let res = await this.request('users', {
      username, password,
      firstName, lastName, email
    }, "post");
    return res;
  }

  static async checkToken(token: string) {
    let username = jwt.decode(token).username
    let res = await this.request(`users/${username}`)
    return res;
  }

  static async editUser(username: string, password: string,
    firstName: string, lastName: string, photoUrl: string,
    email: string) {
    let res = await this.request(`users/${username}`, {
      password,
      firstName, lastName, photoUrl, email
    }, "patch")
    return res;
  }

  static async applyToJob(id: string, state: string) {
    await this.request(`jobs/${id}/apply`, { state }, 'post')
  }
}

export default JoblyApi;