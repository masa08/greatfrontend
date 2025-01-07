/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    return value.reduce((acc, elem) => {
      if (Array.isArray(elem)) {
        acc.push(...flatten(elem))
      } else {
        acc.push(elem)
      }
      return acc
    }, [])
  
  
  
    // for (let elem of value) {
    //   if (Array.isArray(elem)) {
    //     const val = flatten(elem)
    //     result.push(...val)
    //     continue
    //   }
    //   result.push(elem);
    // }
  
    // return result
  }

  