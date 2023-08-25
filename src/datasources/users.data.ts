import { RESTDataSource } from "@apollo/datasource-rest";

export class UsersAPI extends RESTDataSource {
  override baseURL: string = "https://jsonplaceholder.typicode.com/";

  async getUsers() {
    return this.get("users");
  }
}
