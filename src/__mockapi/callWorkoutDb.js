export default function() {
  return Promise.resolve({
    get: () =>
      Promise.resolve([
        {
          id: 0,
          date: 'Tuesday',
          name: 'Wash the dishes',
          workouts: [
            {
              name: 'Bicycling',
              timeDuration: 30,
              desription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum \nest volutpat ultricies consequat. Class aptent taciti sociosqu ad litora\n torquent per conubia nostra, per inceptos himenaeos.',
            },
            {
              name: 'Running',
              timeDuration: 45,
              desription:
                'Blorem ipsum dolor sit amet, consectetur adipiscing elit. Dimsum fermentum \nest volutpat ultricies consequat. Class aptent taciti sociosqu ad litora\n torquent per conubia nostra, per inceptos himenaeos.',
            },
          ],
        },
      ]),
  });
}
