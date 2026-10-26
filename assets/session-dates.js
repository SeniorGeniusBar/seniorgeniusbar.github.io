// ======================================================================
// ATRIA — SESSION SETTINGS
//
// DEFAULT: upcoming dates generate automatically from the recurring
// pattern below, so you normally do NOT need to update the website.
//
// If a particular session changes, use ATRIA_MANUAL_OVERRIDE below.
// When the override list is empty, automatic scheduling is used.
// ======================================================================

const ATRIA_MANUAL_OVERRIDE = [
  // Leave this empty for automatic scheduling.
  //
  // If you need to replace the normal upcoming dates, add dates here:
  // { date: "2026-09-12", time: "2:30 PM" },
  // { date: "2026-09-19", time: "2:30 PM" }
];

const sessionInfo = {
  location: "The Parlor",
  bring: "your phone, tablet, laptop, charger, and questions.",
  time: "2:30 PM",

  recurring: {
    anchorDate: "2026-07-11",  // one confirmed session on the recurring pattern
    intervalDays: 7,            // automatic spacing between sessions (every Saturday)
    showNext: 2                 // only show the next two dates
  },

  // Skip a normal auto-generated date if a session is canceled.
  // Example: "2026-12-26"
  skipDates: [
  ],

  // Add an extra one-time date while keeping the automatic schedule.
  // Example: { date: "2026-08-01", time: "2:30 PM" }
  extraDates: [
  ]
};
