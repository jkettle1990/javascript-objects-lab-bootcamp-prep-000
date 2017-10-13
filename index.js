var recipes = {}

var updateObjectWithKeyAndValue = function(object, key, value){
  return Object.assign({}, object, {[key]: value })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key]= value

  return object
}

var deleteFromObjectByKey = function(object, key){
var obj = {}
var newObj = Object.assign({}, object)
delete newObj.object
return obj
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  var obj = {object:key}
  delete obj.object
  return obj

}
