
Ext.define('My.controller.Users', {
	 
	 extend:'Ext.app.Controller'
	 
	,models:[
		'User'
	]
	,stores:[
		'Users'
	]
	,views:[
		'user.List'
	]
	,refs:[{
		 ref:'UserList'
		,selector:'userlist'
	}]
	
	 
	,init:function(app) {
		
		this.control({
			'userlist button':{
				click:this.onButtonClick
			}
		});
		
	}
	
	,onButtonClick:function(btn, e) {
		
		// get the reference to Users Store
		var store = this.getUsersStore();
		
		switch(btn.operation) {
			case 'refresh':
				store.load();
			break;
			
			case 'add':
				store.addBlankRecord();
			break;
			
			case 'delete':
				var sm = this.getUserList().getSelectionModel();
				var records = sm.getSelection();
				sm.deselectAll();
				store.remove(records);
			break;
			
			default:
				console.warn('Button misconfiguration. Add "operation" property.')
			break;
		}
	}
});

// eof