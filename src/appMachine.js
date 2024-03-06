import { createMachine,fromPromise } from 'xstate';

export const appMachine = createMachine({
  "id": "Untitled",
  "initial": "First State",
  context: {
    "name": "John"
  },
  "states": {
    "First State": {
      invoke: {
        id: "invoke",
        src: "invoke",
        onDone: {
          target: "Second State",
        },
        onError: {
          target: "Third State",
        },
      },
      "on": {
        "next": {
          "target": "Second State"
        }
      }
    },
    "Second State": {
      "on": {
        "next": {
          "target": "Third State"
        }
      }
    },
    "Third State": {
      "on": {
        "next": {
          "target": "First State"
        }
      }
    }
  }
}, {
  actions:   {},
  actors:   {
   invoke: fromPromise(() => {
      return new Promise((resolve,reject) => {
        setTimeout(resolve, 5000);
      });
    }),
  },
  guards:   {},
  delays:   {},
})