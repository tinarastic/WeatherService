/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getLocations: function(req,res) {
    File.native(function(err,coll){
        coll.distinct("location", {service:{$in: ["WSM-FCW","WSM-FLW"]}}, function(err,result) {
          var arr = [];
          for(var i in result.sort()){
            arr.push({name:result[i]});
          }

          res.json(arr);
        });
      }
    );
  }

};

