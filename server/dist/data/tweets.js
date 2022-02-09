"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const tweets = [
    {
        id: '1',
        text: '안녕하세요',
        createdAt: new Date(),
        name: 'tmdqls2257',
        username: 'red',
    },
    {
        id: '2',
        text: '잘가요',
        createdAt: new Date(),
        name: 'tmdqls3344',
        username: 'been',
    },
];
// 모든 트윗을 가져오는 함수
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return tweets;
    });
}
exports.getAll = getAll;
//# sourceMappingURL=tweets.js.map