const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection:`https://api.postman.com/collections/42659483-f64f6d92-8755-421d-86d1-0ffba1179b86?access_key=${process.env.secretKey}`,
    collection:require('./Collection/Transaction-API-Testing.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
