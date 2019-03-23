function  copperConverter(coin, value) {
  switch (coin) {
    case 'copper-halfpenny':
      return value/2; // 1 penny == 2 halfpennies
      break;
    case 'copper-penny':
      return value; // 1 penny == 1 penny
      break;
    case 'copper-half-groat':
      return value*2; // 1 half-groat == 2 pennies
      break;
    case 'copper-groat':
      return value*4; // 1 groat == 4 pennies
      break;
    case 'copper-star':
      return value*8; // 1 star == 8 pennies
      break;
    case 'silver-stag':
      return value*56; // 1 star == 56 pennies
      break;
    case 'silver-moon':
      return value*392; // 1 moon == 392 pennies
      break;
    case 'gold-dragon':
      return value*11760; // 1 dragon == 11,760 pennies
      break;
  }
}


function calculateExchange(inputField, value) {
  $('.wx-coin').each(function() {
    if ($(this).find('input').attr('name') == inputField ) {
      console.log(inputField + ': ' + value);
      return;
    } else {
      // console.log();
      switch ($(this).find('input').attr('name')) {
        case 'copper-halfpenny':
        var roundedValue = Number.parseFloat(value*2).toFixed(2);
          $(this).find('input').val(roundedValue); // 1 penny == 2 halfpennies
          break;
        case 'copper-penny':
        var roundedValue = Number.parseFloat(value).toFixed(2);
          $(this).find('input').val(value); // 1 penny == 1 penny
          break;
        case 'copper-half-groat':
        var roundedValue = Number.parseFloat(value/2).toFixed(2);
          $(this).find('input').val(roundedValue); // 1 half-groat == 2 pennies
          break;
        case 'copper-groat':
        var roundedValue = Number.parseFloat(value/4).toFixed(2);
          $(this).find('input').val(roundedValue); // 1 groat == 4 pennies
          break;
        case 'copper-star':
        var roundedValue = Number.parseFloat(value/8).toFixed(2);
          $(this).find('input').val(roundedValue); // 1 star == 8 pennies
          break;
        case 'silver-stag':
        var roundedValue = Number.parseFloat(value/56).toFixed(2);
          $(this).find('input').val(roundedValue); // 1 star == 56 pennies
          break;
        case 'silver-moon':
        var roundedValue = Number.parseFloat(value/392).toFixed(2);
          $(this).find('input').val(roundedValue); // 1 moon == 392 pennies
          break;
        case 'gold-dragon':
          var roundedValue = Number.parseFloat(value/11760).toFixed(2);
          $(this).find('input').val(roundedValue); // 1 dragon == 11,760 pennies
          break;
      }

    }
  });
}

jQuery(document).ready(function($){
  $('.wx-coin').each(function() {
    $(this).on('input', function() {
      var name = $(this).find('input').attr('name');
      var value = $(this).find('input').val();

      // convert every thing to coppers
      var copperValue = copperConverter(name, value);
      console.log(value + ' ' + name + ' is worth ' + copperValue + ' pennies');
      // process everything into high denominations
      calculateExchange(name, copperValue);
    });
  });

});
