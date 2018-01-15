function loadTemplate(template, data) {
  $.each(data, function(key, value) {
    if (typeof value !== 'undefined') {
      template.find('[data-groups="' + key + '"]').attr('data-groups', value);
      template.find('[data-innerHTML="' + key + '"]').html(value);
      template.find('[data-content="' + key + '"]').html(value);
      template.find('[data-content-text="' + key + '"]').text(value);
      template.find('[data-content-append="' + key + '"]').append(value);
      template.find('[data-content-prepend="' + key + '"]').prepend(value);
      template.find('[data-id="' + key + '"]').attr('id', value);
      template.find('[data-href="' + key + '"]').attr('href', value);
      template.find('[data-src="' + key + '"]').attr('src', value);
      template.find('[data-alt="' + key + '"]').attr('alt', value);
      template.find('[data-value="' + key + '"]').attr('value', value);
      template.find('[data-class="' + key + '"]').attr('class', value);
      template.find('[data-css="' + key + '"]').css(value);
      template.find('[data-attr="' + key + '"]').attr(key, value);
      if (template.find('[data-list-ul="' + key + '"]').length) {
        var html = '<ul>';
        for (var i = 0; i < value.length; i++) {
          html += "<li><a href='" + encodeURIComponent(value[i]) +"'>" + value[i] + '</a></li>';
        }
        html += '</ul>';
        template.find('[data-list-ul="' + key + '"]').html(html);
      }
      template.find('[data-background-image="' + key + '"]').css({backgroundImage: 'url(' + value + ')'});
    }
  });
  return template;
}

function getJson(url) {
  var json = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': url,
      'dataType': "json",
      'success': function (data) {
          json = data;
      }
  });
  return json;
}

function generateRandom (pCount, pMin, pMax) {
    min = pMin < pMax ? pMin : pMax;
    max = pMax > pMin ? pMax : pMin;
    var resultArr = [], randNumber;
    while ( pCount > 0) {
        randNumber = Math.round(min + Math.random() * (max - min));
        if (resultArr.indexOf(randNumber) == -1) {
            resultArr.push(randNumber);
            pCount--;
        }
    }
    return resultArr;
}

function mixingArray(array) {
  var counter = array.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

function unique(list) {
  var result = [];
  $.each(list, function(i, e) {
    if ($.inArray(e, result) == -1) {
       result.push(e);
    }
  });
  return result;
}

function uniqueWithCount(list) {
  var result = {};
  $.each(list, function(index, element) {
    if (typeof result[element] === 'undefined') {
      result[element] = 1;
    } else {
      result[element] = result[element] + 1;
    }
  });
  var resultArray = [];
  for (var keyword in result) {
    resultArray.push({name: keyword, total: result[keyword]});
  }
  return resultArray;
}

//get parameter from url
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

/**
 * Returns an Array of all url parameters
 * @return {[Array]} [Key Value pairs form URL]
 */
function getAllUrlParams() {
    var keyPairs = [];
    var params = decodeURIComponent(window.location.search.substring(1));
        params = params.split('&');
    for (var i = params.length - 1, objParam = {}; i >= 0; i--) {
        keyPairs.push(params[i].split('='));
    };
    return keyPairs;
}

/**
 * Returns an Array of all value url parameters
 * @return {[Array]}
 */
function getAllValueParams() {
    var valueParams = [];
    var params = window.location.search.substring(1);
    if ($.trim(params).length > 0) {
        params = params.split('&');
        for (var i = params.length - 1, objParam = {}; i >= 0; i--) {
            valueParams.push(decodeURIComponent(params[i].split('=')[1]));
        };
    }
    return valueParams;
}

function uniqueWithCount(list) {
  var result = {};
  $.each(list, function(index, element) {
    if (typeof result[element] === 'undefined') {
      result[element] = 1;
    } else {
      result[element] = result[element] + 1;
    }
  });
  var resultArray = [];
  for (var keyword in result) {
    resultArray.push({name: keyword, total: result[keyword]});
  }
  return resultArray;
}
