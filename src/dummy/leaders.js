const leaders = [
  {
    id: 1,
    folio_number: "Folio 1",
    name: "Leader 1",
    operator: {
      name: "Operator 1",
    },
    coordinator: {
      name: "Coordinator 1",
    },
    director: {
      name: "Director 1",
    },
    secretary: {
      name: "Secretary 1",
    },
    related_structures_quantity: 3,
    survey_answers_quantity: 6,
  },
  {
    id: 2,
    folio_number: "Folio 2",
    name: "Leader 2",
    operator: {
      name: "Operator 2",
    },
    coordinator: {
      name: "Coordinator 2",
    },
    director: {
      name: "Director 2",
    },
    secretary: {
      name: "Secretary 2",
    },
    related_structures_quantity: 9,
    survey_answers_quantity: 12,
  },
];

// We could also use this more direct structure or even send name field and also object in case its necessary, 
// depending on whats easier on backend

// const leaders = [
//   {
//     id: 1,
//     folio_number: "Folio 1",
//     name: "Leader 1",
//     operator_name: "Operator 1",
//     operator: {
//       name: "Operator 1",
//     },
//     coordinator_name: "Coordinator 1",
//     director_name: "Director 1",
//     secretary_name: "Secretary 1",
//     related_structures_quantity: 9,
//     survey_answers_quantity: 12,
//   }
// ]

export default leaders;