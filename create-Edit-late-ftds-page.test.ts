    import {App} from "../../../fixtures/constants/app";
    import * as selectors from "../../../fixtures/selectors/pages/late-ftds/late-ftds-page-new.selector";
    import {UserDataMock} from "../../../fixtures/mocks/auth/user.mock";
    import {GlobalMock} from "../../../fixtures/mocks/global.mock";
    import {LateFtdsCreateTableMock} from "../../../fixtures/mocks/late-ftds/create-late-ftds-page.mock";
    import {beforeEach} from "../../../fixtures/selectors/ui/global.selector";
    const pageUrl = `${App.NG_APP_URL}/app/traffic-control/late-ftds${App.GET_PARAMETER_URL}`;


    fixture`Late Ftds Page Create and Edit`
        .page(pageUrl)
        .requestHooks(LateFtdsCreateTableMock, UserDataMock, GlobalMock)
        .beforeEach(beforeEach(pageUrl, async (t) => {return await t}, async (t) => {return await t}))
        .afterEach(async (t) => {
            return await t.eval(() => {
                indexedDB.deleteDatabase('ngStorage')
            });
        });
/** Create Button **/
    test
    ('test exists titles in modal Create Funnels Pixels Page Create popup', async t => {

        await t
            .click(selectors.LateFtdsPageButtonAddCreate)
            .expect(selectors.LateFtdsPageTitlePopup.exists).ok()
            .expect(selectors.LateFtdsPageTitlePopup.innerText).contains('Create/Edit LateFTDs')
            .expect(selectors.LateFtdsPageTitlePopup.count).eql(1)
            .expect(selectors.LateFtdsPageSubTitlePopup.exists).ok()
            .expect(selectors.LateFtdsPageSubTitlePopup.innerText).contains('Create/Edit of LateFTDs')
            .expect(selectors.LateFtdsPageSubTitlePopup.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageNameLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageNameLabel.innerText).contains('Tracking Provider')
            .expect(selectors.FieldCreateEditLateFtdsPageNameLabel.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageName.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageName.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateModeLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateModeLabel.innerText).contains('Affiliates mode')
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateModeLabel.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateMode.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateMode.count).eql(1)
            .expect(selectors.CreateButtonLabelAffiliates.exists).ok()
            .expect(selectors.CreateButtonLabelAffiliates.count).eql(5)
            .expect(selectors.CreateButtonSelectorAffiliates.exists).ok()
            .expect(selectors.CreateButtonSelectorAffiliates.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageTypeTypeLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageTypeTypeLabel.innerText).contains('Type')
            .expect(selectors.FieldCreateEditLateFtdsPageTypeTypeLabel.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageType.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageType.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageCountryModeLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageCountryModeLabel.innerText).contains('Country mode')
            .expect(selectors.FieldCreateEditLateFtdsPageCountryModeLabel.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageCountryMode.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageCountryMode.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageCountryLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageCountryLabel.innerText).contains('Country')
            .expect(selectors.FieldCreateEditLateFtdsPageCountryLabel.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageCountry.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageCountry.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsLabel.innerText).contains('Settings')
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsLabel.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsSelect.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsSelect.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageActivityLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageActivityLabel.innerText).contains('Activity')
            .expect(selectors.FieldCreateEditLateFtdsPageActivityLabel.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageActivitySelect.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageActivitySelect.count).eql(1)
            .expect(selectors.ButtonCreateLateFtdsPageSubmit.exists).ok('Not found Field')
            .expect(selectors.ButtonCreateLateFtdsPageSubmit.count).eql(1, 'more than 1 Field')
            .expect(selectors.ButtonCreateLateFtdsPageCancel.exists).ok('Not found Field')
            .expect(selectors.ButtonCreateLateFtdsPageCancel.count).eql(1, 'more than 1 Field')
            .expect(selectors.ButtonCreateLateFtdsPageClose.exists).ok('Not found Field')
            .expect(selectors.ButtonCreateLateFtdsPageClose.count).eql(1, 'more than 1 Field')
        return t
    });
