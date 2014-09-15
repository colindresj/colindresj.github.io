module.exports.register = function (Handlebars) {
  'use strict';

  var _ = require('lodash');

  Handlebars.registerHelper('chain', function () {
    var args = Array.prototype.slice.call(arguments, 0, -1),
        helpers = [],
        argsForHelpers = null,
        value;

    _.each(args, function (arg, i) {
      if (Handlebars.helpers[arg]) {
        return helpers.push(Handlebars.helpers[arg]);
      } else if (!value) {
        value = arg;

        if (!argsForHelpers) {
          argsForHelpers = args.slice(i + 1);
          argsForHelpers.unshift(value);
        }

        return _.each(helpers, function(helper) {
          argsForHelpers[0] = value;
          return value = helper.apply(null, argsForHelpers);
        });
      }
    });

    return value;
  });
};
