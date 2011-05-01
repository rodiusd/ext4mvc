
Ext.Loader.setConfig({
	 enabled:true
	,paths:{
		Ext:'ext/src'
	}
});

Ext.application({
	 name:'My'
	,appFolder:'app'
	,autoCreateViewport:false

	,controllers:[]
	

	,launch:function() {
		this.viewport = Ext.create('My.view.Viewport', {
			 width:400
			,height:300
		});
		window[this.name].app = this;
		
		this.viewport.show();
		
		console.log('Launching MVC Applicaton');
	}
});

// eof