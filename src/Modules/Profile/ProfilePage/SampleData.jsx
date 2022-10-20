const SampleData = () => {
  const users = [
    {
      picture: "/images/sample_user_female.jpeg",
      name: "Idika Laghari",
      gender: "Female",
      birth_country: "India",
      city: "Philadelphia, PA",
      country: "USA",
      date_of_birth: "16-12-1992",
      languages: ["English", "Punjabi"],
      marital_status: "Divorced",
    },
    {
      picture: "/images/sample_user_man.webp",
      name: "John Wick",
      gender: "Male",
      birth_country: "Belarus",
      city: "Long Island, NY",
      country: "USA",
      date_of_birth: "12-09-1964",
      languages: ["English", "Russian", "Italian"],
      marital_status: "Widowed",
    },
  ];

  return Math.random() >= 0.5 ? users[0] : users[1];
};

export default SampleData;
