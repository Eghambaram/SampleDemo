Cassandra values Availability and Partitioning tolerance (AP).

>Mongo Installation & set path for data and log files
>MongoD
>Mongo
>show dbs
>use mycustomerdb(switch to db)

sample Json Document for mongoDB:
{
first_name: "John",
last_name: ""Doe",
memeberships:["mem1","mem2"],
address: {
        street:"4, main st"
        city: "Boston"
 },
contacts:[
{name: "Brad", relationship:"friend"}
]
}


Create userDB:
***********
>db.createUser({
user:"brad",
pwd:"1234",
roles:["readWrite", "dbAdmin"]
});

successfully created user

Collections:
***********
>db.createCollection('customer');
{"ok":1}
>show collections
customers
>db.customers.insert({first_name:"John", last_name:"Doe"});
writeResult({"nInserted": 1})
>db.customers.find();
{"_id":ObjectId("57edferr1222121"),first_name:"John", last_name:"Doe"}
>db.customers.insert({first_name:"John1", last_name:"Doe1"},{first_name:"John2", last_name:"Doe2", gender:"female"});

>db.customers.find().pretty(); -- to display neet format

>db.cutomers.update({first_name:"John"},{first_name:"John", last_name:"Doe", gender:"female"});

writeResult({"matched": 1, "nUpserted":0, "nModified":1})

>db.cutomers.update({first_name:"John"},{$set:{gender:"female"}});
>db.cutomers.update({first_name:"John"},{$set:{age:"45"}});

>db.cutomers.update({first_name:"John"},{$inc:{age:5}});
>db.cutomers.update({first_name:"John"},{$unset:{age:1}});
>db.cutomers.update({first_name:"John"},{$rename:{"gender":"sex"}});

>db.cutomers.remove({first_name:"John"});
>db.cutomers.remove({first_name:"John"},{justOne:true});

>db.customers.find({$or:[{firstname:"sharon"},{firstname:"Troy"}]);
>db.customers.find({age:{$lt:40}});
>db.customers.find().sort({last_name:1}); ascending
>db.customers.find().sort({last_name:-1}); decending
>db.customers.find().count();

>db.customers.find({gender:"male"}).count();
>db.customers.find().limit(4);
>db.customers.find().limit(4).sort(last_name:1);


>db.customers.find().forEach(function(doc){print("Customer Name: "+doc.firstname)});


