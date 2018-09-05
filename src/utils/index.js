/**
 * 深复制
 * @param obj
 * @returns {*}
 */
export const deepClone = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  } else if (obj && typeof obj === 'object') {
    var cloned = {}
    var keys = Object.keys(obj)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      cloned[key] = deepClone(obj[key])
    }
    return cloned
  } else {
    return obj
  }
}

export const browser = (function () {
  const u = navigator.userAgent
  return { // 移动终端浏览器版本信息
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
    iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1 // 是否iPad
  }
}())

/**
 * 获取url参数
 */
export const getQueryParams = () => {
  let match,
    urlParams = {},
    pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) {
      return decodeURIComponent(s.replace(pl, ' '))
    },
    query = window.location.search.substring(1)
  while (match = search.exec(query)) {
    urlParams[decode(match[1])] = decode(match[2])
  }
  return urlParams
}

/**
 * fileType
 * @param type
 * @param file
 * @param back
 */
export const checkFileType = function (type, file, back) {
  /**
   * type png jpg mp4 ...
   * file input.change=> this.files[0]
   * back callback(boolean)
   */
  // http://www.garykessler.net/library/file_sigs.html
  var args = arguments
  if (args.length != 3) {
    back(0)
  }
  var type = args[0] // type = '(png|jpg)' , 'png'
  var file = args[1]
  var back = typeof args[2] === 'function' ? args[2] : function () {}
  // 如果系统无法获取文件类型，则读取二进制流，对二进制进行解析文件类型
  var imgType = [
    'ff d8 ff', // jpg
    '89 50 4e', // png

    '0 0 0 14 66 74 79 70 69 73 6F 6D', // mp4
    '0 0 0 18 66 74 79 70 33 67 70 35', // mp4
    '0 0 0 0 66 74 79 70 33 67 70 35', // mp4
    '0 0 0 0 66 74 79 70 4D 53 4E 56', // mp4
    '0 0 0 0 66 74 79 70 69 73 6F 6D', // mp4

    '0 0 0 18 66 74 79 70 6D 70 34 32', // m4v
    '0 0 0 0 66 74 79 70 6D 70 34 32', // m4v

    '0 0 0 14 66 74 79 70 71 74 20 20', // mov
    '0 0 0 0 66 74 79 70 71 74 20 20', // mov
    '0 0 0 0 6D 6F 6F 76', // mov

    '4F 67 67 53 0 02', // ogg
    '1A 45 DF A3' // ogg
  ]
  var typeName = [
    'jpg',
    'png',
    'mp4',
    'mp4',
    'mp4',
    'mp4',
    'mp4',
    'm4v',
    'm4v',
    'mov',
    'mov',
    'mov',
    'ogg',
    'ogg'
  ]
  var sliceSize = /png|jpg|jpeg/.test(type) ? 3 : 12
  var reader = new FileReader()
  reader.readAsArrayBuffer(file)
  reader.addEventListener('load', function (e) {
    var slice = e.target.result.slice(0, sliceSize)
    reader = null
    if (slice && slice.byteLength == sliceSize) {
      var view = new Uint8Array(slice)
      var arr = []
      view.forEach(function (v) {
        arr.push(v.toString(16))
      })
      view = null
      console.log(arr.join(' '))
      var idx = arr.join(' ').indexOf(imgType)
      if (idx > -1) {
        back(typeName[idx])
        console.log(typeName[idx])
      } else {
        back(false)
      }
    } else {
      back(false)
    }
  })
}

export const getImagePath = (url) => {
  const img = new Image()
  img.src = url
  return img.src
}
