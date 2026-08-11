// ======================================================================
// ATRIA SESSION SETTINGS
//
// UPCOMING SESSIONS now generate themselves automatically from the
// recurring pattern below — you do NOT need to add a new date every two
// weeks anymore. As long as sessions keep happening every other Saturday,
// this file almost never needs to change.
//
// "anchorDate" is just ONE confirmed session date that falls on the
// right pattern (any real Saturday you've actually held a session on).
// The website counts forward in 14-day steps from that date to figure
// out which Saturdays come next — today, next week, next year, forever.
//
// If the pattern ever changes (different day of the week, or a
// different number of weeks between sessions), update anchorDate and/or
// intervalDays once, and everything recalculates itself.
// ======================================================================

const sessionInfo = {
  location: "The Parlor",
  bring: "your phone, tablet, laptop, charger, and questions.",
  time: "1:00 PM",

  recurring: {
    anchorDate: "2026-07-11",  // any one confirmed Saturday session date
    intervalDays: 14,           // every other week
    showNext: 2                 // how many upcoming sessions to display
  },

  // ---- Exceptions (optional) ----
  // To SKIP a specific date (holiday, canceled session), add it here,
  // e.g. "2026-12-26",
  skipDates: [
  ],

  // To add an EXTRA one-off session outside the normal pattern, add it
  // here with its own date and time, e.g.
  // { date: "2026-08-01", time: "1:00 PM" },
  extraDates: [
  ]
};
