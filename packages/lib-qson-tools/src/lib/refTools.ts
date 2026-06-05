import { Operation, QSON, RefInfo } from "./QSON"

export function findRef<TRef extends RefInfo> (obj: QSON | Operation | RefInfo[], type: string): TRef | undefined {
  if (Array.isArray(obj)) {
    return obj.find(r => r?.type === type) as TRef | undefined
  } else {
    return obj?.refs?.find(r => r?.type === type) as TRef | undefined
  }
}

export function hasRef (obj: QSON | Operation | RefInfo[], type: string): boolean {
  return !!findRef(obj, type)
}

export function filterRefs<TRef extends RefInfo> (obj: QSON | Operation | RefInfo[], type: string): TRef[] {
  if (Array.isArray(obj)) {
    return obj.filter(r => r?.type === type) as TRef[]
  } else {
    return obj?.refs?.filter(r => r?.type === type) as TRef[] ?? []
  }
}

export function excludeRefs<TRef extends RefInfo> (obj: QSON | Operation | RefInfo[], type: string): TRef[] {
  if (Array.isArray(obj)) {
    return obj.filter(r => r?.type !== type) as TRef[]
  } else {
    return obj?.refs?.filter(r => r?.type !== type) as TRef[] ?? []
  }
}
export function refsToString (obj: QSON | Operation | RefInfo[], type: string, options: { limit?: number, separator?: string } = {}): string {
  let refs
  refs = filterRefs(obj, type)
  let suffix = ''
  if (options.limit) {
    if (refs.length > options.limit) {
      suffix = ` +${refs.length - options.limit}`
      refs = refs.slice(0, options.limit)
    }
  }
  return refs.filter(r => r?.ref).map(r => r.ref as string).join(options.separator ?? ', ') + suffix
}

export function stringToRefs (type: string, str: string, options: { separator?: string, regex?: RegExp } = {}): RefInfo[] {
  let refs = str.split(options.separator ?? /\s*,\s*/).map(r => r && r.trim()).filter(r => r)

  if (options.regex) refs = refs.filter(r => (options.regex && r.match(options.regex)) || r.indexOf('?') >= 0)

  return refs.filter(ref => ref).map(ref => ({ type, ref }))
}

export function replaceRefs (originalRefs: QSON | Operation | RefInfo[], type: string, newRefs: RefInfo[]): RefInfo[] {
  const otherRefs = excludeRefs(originalRefs, type)
  newRefs && newRefs.forEach(r => { r.type = type })
  return [...otherRefs, ...newRefs]
}

export function replaceRef (originalRefs: QSON | Operation | RefInfo[], type: string, newRef: RefInfo): RefInfo[] {
  return replaceRefs(originalRefs, type, [newRef])
}

export function removeRefs (originalRefs: QSON | Operation | RefInfo[], type: string): RefInfo[] {
  return replaceRefs(originalRefs, type, [])
}

export function removeRef (originalRefs: QSON | Operation | RefInfo[], type: string): RefInfo[] {
  return replaceRefs(originalRefs, type, [])
}

export function mergeRefs (aRefs: QSON | Operation | RefInfo[], bRefs: QSON | Operation | RefInfo[]): RefInfo[] {
  const newRefs = Array.isArray(aRefs) ? [...aRefs] : aRefs?.refs ?? []
  if (Array.isArray(bRefs)) {
    bRefs.forEach(ref => {
      if (!newRefs.find(r => r.type === ref.type && r.ref === ref.ref)) {
        newRefs.push(ref)
      }
    })
  } else {
    bRefs?.refs?.forEach(ref => {
      if (!newRefs.find(r => r.type === ref.type && r.ref === ref.ref)) {
        newRefs.push(ref)
      }
    })
  }
  return newRefs
}
