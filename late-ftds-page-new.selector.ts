import {Selector} from "testcafe";
import {UIGetTableCell} from "../../ui/global.selector";
import * as cells  from "../../ui/global.selector";

/**
 * Title Funnels Page
 */
export const LateFtdsPageButtonAddCreate =  Selector('.h-icon-add');
export const LateFtdsPageTitlePopup = Selector('.c-modal__title');
export const LateFtdsPageSubTitlePopup = Selector('.c-modal__subtitle');
export const LateFtdsButtonEdit = Selector('.h-icon-edit');
export const LateFtdsSearchTagsItem = Selector('div').find('.tags__item');
/**
 * Headers of Table on Funnels Page
 */
export const LateFtdsPageHeadersID = Selector('th').nth(0).withText('ID');
export const LateFtdsPageHeadersType = Selector('th').nth(1).withText('Type');
export const LateFtdsPageHeadersTrackingProvider = Selector('th').nth(2).withText('Tracking Provider');
export const LateFtdsPageHeadersAffiliatesmode = Selector('th').nth(3).withText('Affiliates mode');
export const LateFtdsPageHeadersAffiliates = Selector('th').nth(4).withText('Affiliates');
export const LateFtdsPageHeadersCountryMode = Selector('th').nth(5).withText('Country mode');
export const LateFtdsPageHeadersCountries = Selector('th').nth(6).withText('Countries');
export const LateFtdsPageHeadersSetting = Selector('th').nth(7).withText('Setting');
export const LateFtdsPageHeadersActive = Selector('th').nth(8).withText('Active');
export const LateFtdsPageHeadersCreated = Selector('th').nth(9).withText('Created');
/**
 * Sorting table elements
 */
export const LateFtdsPageID =  cells.GetTableCell2(0);
export const LateFtdsPageType =  cells.GetTableCell2(1);
export const LateFtdsPageTrackingProvider = cells.GetTableCell2(2);
export const LateFtdsPageAffiliatesmode = cells.GetTableCell2(3);
export const LateFtdsPageAffiliates = cells.GetTableCell2(4);
export const LateFtdsPageCountryMode = cells.GetTableCell2(5);
export const LateFtdsPageCountries = cells.GetTableCell2(6);
export const LateFtdsPageSetting = cells.GetTableCell2(7);
export const LateFtdsPageActive = cells.GetTableCell2(8);
export const LateFtdsPageCreated = cells.GetTableCell2(9);
/**
 * Button Create and Edit
 */
export const ButtonCreateLateFtdsPageSubmit = Selector('button').withText('Submit');
export const ButtonCreateLateFtdsPageCancel = Selector('button').withText('Cancel');
export const ButtonCreateLateFtdsPageClose = Selector('i').withAttribute('class', 'icon-close');

