// 時計のメインとなる関数
function clock () {
  // 曜日を表す各文字列の配列
  const weeks = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat']
  // 現在日時を表すインスタンスを取得
  let now = new Date()
  // 年
  let y = now.getFullYear()
  // 月 0~11で取得されるので実際の月は+1したものとなる
  let mo = now.getMonth() + 1
  // 日
  let d = now.getDate()
  // 曜日 0~6で日曜始まりで取得されるのでweeks配列のインデックスとして指定する
  let w = weeks[now.getDay()]
  // 時
  let h = now.getHours()
  // 分
  let mi = now.getMinutes()
  // 秒
  let s = now.getSeconds()

  // 日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
  if (mo < 10) mo = `0${mo}`
  if (d < 10) d = `0${d}`
  if (mi < 10) mi = `0${mi}`
  if (s < 10) s = `0${s}`

  // HTML: <span id='clock_date'>(ココの日付文字列を書き換え)</span>
  document.getElementById('clock_date').innerHTML = y + '/' + mo + '/' + d + ' (' + w + ')'
  // HTML: <span id='clock_time'>(ココの時刻文字列を書き換え)</span>
  document.getElementById('clock_time').innerHTML = h + ':' + mi + ':' + s
  // HTML: <div id='clock_frame'> の内部要素のフォントサイズをウインドウサイズの10分の1ピクセルに設定
  document.getElementById('clock_frame').style.fontSize = window.innerWidth / 10 + 'px'
}

// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(clock, 1000)
