
Ext.define('My.view.user.List', {
	 extend:'Ext.grid.Panel'
	,alias:'widget.userlist'
	,store:'Users'
	
	,initComponent:function() {
		
		var config = {
			columns:[{
				 header:'First Name'
				,dataIndex:'firstName'
				,width:80
				,field:{
					  xtype:'textfield'
					 ,allowBlank:false
					 ,selectOnFocus:true
					 ,minLength:2
				}
			},{
				 header:'Last Name'
				,dataIndex:'lastName'
				,width:120
				,field:{
					  xtype:'textfield'
					 ,allowBlank:false
					 ,selectOnFocus:true
					 ,minLength:2
				}
			},{
				 header:'Full Name'
				,dataIndex:'fullName'
				,flex:1}
			] // eo columns
			,plugins:[
				Ext.create('Ext.grid.plugin.CellEditing', {
					clicksToEdit:1
				})
			]
			,selType:'cellmodel'
		};
		
		Ext.apply(this, config);
		
		this.callParent(arguments);
	}
});

// eof