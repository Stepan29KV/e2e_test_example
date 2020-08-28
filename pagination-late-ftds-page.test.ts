    import {App} from "../../../fixtures/constants/app";
    import * as selectors from "../../../fixtures/selectors/pages/late-ftds/late-ftds-page-new.selector";
    import {UserDataMock} from "../../../fixtures/mocks/auth/user.mock";
    import {GlobalMock} from "../../../fixtures/mocks/global.mock";
    import {LateFtdsTableMock} from "../../../fixtures/mocks/late-ftds/exists-and-sort-late-ftds-page.mock";
    import {beforeEach} from "../../../fixtures/selectors/ui/global.selector";
    import * as global from "../../../fixtures/selectors/ui/global.selector";
    const pageUrl = `${App.NG_APP_URL}/app/traffic-control/late-ftds${App.GET_PARAMETER_URL}`;


    fixture`Late Ftds Page Pagination`
        .page(pageUrl)
        .requestHooks(LateFtdsTableMock, UserDataMock, GlobalMock)
        .beforeEach(beforeEach(pageUrl, async (t) => {return await t}, async (t) => {return await t}))
        .afterEach(async (t) => {
            return await t.eval(() => indexedDB.deleteDatabase('ngStorage'));
        });

/**
 * Check Pagination
 */
    test
    ('test page Pagination 1page and 2 page', async t => {
        await t
            .expect(selectors.LateFtdsPageID.innerText).contains('1')
            .click(global.Pagination1Right, {speed: 0.9})
            .expect(selectors.LateFtdsPageID.innerText).contains('2')
            .click(global.Pagination1Left, {speed: 0.9})
            .expect(selectors.LateFtdsPageID.innerText).contains('1')
        return t
    });
    test
    ('test page Pagination 1page and 13 page', async t => {

        await t
            .expect(selectors.LateFtdsPageID.innerText).contains('1')
            .selectText(global.PaginationInput, 0, 2)
            .pressKey('delete')
            .typeText(global.PaginationInput, '13',{paste: true})
            .pressKey('enter')
            .expect(selectors.LateFtdsPageID.innerText).contains('13')
        return t
    });