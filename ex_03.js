db.createCollection ("students", { 
    validator: 
    {$jsonSchema: {
       bsonType: "object",
       required:["lastname" ,"firstname" ,"email" ,"phone"],
       properties: {

     
        lastname: {
             bsonType: "string",
             description: "domust be a string"
          },
          firstname:{
            bsonType: "string",
            description: "domust be a string"
            
         },
          email: {
             bsonType: "string",
             pattern: "^[\w-\.+]*[\w-\.]\@([\w]+\.)+[\w]+[\w]$",
             description: "must be a string and match the regular expression pattern"
          },
          phone: {
            bsonType: "string",
            pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$",
            description: "doit être une chaîne et est obligatoire"
         },
         
         admin: {
            bsonType: "bool",
            description: "must be false or true"
            
         },
         validated: {
            enum: [" in progress", "validated" , "rejected"],
            description: "can only be one of the enum values"
            
         }
       }
    }}
 })


 //  affiche la table  

//  db.students.find()

// { "_id" : ObjectId("5eb1a0295ef1e492baff27f3"), "lastname" : "gkf", "firstname" : "ghgb", "email" : "dddd@hotmail.fr , phone :06-34-34-34-34", "admin" : "fals" }