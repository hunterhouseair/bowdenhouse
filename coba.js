const ical = require("node-ical");

const runme = async () => {
  //   const webEvents = await ical.async.fromURL(
  //     "https://www.airbnb.co.uk/calendar/ical/1046907771076731775.ics?s=eaa2925e73c6e3ab9a8429eb2ea1787d"

  const webEvents = await ical.async.fromURL(
    "https://www.airbnb.co.uk/calendar/ical/1157851407593952860.ics?s=d7621bb863c389f3391d2c2a929b4daf"
  );

  console.log(webEvents);
};

runme();
// const events = ical.sync.parseFile("bowden.ics");
// const events = ical.sync.parseFile("listing.ics");
// console.log(events);
// for (const event of Object.values(events)) {
//   console.log(
//     "Summary: " +
//       event.summary +
//       "\nDescription: " +
//       event.description +
//       "\nStart Date: " +
//       event.start +
//       "\nEnd Date: " +
//       event.end
//   );
// }
