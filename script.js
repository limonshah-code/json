// Fetch the JSON file with the correct file extension
fetch("buiding_and_meterial_usa_1_10_5m.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Access the JSON data
    const jsonData = data;
    console.log(jsonData); // You can do something with the data here
  })
  .catch(error => {
    console.error("Error fetching JSON data:", error);
  });
