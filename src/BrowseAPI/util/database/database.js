'use strict'

var service = require('./databaseServiceWrapper');

module.exports = {
    insertRun: function (run) {
        return service.insertRun(run);
    },

    updateRuns: function (query, updateRun) {
        return service.updateRuns(query, updateRun);
    },

    deleteRun: function (run) {
        return service.deleteRun(run);
    },

    queryRun: function (query) {
        return service.queryRun(query);
    },

    getRun: function (runId){
        return service.getRun(runId);
    },

    filterIds: function(runIds){
        return service.filterIds(runIds);
    },

    getAuthentication: function(profileID){
        return service.getAuthentication(profileID);
    },

    setAuthentication: function(authentication){
        return service.setAuthentication(authentication);
    },

    getTag: function(tag){
        return service.getTag(tag);
    },

    getTagById: function(tagId){
        return service.getTagById(tag);
    },

    queryTag : function(tag){
        return service.queryTag(tag);
    },

    addTag: function(tag){
        return service.addTag(tag,filter);
    },

    deleteAnnotation: function(componentId,annotationId){
        return service.deleteAnnotation(componentId,annotationId)
    },

    insertAlgorithm: function (algorithm) {
        return service.insertAlgorithm(algorithm);
    },

    getAllAlgorithms: function(){
        return service.getAllAlgorithms();
    },

    getAlgorithm: function(id){
        return service.getAlgorithm(id);
    },

    getDefaultAlgorithm : function(){
        return service.getDefaultAlgorithm();
    }
}