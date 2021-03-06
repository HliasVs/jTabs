/*
  jTabs jQuery plugin
   
  @copyright Copyright 2014, Vompiris Hlias
  @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
  @version   v1.0.1
 */


(function($, window, document, undefined){
  $.fn.jTabs=function(options){

    // Default options
    var settings = $.extend({
        tabsWrapper   : $(this).attr('data-tabswrapper'),
        tabsContent   : $(this).attr('data-tabscontent'),
        tabsButtons   : $(this).attr('data-tabsbuttons'),
        tabsButton    : 'li',
        contentClass  : 'active-block',
        buttonClass   : 'active',
        element       : 'a',
        attribute     : 'href',
        mouseEvent    : 'click',
        followHash    : true
    }, options);

    // The collection based on the settings variable.
    return this.each(function(index, el) {
      var getTabsContent = $(el).find(settings.tabsContent),
          getTabsButton  = $(el).find(settings.tabsButton),
          getMouseEvent  = settings.mouseEvent;

      getTabsContent.children(':gt(0)').hide();
      getTabsContent.children(':eq(0)').addClass(settings.contentClass);
      getTabsButton.first().addClass(settings.buttonClass);

      getTabsButton.bind(getMouseEvent, function(e){
        e.preventDefault();
        var getTarget = $(this).find(settings.element).attr(settings.attribute);

        if($(this).hasClass(settings.buttonClass)) {
          return false;
        } else {
          $(this).siblings().removeAttr('class');
          $(this).addClass(settings.buttonClass);
          getTabsContent.children().removeAttr('class').hide();
          getTabsContent.children(getTarget).addClass(settings.contentClass).show();
        }
      });

      if(settings.followHash) {
        $(settings.element+'['+settings.attribute+'='+location.hash+']').trigger(settings.mouseEvent);
      }
    });
  }
}(jQuery));
