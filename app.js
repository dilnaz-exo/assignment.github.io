$(".item").each(function(i, itemDOMElement){
  let rowline = i + 1;

  $(itemDOMElement).css("grid-row", rowline);

  if(rowline % 2 == 0)
  {
    //even
    $(itemDOMElement).css("grid-column", 2);
    $(itemDOMElement).css("justify-self", "start");
  }
  else {
    //odds
    $(itemDOMElement).css("grid-column",1);
    $(itemDOMElement).css('justify-self','end');
    $(itemDOMElement).click(function() {
      $(itemDOMElement).text("hello, I'm row " + rowLine);
    })
  }
})
AOS. init();
