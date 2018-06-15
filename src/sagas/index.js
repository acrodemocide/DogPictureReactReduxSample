import * as actions from "../store/reducers";

// An effect in redux saga is simply a command
import {
    takeLatest,
    call,
    put
} from "redux-saga/effects";

// A+ compliant promise library that's used specifically for fetching stuff and
//  performing AJAX requests
import axios from  "axios";
import { fetchDogAction } from "../store/reducers";

export function* watcherSaga() {
    console.log("watcherSaga: start");

    yield takeLatest(actions.FETCH_DOG, workerSaga);

    console.log("watcherSaga: stop");
};

function* workerSaga() {
    console.log("workerSaga: start");

    try {
        const response = yield call (axios, {
            method: "GET",
            url: "https://dog.ceo/api/breeds/image/random"
        });

        yield put(actions.fetchDogSuccess(response.data.message));
        console.log("workerSaga: success");
    } catch (error) {
        yield put(actions.fetchDogError(error.message));
        console.log("workerSaga: error");
    }
}