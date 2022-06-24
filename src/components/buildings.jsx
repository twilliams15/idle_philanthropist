import React from "react";
import { Building } from "./building";

const initialBuildings = {
  "New Wallet": {
    desc: "Pull out those Benjamins with ease",
    initialCost: 15,
    incAmount: 0.1,
    count: 0,
    locked: false,
    unlocks: "Recurring Donation"
  },

  "Recurring Donation": {
    desc: "Set it & forget it!",
    initialCost: 100,
    incAmount: 1,
    count: 0,
    locked: true,
    unlocks: "New Payment Method"
  },

  "New Payment Method": {
    desc: "Speedier donations with Snapple Pay, Bugle Pay, and PayFriend",
    initialCost: 1100,
    incAmount: 8,
    count: 0,
    locked: true,
    unlocks: "Team Fundraiser"
  },

  "Team Fundraiser": {
    desc: "It's like a regular fundraiser, but with a team",
    initialCost: 12000,
    incAmount: 47,
    count: 0,
    locked: true,
    unlocks: "Social Media Campaign"
  },

  "Social Media Campaign": {
    desc: "IYDGBNOWLY",
    initialCost: 130000,
    incAmount: 260,
    count: 0,
    locked: true,
    unlocks: "Celebrity Endorsement"
  },

  "Celebrity Endorsement": {
    desc: "A shoutout from Fredward Borton should help",
    initialCost: 1400000,
    incAmount: 1400,
    count: 0,
    locked: true,
    unlocks: "Golf Tournament"
  },

  "Golf Tournament": {
    desc: "Nothing says 'I have money to give' like a golf tournament",
    initialCost: 20000000,
    incAmount: 7800,
    count: 0,
    locked: true,
    unlocks: "Charity Gala"
  },

  "Charity Gala": {
    desc: "It’s time to dress up and give generously",
    initialCost: 330000000,
    incAmount: 44000,
    count: 0,
    locked: true,
    unlocks: "501(c)(3) Organization"
  },

  "501(c)(3) Organization": {
    desc: "Finally, some recognition from the government",
    initialCost: 5100000000,
    incAmount: 260000,
    count: 0,
    locked: true,
    unlocks: "Charity Foundation"
  },

  "Charity Foundation": {
    desc: "Bill & Melinda had better look out",
    initialCost: 75000000000,
    incAmount: 1600000,
    count: 0,
    locked: true
  }
};

const buildingReducer = (state, name) => {
  const unlock = state[name].unlocks;

  const newState = {
    ...state,
    [unlock]: {
      ...state[unlock],
      locked: false
    }
  };

  return newState;
};

export function Buildings() {
  const [buildingState, unlock] = React.useReducer(
    buildingReducer,
    initialBuildings
  );

  return Object.keys(buildingState).map((name) => {
    return (
      <Building
        key={name}
        name={name}
        unlock={unlock}
        {...buildingState[name]}
      />
    );
  });
}
