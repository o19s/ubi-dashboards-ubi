(window["ubiDashboard_bundle_jsonpfunction"] = window["ubiDashboard_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/application.tsx":
/*!********************************!*\
  !*** ./public/application.tsx ***!
  \********************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app */ "./public/components/app.tsx");



const renderApp = ({
  notifications,
  http
}, {
  navigation
}, {
  appBasePath,
  element
}) => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_2__["UbiDashboardApp"], {
    basename: appBasePath,
    notifications: notifications,
    http: http,
    navigation: navigation
  }), element);
  return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element);
};

/***/ }),

/***/ "./public/components/app.tsx":
/*!***********************************!*\
  !*** ./public/components/app.tsx ***!
  \***********************************/
/*! exports provided: UbiDashboardApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbiDashboardApp", function() { return UbiDashboardApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./common/index.ts");




 // TODO: => from @opensearch-project/oui';


const UbiDashboardApp = ({
  basename,
  notifications,
  http,
  navigation
}) => {
  // Use React hooks to manage state.
  const [logs, setLogText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [size, setSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('xl');
  const [indices, setIndices] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  /**/
  async function reactView(input) {
    const computedData = await fetchRecordData(input);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EuiTextColor, {
      color: "success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EuiIcon, {
      type: "cheer"
    }), " ", computedData.companyName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Location: ", computedData.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Total raised amount: ", computedData.raisedAmount));
  }
  const loadIndices = () => {
    //alert('xx');
    // Use the core http service to make a response to the server API.
    //http.get('/api/ubl_dashboard/example').then((res) => {
    http.get('/api/ubl_dashboard/ubl_logs').then(res => {
      let log_names = [];
      //alert(JSON.stringify(res.indices));

      /**/
      for (const idx of res.indices) {
        log_names.push({
          text: idx['log_name']
        });
      }
      setIndices(log_names);

      // Use the core notifications service to display a success message.
      notifications.toasts.addSuccess(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('ubiDashboard.indicesLoaded', {
        defaultMessage: 'Indices loaded'
      }));
    });
  };
  const handleValueChange = (name, filterValue) => {
    //  const previousValue = values[name];
    //  updateFilterCount(name, previousValue, filterValue);
    //  const updatedValues = { ...values };
    //  updatedValues[name] = filterValue;
    //  setValues(updatedValues);
    //  applyFilterValue(name, filterValue);
  };
  //loadIndices();

  //##################################################################
  //on document load, hook things up here
  document.addEventListener('DOMContentLoaded', function () {
    alert('klajshflk');
  });
  //##################################################################

  const onClickHandler = () => {
    // Use the core http service to make a response to the server API.
    //http.get('/api/ubl_dashboard/example').then((res) => {
    http.get('/api/ubl_dashboard/get_log').then(res => {
      //http.get('/api/ubl_dashboard/ubl_logs').then((res) => {
      //setLogText(JSON.stringify(res.indices));
      setLogText(res.logs);

      // Use the core notifications service to display a success message.
      notifications.toasts.addSuccess(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('ubiDashboard.dataUpdated', {
        defaultMessage: 'Data updated'
      }));
    });
  };

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    basename: basename
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(navigation.ui.TopNavMenu, {
    appName: _common__WEBPACK_IMPORTED_MODULE_5__["PLUGIN_ID"],
    showSearchBar: true,
    useDefaultBehaviors: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPage"], {
    restrictWidth: "1000px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageBody"], {
    component: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
    size: "l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ubiDashboard.helloWorldText",
    defaultMessage: "{name}",
    values: {
      name: _common__WEBPACK_IMPORTED_MODULE_5__["PLUGIN_NAME"]
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContentHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ubiDashboard.congratulationsTitle",
    defaultMessage: "Congratulations, you have successfully created a new OpenSearch Dashboards Plugin!"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContentBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ubiDashboard.content",
    defaultMessage: "Look through the generated code and check out the plugin development documentation."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHorizontalRule"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ubiDashboard.timestampText",
    defaultMessage: "Latest logs: {time}",
    values: {
      time: logs ? logs : 'Unknown'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSelect"], {
    id: "ubiDashboard.logIndices",
    options: indices,
    onChange: e => setSize(String(e.target.value))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButton"], {
    type: "primary",
    size: "s",
    onClick: onClickHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ubiDashboard.buttonText",
    defaultMessage: "Get data"
  }))))))))));
};

/***/ })

}]);
//# sourceMappingURL=ubiDashboard.chunk.0.js.map