require('dotenv').config()
import algoliasearch from "algoliasearch";

class Events {
  constructor() {
    const client = algoliasearch(process.env.ALGOLIA_CLIENT_ID, process.env.ALGOLIA_SECRET)
    this.index = client.initIndex("Events")
  }

  /**
   * Adds a singular or multiple events
   * @param {events} An array of event objects
   * @return {ids} An array of event object IDs
   */
  addEvents(events) {
    if (!events.length) {
      return []
    } else if (events.length === 1) {
      this.index.saveObject(events, {
        autoGenerateObjectIDIfNotExist: true
      })
        .then(res => {
          console.log(res)
          return []
        });
    } else {
      this.index.saveObjects(events, {
        autoGenerateObjectIDIfNotExist: true
      })
        .then(res => {
          console.log(res)
          return res
        });
    }
  };

  editEvent(editedEvent) {

  };

  deleteEvent(eventId) {

  };

  search(term) {
    this.index.search(term)
    .then(results => {
      console.log(results)
    })
  };
};

class Hotels {
  constructor() {
    const client = algoliasearch(process.env.ALGOLIA_CLIENT_ID, process.env.ALGOLIA_SECRET)
    this.index = client.initIndex("Hotels")
  }
};

export {
  Events,
  Hotels
}