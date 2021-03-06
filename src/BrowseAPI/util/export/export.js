'use strict';

var service = require('./exportService');

module.exports = {

    reserveExport: function(secret){
      return service.reserveExport(secret);
    },

    requestExport: function(exportRequestId,runIds){
      return service.requestExport(exportRequestId,runIds);
    },

    getExportProgress: function(exportRequestId){
      return service.getExportProgress(exportRequestId);
    },

    getExport: function(fileId, res){
      return service.getExport(fileId, res);
    },

    deleteExport: function(fileId, exportRequestId){
      return service.deleteExport(fileId, exportRequestId);
    },
}