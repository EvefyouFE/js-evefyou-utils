/**
 * 
 * @param el 获取内容高度
 * @returns 
 */
export function getHeight(el: HTMLElement): number {
  if (el) {
    let height = el.offsetHeight;
    const style = getComputedStyle(el);

    height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

    return height;
  }

  return 0;
}