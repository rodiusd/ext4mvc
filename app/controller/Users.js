
Ext.define('My.controller.Users', {
	 
	 extend:'Ext.app.Controller'
	 
	,models:[
		'User'
	]
	 
	,init:function(app) {
		
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