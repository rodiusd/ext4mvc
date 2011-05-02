
Ext.define('My.store.Users', {
	 extend:'Ext.data.Store'
	,model:'My.model.User'
	,autoLoad:true
	,autoSync:true
	
	,getNewId:function() {
		var id = 1;
		this.each(function(r){
			var userId = r.get('userId', 1);
			id = id < userId ? userId : id;
		})
		return id + 1;
	}
	
	,addBlankRecord:function() {
		var r = this.model.create({
			userId:this.getNewId()
		});
		this.insert(0, r);
	}
	
	,onUpdateRecords:function(records, operation, success) {
		this.callParent(arguments);
		if(success) {
			records[0].commit();
		}
	}
});

// eof