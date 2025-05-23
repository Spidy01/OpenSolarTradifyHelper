
window.fieldmap = {
    "Customer Name": {
        "source": "contacts_data.0.display",
        "target": "vm.customer.customerName",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
    },

    "Customer Email": {
        "source": "contacts_data.0.email",
        "target": "vm.customer.email",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
    },
    "Customer Phone": {
        "source": "contacts_data.0.phone",
        "target": "vm.customer.mobileNumber",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
    },
    "Customer Address": {
        "source": "address",
        "target": "vm.customer.physicalGeoAddress",
        "elementType": "input",
        "simulatedInput": "true",
        "mapping": {}
    },
    "Job Name": {
        "source": "title",
        "target": "vm.model.locationName",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
    },
    "Job Address": {
        "source": "address",
        "target": "vm.model.geoAddress",
        "elementType": "input",
        "simulatedInput": "true",
        "mapping": {}
        },
    "Job Address": {
        "source": "address",
        "target": "vm.job.geoAddress",
        "elementType": "input",
        "simulatedInput": "true",
        "mapping": {}
        },
    "Job Priority": {
        "source": "priority",
        "target": "vm.job.jobType",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {
            "1": "Low Priority",
            "2": "Medium Priority",
            "3": "High Priority"
            },
        },
    "Contact Name": {
        "source": "contacts_data.0.display",
        "target": "vm.model.phoneNumber",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
        },
    "Contact phone": {
        "source": "contacts_data.0.phone",
        "target": "vm.model.contact",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
        },
    "Contact email": {
        "source": "contacts_data.0.phone",
        "target": "vm.model.email",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
        },
    "Customer Reference": {
        "source": "",
        "target": "vm.job.customerRef",
        "elementType": "input",
        "simulatedInput": "false",
        "mapping": {}
    }
}




window.btnElement = {
    OpenSolar: { //button to be injected for OpenSolar
        "location": 'button[aria-label="Activity"]', //location of button to be injected
        "id":'export-button', //id of button to be injected
        "title": 'Export to Tradify', //text of button to be injected
        "className": 'OSUI-ButtonBase-root OSUI-IconButton-root OSUI-IconButton-colorSecondary OSUI-IconButton-sizeMedium', //class of button to be injected
        "textContent": '',
        "svg": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="20" height="20"><defs><style>.cls-1 { fill: #009bc5; } .cls-2 { fill: none; }</style></defs><path class="cls-2" d="M0,0H150V150H0V0Z"></path><polygon class="cls-1" points="19.03 42.34 19.03 49.16 59.08 49.16 59.08 138.19 101.62 138.19 101.62 49.16 128.52 49.16 128.52 15.06 46.43 15.06 19.03 42.34"></polygon></svg>'
    },
    Tradify: { //button to be injected for Tradify
        "location": '.navbar-fixed-bottom.action-bar .pull-left', //location of button to be injected
        "alternateLocation": '.modal-footer', //alternate location of button to be injected
        "id":'import-button', //id of button to be injected
        "title": 'Import from OpenSolar', //text of button to be injected
        "className": 'btn btn-black ng-binding ng-scope', //class of button to be injected
        "textContent": 'Import from OpenSolar', //content of button to be injected
        "svg": ''
    },
    TradifyPopup: { //button to be injected for Tradify
        "location": '.modal-footer', //location of button to be injected
        "id":'popup-import-button', //id of button to be injected
        "title": 'Import from OpenSolar', //text of button to be injected
        "className": 'btn btn-black ng-binding ng-scope', //class of button to be injected
        "textContent": 'Import from OpenSolar', //content of button to be injected
        "svg": ''
    }
}

window.parentSelector = [".modal-content", "#view-container"];
  