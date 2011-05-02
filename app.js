
// enable and configure loader
Ext.Loader.setConfig({
	 enabled:true
	,paths:{
		 Ext:'ext/src'
		,My:'app'
	}
});

// require dependencies
Ext.require([
	 'My.view.Viewport'
	,'Ext.data.proxy.LocalStorage'
	,'Ext.selection.CellModel'
	,'Ext.form.field.Text'
]);

Ext.application({
	 name:'My'
	,appFolder:'app'
	,autoCreateViewport:false

	,controllers:['Users']
	

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