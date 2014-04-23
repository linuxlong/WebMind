module.exports = { 
	table : 'user', 
	fields : {
		name : { type : 'text',required : true },
		mail : { type : 'text',required : true },
		create_time : Date,
		modify_time : Date
	}
};
