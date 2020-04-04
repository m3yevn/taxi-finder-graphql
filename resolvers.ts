const resolvers = {
  Query: {
    drivers: async (_, {count}, { dataSources }) => {
      const drivers = await dataSources.driverData.getDrivers(count);
      return drivers;
    }
  }
};


export default resolvers;
