var nativeTrim = String.prototype.trim;

function escapeRegExp (string) {
  if (string == null) return '';

  return String(string).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}

function defaultToWhiteSpace (characters) {
  if (characters == null) {
    return '\\s';
  } else if (characters.source) {
    return characters.source;
  } else {
    return '[' + escapeRegExp(characters) + ']';
  }
}

function trim (string, characters) {
  if (string == null) return '';
  if (!characters && nativeTrim) return nativeTrim.call(string);

  characters = defaultToWhiteSpace(characters);
  return String(string).replace(
    new RegExp('^' + characters + '+|' + characters + '+$', 'g'), ''
  );
};

function dasherize (string) {
  return trim(string).replace(/([A-Z])/g, '-$1')
                     .replace(/[-_\s]+/g, '-').toLowerCase();
};

module.exports.register = function (Handlebars) {
  Handlebars.registerHelper('slugify', function(string) {
    if (string == null) return '';

    var from = "ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",
        to = "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",
        regex = new RegExp(defaultToWhiteSpace(from), 'g');

    string = String(string).toLowerCase().replace(regex, function (c) {
      var index = from.indexOf(c);

      return to.charAt(index) || '-';
    });

    return dasherize(string.replace(/[^\w\s-]/g, '-')).replace(/^\W|\W$/g, '');
  });
};
