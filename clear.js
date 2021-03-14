const del = require("del");

// dist配下のファイルを削除する関数
const clear = async function() {
	await del(["dist/**"]);
}
clear();

module.exports = clear;