// 添加动态效果
const dynamicBanner = () => {
  let banner = document.querySelector('.animateds-banner')
  // 获取到所有的图层,也就是包裹在img外的所有div
  let layers = document.querySelectorAll('.layer')

  let layers_data = [
    { translateX: 0, translateY: -15.3871, filter_blur: 0, opacity: 1 },
    { translateX: 1128.39, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: 692.419, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: -653.439, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: 623.177, translateY: 46.1613, filter_blur: 0, opacity: 1 },
    { translateX: 258.503, translateY: 37.3394, filter_blur: 0, opacity: 0 },
    { translateX: 114.89, translateY: 14.3613, filter_blur: 0, opacity: 1 },
    { translateX: -359.032, translateY: 50.2645, filter_blur: 0, opacity: 1 },
    { translateX: -246.194, translateY: 16.4129, filter_blur: 0, opacity: 0 },
    { translateX: -348.774, translateY: 32.8258, filter_blur: 0, opacity: 0 },
    { translateX: -92.3226, translateY: 13.8484, filter_blur: 0, opacity: 1 },
    { translateX: 102.581, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: 221.574, translateY: 13.8484, filter_blur: 0, opacity: 1 },
    { translateX: 2154.19, translateY: 0, filter_blur: 2, opacity: 1 },
    { translateX: -1025.81, translateY: 0, filter_blur: 1, opacity: 1 }
  ]

  // 初始化所有的图层
  let init = function () {
    for (const k in layers) {
      if (Object.hasOwnProperty.call(layers, k)) {
        // 获取到当前图层(div),其中k是索引
        // console.log(k);
        const element = layers[k]
        // 获取到当前图层所需要的数据
        let element_data = layers_data[k]

        element.children[0].style =
          'transform: scale(1) translate(' +
          element_data.translateX +
          'px,' +
          element_data.translateY +
          'px) rotate(0deg); filter: blur(' +
          element_data.filter_blur +
          'px); opacity:' +
          element_data.opacity +
          ';'
      }
    }
  }

  let x_first = 0
  let x_now = 0
  let x_offset = 0

  // 鼠标悬浮,记录鼠标第一次到banner的位置x_first
  banner.addEventListener('mouseover', function (e) {
    x_first = e.clientX
    // console.log(x_first);
  })

  // 鼠标移动
  banner.addEventListener('mousemove', function (e) {
    // 鼠标移动的当前位置
    x_now = e.clientX

    // 在观察B站的规律后,发现:
    // 鼠标移动到该banner的位置,此处为初始位置,在接下来的鼠标移动位置过程中,translate的值的改变都是基于这个点的,
    // 而x_offset = x_first - x_now正好将这个问题包裹进去,x_first就是该初始位置,translate的值也就是根据x_offset来变的
    x_offset = x_first - x_now

    // 每个图片都要根据x_offset移动响应的距离
    for (const k in layers) {
      if (Object.hasOwnProperty.call(layers, k)) {
        let level = (15 - parseInt(k)) * 0.5

        // 获取当前图层
        const element = layers[k]
        // 获取初始化图层数据,以便在此基础上进行改变
        const element_data = layers_data[k]

        let new_translateX = element_data.translateX + x_offset / level
        let new_opacity = element_data.opacity

        if (k == 5 && x_offset < 0) {
          new_opacity = 0.333
        } else if ((k == 8 || k == 9) && x_offset > 0) {
          new_opacity = 0.44
        } else {
          new_opacity = element_data.opacity
        }

        element.children[0].style = `transform: scale(1) 
                                                translate( ${new_translateX}px, ${element_data.translateY}px ) 
                                                rotate(0deg);
                                                filter: blur(${element_data.filter_blur}px);
                                                opacity: ${new_opacity};
                                                `
      }
    }
  })

  // 鼠标移出,恢复到默认位置
  banner.addEventListener('mouseout', function () {
    init()
  })

  window.onload = function () {
    init()
  }
}

export { dynamicBanner }
