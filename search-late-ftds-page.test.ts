    import {App} from "../../../fixtures/constants/app";
    import * as selectors from "../../../fixtures/selectors/pages/late-ftds/late-ftds-page-new.selector";
    import {UserDataMock} from "../../../fixtures/mocks/auth/user.mock";
    import {GlobalMock} from "../../../fixtures/mocks/global.mock";
    import {SearchLateFtdsTableMock} from "../../../fixtures/mocks/late-ftds/search-late-ftds-page.mock";
    import {beforeEach} from "../../../fixtures/selectors/ui/global.selector";
    import * as global from "../../../fixtures/selectors/ui/global.selector";
    const pageUrl = `${App.NG_APP_URL}/app/traffic-control/late-ftds${App.GET_PARAMETER_URL}`;


    fixture`Late Ftds Page Search`
        .page(pageUrl)
        .requestHooks(SearchLateFtdsTableMock, UserDataMock, GlobalMock)
        .beforeEach(beforeEach(pageUrl, async (t) => {return await t}, async (t) => {return await t}))
        .afterEach(async (t) => {
            return await t.eval(() => indexedDB.deleteDatabase('ngStorage'));
        });

    /**
     * Check Search
     */
    test
    ('test page ID1 and no Search', async t => {
        await t
            .maximizeWindow()
            .click(global.SearchButton)
            .typeText(global.SearchButton, '1',{paste: true})
            .pressKey('enter')
            .expect(selectors.LateFtdsSearchTagsItem.innerText).contains('Search By ID: 1')
            .expect(selectors.LateFtdsSearchTagsItem.exists).ok()
            .expect(selectors.LateFtdsPageID.innerText).contains('1')
            .click(selectors.LateFtdsSearchTagsItem)
            .expect(selectors.LateFtdsSearchTagsItem.exists).notOk()
            .expect(selectors.LateFtdsPageID.innerText).contains('2')
        return t
    });
    /**
     * TODO: search icon doesn't appear when window resized
     * */
    // test
    // ('test page ID10 and no Search small window', async t => {
    //     await t
    //         .resizeWindow(700, 900)
    //         .click(selectors.LateFtdsSearchButton)
    //         .click(selectors.LateFtdsPageSearch_by_ID)
    //         .typeText(selectors.LateFtdsPageSearch_by_ID, '10',{paste: true})
    //         .pressKey('enter')
    //         .expect(selectors.LateFtdsSearchTagsItem.innerText).contains('Search By ID: 10')
    //         .expect(selectors.LateFtdsSearchTagsItem.exists).ok()
    //         .expect(selectors.LateFtdsPageID.innerText).contains('10')
    //         .click(selectors.LateFtdsSearchTagsItem)
    //         .expect(selectors.LateFtdsSearchTagsItem.exists).notOk()
    //         .expect(selectors.LateFtdsPageID.innerText).contains('2')
    //     return t
    // });