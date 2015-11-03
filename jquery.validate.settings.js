$.validator.setDefaults({
  // エラーメッセージのBootstrap3: popover表示
  showErrors: function(errorMap, errorList) {
    $.each(this.successList, function(index, value) {
      $(value).popover('hide');
    });
    $.each(errorList, function(index, value) {
      var _popover = $(value.element).popover({
        trigger: 'manual',
        placement: 'bottom',
        content: value.message,
        template: "<div class='popover popover-validation' role='tooltip'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div></div>"
      });
      _popover.data('bs.popover').options.content = value.message;
      $(value.element).popover('show');
    });
  }
});
