function buildPlot() {
    /* data route */
  var url = "/api/restaurants";
  d3.json(url).then(function(response) {
  
    console.log(response);
  
    var restaurant_name = response.map(p => p.name);
    var restaurant_type = response.map(p => p.type);
    var restaurant_count = response.map(p => p.count);
  
    var trace = [{
      'x': restaurant_type,
      'y': restaurant_count,
      'type': 'bar'
    }];
  
    var layout = {
      title: "Restaurants",
      xaxis: {
        title: "Restaurants Type"
      },
      yaxis: {
        title: "Number of Restaurants"
      }
    };
  
    Plotly.newPlot("plot", trace, layout);
  });
  }
  
  function buildTable() {
  /* data route */
  var url = "/api/restaurantss";
  d3.json(url).then(function(response) {
  
    var restaurant_name = response.map(p => p.name);
    var restaurant_type = response.map(p => p.type);
    var rating = response.map(p => p.rating);
  
    var table = d3.select("#restaurants-table");
    var tbody = table.select("tbody");
    console.log(tbody);
    var trow;
    for (var i = 0; i < pet_name.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(restaurant_name[i]);
      trow.append("td").text(restaurant_type[i]);
      trow.append("td").text(rating[i]);
      }
  });
  }
  
  buildPlot();
  
  buildTable();