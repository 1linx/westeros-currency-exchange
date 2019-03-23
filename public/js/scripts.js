
function  copperConverter(coin, value) {
  switch (coin) {
    case 'copper-halfpenny':
      return math.divide(value, 2); // 1 penny == 2 halfpennies
      break;
    case 'copper-penny':
      return value; // 1 penny == 1 penny
      break;
    case 'copper-half-groat':
      return math.multiply(value, 2); // 1 half-groat == 2 pennies
      break;
    case 'copper-groat':
      return math.multiply(value, 4); // 1 groat == 4 pennies
      break;
    case 'copper-star':
      return math.multiply(value, 8); // 1 star == 8 pennies
      break;
    case 'silver-stag':
      return math.multiply(value, 56); // 1 stag == 56 pennies
      break;
    case 'silver-moon':
      return math.multiply(value, 392); // 1 moon == 392 pennies
      break;
    case 'gold-dragon':
      return math.multiply(value, 11760); // 1 dragon == 11,760 pennies
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
          var input = $(this).find('input')
          setInputElem(input, 'multiply', value, 2);
          break;
        case 'copper-penny':
          var input = $(this).find('input')
          setInputElem(input, 'multiply', value, 1);
          break;
        case 'copper-half-groat':
          var input = $(this).find('input')
          setInputElem(input, 'divide', value, 2);
          break;
        case 'copper-groat':
          var input = $(this).find('input')
          setInputElem(input, 'divide', value, 4);
          break;
        case 'copper-star':
          var input = $(this).find('input')
          setInputElem(input, 'divide', value, 8);
          break;
        case 'silver-stag':
          var input = $(this).find('input')
          setInputElem(input, 'divide', value, 56);
          break;
        case 'silver-moon':
          var input = $(this).find('input')
          setInputElem(input, 'divide', value, 392);
          break;
        case 'gold-dragon':
          var input = $(this).find('input')
          setInputElem(input, 'divide', value, 11760);
          break;
      }

    }
  });
}

function parseCoinValue(float) {
  console.log('float', float);
  if (float >= 1) {
    // // only show decimals if they are not x.00
    if (Math.floor(float) == float) {
      console.log('EXACTLY!');
      return {exact: true, result: Math.floor(float)};
    }
    return {exact: false, result: Math.floor(float)};
  } else {
    return {exact: false, result: 0};
  }
}

function setInputElem($inputElem, action, value, relCopper) {
  var roundedValue = parseCoinValue(math[action](value, relCopper));
  $inputElem.removeClass('exact');
  $inputElem.removeClass('inexact');
  if(roundedValue.exact) {
    $inputElem.addClass('exact');
  } else {
    $inputElem.addClass('inexact');
  }
  $inputElem.val(roundedValue['result']); // 1 dragon == 11,760 pennies
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
