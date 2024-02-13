import React, { OptionHTMLAttributes, ReactNode, useState } from 'react';
import { i18n } from '@osd/i18n';
import { FormattedMessage, I18nProvider } from '@osd/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  EuiButton,
  EuiHorizontalRule,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiText, EuiSelect, EuiSelectOption,
  EuiForm, EuiSpacer, EuiTextArea, EuiFormRow
} from '@elastic/eui'; // TODO: => from @opensearch-project/oui';


import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../common';

interface UblDashboardAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
}

export const UblDashboardApp = ({
  basename,
  notifications,
  http,
  navigation,
}: UblDashboardAppDeps) => {
  // Use React hooks to manage state.
  const [logs, setLogText] = useState<string | undefined>();
  const [size, setSize] = useState('xl');
  const [indices, setIndices] = useState<EuiSelectOption[] | undefined>();


/**/ 
async function reactView(input) {
  const computedData = await fetchRecordData(input);

  return (
    <EuiText>
      <h1>
        <EuiTextColor color="success"><EuiIcon type="cheer" /> {computedData.companyName}</EuiTextColor>
      </h1>
      <div>Location: {computedData.location}</div>
      <p>Total raised amount: {computedData.raisedAmount}</p>
    </EuiText>
  );
}

  const loadIndices = () => {
    //alert('xx');
    // Use the core http service to make a response to the server API.
    //http.get('/api/ubl_dashboard/example').then((res) => {
    http.get('/api/ubl_dashboard/ubl_logs').then((res) => {

      let log_names = [];
      //alert(JSON.stringify(res.indices));
    
        /**/ 
        for (const idx of res.indices){
          log_names.push({text:idx['log_name']});
        }

      setIndices(log_names);
      
      // Use the core notifications service to display a success message.
      notifications.toasts.addSuccess(
        i18n.translate('ublDashboard.indicesLoaded', {
          defaultMessage: 'Indices loaded',
        })
      );
    });
  };
  const handleValueChange = (name: string, filterValue: string | boolean) => {
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

alert('klajshflk')	;

});
//##################################################################

  const onClickHandler = () => {
    // Use the core http service to make a response to the server API.
    //http.get('/api/ubl_dashboard/example').then((res) => {
    http.get('/api/ubl_dashboard/get_log').then((res) => {
    //http.get('/api/ubl_dashboard/ubl_logs').then((res) => {
      //setLogText(JSON.stringify(res.indices));
      setLogText(res.logs);
      
      // Use the core notifications service to display a success message.
      notifications.toasts.addSuccess(
        i18n.translate('ublDashboard.dataUpdated', {
          defaultMessage: 'Data updated',
        })
      );
    });
  };

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router basename={basename}>
      <I18nProvider>
        <>
          <navigation.ui.TopNavMenu
            appName={PLUGIN_ID}
            showSearchBar={true}
            useDefaultBehaviors={true}
          />
          <EuiPage restrictWidth="1000px">
            <EuiPageBody component="main">
              <EuiPageHeader>
                <EuiTitle size="l">
                  <h1>
                    <FormattedMessage
                      id="ublDashboard.helloWorldText"
                      defaultMessage="{name}"
                      values={{ name: PLUGIN_NAME }}
                    />
                  </h1>
                </EuiTitle>
              </EuiPageHeader>
              <EuiPageContent>
                <EuiPageContentHeader>
                  <EuiTitle>
                    <h2>
                      <FormattedMessage
                        id="ublDashboard.congratulationsTitle"
                        defaultMessage="Congratulations, you have successfully created a new OpenSearch Dashboards Plugin!"
                      />
                    </h2>
                  </EuiTitle>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                  <EuiText>
                    <p>
                      <FormattedMessage
                        id="ublDashboard.content"
                        defaultMessage="Look through the generated code and check out the plugin development documentation."
                      />
                    </p>
                    <EuiHorizontalRule />
                    <p>
                      <FormattedMessage
                        id="ublDashboard.timestampText"
                        defaultMessage="Latest logs: {time}"
                        values={{ time: logs ? logs : 'Unknown' }}
                      />
                    </p>

                    {
                      //select('type', typeOptions, values.type)
                      /*
                        {[
              {
                text: 'log3',
              },
              {
                text: 'log2',
              },
              {
                text: 'log1',
              },
            ]}*/
                    }
                    
{
//loadIndices()

}
          <EuiSelect id='ublDashboard.logIndices'
            options={indices}
            onChange={(e) => setSize(String(e.target.value))}
          />
                      <EuiButton type="primary" size="s" onClick={onClickHandler}>
                      <FormattedMessage id="ublDashboard.buttonText" defaultMessage="Get data" />
                    </EuiButton>
                  </EuiText>
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        </>
      </I18nProvider>
    </Router>
  );
};
