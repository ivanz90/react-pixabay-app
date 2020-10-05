// Select from obj by keys

export const selectFromObj = (obj, keys) => {
    return Object.keys(obj).reduce((acc, key) => {
        if (keys.includes(key)) acc.push(obj[key])
        return acc
    }, [])
}

// Capitalize

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

// Is object empty

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
}


// Map reverse

export const mapReverse = (array, fn) => {
    return array.reduceRight((result, el) => {
        result.push(fn(el))
        return result
    }, [])
}

// string to select value

export const stringToSelectValue = (s) => {
  let label = s.split('')
  label[0] = label[0].toUpperCase()
  label = label.join('')
  return {
    value: s,
    label
  }
}