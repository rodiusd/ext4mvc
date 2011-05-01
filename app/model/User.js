
Ext.define('My.model.User', {
	
	 extend:'Ext.data.Model'
	,idProperty:'userId'
	
	,fields:[
		 {name:'userId', type:'int'}
		,{name:'firstName', type:'string'}
		,{name:'lastName', type:'string'}
		,{name:'fullName', type:'string'}
	]
	
	,proxy: {
		 type:'localstorage'
		,id:'mvc'
	}
	
	,constructor:function() {
		this.callParent(arguments);
		this.set('firstName', this.get('firstName'));
	}
	
	,set:function(fieldName, value) {
		
		if('fullName' === fieldName) {
			this.set('firstName', this.get('firstName'));
			return;
		}
		
		this.callParent(arguments);
		
		
		if('firstName' === fieldName || 'lastName' === fieldName) {
			var fullName = [this.get('firstName'), this.get('lastName')].join(' ');
			this.callParent(['fullName', fullName]);
		}
		
	}
	
});

// eof