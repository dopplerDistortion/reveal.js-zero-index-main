var stateHolder = 0;

Reveal.addEventListener( 'slidechanged', function( event ) {
	var state = Reveal.getState();
		if (state.indexh < stateHolder || state.indexh > stateHolder){
			state.indexv = 0;
			Reveal.setState(state);
		}
		stateHolder = state.indexh;
	} );
