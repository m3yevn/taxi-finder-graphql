import { RESTDataSource } from "apollo-datasource-rest";

class DriverDS extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SPLYT_URL;
  }

  public async getDrivers(count: number) {
    if (this.baseURL == undefined) {
      throw new Error('Splyt URL is missing in environment variables')
    }

    this.baseURL = count ? this.baseURL + `&count=${count}` : this.baseURL;
    const driverList = await this.get(this.baseURL);
    return driverList;
  }
}

const dataSources = () => ({
  driverData: new DriverDS()
})

export default dataSources;