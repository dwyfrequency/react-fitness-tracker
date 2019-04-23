export default function() {
  return Promise.resolve({
    get: () =>
      Promise.resolve([
        {
          id: 0,
          date: 'Tuesday',
          name: 'Wash the dishes',
          dailyWorkout: [
            {
              name: 'Bicycling',
              timeDuration: 30,
              desription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum \nest volutpat ultricies consequat. Class aptent taciti sociosqu ad litora\n torquent per conubia nostra, per inceptos himenaeos.',
              completed: false,
            },
            {
              name: 'Running',
              timeDuration: 45,
              desription:
                'Blorem ipsum dolor sit amet, consectetur adipiscing elit. Dimsum fermentum \nest volutpat ultricies consequat. Class aptent taciti sociosqu ad litora\n torquent per conubia nostra, per inceptos himenaeos.',
              completed: false,
            },
          ],
        },
        {
          id: 1,
          date: 'Wednesday',
          name: 'Wash the dishes',
          dailyWorkout: [
            {
              name: 'Bicycling',
              timeDuration: 30,
              desription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum \nest volutpat ultricies consequat. Class aptent taciti sociosqu ad litora\n torquent per conubia nostra, per inceptos himenaeos.',
              completed: false,
            },
            {
              name: 'Swimming',
              timeDuration: 30,
              desription:
                'Vivamus eu consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mattis augue, eget interdum diam.',
              completed: true,
            },
          ],
        },
      ]),
  });
}
