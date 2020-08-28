import {RequestMock} from "testcafe";
import {App} from "../../constants/app";
import {
    LateFtdsTableData,
    LateFtdsTableData10, LateFtdsTableData100, LateFtdsTableData25page13, LateFtdsTableData25page2,
    LateFtdsTableData50,
    LateFtdsTableDataSorted
} from "./exists-and-sort-late-ftds-page.data";


export const LateFtdsTableMock = RequestMock()
    .onRequestTo(
        {
            url: `${App.API_URL}/table/data`,
            method: 'OPTIONS'
        }
    )
    .respond(
        {}, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{}}';
        }
    )
    .respond(
        LateFtdsTableData,
        200,
        {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"id":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"type":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"tracking_provider":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"affiliate_set_mode":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"affiliates":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {

            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"country_set_mode":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    ).onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"countries":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    ).onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"setting":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"active":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"created_at_timestamp":"asc"}}';
        }
    )
    .respond(
        LateFtdsTableDataSorted, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"id":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"type":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"tracking_provider":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"affiliate_set_mode":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"affiliates":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"country_set_mode":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    ).onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"countries":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    ).onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"setting":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"active":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":25,"filters":{},"order_values":{"created_at_timestamp":"desc"}}';
        }
    )
    .respond(
        LateFtdsTableData, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":"10","filters":{},"order_values":{}}';
        }
    )
    .respond(
        LateFtdsTableData10, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":"50","filters":{},"order_values":{}}';
        }
    )
    .respond(
        LateFtdsTableData50, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":1,"limit":"100","filters":{},"order_values":{}}';
        }
    )
    .respond(
        LateFtdsTableData100,
        200,
        {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":2,"limit":25,"filters":{},"order_values":{}}';
        }
    )
    .respond(
        LateFtdsTableData25page2, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    )
    .onRequestTo(
        request => {
            return request.url === `${App.API_URL}/table/data` &&
                request.body.toString('utf8') === '{"table":"LateFTDsTable","page":"13","limit":25,"filters":{},"order_values":{}}';
        }
    )
    .respond(
        LateFtdsTableData25page13, 200, {
            'access-control-allow-credentials': true,
            'access-control-allow-origin': App.NG_APP_URL
        }
    );
