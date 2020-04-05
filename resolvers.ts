const resolvers = {
  Query: {
    drivers: async (_: any, { count }: any, { dataSources }: any) => {
      const drivers = await dataSources.driverData.getDrivers(parseInt(count));
      return drivers;
    }
  }
};


export default resolvers;
