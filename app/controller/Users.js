
Ext.define('My.controller.Users', {
	 
	 extend:'Ext.app.Controller'
	 
	,init:function(app) {
		
//		console.log('Init Users Controller', app);
		
		this.control({
			myviewport:{
				render:this.onViewportRender
			}
		});
		
	}
	
	,onViewportRender:function(viewport, ha) {
		console.log('Viewport rendered', viewport, ha);
	}
	
});

// eof