    import * as selectors from "../../../fixtures/selectors/pages/late-ftds/late-ftds-page-new.selector";
    import {App} from "../../../fixtures/constants/app";
    import {UserDataMock} from "../../../fixtures/mocks/auth/user.mock";
    import {GlobalMock} from "../../../fixtures/mocks/global.mock";
    import {LateFtdsTableMock} from "../../../fixtures/mocks/late-ftds/exists-and-sort-late-ftds-page.mock";
    import {beforeEach} from "../../../fixtures/selectors/ui/global.selector";
    import *as global from "../../../fixtures/selectors/ui/global.selector";
    const pageUrl = `${App.NG_APP_URL}/app/traffic-control/late-ftds${App.GET_PARAMETER_URL}`;


    fixture`Late Ftds Page elements exists`
        .page(pageUrl)
        .requestHooks(LateFtdsTableMock, UserDataMock, GlobalMock)
        .beforeEach(beforeEach(pageUrl, async (t) => {return await t}, async (t) => {return await t}))
        .afterEach(async (t) => {
            return await t.eval(() => {
                indexedDB.deleteDatabase('ngStorage')
            });
        });

    /**
     * Check title
     */
    test
    ('test page contain correct header', async t => {
        await t
            .expect(global.Title.exists).ok('missing title leads page')
            .expect(global.Title.innerText).contains('Late FTDs', 'title not leads')
            .expect(global.Title.count).eql(1, 'more than 1 title leads page')
    /**
     * Check header
     */
            .click(global.RefreshButton)
            .expect(global.RefreshButton.count).eql(1, 'more than 1 count page')
            .expect(global.CountElements.exists).ok('missing count page')
            .expect(global.CountElements.count).eql(1, 'more than 1 count page')
            .expect(global.SearchButton.exists).ok('missing search by ID')
            .expect(global.SearchButton.count).eql(1, 'more than  1 search by ID')
            .expect(global.ListSettingsButton.exists).ok('missing button list settings')
            .expect(global.ListSettingsButton.count).eql(1, 'more than 1 list settings')
            .expect(global.PaginatorTitle.exists).ok('missing paginator name')
            .expect(global.PaginatorTitle.count).eql(1, 'more than 1 paginator name')
            .expect(global.Paginator.exists).ok('missing paginator')
            .expect(global.Paginator.count).eql(1, 'more than 1 paginator')
            .expect(global.Pagination1Right.exists).ok('Not found button Right')
            .expect(global.Pagination1Right.count).eql(1, 'more than 1 button elements')
            .expect(global.Pagination1Left.exists).ok('Not found button left')
            .expect(global.Pagination1Left.count).eql(1, 'more than 1 button elements')
            .expect(global.PaginatorSubtitle.exists).ok('missing paginator title')
            .expect(global.PaginatorSubtitle.count).eql(1, 'more than 1 paginator title')
            .expect(selectors.LateFtdsPageButtonAddCreate.exists).ok('Not found button')
            .expect(selectors.LateFtdsPageButtonAddCreate.count).eql(1, 'more than 1 button  elements')
            .expect(selectors.LateFtdsButtonEdit.exists).ok('Not found button')
            .expect(selectors.LateFtdsButtonEdit.count).eql(1, 'more than 1 button  elements')
/**
 * Check table
 */
            .expect(selectors.LateFtdsPageHeadersID.exists).ok()
            .expect(selectors.LateFtdsPageHeadersID.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersType.exists).ok()
            .expect(selectors.LateFtdsPageHeadersType.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersTrackingProvider.exists).ok()
            .expect(selectors.LateFtdsPageHeadersTrackingProvider.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersAffiliatesmode.exists).ok()
            .expect(selectors.LateFtdsPageHeadersAffiliatesmode.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersAffiliates.exists).ok()
            .expect(selectors.LateFtdsPageHeadersAffiliates.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersCountryMode.exists).ok()
            .expect(selectors.LateFtdsPageHeadersCountryMode.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersCountries.exists).ok()
            .expect(selectors.LateFtdsPageHeadersCountries.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersSetting.exists).ok()
            .expect(selectors.LateFtdsPageHeadersSetting.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersActive.exists).ok()
            .expect(selectors.LateFtdsPageHeadersActive.count).eql(1)
            .expect(selectors.LateFtdsPageHeadersCreated.exists).ok()
            .expect(selectors.LateFtdsPageHeadersCreated.count).eql(1)
        return t
    });