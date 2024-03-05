import { createMachine, createActor } from "xstate";


const appMachine = createMachine(
  {
    id: "Untitled",
    initial: "First State",
    states: {
      "First State": {
        on: {
          next: {
            target: "Second State",
          },
        },
      },
      "Second State": {
        on: {
          next: {
            target: "Third State",
          },
        },
      },
      "Third State": {
        on: {
          next: {
            target: "First State",
          },
        },
      },
    },
  },
  {
    actions: {},
    actors: {},
    guards: {},
    delays: {},
  },
);

export const AppActor = createActor(appMachine);
AppActor.start()