String.prototype.titleize = function() {
  if (typeof this === 'undefined' || this === null) return '';

  String(this).replace(/(?:^|\s)\S/g, c => c.toUpperCase());
};
