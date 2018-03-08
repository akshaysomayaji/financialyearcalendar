(function () {
    'use strict';

    angular.module('app.module.dashboard', [])

    .constant('dashboardModals', {
        gstin: { type: String, required: true },
        docNumber: { type: String, required: true },
        docDate: { type: Date, required: true },
        supplystate: { type: String, required: true },
        typeOfSupply: { type: String, required: true },
        type: { type: String, required: true },
        invoice_number: { type: String, required: true },
        invoice_date: { type: Date, required: true },
        customerName: { type: Date, required: false },
        ctin: { type: Date, required: false },
        state: { type: Date, required: true },
        fp: { type: Date, required: true },

    })
})();