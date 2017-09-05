import './styles/screen.scss'

const main = () => {
  $(function(){
      function onScrollInit( items, trigger ) {
          items.each( function() {
          var osElement = $(this),
              osAnimationClass = osElement.attr('data-os-animation'),
              osAnimationDelay = osElement.attr('data-os-animation-delay');

              osElement.css({
                  '-webkit-animation-delay':  osAnimationDelay,
                  '-moz-animation-delay':     osAnimationDelay,
                  'animation-delay':          osAnimationDelay
              });

              var osTrigger = ( trigger ) ? trigger : osElement;

              osTrigger.waypoint(function() {
                  osElement.addClass('animated').addClass(osAnimationClass);
                  },{
                      triggerOnce: true,
                      offset: '80%'
              });
          });
      }

      onScrollInit( $('.os-animation') );
      onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});//]]>  
}

document.addEventListener('DOMContentLoaded', main)

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