/** Edit Button **/
test
('test exists titles in modal Edit Funnels Pixels Page Edit popup', async t => {

    await t
            .click(selectors.LateFtdsButtonEdit)
            .expect(selectors.LateFtdsPageTitlePopup.exists).ok()
            .expect(selectors.LateFtdsPageTitlePopup.innerText).contains('Create/Edit LateFTDs')
            .expect(selectors.LateFtdsPageTitlePopup.count).eql(1)
            .expect(selectors.LateFtdsPageSubTitlePopup.exists).ok()
            .expect(selectors.LateFtdsPageSubTitlePopup.innerText).contains('Create/Edit of LateFTDs')
            .expect(selectors.LateFtdsPageSubTitlePopup.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageNameLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageNameLabel.innerText).contains('Tracking Provider')
            .expect(selectors.FieldCreateEditLateFtdsPageNameLabel.count).eql(1)
            .expect(selectors.EditButtonSelectorProviderValue.exists).ok()
            .expect(selectors.EditButtonSelectorProviderValue.count).eql(1)
            .expect(selectors.EditButtonSelectorProviderValue.innerText).contains('2')
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateModeLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateModeLabel.innerText).contains('Affiliates mode')
            .expect(selectors.FieldCreateEditLateFtdsPageAffiliateModeLabel.count).eql(1)
            .expect(selectors.EditButtonSelectorAffModeValue.exists).ok()
            .expect(selectors.EditButtonSelectorAffModeValue.count).eql(1)
            .expect(selectors.EditButtonSelectorAffModeValue.innerText).contains('Exclude')
            .expect(selectors.CreateButtonLabelAffiliates.exists).ok()
            .expect(selectors.CreateButtonLabelAffiliates.count).eql(5)
            .expect(selectors.CreateButtonSelectorAffiliates.exists).ok()
            .expect(selectors.CreateButtonSelectorAffiliates.count).eql(1)
            .expect(selectors.FieldCreateEditLateFtdsPageTypeTypeLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageTypeTypeLabel.innerText).contains('Type')
            .expect(selectors.FieldCreateEditLateFtdsPageTypeTypeLabel.count).eql(1)
            .expect(selectors.EditButtonSelectorTypeValue.exists).ok()
            .expect(selectors.EditButtonSelectorTypeValue.count).eql(1)
            .expect(selectors.EditButtonSelectorTypeValue.innerText).contains('Days Passed Since Registration')
            .expect(selectors.FieldCreateEditLateFtdsPageCountryModeLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageCountryModeLabel.innerText).contains('Country mode')
            .expect(selectors.FieldCreateEditLateFtdsPageCountryModeLabel.count).eql(1)
            .expect(selectors.EditButtonSelectorCountryModeValue.exists).ok()
            .expect(selectors.EditButtonSelectorCountryModeValue.count).eql(1)
            .expect(selectors.EditButtonSelectorCountryModeValue.innerText).contains('Exclude')
            .expect(selectors.FieldCreateEditLateFtdsPageCountryLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageCountryLabel.innerText).contains('Country')
            .expect(selectors.FieldCreateEditLateFtdsPageCountryLabel.count).eql(1)
            .expect(selectors.EditButtonSelectorCountryValue.exists).ok()
            .expect(selectors.EditButtonSelectorCountryValue.count).eql(1)
            .expect(selectors.EditButtonSelectorCountryValue.innerText).contains('Russia')
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsLabel.innerText).contains('Settings')
            .expect(selectors.FieldCreateEditLateFtdsPageSettingsLabel.count).eql(1)
            .expect(selectors.EditButtonSelectorSettingsValue.exists).ok()
            .expect(selectors.EditButtonSelectorSettingsValue.count).eql(1)
            .expect(selectors.EditButtonSelectorSettingsValue.value).eql("1")
            .expect(selectors.FieldCreateEditLateFtdsPageActivityLabel.exists).ok()
            .expect(selectors.FieldCreateEditLateFtdsPageActivityLabel.innerText).contains('Activity')
            .expect(selectors.FieldCreateEditLateFtdsPageActivityLabel.count).eql(1)
            .expect(selectors.EditButtonSelectorActivityValue.exists).ok()
            .expect(selectors.EditButtonSelectorActivityValue.count).eql(1)
            .expect(selectors.EditButtonSelectorActivityValue.innerText).contains('No')
            .expect(selectors.ButtonCreateLateFtdsPageSubmit.exists).ok('Not found Field')
            .expect(selectors.ButtonCreateLateFtdsPageSubmit.count).eql(1, 'more than 1 Field')
            .expect(selectors.ButtonCreateLateFtdsPageCancel.exists).ok('Not found Field')
            .expect(selectors.ButtonCreateLateFtdsPageCancel.count).eql(1, 'more than 1 Field')
            .expect(selectors.ButtonCreateLateFtdsPageClose.exists).ok('Not found Field')
            .expect(selectors.ButtonCreateLateFtdsPageClose.count).eql(1, 'more than 1 Field')
        return t
    });

