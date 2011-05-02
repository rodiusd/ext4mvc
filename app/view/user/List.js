
Ext.define('My.view.user.List', {
	 extend:'Ext.grid.Panel'
	,alias:'widget.userlist'
	,store:'Users'
	
	,initComponent:function() {
		
		// create an instance of cell editing plugin
		this.cellEditing = 	Ext.create('Ext.grid.plugin.CellEditing', {
			clicksToEdit:2
		});
		
		// prepare config object
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
			
			,plugins:[this.cellEditing]
			
			,selModel:{
				 selType:'rowmodel'
				,allowDeselect:true
				,mode:'MULTI'
			}
			
			,bbar:[{
				 text:'Add'
				,operation:'add'
			},{
				 text:'Delete'
				,operation:'delete'
			},{
				 text:'Refresh'
				,operation:'refresh'
			}]
		};
		
		// apply config object
		Ext.apply(this, config);
		
		// call parent initComponent
		this.callParent(arguments);
		
	} // eo functin initComponent
	
}); // eo define

// eof