function randomString(Array) {
  return Math.floor(Math.random() * Array.length)
}

function trashtalk_generator(options) {
  //設定相關變數
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單吧?', '很容易吧?', '很快吧?', '很正常吧?']
  //建立假資料
  // const options = {
  //   career: 'engineer'
  // }

  // 從獲取職業取得幹話
  let contentWord = ''
  if (options.career) {
    const getCareerArr = task[options.career]
    contentWord = `身為一個${options.career},` + getCareerArr[randomString(getCareerArr)] + ',' + phrase[randomString(phrase)]
  }

  if (contentWord.length === 0) {
    contentWord = '未選擇職業'
  }
  return contentWord
}

module.exports = trashtalk_generator