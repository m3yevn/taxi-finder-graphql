import { gql } from "apollo-server";

const typeDefs = gql`
type Query {
   drivers(count: Int): Drivers
}
type Drivers {
  pickup_eta: Int,
  drivers: [Driver]
}
type Driver {
  driver_id: String,
  location: Location
}
type Location {
  latitude: Float,
  longitude: Float,
  bearing: Int
}
`;

export default typeDefs;
