import { RESTDataSource } from "apollo-datasource-rest";

class DriverDS extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SPLYT_URL;
  }

  public async getDrivers(count) {
    const url = count ? this.baseURL+`&count=${count}` : this.baseURL;
    const driverList = await this.get(url);
    return driverList;
  }
}

const dataSources = () => ({
  driverData: new DriverDS()
})

export default dataSources;