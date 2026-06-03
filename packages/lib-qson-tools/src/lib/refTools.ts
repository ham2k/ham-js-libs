/*
 * Copyright ©️ 2024-2026 Sebastian Delmont <sd@ham2k.com>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { QSON, RefInfo } from "./QSON"

export function findRef (obj: QSON | RefInfo[], type: string): RefInfo | undefined {
  if (Array.isArray(obj)) {
    return obj.find(r => r?.type === type)
  } else {
    return obj?.refs?.find(r => r?.type === type)
  }
}

export function hasRef (obj: QSON | RefInfo[], type: string): boolean {
  return !!findRef(obj, type)
}

export function filterRefs (obj: QSON | RefInfo[], type: string): RefInfo[] {
  if (Array.isArray(obj)) {
    return obj.filter(r => r?.type === type)
  } else {
    return obj?.refs?.filter(r => r?.type === type) ?? []
  }
}

export function excludeRefs (obj: QSON | RefInfo[], type: string): RefInfo[] {
  if (Array.isArray(obj)) {
    return obj.filter(r => r?.type !== type)
  } else {
    return obj?.refs?.filter(r => r?.type !== type) ?? []
  }
}
export function refsToString (obj: QSON | RefInfo[], type: string, options: { limit?: number, separator?: string } = {}): string {
  let refs
  refs = filterRefs(obj, type)
  let suffix = ''
  if (options.limit) {
    if (refs.length > options.limit) {
      suffix = ` +${refs.length - options.limit}`
      refs = refs.slice(0, options.limit)
    }
  }
  return refs.filter(r => r?.ref).map(r => r.ref).join(options.separator ?? ', ') + suffix
}

export function stringToRefs (type: string, str: string, options: { separator?: string, regex?: RegExp } = {}): RefInfo[] {
  let refs = str.split(options.separator ?? /\s*,\s*/).map(r => r && r.trim()).filter(r => r)

  if (options.regex) refs = refs.filter(r => (options.regex && r.match(options.regex)) || r.indexOf('?') >= 0)

  return refs.filter(ref => ref).map(ref => ({ type, ref }))
}

export function replaceRefs (originalRefs: QSON | RefInfo[], type: string, newRefs: RefInfo[]): RefInfo[] {
  const otherRefs = excludeRefs(originalRefs, type)
  newRefs && newRefs.forEach(r => { r.type = type })
  return [...otherRefs, ...newRefs]
}

export function replaceRef (originalRefs: QSON | RefInfo[], type: string, newRef: RefInfo): RefInfo[] {
  return replaceRefs(originalRefs, type, [newRef])
}

export function removeRefs (originalRefs: QSON | RefInfo[], type: string): RefInfo[] {
  return replaceRefs(originalRefs, type, [])
}

export function removeRef (originalRefs: QSON | RefInfo[], type: string): RefInfo[] {
  return replaceRefs(originalRefs, type, [])
}

export function mergeRefs (aRefs: QSON | RefInfo[], bRefs: QSON | RefInfo[]): RefInfo[] {
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
