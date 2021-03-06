// Paint Boxes


// Buttons click
$( 'document' ).ready(function(){
  var myQueue = new QueueDataStructure();
  // First item is always painted (MAX_SIZE MIN 1)
  //var toPaint = document.querySelector( '.queue' ).cloneNode(true);
  for ( var x=1 ; x < myQueue.MAX_SIZE ; x++){
    $( '.queue:first' ).clone().appendTo( '.queuelist' );
  }

  $( '.addQueue' ).on( 'click',function(){
    var result = myQueue.enqueue($( '.queueData > input' ).val());
    if (result == '' ){
      result = 'NO DATA';
    }
    if ( result == 'Queue Overflow' ){
          console.log($( '.queuelist .queue:first' ));
        $( '.queue:first' ).addClass( 'warning' );
        $( '.queue:first' ).html( 'Queue Overflow' );
    } else {
      $( '.queue' ).removeClass( 'warning' );
      $( '.queue.empty:last' ).html(result);
      $( '.queue.empty:last' ).toggleClass( 'empty full' );
    }
  });

  $( '.takeQueue' ).on( 'click',function(){
    var items = myQueue.dequeue();
    if(items == 'Queue Underflow' ){
      $( '.queue:last' ).addClass( 'warning' );
      $( '.queue:last' ).html( 'Queue Overflow' );
      // Paint last item red

    }else{
      var arrReversed = [];
      $( '.queue' ).removeClass( 'warning' );
      $( '.queue.full' ).toggleClass( 'empty full' );
      arrQueue = myQueue.queueControl;
      for (var z = myQueue.queueControl.length; z > 0 ; z--){
        var data = arrQueue[z];
        if ( data == '' ) data = 'NO DATA';
         $( '.queue.empty:last' ).html(data).toggleClass( 'empty full' );;
       }
       $( '.queue.empty' ).html( 'EMPTY' );
      console.log(items);
      if (items == '' ){
          items = 'NO DATA';
      }
      $( '.queueh2 span' ).html( ' - exit: '+items);
      // Paint last empty (toggleClass)
    }
  });


});
