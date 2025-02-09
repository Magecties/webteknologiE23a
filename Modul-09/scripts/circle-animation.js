//SVG-elementet indsættes
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

//Vi putter en cirkel ind i SVG-elementet
svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "#1243");

  svg
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "#1243");


  /* *
d3.selectAll("circle")
  //En transition begynder
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(200)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således fra 100 - 600
  .attr("cx", 800)
  //Nu strater vi endnu en trasition som skal bevæge cirklen tilbage til 100
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
  .attr("cx", 100);

/**
 * Havde vi haft en knap et sted på siden, kunne vi have fået animationen til at starte ved klik på knappen:
 * d3.select("#klik")
  .on("click", function () {
    d3.selectAll("circle")
      .transition() 
      .duration(2000)
      .attr("cx", 600)
      .transition()
      .duration(2000)
      .attr("cx", 100)
  });
  * Bonusopgave: implementer en knap som starter animationen og få cirklens til at bevæge sig i en trekant.
 */

  function myFunction() {
    d3.selectAll("circle")
  //En transition begynder
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(500)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således fra 100 - 600
  .attr("cx", 800)
  .attr("fill", "red")
  //Nu strater vi endnu en trasition som skal bevæge cirklen tilbage til 100
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
  .attr("cx", 500)
  .attr("cy", 300)
  .attr("fill", "blue")
  .transition()
  .duration(2000)
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("fill", "yellow")
  .transition()
  .duration(2000)
  .attr("cx", 800)
  .attr("fill", "#1243")

  }

  function myFunction2() {
    d3.selectAll("circle")
  //En transition begynder
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(5000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således fra 100 - 600
  .attr("cx", 600)
  .attr("fill", "red")
  //Nu strater vi endnu en trasition som skal bevæge cirklen tilbage til 100
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(3000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
  .attr("cx", 300)
  .attr("cy", 150)
  .attr("fill", "blue")
  .transition()
  .duration(3500)
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("fill", "yellow")
  .transition()
  .duration(3500)
  .attr("cx", 800)
  .attr("fill", "#1243")

  }