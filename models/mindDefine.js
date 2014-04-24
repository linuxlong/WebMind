module.exports = { 
	table : 'mind', 
	fields : {
		name : { type : 'text',required : true },
		context : { type : 'text',required : true },
		create_time : Date,
		modify_time : Date
	}
};
