import { createMachine,fromPromise } from 'xstate';
  export const appMachine = createMachine({
  "id": "Untitled",
  "initial": "First State",
  "states": {
    "First State": {
      invoke: {
        id: "invoke",
        src: fromPromise((context,event) => {
          return new Promise((resolve,reject) => {
            setTimeout(resolve, 5000);
          });
        }),
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
    
  },
  guards:   {},
  delays:   {},
})