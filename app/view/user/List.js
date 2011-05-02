
Ext.define('My.view.user.List', {
	 extend:'Ext.grid.Panel'
	,alias:'widget.userlist'
	,store:'Users'
	
	,initComponent:function() {
		
		var config = {
			columns:[
				 {header:'First Name', dataIndex:'firstName', width:80}
				,{header:'Last Name', dataIndex:'lastName', width:120}
				,{header:'Full Name', dataIndex:'fullName', flex:1}
			]
		};
		
		Ext.apply(this, config);
		
		this.callParent(arguments);
	}
});

// eof