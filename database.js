//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb+srv://root:128Uwu8MAAQpyo1T@cluster0.me1nh.mongodb.net/local_library?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// let exampleCode = () => {
//     let callback = () => {};
//     let handleError = () => {};
//     // Define schema
//     const Schema = mongoose.Schema;
//
//     const SomeModelSchema = new Schema({
//         a_string: String,
//         a_date: Date
//     });
//
//     // Compile model from schema
//     const SomeModel = mongoose.model('SomeModel', SomeModelSchema);
//
//     const schema = new Schema({
//         name: String,
//         binary: Buffer,
//         living: Boolean,
//         updated: {type: Date, default: Date.now()},
//         age: {type: Number, min: 18, max: 65, required: true},
//         mixed: Schema.Types.Mixed,
//         _someId: Schema.Types.ObjectId,
//         array: [],
//         ofString: [String], // You can also have an array of each of the other types too.
//         nested: {
//             stuff: {type: String, lowercase: true, trim: true}
//         }
//     });
//
//     const breakfastSchema = new Schema({
//         eggs: {
//             type: Number,
//             min: [6, 'Too few eggs'],
//             max: 12,
//             required: [true, 'Why no eggs?']
//         },
//         drink: {
//             type: String,
//             enum: ['Coffee', 'Tea', 'Water',]
//         }
//     });
//
//     // Create an instance of model SomeModel
//     const awesome_instance = new SomeModel({name: 'awesome'});
//
//     // Save the new model instance, passing a callback
//     awesome_instance.save(function (err) {
//         if (err) return handleError(err);
//         // saved!
//     });
//
//     SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
//         if (err) return handleError(err);
//         // saved!
//     });
//
//     // Access model field values using dot notation
//     console.log(awesome_instance.name); //should log 'also_awesome'
//
//     // Change record by modifying the fields, then calling save().
//     awesome_instance.name="New cool name";
//     awesome_instance.save(function (err) {
//         if (err) return handleError(err); // saved!
//     });
//
//     const Athlete = mongoose.model('Athlete', yourSchema);
//
//     // find all athletes who play tennis, selecting the 'name' and 'age' fields
//     Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
//         if (err) return handleError(err);
//         // 'athletes' contains the list of athletes that match the criteria.
//     })
//
//     // find all athletes that play tennis
//     let query = Athlete.find({ 'sport': 'Tennis' });
//
//     // selecting the 'name' and 'age' fields
//     query.select('name age');
//
//     // limit our results to 5 items
//     query.limit(5);
//
//     // sort by age
//     query.sort({ age: -1 });
//
//     // execute the query at a later time
//     query.exec(function (err, athletes) {
//         if (err) return handleError(err);
//         // athletes contains an ordered list of 5 athletes who play Tennis
//     })
//
//     Athlete.
//     find().
//     where('sport').equals('Tennis').
//     where('age').gt(17).lt(50).  //Additional where query
//         limit(5).
//     sort({ age: -1 }).
//     select('name age').
//     exec(callback); // where callback is the name of our callback function.
//
// }