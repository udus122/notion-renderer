import fs from 'node:fs'
import path from 'node:path'

/**
 * キャッシュを保存（ローカル）
 * 
 * @param {string} fileName - ファイル名
 * @param {Object} data - キャッシュするデータ（JSON）
 */
const saveCacheLocal = async (fileName, data) => {
  // ファイルを保存
  fs.writeFileSync(`tmp/${fileName}.json`, JSON.stringify(data));
}  
