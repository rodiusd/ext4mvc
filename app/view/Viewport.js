
Ext.define('My.view.Viewport', {
	 extend:'Ext.window.Window'
	,alias:'widget.myviewport'
	,closable:false
	,title:'Ex4 MVC Example Viewport'
	,layout:'fit'
	,border:false
	,items:[{
		 xtype:'userlist'
		,itemId:'myUserList'
	}]
	
});

// eof