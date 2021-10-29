// name: Name of event/hotel
// desc: descriiption
// price: price
// availability: this one is hard
// provider: the business/person providing service
// city: city
// state: state
// tags: list of tags related to this (hiking, biking, hotel etc)

/**
 * @param name 
 * @param desc
 * @param price
 * @param provider
 * @param city
 * @param state
 * @param tags
 * @returns {}
 */
const Event = (
  name,
  desc,
  price,
  provider,
  city,
  state,
  tags
) => {
  return {
    name,
    desc,
    price,
    provider,
    city,
    state,
    tags
  }
}

export default Event