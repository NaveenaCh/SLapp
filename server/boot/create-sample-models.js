module.exports = function(app) {
  app.datasources.collegeDb.automigrate('college', function(err) {
     if (err) console.log( err);
 
    app.models.college.create([
      {clgname: 'adhitya', clgaddress: 'tekkali',courses:['btech','mba','mca','mtech']},
    ], function(err, colleges) {
      if (err) console.log( err);
 
      console.log('Models created: \n', colleges);
    });
  });
};