export const FieldCreateEditLateFtdsPageNameLabel = Selector('gtd-ui-form-field-default-select').nth(0).find('span').withAttribute('class','c-form-field__label');
export const FieldCreateEditLateFtdsPageName = Selector('gtd-ui-form-field-default-select').nth(0).find('div').withAttribute('class','ng-select-container');
export const FieldCreateEditLateFtdsPageNameChoice1 = Selector('gtd-ui-form-field-default-select').nth(0).find('span').withAttribute('class','ng-option-label').nth(0);
export const FieldCreateEditLateFtdsPageAffiliateModeLabel = Selector('gtd-ui-form-field-default-select').nth(1).find('span').withAttribute('class','c-form-field__label');
export const FieldCreateEditLateFtdsPageAffiliateMode = Selector('gtd-ui-form-field-default-select').nth(1).find('div').withAttribute('class','ng-select-container');
export const CreateButtonSelectorAffModeChoice1 = Selector('gtd-ui-form-field-default-select').nth(1).find('span').withAttribute('class','ng-option-label').nth(0);
export const CreateButtonLabelAffiliates = Selector('span').withText('Affiliates');
export const CreateButtonSelectorAffiliates = Selector('input').withAttribute('id','affiliate_idAffiliates');
export const FieldCreateEditLateFtdsPageCountryModeLabel = Selector('gtd-ui-form-field-default-select').nth(3).find('span').withAttribute('class','c-form-field__label');
export const FieldCreateEditLateFtdsPageCountryMode =Selector('gtd-ui-form-field-default-select').nth(3).find('div').withAttribute('class','ng-select-container');
export const CreateButtonSelectorCountryModeChoice1 = Selector('gtd-ui-form-field-default-select').nth(3).find('span').withAttribute('class','ng-option-label').nth(0);
export const FieldCreateEditLateFtdsPageTypeTypeLabel = Selector('gtd-ui-form-field-default-select').nth(2).find('span').withAttribute('class','c-form-field__label');
export const FieldCreateEditLateFtdsPageType =Selector('gtd-ui-form-field-default-select').nth(2).find('div').withAttribute('class','ng-select-container');
export const FieldCreateEditLateFtdsPageTypeTypeChoice1 = Selector('gtd-ui-form-field-default-select').nth(2).find('span').withAttribute('class','ng-option-label').nth(0);
export const FieldCreateEditLateFtdsPageCountryLabel = Selector('gtd-ui-form-field-default-select').nth(4).find('span').withAttribute('class','c-form-field__label');
export const FieldCreateEditLateFtdsPageCountry =Selector('gtd-ui-form-field-default-select').nth(4).find('div').withAttribute('class','ng-input');
export const CreateButtonSelectorCountryChoice1 = Selector('gtd-ui-form-field-default-select').nth(4).find('span').withAttribute('class','ng-option-label').nth(0);
export const FieldCreateEditLateFtdsPageSettingsLabel = Selector('gtd-ui-form-field-default-number').find('span');
export const FieldCreateEditLateFtdsPageSettingsSelect  =Selector('input').withAttribute('id', 'settingSettings');
export const FieldCreateEditLateFtdsPageActivityLabel = Selector('gtd-ui-form-field-default-select').nth(5).find('span').withAttribute('class','c-form-field__label');
export const FieldCreateEditLateFtdsPageActivitySelect = Selector('gtd-ui-form-field-default-select').nth(5).find('div').withAttribute('class','ng-select-container');
export const CreateButtonSelectorActivityChoice1 = Selector('gtd-ui-form-field-default-select').nth(5).find('span').withAttribute('class','ng-option-label').nth(0);

export const EditButtonSelectorProviderValue = Selector('div').withAttribute('class','ng-value').nth(0);
export const EditButtonSelectorAffModeValue = Selector('div').withAttribute('class','ng-value').nth(1);
export const EditButtonSelectorTypeValue = Selector('div').withAttribute('class','ng-value').nth(2);
export const EditButtonSelectorCountryModeValue = Selector('div').withAttribute('class','ng-value').nth(3);
export const EditButtonSelectorCountryValue = Selector('div').withAttribute('class','ng-value').nth(4);
export const EditButtonSelectorSettingsValue = Selector('input').withAttribute('id','settingSettings');
export const EditButtonSelectorActivityValue = Selector('div').withAttribute('class','ng-value').nth(5);
/**
 * Checkbox in List Settings
 */
export const ListLateFtdsPagesSettingsID =Selector('.c-settings__item').nth(0);
export const ListLateFtdsPagesSettingsType = Selector('.c-settings__item').nth(1);
export const ListLateFtdsPagesSettingstTrackingProvider = Selector('.c-settings__item').nth(2);
export const ListLateFtdsPagesSettingsAffiliateSetMode = Selector('.c-settings__item').nth(3);
export const ListLateFtdsPagesSettingsAffiliates = Selector('.c-settings__item').nth(4);
export const ListLateFtdsPagesSettingsCountrySetMode = Selector('.c-settings__item').nth(5);
export const ListLateFtdsPagesSettingsCountries = Selector('.c-settings__item').nth(6);
export const ListLateFtdsPagesSettingsSetting = Selector('.c-settings__item').nth(7);
export const ListLateFtdsPagesSettingsActive = Selector('.c-settings__item').nth(8);
export const ListLateFtdsPagesSettingsCreatedAtTimestamp = Selector('.c-settings__item').nth(9);
