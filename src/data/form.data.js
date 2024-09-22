export const formData = [
    {
        id: 1,
        orii: true,
        direction: "OUTGOING_IN_PERSON",
        gender: "Male",
        cta: 3,
        entryDate: "01-01-2024",
        exitDate: "01-01-2025",
        originProgram: "Physics",
        destinationProgram: "Mathematics",
        city: "New York",
        country: "USA",
        teacher: "John Doe",
        faculty: "Science",
        funding: 1000.75,
        fundingSource: "Government Grant",
        destination: "MIT",
        origin: "Harvard",
        agreementId: 123,
        event: {
          description: "Exchange program conference",
          eventTypeId: 101
        },
        person: {
          identificationType: "CC",
          personType: "TEACHER",
          firstName: "Alice",
          lastName: "Johnson",
          identification: "123456789",
          email: "alice.johnson@example.com"
        }
      },
      {
        id: 2,
        orii: false,
        direction: "INCOMING_IN_PERSON",
        gender: "Female",
        cta: 5,
        entryDate: "15-03-2023",
        exitDate: "15-03-2024",
        originProgram: "Engineering",
        destinationProgram: "Computer Science",
        city: "Berlin",
        country: "Germany",
        teacher: "Emily Smith",
        faculty: "Engineering",
        funding: 1500.50,
        fundingSource: "Private Sponsorship",
        destination: "TU Berlin",
        origin: "Stanford",
        agreementId: 456,
        event: {
          description: "Technology symposium",
          eventTypeId: 202
        },
        person: {
          identificationType: "CC",
          personType: "STUDENT",
          firstName: "Carlos",
          lastName: "Martinez",
          identification: "987654321",
          email: "carlos.martinez@example.com"
        }
      },
      {
        id: 3,
        orii: true,
        direction: "INCOMING_VIRTUAL",
        gender: "Female",
        cta: 2,
        entryDate: "10-10-2022",
        exitDate: "10-10-2023",
        originProgram: "Biology",
        destinationProgram: "Environmental Science",
        city: "Tokyo",
        country: "Japan",
        teacher: "Akira Yamamoto",
        faculty: "Biology",
        funding: 2000.00,
        fundingSource: "Research Fund",
        destination: "University of Tokyo",
        origin: "Cambridge",
        agreementId: 789,
        event: {
          description: "Environmental workshop",
          eventTypeId: 303
        },
        person: {
          identificationType: "CC",
          personType: "TEACHER",
          firstName: "Jordan",
          lastName: "Taylor",
          identification: "123987654",
          email: "jordan.taylor@example.com"
        }
      }
];