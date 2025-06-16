export const fetchPatients = async () => {
    const credentials = btoa("coalition:skills-test");
  
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch patients");
    }
  
    return await response.json();
  };
  