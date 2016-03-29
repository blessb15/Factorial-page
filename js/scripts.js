
  $("form#calculator").submit(function(event) {
    console.log('menu loop function');
    var factorial = 1;
    var number = $("input#input1").val();
    for (var index = 1; index <= parseInt(number); index ++)
    {
      factorial *= index;
    }
    alert(factorial);
    event.preventDefault();
  });
